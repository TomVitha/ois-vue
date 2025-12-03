<script setup lang="ts">
  import CopyToClipboardButton from '@/components/CopyToClipboardButton.vue';

  const props = defineProps<{
    name: string
    value: string | number
  }>()

</script>

<template>
  <div class="list-group-item px-0 d-flex align-items-center justify-content-between">
    <span class="text-secondary">{{ name }}</span>
    <span class="text-end">
      {{ value }}
      <CopyToClipboardButton :data="value" />
    </span>
  </div>
</template>

<style scoped></style>