<script setup lang="ts">
  const props = defineProps<{
    text: string
  }>()
</script>

<template>
  <!-- todo: conditional bg and text color ? -->
  <span class="badge bg-default text-default-fg text-nowrap flex-shrink-0">{{ text }}</span>
</template>

<style scoped>

</style>