<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useDoisOrders } from '@/stores/dois-orders'
  import type { Comment as DoisComment } from '@/stores/dois-orders'

  type CommentTarget = 'order' | 'document'

  const props = defineProps<
    | {
      target: 'order'
      targetId: number
      orderId?: never
    }
    | {
      target: 'document'
      targetId: number
      orderId: number
    }
  >()

  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  const isDesktop = matchesMediaQuery('(min-width: 992px)')

  const doisOrdersStore = useDoisOrders()

  export type SubmittedCommentPayload = {
    target: CommentTarget
    targetId: number
    comment: DoisComment
  }

  const emit = defineEmits<{
    (event: 'submitted', payload: SubmittedCommentPayload): void
  }>()

  const newCommentText = ref('')

  const canSubmitComment = computed(() => {
    return newCommentText.value.trim().length > 0
  })

  function submitComment() {
    if (!canSubmitComment.value) return

    let createdComment: DoisComment | null = null

    if (props.target === 'document') {
      createdComment = doisOrdersStore.addDocumentComment(props.orderId, props.targetId, newCommentText.value)
    } else {
      createdComment = doisOrdersStore.addOrderComment(props.targetId, newCommentText.value)
    }

    if (!createdComment) return

    emit('submitted', {
      target: props.target,
      targetId: props.targetId,
      comment: createdComment,
    })

    newCommentText.value = ''
  }
</script>

<template>
  <div class="position-relative">
    <textarea
      v-model="newCommentText"
      :name="`comment-${props.target}-${props.targetId}`"
      :id="`comment-${props.target}-${props.targetId}`"
      class="form-control"
      placeholder="Napište komentář..."
      @keydown.enter.exact.prevent="submitComment"
      style="resize: none; field-sizing: content; padding-bottom: 3.5rem"></textarea>
    <div class="d-flex align-items-center position-absolute end-0 bottom-0 px-2 pb-2 w-100">
      <!-- WIP -->
      <div class="btn-actions">
        <div class="dropdown">
          <button class="btn btn-action dropdown-toggle" data-bs-toggle="dropdown" draggable="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-plus">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
              <path d="M12 11l0 6" />
              <path d="M9 14l6 0" />
            </svg>
          </button>
          <div class="dropdown-menu">
            <button class="dropdown-item">hlavni-dokument-1.pdf</button>
            <button class="dropdown-item">nejaky-dokument-1.pdf</button>
            <button class="dropdown-item">dalsi-dokument-2.pdf</button>
          </div>
        </div>
      </div>
      <!-- NOTE: Pokud se vybere specifický dokument, ke kterému se komentář pojí -->
      <span class="tag">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-text">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
          <path d="M9 9l1 0" />
          <path d="M9 13l6 0" />
          <path d="M9 17l6 0" />
        </svg>
        nazev-dokumentu.pdf
        <a href="#" class="btn-close"></a>
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

<style scoped></style>