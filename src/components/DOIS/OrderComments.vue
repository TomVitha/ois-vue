<script setup lang="ts">
  import OrderComment from '@/components/DOIS/OrderComment.vue'
  import type { Comment as DoisComment } from '@/stores/dois-orders'

  // container for individual comments
  const props = defineProps<{
    comments: DoisComment[]
  }>()

  const emit = defineEmits<{
    (event: 'goto-document', payload: { orderId: number; documentId: number }): void
  }>()
</script>

<template>
  <div v-if="props.comments && props.comments.length > 0" class="space-y">
    <template v-for="comment in props.comments" :key="comment.id">
      <OrderComment
        :commentId="comment.id"
        :refOrderId="comment.refOrderId"
        :refDocumentId="comment.refDocumentId"
        :userId="comment.userId"
        :datetime="comment.datetime"
        :text="comment.text"
        @goto-document="emit('goto-document', $event)" />
    </template>
  </div>
</template>

<style scoped></style>