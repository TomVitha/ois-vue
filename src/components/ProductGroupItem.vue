<script setup lang="ts">
  import { computed, type ComputedRef } from 'vue'

  const props = withDefaults(defineProps<{
    title: string
    subtitle?: string
    id: string
    isOpen
    ?: boolean
  }>(), {
    isOpen
    : true
  })

  const collapseId = computed(() => props.id)
</script>

<template>
  <div class="accordion-item flex-fill">
    <!-- Header -->
    <div class="accordion-header">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#${collapseId}`"
        :aria-expanded="isOpen
        ">
        <div class="hr-text hr-text-left hr-text-spaceless flex-fill">
          <div class="space-x-2 align-items-center px-0">
            <!-- folder icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-folder">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
            </svg>
            <h3 class="mb-0">{{ title }}</h3>
            <span v-if="subtitle" class="text-secondary">({{ subtitle }})</span>
          </div>
        </div>
        <div class="accordion-button-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
            <path d="M6 9l6 6l6 -6"></path>
          </svg>
        </div>
      </button>
    </div>
    <!-- Body -->
    <div :id="collapseId" class="accordion-collapse collapse" :class="[{ show: isOpen
      
     }]">
      <div class="accordion-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .accordion-item {
    border: none;
  }

  .accordion-body {
    color: var(--tblr-body-color);
  }

  .accordion-button {
    padding-top: 0;
  }

  .hr-text {
    text-transform: none;
  }
</style>