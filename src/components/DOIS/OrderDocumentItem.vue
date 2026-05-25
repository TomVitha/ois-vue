<script setup lang="ts">
  import { computed, ref } from 'vue'

  import { useLocaleStore } from '@/stores/locale'
  const localeStore = useLocaleStore()

  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  const isDesktop = matchesMediaQuery('(min-width: 992px)')

  type StatusCode = 0 | 1 | 2 | 3

  import { useDoisOrders } from '@/stores/dois-orders'

  const props = defineProps<{
    orderId: number
    documentId: number
    isMainDocument: boolean
    status: StatusCode
    filename: string
    datetime: string
    documentComments: any
  }>()

  function formatDateLong(d: string | Date): string {
    const date = typeof d === 'string' ? new Date(d) : d
    // HACK to display browser-native invalid date message
    if (isNaN(date.getTime())) { date.setTime(99999999999999999999999999) }
    return date.toLocaleDateString(localeStore.locale, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    })
  }

  const doisOrdersStore = useDoisOrders()

  function acceptDocument() {
    doisOrdersStore.setDocumentStatus(props.orderId, props.documentId, 2)
  }

  function declineDocument() {
    doisOrdersStore.setDocumentStatus(props.orderId, props.documentId, 3)
  }

  const areCommentsVisible = ref(false)

  const comments = computed(() => {
    return Array.isArray(props.documentComments) ? props.documentComments : []
  })

  function toggleComments() {
    areCommentsVisible.value = !areCommentsVisible.value
  }

  // * Mapování stavů na text a barvu
  const statusMap: Record<StatusCode, { text: string; colorClass: string }> = {
    0: { text: 'Neznámé', colorClass: 'status-secondary' },
    1: { text: 'Nové', colorClass: 'status-info' },
    2: { text: 'Přijato', colorClass: 'status-success' },
    3: { text: 'Odmítnuto', colorClass: 'status-danger' },
  }

  const canStatusBeSet = computed(() => {
    // TEMP - hard-coded true
    // // * Hlavní dokument nelze měnit
    // if (props.isMainDocument) return false
    // // * Status lze měnit pouze pokud je aktuální status "Nové"
    // return props.status === 1

    return true
  })

</script>

<!-- TODO: Komentáře k dokumentům -->
<template>
  <div class="list-group-item">
    <div class="row align-items-center">
      <div class="col-auto col-lg-2 col-xxl-1">
        <!-- badge -->
        <span :class="['status', statusMap[props.status].colorClass]">
          {{ statusMap[props.status].text }}
        </span>
      </div>
      <div class="col order-first order-lg-0">
        <div class="row">
          <div class="col-12 col-lg-5">
            <a href="#" class="text-reset">{{ props.filename }}</a>
          </div>
          <div class="col order-first order-lg-0">
            <div class="text-muted">{{ formatDateLong(props.datetime) }}</div>
          </div>
        </div>
      </div>
      <!-- TODO: Zpřístupnit Potvrdit a Odmítnout pouze pokud je dokument od dodavatele !! -->
      <div class="col-auto">
        <div class="btn-actions">
          <!-- * Dropdown actions -->
          <div class="dropdown">
            <!-- * [...] -->
            <!-- TODO: :disabled="canStatusBeSet" -->
            <button class="btn btn-icon btn-action dropdown-toggle" data-bs-toggle="dropdown" draggable="false" ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              <!-- * Přijmout -->
              <button v-if="canStatusBeSet" @click="acceptDocument" class="dropdown-item text-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                Přijmout
              </button>
              <!-- * Odmítnout -->
              <button v-if="canStatusBeSet" @click="declineDocument" class="dropdown-item text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
                Odmítnout
              </button>
            </div>
          </div>
          <!-- * Komentáře -->
          <button
            class="btn btn-action"
            data-bs-toggle="tooltip"
            title="Přidat komentář"
            :aria-expanded="areCommentsVisible"
            @click="toggleComments">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- comments -->
  <div v-if="areCommentsVisible" class="list-group-item active">
    <div class="divide-y">
      <template v-if="comments.length">
        <div v-for="comment in comments" class="row">
          <div class="text-muted">{{ comment.username }}, {{ formatDateLong(comment.datetime) }}</div>
          <div>{{ comment.text }}</div>
        </div>
      </template>
      <!-- add comment -->
      <div class="border-top-0">
        <div class="row g-2 align-items-end">
          <div class="col">
            <textarea name="comment" id="comment" class="form-control" placeholder="Napište poznámku..." style="resize: none; field-sizing: content;"></textarea>
          </div>
          <div class="col-auto">
            <button
              class="btn btn-primary"
              :class="{ 'btn-icon': !isDesktop }">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
              <span v-if="isDesktop">Odeslat</span>
            </button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
  .list-group-item.active {
    background-color: var(--tblr-bg-surface-tertiary);
  }
</style>