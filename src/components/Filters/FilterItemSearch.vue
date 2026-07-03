<script setup lang="ts">
  import { computed, inject, onMounted, onUnmounted, ref, useId, watch } from 'vue'
  import { filterContextKey, type FilterItemAppliedState } from './filter-context'

  const props = withDefaults(defineProps<{
    placeholder?: string
  }>(), {
    placeholder: 'Hledejte...',
  })

  const filterContext = inject(filterContextKey, null)

  const filterItemId = useId()
  const searchValue = ref('')

  const appliedState = computed<FilterItemAppliedState | null>(() => {
    const value = searchValue.value.trim()
    if (!value) return null

    return {
      values: {
        search: value,
      },
      summary: value,
      activeFieldCount: 1,
      selectedValueCount: 1,
      hasMultiValue: false,
    }
  })

  function resetInternally() {
    searchValue.value = ''
  }

  watch(searchValue, () => {
    const nextState = appliedState.value
    filterContext?.commitItem(filterItemId, nextState, nextState ? 'apply' : 'clear')
  })

  onMounted(() => {
    filterContext?.registerItem(filterItemId, 'search', resetInternally)
  })

  onUnmounted(() => {
    filterContext?.unregisterItem(filterItemId)
  })
</script>

<template>
  <div class="input-icon flex-shrink-0">
    <span class="input-icon-addon">
      <slot name="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </slot>
    </span>
    <input
      v-model.lazy="searchValue"
      type="search"
      class="form-control form-control-sm"
      :placeholder="props.placeholder"
      autocomplete="off">
  </div>
</template>

<style scoped></style>
