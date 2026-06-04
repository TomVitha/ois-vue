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
  <div class="row g-2 align-items-end">
    <div class="col">
      <textarea
        v-model="newCommentText"
        :name="`comment-${props.target}-${props.targetId}`"
        :id="`comment-${props.target}-${props.targetId}`"
        class="form-control"
        placeholder="Napište komentář..."
        @keydown.ctrl.enter="submitComment"
        style="resize: none; field-sizing: content;"></textarea>
    </div>
    <div class="col-auto">
      <!-- * Add comment to document -->
      <button
        class="btn btn-primary"
        :class="{ 'btn-icon': !isDesktop }"
        :disabled="!canSubmitComment"
        @click="submitComment">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send">
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