<script setup lang="ts">
  import { nextTick, ref, watch } from 'vue'

  import PageTemplate from '@/components/PageTemplate.vue'
  import ProductGroup from '@/components/ProductGroup.vue'
  import ProductGroupItem from '@/components/ProductGroupItem.vue'
  import RequestStatusDialog from '@/components/RequestStatusDialog.vue'
  import { useFormatting } from '@/composables/formatting'
  import { useRequestsStore } from '@/stores/requests'
  import Empty from '@/components/Empty.vue'
  import type { LastSubmissionResult } from '@/requests/types'

  const requestsStore = useRequestsStore()
  const { formatDate } = useFormatting()

  const modalTrigger = ref<HTMLButtonElement | null>(null)
  const statusResult = ref<LastSubmissionResult | null>(null)

  function openStatusModal(result: LastSubmissionResult) {
    statusResult.value = { ...result }
    requestsStore.consumeLastSubmissionResult()

    nextTick(() => {
      modalTrigger.value?.click()
    })
  }

  watch(
    () => requestsStore.lastSubmissionResult,
    (result) => {
      if (result) {
        openStatusModal(result)
      }
    },
    { immediate: true },
  )
</script>

<template>
  <PageTemplate title="Žádosti">
    <template #extra>
      <div class="text-secondary">{{ requestsStore.openRequestsCount }} {{ requestsStore.openRequestsCount == 1 ? `otevřená` : requestsStore.openRequestsCount < 5 ? `otevřené` : `otevřených` }}</div>
    </template>

    <template #actions>
      <div class="btn-list">
        <RouterLink to="/zadost-nova" type="button" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-1">
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
          Nová žádost
        </RouterLink>
      </div>
    </template>

    <div class="row row-deck row-cards">
      <!-- * Empty state -->
      <div v-if="requestsStore.activeRequestsByProperty.length === 0" class="col-12">
        <Empty title="Žádné žádosti" subtitle="Zde uvidíte všechny své otevřené a uzavřené žádosti." />
      </div>
      <!-- * Žádosti -->
      <div v-else class="col-12">
        <ProductGroup>
          <ProductGroupItem
            v-for="group in requestsStore.activeRequestsByProperty"
            :key="group.property.id"
            :title="group.property.name"
            :subtitle="`Celkem ${group.requests.length}`"
            :id="`request-property-${group.property.id}`">
            <div class="card">
              <div class="table-responsive">
                <table class="table table-selectable card-table table-vcenter text-nowrap datatable table-mobile-md">
                  <thead>
                    <tr>
                      <th class="w-50">Název</th>
                      <th>Stav</th>
                      <th>Zasláno</th>
                      <th>Záležitost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="request in group.requests" :key="request.id">
                      <td data-label="Název">{{ request.templateName }}</td>
                      <td data-label="Stav">
                        <span class="status status-info">Otevřená</span>
                      </td>
                      <td data-label="Zasláno">{{ formatDate(request.createdAt) }}</td>
                      <td data-label="Záležitost">
                        <span class="badge">{{ request.propertyId }}</span>
                      </td>
                      <!-- TODO: Přidat funkci "zobrazit" kde klient uvidí údaje dané žádosti -->
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ProductGroupItem>
        </ProductGroup>
      </div>
    </div>

    <button
      ref="modalTrigger"
      type="button"
      class="d-none"
      data-bs-toggle="modal"
      data-bs-target="#request-submit-status-modal"></button>
    <RequestStatusDialog :result="statusResult" />
  </PageTemplate>
</template>
