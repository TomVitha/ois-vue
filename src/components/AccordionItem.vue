<script setup lang="ts">
  import { computed, inject, type ComputedRef } from 'vue'

  const props = defineProps<{ title: string }>()

  type AccordionContext = {
    groupId: string
    exclusive: ComputedRef<boolean>
    registerItem: () => number
  }

  const context = inject<AccordionContext>('accordion-context')

  if (!context) {
    throw new Error('AccordionItem must be used inside an AccordionGroup')
  }

  const itemIndex = context.registerItem()
  const collapseId = computed(() => `${context.groupId}-${itemIndex}`)
  const dataParent = computed(() => (context.exclusive.value ? `#${context.groupId}` : undefined))
</script>

<template>
  <div class="accordion-item">
    <div class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#${collapseId}`"
        aria-expanded="false">
        {{ title }}
        <!-- Icon Plus -->
        <!-- <div class="accordion-button-toggle accordion-button-toggle-plus">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
            <path d="M12 5l0 14"></path>
            <path d="M5 12l14 0"></path>
          </svg>
        </div> -->
        <!-- Icon Chevron -->
        <div class="accordion-button-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
            <path d="M6 9l6 6l6 -6"></path>
          </svg>
        </div>
      </button>
    </div>
    <div :id="collapseId" class="accordion-collapse collapse" :data-bs-parent="dataParent">
      <div class="accordion-body">
        <slot />
      </div>
    </div>
  </div>
</template>
