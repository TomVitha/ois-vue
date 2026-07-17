<script setup lang="ts">
  import { ref, computed, provide, readonly, nextTick, useTemplateRef } from 'vue'
  import type { ComponentPublicInstance } from 'vue'
  import OrderDocumentItem from '@/components/DOIS/OrderDocumentItem.vue'
  import OrderComments from '@/components/DOIS/OrderComments.vue'
  import OrderAddComment from '@/components/DOIS/OrderAddComment.vue'
  import type { SubmittedCommentPayload } from '@/components/DOIS/OrderAddComment.vue'
  import { useDoisOrders } from '@/stores/dois-orders'

  const props = defineProps<{
    orderId: number,
    contractNumber: string,
    supplier: string,
    documents: any,
  }>()

  const emit = defineEmits<{
    (event: 'open-dois-order-offcanvas', orderId: number): void
    (event: 'open-document-preview', documentId: number): void
  }>()

  const doisOrdersStore = useDoisOrders()

  // COMMENTS

  const orderComments = computed(() => {
    return doisOrdersStore.getOrderComments(props.orderId)
  })

  const areCommentsVisible = ref(orderComments.value.length > 0)

  function toggleComments() {
    areCommentsVisible.value = !areCommentsVisible.value
  }

  function openOffcanvas() {
    emit('open-dois-order-offcanvas', props.orderId)
  }

  const commentsListRef = useTemplateRef('commentsList')

  async function onCommentSubmitted(payload: SubmittedCommentPayload) {
    console.debug('New comment submitted:', payload)

    // Scroll to the bottom of the comments list
    await nextTick()
    if (!commentsListRef.value) return
    commentsListRef.value.$el.scrollTo({
      top: commentsListRef.value.$el.scrollHeight,
      left: 0,
      behavior: 'auto',
    })
  }

  const referencedDocumentId = ref<number | undefined>()
  const highlightedDocumentElement = ref<HTMLElement | null>(null)

  function getDocumentElementId(documentId: number): string {
    return `order-document-${props.orderId}-${documentId}`
  }

  /**
   * Scrolls the given element into view, centering it vertically in the viewport.
   * @param element The element to scroll into view.
   */
  function scrollTo(element: Element) {
    element.scrollIntoView({
      behavior: 'instant',
      block: 'center',
      inline: 'nearest',
    })
  }

  function setHighlightedDocumentClass(element: HTMLElement) {
    highlightedDocumentElement.value?.classList.remove('highlighted-document')

    /// Force class reflow so animation restarts even when targeting same element.
    element.classList.remove('highlighted-document')
    void element.offsetWidth  // TRICK: Read layout to force reflow before re-adding the class, so the flash animation replays.
    element.classList.add('highlighted-document')

    highlightedDocumentElement.value = element
  }

  function getSupportingDocumentGroupCollapseId(documentId: number): string | null {
    for (let orderPartIndex = 0; orderPartIndex < props.documents.length; orderPartIndex += 1) {
      const supportingDocumentGroups = props.documents[orderPartIndex]?.[1]
      if (!Array.isArray(supportingDocumentGroups)) continue

      for (let documentGroupIndex = 0; documentGroupIndex < supportingDocumentGroups.length; documentGroupIndex += 1) {
        const documentGroup = supportingDocumentGroups[documentGroupIndex]
        if (!Array.isArray(documentGroup)) continue

        const containsDocument = documentGroup.some((document: { id?: number }) => document?.id === documentId)
        if (!containsDocument) continue

        return `docgroup-${props.orderId}-${orderPartIndex}-${documentGroupIndex}`
      }
    }

    return null
  }

  function expandSupportingDocumentGroup(documentId: number): void {
    const collapseId = getSupportingDocumentGroupCollapseId(documentId)
    if (!collapseId) return

    const collapseElement = document.getElementById(collapseId)

    /// If the collapse element is already expanded, do nothing.
    if (!collapseElement || collapseElement.classList.contains('show')) return

    const collapseTrigger = document.querySelector<HTMLButtonElement>(`button[data-bs-target="#${collapseId}"]`)
    /// Click trigger to expand the accordion
    collapseTrigger?.click()
  }

  const addCommentRef = useTemplateRef('addCommentRef')

  async function onReferenceDocumentFromItem(documentId: number) {
    referencedDocumentId.value = documentId
    areCommentsVisible.value = true

    await nextTick()
    if (!addCommentRef.value?.$el) return

    scrollTo(addCommentRef.value.$el)
    const textarea = addCommentRef.value.$el.querySelector('textarea') as HTMLTextAreaElement | null
    textarea?.focus({ preventScroll: true })
  }

  function onReferencedDocumentIdUpdated(documentId: number | undefined) {
    referencedDocumentId.value = documentId
  }

  function onOpenDocumentPreview(documentId: number) {
    emit('open-document-preview', documentId)
  }

  async function onGoToDocument(payload: { orderId: number; documentId: number }) {
    if (payload.orderId !== props.orderId) return

    expandSupportingDocumentGroup(payload.documentId)

    const documentEl = document.getElementById(getDocumentElementId(payload.documentId))
    if (!documentEl) return

    scrollTo(documentEl)
    setHighlightedDocumentClass(documentEl as HTMLElement)
  }

  // ATTACHING DOCUMENTS
  const isAttachingDocuments = ref(false)
  provide('isAttachingDocuments', readonly(isAttachingDocuments))
  function startAttachingDocs() { isAttachingDocuments.value = true }
  function submitAttachingDocs() { isAttachingDocuments.value = false }
  function onSubmitAttachingDocs() { submitAttachingDocs() }
  function cancelAttachingDocs() { isAttachingDocuments.value = false }

