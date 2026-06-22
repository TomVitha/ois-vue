<script setup lang="ts">
  import { computed } from 'vue'

  import { useFormatting } from '@/composables/formatting'
  const { formatDate } = useFormatting()

  import { useDoisOrders } from '@/stores/dois-orders'
  const doisOrdersStore = useDoisOrders()

  const props = defineProps<{
    commentId: number
    refOrderId: number
    refDocumentId?: number
    userId: number
    datetime?: string
    text: string
  }>()

  const emit = defineEmits<{
    (event: 'goto-document', payload: { orderId: number; documentId: number }): void
  }>()

  const username = computed(() => {
    return doisOrdersStore.getUser(props.userId)?.username || `Uživatel #${props.userId}`
  })

  const isMe = computed(() => {
    return props.userId === doisOrdersStore.currentUser
  })

  const referencedDocumentFilename = computed(() => {
    return doisOrdersStore.getOrderDocumentFilename(props.refOrderId, props.refDocumentId)
  })

  function openReferencedDocument() {
    if (props.refDocumentId === undefined) return
    emit('goto-document', {
      orderId: props.refOrderId,
      documentId: props.refDocumentId,
    })
  }

</script>

<template>
  <div class="comment">
    <div v-if="props.datetime">
      <strong>{{ username }}</strong><span v-if="isMe"> (Vy)</span> <span class="text-muted"> • {{ formatDate(props.datetime, 'long-datetime') }}</span>
      <button
        v-if="referencedDocumentFilename"
        type="button"
        class="badge bg-primary-lt text-primary-emphasis border-0 mx-1"
        @click="openReferencedDocument">
        {{ referencedDocumentFilename }}
      </button>
    </div>
    <div>{{ props.text }}</div>
  </div>
</template>

<style scoped></style>