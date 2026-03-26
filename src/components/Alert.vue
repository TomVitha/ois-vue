<script setup lang="ts">
  import { useSlots } from 'vue'

  const slots = useSlots()

  const props = withDefaults(
    defineProps<{
      heading?: string
      type: 'success' | 'info' | 'warning' | 'danger'
      isDismissable?: boolean
      isImportant?: boolean
    }>(),
    {
      isDismissable: false,
      isImportant: false
    }
  )
</script>

<template>
  <div
    class="alert"
    :class="[`alert-${type}`, { 'alert-important': isImportant }, { 'alert-dismissible': isDismissable }]"
    role="alert">
    <div class="alert-icon">
      <svg v-if="type == 'success'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon icon-2">
        <path d="M5 12l5 5l10 -10"></path>
      </svg>
      <svg v-if="type == 'info'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon icon-2">
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
        <path d="M12 8v4"></path>
        <path d="M12 16h.01"></path>
      </svg>
      <svg v-if="type == 'warning'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon icon-2">
        <path d="M12 9v4"></path>
        <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"></path>
        <path d="M12 16h.01"></path>
      </svg>
      <svg v-if="type == 'danger'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon icon-2">
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
        <path d="M12 8v4"></path>
        <path d="M12 16h.01"></path>
      </svg>
    </div>
    <div>
      <h4 v-if="heading" class="alert-heading">{{ heading }}</h4>
      <div v-if="slots.default" class="alert-description">
        <slot></slot>
      </div>
    </div>
    <a v-if="isDismissable" class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>
  </div>
</template>

<style scoped></style>