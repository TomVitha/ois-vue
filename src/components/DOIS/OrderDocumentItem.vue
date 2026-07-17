<script setup lang="ts">
  import { ref, computed, inject, useTemplateRef } from 'vue'

  import { useFormatting } from '@/composables/formatting'
  const { formatDate } = useFormatting()

  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  const isDesktop = matchesMediaQuery('(min-width: 992px)')

  import { useDoisOrders, type DocumentStatus } from '@/stores/dois-orders'
  const doisOrdersStore = useDoisOrders()

  const props = defineProps<{
    orderId: number
    documentId: number
    isMainDocument: boolean
    status: DocumentStatus
    filepath: string
    datetime: string
    uploaderId: number
  }>()

  const emit = defineEmits<{
    (event: 'reference-document', documentId: number): void
    (event: 'open-document-preview', documentId: number): void
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

  function openDocumentPreview() {
    const offcanvasElement = document.getElementById('dois-document-preview-offcanvas')
    const isPreviewOpen = offcanvasElement?.classList.contains('show') ?? false
    const currentDocumentId = Number(offcanvasElement?.getAttribute('data-current-document-id'))

    // Clicking currently previewed document toggles the offcanvas closed.
    if (isPreviewOpen && currentDocumentId === props.documentId) {
      const closeButton = offcanvasElement?.querySelector<HTMLButtonElement>('[data-bs-dismiss="offcanvas"]')
      closeButton?.click()
      return
    }

    emit('open-document-preview', props.documentId)

    // Open offcanvas only when it's currently closed.
    if (!isPreviewOpen) {
      previewTriggerRef.value?.click()
    }
  }

  const previewTriggerRef = useTemplateRef<HTMLButtonElement>('previewTriggerRef')

  const isAttachingDocuments = inject('isAttachingDocuments', ref(false))

  const statusMeta = computed(() => {
    return doisOrdersStore.documentStatusMap[props.status]
  })

  /** DEV - POMOCNÁ PROMĚNNÁ pro kontrolu pohledů Klient (CG) vs Dodavatel */
  const userView = ref<"client" | "supplier">("client")

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
    class="list-group-item order-item"
    :class="{
      'bg-surface-tertiary': !props.isMainDocument,
    }">
    <div class="row align-items-center">
      <div v-if="isAttachingDocuments" class="col-auto">
        <input class="form-check-input align-middle" type="checkbox">
      </div>
      <div class="col-auto col-xxl-1">
        <span :class="isDesktop ? [`status`, `status-${statusMeta.colorClass}`] : [`badge`, `bg-${statusMeta.colorClass}-lt`]">
          {{ statusMeta.text }}
        </span>
      </div>
      <!-- * Filename -->
      <div class="col-4">
        <div class="text-truncate">
          <a @click.prevent="openDocumentPreview" :href="props.filepath" class="text-reset" :class="{ 'fw-bold': props.isMainDocument }">{{ filename }}</a>
          <!-- HACK: pomocný button -->
          <button
            ref="previewTriggerRef"
            type="button"
            class="d-none"
            tabindex="-1"
            aria-hidden="true"
            data-bs-toggle="offcanvas"
            data-bs-target="#dois-document-preview-offcanvas"></button>
        </div>
      </div>

      <!-- * Datetime -->
      <div class="col-2 text-truncate">
        <span class="text-muted">{{ formatDate(props.datetime, 'long-datetime') }}</span>
      </div>

      <!-- * Uploader name -->
      <div class="col text-truncate">
        <template v-if="isMainDocument">
          <span class="text-muted">{{ userUploader?.username }}</span>
        </template>
      </div>

      <!-- * Actions -->
      <div class="col-auto order-item-actions">
        <div class="h0">
          <div class="btn-actions">

            <!-- * Přijmout -->
            <button
              v-if="canStatusBeSet"
              class="btn btn-action text-success"
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
              title="Přidat komentář k dokumentu"
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
    animation-duration: 1500ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }

  @keyframes flash-document {
    10% {
      background-color: color-mix(in srgb, v-bind('`var(--tblr-${statusMeta.colorClass})`') 40%, transparent);
    }

    100% {
      background-color: transparent;
    }
  }

  /* Actions show on hover */
  /* @media (hover: hover) {
    .order-item:not(:hover) .order-item-actions {
      display: none;
    }
  
    .list-group-hoverable .list-group-item-actions {
      transition: none;
    }
  } */

</style>