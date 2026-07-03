<script setup lang="ts">
  import { computed, provide, reactive } from 'vue'
  import {
    filterContextKey,
    type FilterApplyMode,
    type FilterAppliedItem,
    type FilterFieldValue,
    type FilterItemAppliedState,
    type FiltersAppliedPayload,
    type FiltersApplyReason,
  } from './filter-context'

  const props = withDefaults(defineProps<{
    applyMode?: FilterApplyMode
    logOnApply?: boolean
  }>(), {
    applyMode: 'immediate',
    logOnApply: true,
  })

  const emit = defineEmits<{
    (event: 'applied', payload: FiltersAppliedPayload): void
  }>()

  interface ItemRegistryEntry {
    title: string
    reset: () => void
    state: FilterItemAppliedState | null
  }

  const itemRegistry = reactive(new Map<string, ItemRegistryEntry>())

  const activeItemCount = computed(() => {
    let count = 0
    for (const entry of itemRegistry.values()) {
      if (entry.state) {
        count += 1
      }
    }
    return count
  })

  function registerItem(itemId: string, title: string, reset: () => void) {
    itemRegistry.set(itemId, {
      title,
      reset,
      state: null,
    })
  }

  function unregisterItem(itemId: string) {
    itemRegistry.delete(itemId)
  }

  function upsertState(itemId: string, appliedState: FilterItemAppliedState | null) {
    const entry = itemRegistry.get(itemId)
    if (!entry) return

    entry.state = appliedState
  }

  function toItem(itemId: string, entry: ItemRegistryEntry): FilterAppliedItem | null {
    if (!entry.state) return null

    return {
      itemId,
      title: entry.title,
      values: entry.state.values,
      summary: entry.state.summary,
      activeFieldCount: entry.state.activeFieldCount,
      selectedValueCount: entry.state.selectedValueCount,
      hasMultiValue: entry.state.hasMultiValue,
    }
  }

  function buildPayload(reason: FiltersApplyReason): FiltersAppliedPayload {
    const items: FilterAppliedItem[] = []

    for (const [itemId, entry] of itemRegistry.entries()) {
      const item = toItem(itemId, entry)
      if (item) {
        items.push(item)
      }
    }

    return {
      mode: props.applyMode,
      reason,
      activeItemCount: items.length,
      items,
    }
  }

  function toLogShape(payload: FiltersAppliedPayload): Record<string, Record<string, FilterFieldValue>> {
    return payload.items.reduce<Record<string, Record<string, FilterFieldValue>>>((acc, item) => {
      acc[item.itemId] = item.values
      return acc
    }, {})
  }

  function emitApplied(reason: FiltersApplyReason) {
    const payload = buildPayload(reason)

    if (props.logOnApply) {
      console.log('Filters applied', {
        meta: {
          mode: payload.mode,
          reason: payload.reason,
          activeItemCount: payload.activeItemCount,
        },
        values: toLogShape(payload),
      })
    }

    emit('applied', payload)
  }

  function commitItem(
    itemId: string,
    appliedState: FilterItemAppliedState | null,
    reason: 'apply' | 'clear'
  ) {
    upsertState(itemId, appliedState)

    if (props.applyMode === 'immediate') {
      emitApplied(reason === 'apply' ? 'item-applied' : 'item-cleared')
    }
  }

  function onApplyAll() {
    emitApplied('manual-apply')
  }

  function onClearAll() {
    for (const entry of itemRegistry.values()) {
      entry.reset()
      entry.state = null
    }

    emitApplied('clear-all')
  }

  provide(filterContextKey, {
    registerItem,
    unregisterItem,
    commitItem,
  })
</script>

<template>
  <div class="btn-list py-2 my-n2">
    <slot></slot>
    <!-- Actions -->
    <div class="btn-list flex-nowrap">
      <!-- Apply -->
      <button type="button" class="btn-link text-success text-nowrap" @click="onApplyAll"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 12l5 5l10 -10"></path>
        </svg>
        Aplikovat
      </button>
      <!-- Cancel -->
      <button type="button" class="btn-link text-body text-nowrap" @click="onClearAll">
        Zrušit filtry
      </button>
    </div>
    <!-- Počet aktivních filtrů -->
    <!-- <span v-if="activeItemCount" class="badge bg-primary-lt">{{ activeItemCount }}</span> -->
  </div>
</template>

<style scoped>
  .btn-list {
    scrollbar-width: thin;
  }
</style>