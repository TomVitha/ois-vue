<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useDoisOrders } from '@/stores/dois-orders'
  import type { Comment as DoisComment } from '@/stores/dois-orders'

  const props = defineProps<{
    orderId: number
    documentId?: number
  }>()

  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  const isDesktop = matchesMediaQuery('(min-width: 992px)')

  const doisOrdersStore = useDoisOrders()

  export type SubmittedCommentPayload = {
    orderId: number
    documentId?: number
    comment: DoisComment
  }

  const emit = defineEmits<{
    (event: 'submitted', payload: SubmittedCommentPayload): void
  }>()

  const newCommentText = ref('')

  type OrderDocumentOption = {
    id: number
    filename: string
  }

  const canSelectDocument = computed(() => {
    return props.documentId === undefined
  })

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

  const selectedDocumentId = ref<number | undefined>(props.documentId)

  const selectedDocument = computed(() => {
    return orderDocuments.value.find(document => document.id === selectedDocumentId.value)
  })

  function selectDocument(documentId: number) {
    selectedDocumentId.value = documentId
  }

  function clearSelectedDocument() {
    if (!canSelectDocument.value) return
    selectedDocumentId.value = undefined
  }

  const canSubmitComment = computed(() => {
    return newCommentText.value.trim().length > 0
  })

  function submitComment() {
    if (!canSubmitComment.value) return

    const createdComment = doisOrdersStore.addComment(props.orderId, newCommentText.value, selectedDocumentId.value)

    if (!createdComment) return

    emit('submitted', {
      orderId: props.orderId,
      documentId: selectedDocumentId.value,
      comment: createdComment,
    })

    newCommentText.value = ''
  }
</script>

<template>
  <div class="position-relative">
    <!-- Textarea pro komentář -->
    <textarea
      v-model="newCommentText"
      :name="`comment-${props.orderId}-${props.documentId ?? 'all'}`"
      :id="`comment-${props.orderId}-${props.documentId ?? 'all'}`"
      class="form-control"
      placeholder="Napište komentář..."
      @keydown.enter.exact.prevent="submitComment"
      style="resize: none; field-sizing: content; padding-bottom: 3.5rem">
    </textarea>
    <!-- Akce -->
    <div class="d-flex align-items-center position-absolute end-0 bottom-0 px-2 pb-2 w-100">
      <div v-if="canSelectDocument" class="btn-actions">
        <div class="dropdown">
          <button
            class="btn btn-action dropdown-toggle"
            data-bs-toggle="dropdown"
            draggable="false"
            :disabled="orderDocuments.length === 0">
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
              :class="{ 'active': document.id === selectedDocumentId }"
              @click="selectDocument(document.id)">
              {{ document.filename }}
            </button>
            <div v-if="orderDocuments.length === 0" class="dropdown-item text-muted">Žádné dokumenty</div>
          </div>
        </div>
      </div>
      <span v-if="canSelectDocument && selectedDocument" class="tag bg-blue text-blue-fg">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-text">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
          <path d="M9 9l1 0" />
          <path d="M9 13l6 0" />
          <path d="M9 17l6 0" />
        </svg>
        {{ selectedDocument.filename }}
        <button type="button" class="btn-close" aria-label="Odebrat dokument" @click="clearSelectedDocument"></button>
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
</template>

<style scoped>
  .tag {
    --tblr-border-color: transparent;
  }
  .btn-close {
    --tblr-btn-close-opacity: 1;
  }
</style>