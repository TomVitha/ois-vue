<script setup lang="ts">
  import { useSlots } from 'vue';
  const slots = useSlots();

  const props = withDefaults(defineProps<{
      title?: string
      subtitle?: string
      header?: string
      icon?: boolean
    }>(), {
    icon: true
  })
</script>

<template>
  <div class="empty flex-fill">
    <div v-if="props.icon" class="empty-icon">
      <slot name="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-list">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l11 0" />
          <path d="M9 12l11 0" />
          <path d="M9 18l11 0" />
          <path d="M5 6l0 .01" />
          <path d="M5 12l0 .01" />
          <path d="M5 18l0 .01" />
        </svg>
      </slot>
    </div>
    <div v-if="slots.image" class="empty-image">
      <slot name="image"></slot>
    </div>
    <div v-if="props.header" class="empty-header">{{ props.header }}</div>
    <p v-if="props.title" class="empty-title">{{ props.title }}</p>
    <p v-if="props.subtitle" class="empty-subtitle text-secondary">{{ props.subtitle }}</p>
    <div v-if="slots.actions" class="empty-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<style scoped></style>