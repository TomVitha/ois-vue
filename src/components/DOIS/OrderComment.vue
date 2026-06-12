<script setup lang="ts">
  import { computed } from 'vue'

  import { useFormatting } from '@/composables/formatting'
  const { formatDate } = useFormatting()

  import { useDoisOrders } from '@/stores/dois-orders'
  const doisOrdersStore = useDoisOrders()

  const props = defineProps<{
    commentId: number
    userId: number
    datetime?: string
    text: string
  }>()

  const username = computed(() => {
    return doisOrdersStore.getUser(props.userId)?.username || `Uživatel #${props.userId}`
  })

  const isMe = computed(() => {
    return props.userId === doisOrdersStore.currentUser
  })

</script>

<template>
  <div class="comment">
    <div v-if="props.datetime">
      <strong>{{ username }}</strong><span v-if="isMe"> (Vy)</span> <span class="text-muted"> • {{ formatDate(props.datetime, 'long-datetime') }}</span>
    </div>
    <div>{{ props.text }}</div>
  </div>
</template>

<style scoped></style>