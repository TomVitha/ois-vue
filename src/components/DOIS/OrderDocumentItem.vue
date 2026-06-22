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

  const emit = defineEmits<{
    (event: 'reference-document', documentId: number): void
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

  function referenceDocumentInComment() {
    emit('reference-document', props.documentId)
  }

  const isAttachingDocuments = inject('isAttachingDocuments', ref(false))

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

    // Dodavatelé mohou nastavovat pouze pro hlavní dokument
    if (userView.value === 'supplier')
      return props.isMainDocument

    return false
  })


</script>

<!-- FIXME: Mobilní zobrazení -->
<template>
  <!-- ? bg-body-tertiary / bg-surface-tertiary - maybe ? -->
  <div
    :id="`order-document-${props.orderId}-${props.documentId}`"
    class="list-group-item"
    :class="{
      'bg-surface-tertiary': !props.isMainDocument,
    }">
    <div class="row align-items-center">
      <div v-if="isAttachingDocuments" class="col-auto">
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

            <!-- * Reference document in comment -->
            <button
              class="btn btn-action"
              data-bs-toggle="tooltip"
              title="Odkázat se na dokument v komentáři"
              @click="referenceDocumentInComment">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message-plus">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 9h8" />
                <path d="M8 13h6" />
                <path d="M12.01 18.594l-4.01 2.406v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" />
                <path d="M16 19h6" />
                <path d="M19 16v6" />
              </svg>
            </button>

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

  /* DEV */
  .highlighted-document {
    isolation: isolate;
  }

  .highlighted-document::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    animation-name: flash-document;
    animation-duration: 2000ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }

  @keyframes flash-document {
    0% {
      background-color: color-mix(in srgb, var(--tblr-primary) 40%, transparent);
    }

    100% {
      background-color: transparent;
    }
  }
</style>