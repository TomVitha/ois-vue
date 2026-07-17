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

  const referencedDocument = computed(() => {
    if (props.refDocumentId === undefined) return undefined
    return doisOrdersStore.getOrderDocument(props.refOrderId, props.refDocumentId)
  })

  const referencedDocumentFilename = computed(() => {
    if (!referencedDocument.value) return undefined
    return referencedDocument.value.filepath.split(/[/\\]/).at(-1) || referencedDocument.value.filepath
  })

  const referencedDocumentStatusMeta = computed(() => {
    return doisOrdersStore.getDocumentStatusMeta(referencedDocument.value?.status)
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
      <strong>{{ username }}</strong><span v-if="isMe"> (Vy)</span> <span class="text-muted align-middle fs-5"> • {{ formatDate(props.datetime, 'long-datetime') }}</span>
      <button
        v-if="referencedDocumentFilename"
        type="button"
        :class="[
          'badge',
          `bg-${referencedDocumentStatusMeta.colorClass}-lt`,
          `text-${referencedDocumentStatusMeta.colorClass}-lt-fg`,
          'border-0',
          'mx-1',
        ]"
        @click="openReferencedDocument">
        {{ referencedDocumentFilename }}
      </button>
    </div>
    <div>{{ props.text }}</div>
  </div>
</template>

<style scoped></style>