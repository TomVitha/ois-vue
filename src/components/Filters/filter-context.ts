import type { InjectionKey } from 'vue'

export type FilterApplyMode = 'batch' | 'immediate'
export type PrimitiveFilterValue = string | number | boolean
export type FilterFieldValue = PrimitiveFilterValue | PrimitiveFilterValue[]

export interface FilterItemAppliedState {
  values: Record<string, FilterFieldValue>
  summary: string
  activeFieldCount: number
  selectedValueCount: number
  hasMultiValue: boolean
}

export interface FilterAppliedItem {
  itemId: string
  title: string
  values: Record<string, FilterFieldValue>
  summary: string
  activeFieldCount: number
  selectedValueCount: number
  hasMultiValue: boolean
}

export type FiltersApplyReason =
  | 'item-applied'
  | 'item-cleared'
  | 'manual-apply'
  | 'clear-all'

export interface FiltersAppliedPayload {
  mode: FilterApplyMode
  reason: FiltersApplyReason
  activeItemCount: number
  items: FilterAppliedItem[]
}

export interface FilterContext {
  registerItem: (itemId: string, title: string, reset: () => void) => void
  unregisterItem: (itemId: string) => void
  commitItem: (
    itemId: string,
    appliedState: FilterItemAppliedState | null,
    reason: 'apply' | 'clear'
  ) => void
}

export const filterContextKey: InjectionKey<FilterContext> = Symbol('filter-context')
