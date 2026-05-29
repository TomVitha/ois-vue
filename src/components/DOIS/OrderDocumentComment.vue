<script setup lang="ts">
  import { ref, computed } from 'vue'

  import { useFormatting } from '@/composables/formatting'
  const { formatDate } = useFormatting()

  const props = defineProps<{
    commentId: number
    username?: string
    datetime?: string
    text: string
  }>()

</script>

<template>
  <div class="row">
    <div class="text-muted fs-5" v-if="props.username && props.datetime">
      <strong>{{ props.username }}</strong> • <span>{{ formatDate(props.datetime, 'long-datetime') }}</span>
    </div>
    <div>{{ props.text }}</div>
  </div>
</template>

<style scoped></style>