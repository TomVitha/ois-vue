<script setup lang="ts">
  import { ref, computed, watch, useTemplateRef } from 'vue'
  import { useDoisOrders } from '@/stores/dois-orders'
  import type { Comment as DoisComment } from '@/stores/dois-orders'

  const props = defineProps<{
    orderId: number
    isRefDocRequired: boolean
    documentId?: number
    referencedDocumentId?: number
  }>()

  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  const isDesktop = matchesMediaQuery('(min-width: 992px)')

  export type SubmittedCommentPayload = {
    orderId: number
    documentId?: number
    comment: DoisComment
  }

  const emit = defineEmits<{
    (event: 'submitted', payload: SubmittedCommentPayload): void
    (event: 'update:referencedDocumentId', payload: number | undefined): void
  }>()

  type OrderDocumentOption = {
    id: number
    filename: string
  }

  const doisOrdersStore = useDoisOrders()

  function isOrderDocument(value: unknown): value is { id: number; filepath: string } {
    return typeof value === 'object' && value !== null && 'id' in value && 'filepath' in value
  }

  const orderDocuments = computed<OrderDocumentOption[]>(() => {
    const order = doisOrdersStore.orders.find(order => order.id === props.orderId)
    if (!order) return []

    return order.documents
      .flat(3)
      .filter(isOrderDocument)
      .map(document => ({
        id: document.id,
        filename: document.filepath.split(/[/\\]/).at(-1) || document.filepath,
      }))
  })

  // REFERENCING DOCUMENT

  const canReferenceDocument = computed(() => {
    return props.documentId === undefined
  })

  const referencedDocumentId = ref<number | undefined>(props.documentId)

  watch(
    () => props.documentId,
    (documentId) => {
      referencedDocumentId.value = documentId
    },
    { immediate: true }
  )

  watch(
    () => props.referencedDocumentId,
    (documentId) => {
      if (!canReferenceDocument.value) return
      referencedDocumentId.value = documentId
    },
    { immediate: true }
  )

  const referencedDocument = computed(() => {
    return orderDocuments.value.find(document => document.id === referencedDocumentId.value)
  })

  const referencedDocumentStatusMeta = computed(() => {
    if (referencedDocumentId.value === undefined)
      return doisOrdersStore.getDocumentStatusMeta(undefined)

    const document = doisOrdersStore.getOrderDocument(props.orderId, referencedDocumentId.value)
    return doisOrdersStore.getDocumentStatusMeta(document?.status)
  })

  function referenceDocument(documentId: number) {
    referencedDocumentId.value = documentId
    emit('update:referencedDocumentId', documentId)
  }

  function clearReferencedDocument() {
    if (!canReferenceDocument.value) return
    referencedDocumentId.value = undefined
    emit('update:referencedDocumentId', undefined)
  }

  // SUBMITTING COMMENT

  const newCommentText = ref('')

  const canSubmitComment = computed(() => {
    if (newCommentText.value.trim().length === 0) return false
    if (!props.isRefDocRequired) return true

    return referencedDocumentId.value !== undefined
  })

  function submitComment() {
    if (!canSubmitComment.value) return

    const createdComment = doisOrdersStore.addComment(props.orderId, newCommentText.value, referencedDocumentId.value)

    if (!createdComment) return

    emit('submitted', {
      orderId: props.orderId,
      documentId: referencedDocumentId.value,
      comment: createdComment,
    })

    newCommentText.value = ''

    if (canReferenceDocument.value) {
      referencedDocumentId.value = undefined
      emit('update:referencedDocumentId', undefined)
    }
  }

  const rootRef = useTemplateRef<HTMLElement>('rootRef')
  const textareaRef = useTemplateRef<HTMLTextAreaElement>('textareaRef')

  function scrollIntoView(options?: ScrollIntoViewOptions) {
    rootRef.value?.scrollIntoView(options)
  }

  function focusInput(options?: FocusOptions) {
    textareaRef.value?.focus(options)
  }

  defineExpose({
    scrollIntoView,
    focusInput,
  })
</script>

<template>
  <div ref="rootRef" class="position-relative add-comment">
    <!-- Textarea pro komentář -->
    <textarea
      ref="textareaRef"
      v-model="newCommentText"
      :name="`comment-${props.orderId}-${props.documentId ?? 'all'}`"
      :id="`comment-${props.orderId}-${props.documentId ?? 'all'}`"
      class="form-control"
      placeholder="Napište komentář..."
      @keydown.enter.exact.prevent="submitComment"
      style="resize: none; field-sizing: content; padding-bottom: 3.5rem">
    </textarea>
    <!-- Akce -->
    <!-- NOTE: Element má pointer-events: none, aby se dalo klikat na prostor mezi tlačítky, ty mají níže ve <style> nastaveny pointer-events zpět na auto -->
    <div class="position-absolute end-0 bottom-0 px-2 pb-2 w-100" style="pointer-events: none;">
      <div class="add-comment-actions d-flex align-items-center column-gap-1">
        <div v-if="canReferenceDocument" class="btn-actions">
          <!-- Reference documents dropdown -->
          <div v-if="props.isRefDocRequired" class="dropdown">
            <button
              class="btn btn-action dropdown-toggle"
              data-bs-toggle="dropdown"
              draggable="false"
              title="Přidružit dokument"
              :disabled="orderDocuments.length === 0">
              <!-- Icon file-plus -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-plus">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                <path d="M12 11l0 6" />
                <path d="M9 14l6 0" />
              </svg>
            </button>
            <div class="dropdown-menu">
              <button
                v-for="document in orderDocuments"
                :key="document.id"
                type="button"
                class="dropdown-item"
                :class="{ 'active': document.id === referencedDocumentId }"
                @click="referenceDocument(document.id)">
                {{ document.filename }}
              </button>
              <div v-if="orderDocuments.length === 0" class="dropdown-item text-muted">Žádné dokumenty</div>
            </div>
          </div>
        </div>
        <span v-if="props.isRefDocRequired && canReferenceDocument && !referencedDocument" class="comment-document-alert text-danger">Vyberte soubor</span>
        <!-- * Tag - referenced document -->
        <span
          v-if="canReferenceDocument && referencedDocument"
          :class="[
            'badge',
            `bg-${referencedDocumentStatusMeta.colorClass}-lt`,
            `text-${referencedDocumentStatusMeta.colorClass}-lt-fg`,
          ]">
          {{ referencedDocument.filename }}
          <button type="button" class="btn-close" title="Odebrat" @click="clearReferencedDocument"></button>
        </span>
        <button
          class="btn btn-primary ms-auto"
          :class="{ 'btn-icon': !isDesktop }"
          :disabled="!canSubmitComment"
          @click="submitComment">
          <svg v-if="!isDesktop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 14l11 -11" />
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
          </svg>
          <span v-if="isDesktop">Odeslat</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .tag {
    --tblr-border-color: transparent;
  }

  .btn-close {
    --tblr-btn-close-opacity: 1;
  }

  /* Display message when textarea is in focus, or there's text inside (it's not showing its placeholder) */
  .add-comment:not(:focus-within, :has(textarea:not(:placeholder-shown))) .comment-document-alert {
    display: none;
  }

  /* Restores pointer-events on all child elements */
  .add-comment-actions > * {
    pointer-events: auto;
  }
</style>