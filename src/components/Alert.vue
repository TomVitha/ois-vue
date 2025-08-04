<script setup lang="ts">
  const props = defineProps<{
    heading?: string
    type?: 'success' | 'info' | 'warning' | 'danger' | 'success'
    isDismissable?: boolean
    isImportant?: boolean
  }>()
</script>

<template>
      <div
        class="alert"
        :class="[`alert-${type}`, { 'alert-important': isImportant }, {'alert-dismissible': isDismissable }]"
        role="alert"
      >
      <!-- TODO: Icon according to type -->
      <div class="alert-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon icon-2">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
          <path d="M12 8v4"></path>
          <path d="M12 16h.01"></path>
        </svg>
      </div>
      <div>
        <h4 class="alert-heading">{{ heading }}</h4>
        <div class="alert-description">
          <slot></slot>
        </div>
      </div>
      <a v-if="isDismissable" class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>
    </div>
</template>

<style scoped>
  
</style>