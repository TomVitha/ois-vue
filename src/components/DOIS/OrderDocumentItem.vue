<script setup lang="ts">
  import { ref, computed, inject } from 'vue'

  import { useFormatting } from '@/composables/formatting'
  const { formatDate } = useFormatting()

  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  const isDesktop = matchesMediaQuery('(min-width: 992px)')

  import { useDoisOrders } from '@/stores/dois-orders'
  const doisOrdersStore = useDoisOrders()

  type StatusCode = 0 | 1 | 2 | 3

  const props = defineProps<{
    orderId: number
    documentId: number
    isMainDocument: boolean
    status: StatusCode
    filepath: string
    datetime: string
    uploaderId: number
  }>()

  const filename = computed(() => {
    return props.filepath.split(/[/\\]/).at(-1) || props.filepath
  })

  const userUploader = computed(() => {
    return doisOrdersStore.getUser(props.uploaderId)
  })

  function acceptDocument() {
    doisOrdersStore.setDocumentStatus(props.orderId, props.documentId, 2)
  }

  function declineDocument() {
    doisOrdersStore.setDocumentStatus(props.orderId, props.documentId, 3)
  }

  const isAttachingDocs = inject('isAttachingDocs', ref(false))

  const statusMap: Record<StatusCode, { text: string; colorClass: string }> = {
    0: { text: 'Neznámé', colorClass: 'secondary' },
    1: { text: 'Nové', colorClass: 'info' },
    2: { text: 'Přijato', colorClass: 'success' },
    3: { text: 'Odmítnuto', colorClass: 'danger' },
  }

  /** DEV - POMOCNÁ PROMĚNNÁ pro kontrolu pohledů Klient (CG) vs Dodavatel */
  const userView = ref<"client" | "supplier">("supplier")

  const canStatusBeSet = computed(() => {

    // Status lze měnit pouze pokud ještě není finální.
    if (props.status === 2 || props.status === 3) return false

    // Klienti mohou nastavovat pouze pro přílohy
    if (userView.value === 'client')
      return !props.isMainDocument

    // Klienti mohou nastavovat pouze pro hlavní dokument
    if (userView.value === 'supplier')
      return props.isMainDocument

    return false
  })


</script>

<!-- FIXME: Mobilní zobrazení -->
<template>
  <!-- ? bg-body-tertiary / bg-surface-tertiary - maybe ? -->
  <div class="list-group-item" :class="{ 'bg-surface-tertiary': !props.isMainDocument }">
    <div class="row align-items-center">
      <div v-if="isAttachingDocs" class="col-auto">
        <input class="form-check-input align-middle" type="checkbox">
      </div>
      <div class="col-auto col-xxl-1">
        <span :class="isDesktop ? [`status`, `status-${statusMap[props.status].colorClass}`] : [`badge`, `bg-${statusMap[props.status].colorClass}-lt`]">
          {{ statusMap[props.status].text }}
        </span>
      </div>
      <!-- * Filename -->
      <div class="col-4">
        <a :href="props.filepath" class="text-reset" :class="{ 'fw-bold': props.isMainDocument }">{{ filename }}</a>
      </div>

      <!-- * Datetime -->
      <div class="col-2">
        <div class="text-muted">{{ formatDate(props.datetime, 'long-datetime') }}</div>
      </div>
      <!-- * Uploader name -->
      <div class="col">
        <template v-if="isMainDocument">
          <div class="text-muted">{{ userUploader?.username }}</div>
        </template>
      </div>
      <!-- * Actions -->
      <div class="col-auto">
        <div class="d-flex align-items-center h-0">
          <div class="btn-actions">
            <!-- * Přijmout -->
            <button
              v-if="canStatusBeSet"
              class="btn btn-action text-success"
              data-bs-toggle="tooltip"
              title="Přijmout"
              @click="acceptDocument">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </button>
            <!-- * Odmítnout -->
            <button
              v-if="canStatusBeSet"
              class="btn btn-action text-danger"
              data-bs-toggle="tooltip"
              title="Odmítnout"
              @click="declineDocument">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            <!-- * Komentáře -->
            <!-- <button
              class="btn btn-action"
              data-bs-toggle="tooltip"
              title="Komentáře">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
              </svg>
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .list-group-item.active {
    /* background-color: var(--tblr-bg-surface-tertiary); */
    background-color: transparent;
  }
</style>