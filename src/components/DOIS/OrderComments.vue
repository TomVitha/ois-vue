<script setup lang="ts">
  import OrderComment from '@/components/DOIS/OrderComment.vue'

  // container for individual comments
  const props = defineProps<{
    comments: any
  }>()
</script>

<template>
  <div class="space-y">
    <template v-for="comment in props.comments" :key="comment.id">
      <OrderComment
        :commentId="comment.id"
        :userId="comment.userId"
        :datetime="comment.datetime"
        :text="comment.text" />
    </template>
  </div>
</template>

<style scoped></style>