</script>

<template>
  <div class="card">
    <div class="card-header">
      <div>
        <div class="card-title mb-0">{{ props.contractNumber }}</div>
        <div>{{ props.supplier }}</div>
      </div>
      <div class="ms-auto">
        <div v-if="isAttachingDocuments" class="btn-list">
          <!-- Submit -->
          <button
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#order-attach-docs-confirm">
            Přiložit vybrané
          </button>
          <!-- Cancel -->
          <button class="btn" @click="cancelAttachingDocs">Zrušit</button>
        </div>
        <div v-if="!isAttachingDocuments" class="btn-actions">
          <!-- DISCARDED - offcanvas side panel -->
          <!-- <button
            class="btn btn-action text-reset"
            data-bs-toggle="offcanvas"
            data-bs-target="#dois-order-offcanvas"
            title="Otevřít panel"
            @click="openOffcanvas">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-expand">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
              <path d="M15 4v16" />
              <path d="M10 10l-2 2l2 2" />
            </svg>
            <span v-if="orderComments.length" class="badge badge-notification">{{ orderComments.length }}</span>
          </button> -->
          <!-- * Otevřít/Zavřít Komentáře -->
          <button
            class="btn btn-action text-reset"
            :class="{ 'active': areCommentsVisible }"
            data-bs-toggle="tooltip"
            title="Komentáře"
            draggable="false"
            @click="toggleComments">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 9h8" />
              <path d="M8 13h6" />
              <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" />
            </svg>
            <span v-if="orderComments.length" class="badge badge-notification">{{ orderComments.length }}</span>
          </button>
          <!-- * Dropdown actions -->
          <div class="dropdown">
            <button class="btn btn-action text-reset dropdown-toggle" data-bs-toggle="dropdown" draggable="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              <button @click="startAttachingDocs" class="dropdown-item">
                Přiložit dokumenty k objednávce
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="space-y">
        <div v-for="orderPart in props.documents" class="card">
          <!-- * Main document = orderPart[0] -->
          <div class="list-group list-group-flush">
            <OrderDocumentItem
              :order-id="props.orderId"
              :documentId="orderPart[0].id"
              :status="orderPart[0].status"
              :filepath="orderPart[0].filepath"
              :datetime="orderPart[0].datetime"
              :uploader-id="orderPart[0].uploaderId"
              :is-main-document="true"
              @reference-document="onReferenceDocumentFromItem"
              @open-document-preview="onOpenDocumentPreview" />
          </div>
          <!-- * Supporting documents = orderPart[1] -->
          <template v-if="orderPart[1].length > 0">
            <div class="row">
              <div class="col">
                <div class="accordion accordion-flush" id="temp-dokumenty">
                  <!-- loop for each doc category -->
                  <div v-for="(docGroup, docGroupIndex) in orderPart[1]" class="accordion-item">
                    <div class="accordion-header">
                      <button
                        class="accordion-button collapsed list-group-header"
                        type="button"
                        data-bs-toggle="collapse"
                        :data-bs-target="`#docgroup-${props.orderId}-${props.documents.indexOf(orderPart)}-${orderPart[1].indexOf(docGroup)}`"
                        aria-expanded="false">
                        Počet dokumentů: {{ docGroup.length }}
                        <div class="accordion-button-toggle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                            <path d="M6 9l6 6l6 -6"></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                    <!-- * Supporting documents -->
                    <div :id="`docgroup-${props.orderId}-${props.documents.indexOf(orderPart)}-${orderPart[1].indexOf(docGroup)}`" class="accordion-collapse collapse">
                      <div class="list-group list-group-flush">
                        <template v-for="(doc, docIndex) in docGroup" :key="doc.id">
                          <OrderDocumentItem
                            :orderId="props.orderId"
                            :documentId="doc.id"
                            :status="doc.status"
                            :filepath="doc.filepath"
                            :datetime="doc.datetime"
                            :uploader-id="doc.uploaderId"
                            :is-main-document="false"
                            @reference-document="onReferenceDocumentFromItem"
                            @open-document-preview="onOpenDocumentPreview" />
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="card-body" v-if="areCommentsVisible">
      <div class="d-flex align-items-center gap-2 mb-3">
        <h3 class="card-title mb-0">Komentáře</h3>
        <span class="text-secondary d-none d-sm-inline">(Celkem {{ orderComments.length }})</span>
      </div>
      <div class="space-y">

        <OrderComments
          ref="commentsList"
          class="comments"
          :comments="orderComments"
          @goto-document="onGoToDocument" />

        <OrderAddComment
          ref="addCommentRef"
          :orderId="props.orderId"
          :isRefDocRequired="true"
          :referenced-document-id="referencedDocumentId"
          @update:referencedDocumentId="onReferencedDocumentIdUpdated"
          @submitted="onCommentSubmitted" />

      </div>
    </div>
  </div>

  <!-- * Připojit dokumenty -->
  <!-- TODO: Place into component -->
  <div class="modal" id="order-attach-docs-confirm" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-md modal-dialog-centered" role="document">
      <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div class="modal-header">
          <h5 class="modal-title">Připojit dokumenty</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body py-4">
          <div class="row gy-3">
            <div class="col-12">
              <span>Vyberte smlouvu o dílo, ke které chcete přílohy připojit:</span>
            </div>
            <div class="row-12">
              <select class="form-select" id="order-select-sod" autocomplete="off">
                <option selected disabled>Vyberte</option>
                <option value="1">152-01-023-ID-I</option>
                <option value="2">152-01-023-ID-II</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn" data-bs-dismiss="modal">Storno</button>
          <button class="btn btn-primary" data-bs-dismiss="modal" @click="onSubmitAttachingDocs">Připojit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  :is([data-bs-theme=light]) .card-header {
    background-color: var(--tblr-bg-surface-inverted);
    color: var(--tblr-text-inverted);
  }

  :is([data-bs-theme=light]) .list-group-header {
    background: var(--tblr-gray-100);
  }

  :is([data-bs-theme=dark]) .list-group-header {
    background: var(--tblr-gray-900);
  }

  .comments {
    max-height: min(500px, 70vh);
    overflow-y: scroll;
  }

  .accordion-collapse {
    transition: none !important;
  }

</style>