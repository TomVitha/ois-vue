<script setup lang="ts">
  import { computed, provide, ref, type ComputedRef } from 'vue'

  // ? Is AccordionContext and inject necessary ?

  type AccordionContext = {
    groupId: string
    exclusive: ComputedRef<boolean>
    registerItem: () => number
  }

  const props = withDefaults(
    defineProps<{ id: string; exclusive?: boolean }>(),
    { exclusive: false }
  )

  const exclusive = computed(() => props.exclusive)
  const itemCounter = ref(0)

  const registerItem = () => {
    itemCounter.value += 1
    return itemCounter.value
  }

  provide<AccordionContext>('accordion-context', {
    groupId: props.id,
    exclusive,
    registerItem,
  })
</script>

<template>
  <div class="accordion" :id="props.id">
    <slot />
  </div>
</template>
