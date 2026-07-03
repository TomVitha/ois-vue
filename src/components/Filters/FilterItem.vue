<script setup lang="ts">
  import { computed, inject, nextTick, onMounted, onUnmounted, ref, useId, useTemplateRef } from 'vue'
  import TomSelect from 'tom-select'
  import { filterContextKey, type FilterFieldValue, type FilterItemAppliedState } from './filter-context'
  import { useFormatting } from '@/composables/formatting'

  type FilterControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  interface FilterSummaryContext {
    values: Record<string, FilterFieldValue>
    activeFieldCount: number
    selectedValueCount: number
    hasMultiValue: boolean
  }

  const props = defineProps<{
    title: string
    summaryFormatter?: (context: FilterSummaryContext) => string
  }>()

  const { formatDate } = useFormatting()

  const filterContext = inject(filterContextKey, null)

  const filterItemId = useId()
  const filterToggleRef = useTemplateRef<HTMLButtonElement>('filterToggleRef')
  const filterBodyRef = useTemplateRef<HTMLDivElement>('filterBodyRef')

  const appliedState = ref<FilterItemAppliedState | null>(null)

  const tomSelectInstances = new Map<HTMLSelectElement, TomSelect>()
  const tomSelectOptions = {
    allowEmptyOption: false,
    maxItems: null,
    plugins: {
      remove_button: {},
      no_active_items: {},
      input_autogrow: {},
      checkbox_options: {
        checkedClassNames: ['ts-checked'],
        uncheckedClassNames: ['ts-unchecked'],
      },
    },
    itemClass: 'tag',
  }

  function closeDropdown() {
    if (!filterToggleRef.value) return

    const isOpen = filterToggleRef.value.classList.contains('show')
    if (isOpen) {
      filterToggleRef.value.click()
    }
  }

  function getControls(): FilterControl[] {
    const root = filterBodyRef.value
    if (!root) return []

    const controls = Array.from(root.querySelectorAll<FilterControl>('input, select, textarea'))

    return controls.filter((control) => {
      // Unwanted inputs
      if (control.matches('[data-filter-ignore]')) return false
      if (control.disabled) return false
      if (control instanceof HTMLInputElement && control.type === 'button') return false
      if (control instanceof HTMLInputElement && control.type === 'submit') return false

      return true
    })
  }

  function getFieldKey(control: FilterControl, index: number): string {
    const explicitKey = control.getAttribute('data-filter-key')
    if (explicitKey) return explicitKey

    if (control.name) return control.name
    if (control.id) return control.id

    return `field-${index + 1}`
  }

  function normalizeString(value: string): string | null {
    const trimmed = value.trim()
    return trimmed ? trimmed : null
  }

  function getFallbackChoiceValue(input: HTMLInputElement): string | null {
    if (input.hasAttribute('value')) {
      return normalizeString(input.value)
    }

    const labelText = normalizeString(input.closest('label')?.textContent ?? '')
    if (labelText) return labelText

    return null
  }

  function getFormCheckLabelText(input: HTMLInputElement): string | null {
    const formCheck = input.closest('.form-check')
    if (!formCheck) return null

    const labelText = normalizeString(formCheck.querySelector('.form-check-label')?.textContent ?? '')
    if (labelText) return labelText

    return null
  }

  function getChoiceDisplayText(input: HTMLInputElement): string | null {
    return getFormCheckLabelText(input) ?? getFallbackChoiceValue(input)
  }

  function readCheckboxGroup(input: HTMLInputElement): string[] {
    const root = filterBodyRef.value
    const groupName = input.name
    if (!root || !groupName) return input.checked ? [input.value] : []

    const group = Array.from(root.querySelectorAll<HTMLInputElement>(`input[type="checkbox"][name="${CSS.escape(groupName)}"]`))
      .filter((item) => !item.disabled && !item.matches('[data-filter-ignore]'))
      .filter((item) => item.checked)
      .map((item) => getFallbackChoiceValue(item))
      .filter((value): value is string => value !== null)

    return group
  }

  function readValue(control: FilterControl): FilterFieldValue | null {
    if (control instanceof HTMLSelectElement) {
      if (control.multiple) {
        const values = Array.from(control.selectedOptions)
          .map((option) => option.value.trim())
          .filter((value) => value.length > 0)

        return values.length ? values : null
      }

      return normalizeString(control.value)
    }

    if (control instanceof HTMLTextAreaElement) {
      return normalizeString(control.value)
    }

    if (control.type === 'radio') {
      if (!control.name) {
        return control.checked ? normalizeString(control.value) : null
      }

      const root = filterBodyRef.value
      if (!root) return null

      const selected = root.querySelector<HTMLInputElement>(
        `input[type="radio"][name="${CSS.escape(control.name)}"]:checked:not([data-filter-ignore]):not([disabled])`
      )

      if (!selected) return null
      return getFallbackChoiceValue(selected)
    }

    if (control.type === 'checkbox') {
      if (control.name) {
        const values = readCheckboxGroup(control)
        return values.length ? values : null
      }

      if (!control.checked) return null
      const normalized = getFallbackChoiceValue(control)
      return normalized ?? true
    }

    return normalizeString(control.value)
  }

  function collectValues(): Record<string, FilterFieldValue> {
    const values: Record<string, FilterFieldValue> = {}
    const controls = getControls()
    const radioHandled = new Set<string>()
    const checkboxHandled = new Set<string>()

    controls.forEach((control, index) => {
      if (control instanceof HTMLInputElement && control.type === 'radio' && control.name) {
        if (radioHandled.has(control.name)) return
        radioHandled.add(control.name)
      }

      if (control instanceof HTMLInputElement && control.type === 'checkbox' && control.name) {
        if (checkboxHandled.has(control.name)) return
        checkboxHandled.add(control.name)
      }

      const value = readValue(control)
      if (value === null) return

      const fieldKey = getFieldKey(control, index)
      values[fieldKey] = value
    })

    return values
  }

  function countSelectedValues(values: Record<string, FilterFieldValue>) {
    let selectedValueCount = 0
    let hasMultiValue = false

    for (const value of Object.values(values)) {
      if (Array.isArray(value)) {
        selectedValueCount += value.length
        hasMultiValue = true
      } else {
        selectedValueCount += 1
      }
    }

    return {
      selectedValueCount,
      hasMultiValue,
    }
  }

  function buildSummaryFromControls(controls: FilterControl[]): string {
    const summaryParts: string[] = []
    const radioHandled = new Set<string>()
    const checkboxHandled = new Set<string>()

    controls.forEach((control) => {
      if (control instanceof HTMLSelectElement) {
        if (control.multiple) {
          const selectedCount = control.selectedOptions.length
          if (selectedCount > 0) {
            summaryParts.push(String(selectedCount))
          }
          return
        }

        const selectedOption = control.selectedOptions.item(0)
        if (!selectedOption) return

        const optionValue = normalizeString(selectedOption.value)
        if (!optionValue) return

        const optionText = normalizeString(selectedOption.textContent ?? '')
        if (optionText) {
          summaryParts.push(optionText)
          return
        }

        summaryParts.push(optionValue)
        return
      }

      if (control instanceof HTMLTextAreaElement) {
        const value = normalizeString(control.value)
        if (value) {
          summaryParts.push(value)
        }
        return
      }

      if (control.type === 'radio') {
        if (!control.name) {
          if (!control.checked) return
          const radioValue = getChoiceDisplayText(control)
          if (radioValue) {
            summaryParts.push(radioValue)
          }
          return
        }

        if (radioHandled.has(control.name)) return
        radioHandled.add(control.name)

        const root = filterBodyRef.value
        if (!root) return

        const selected = root.querySelector<HTMLInputElement>(
          `input[type="radio"][name="${CSS.escape(control.name)}"]:checked:not([data-filter-ignore]):not([disabled])`
        )

        if (!selected) return
        const displayValue = getChoiceDisplayText(selected)
        if (displayValue) {
          summaryParts.push(displayValue)
        }
        return
      }

      if (control.type === 'checkbox') {
        if (!control.name) {
          if (!control.checked) return

          const displayValue = getChoiceDisplayText(control)
          if (displayValue) {
            summaryParts.push(displayValue)
          }
          return
        }

        if (checkboxHandled.has(control.name)) return
        checkboxHandled.add(control.name)

        const root = filterBodyRef.value
        if (!root) return

        const checkedItems = Array.from(root.querySelectorAll<HTMLInputElement>(`input[type="checkbox"][name="${CSS.escape(control.name)}"]`))
          .filter((item) => !item.disabled && !item.matches('[data-filter-ignore]'))
          .filter((item) => item.checked)

        if (checkedItems.length > 0) {
          summaryParts.push(String(checkedItems.length))
        }
        return
      }

      if (control.type === 'date') {
        const value = normalizeString(control.value)
        if (value) {
          summaryParts.push(formatDate(value))
        }
        return
      }

      const value = normalizeString(control.value)
      if (value) {
        summaryParts.push(value)
      }
    })

    return summaryParts.join(', ')
  }

  function buildSummary(values: Record<string, FilterFieldValue>, controls: FilterControl[]): string {
    const keys = Object.keys(values)
    if (!keys.length) return ''

    const { selectedValueCount, hasMultiValue } = countSelectedValues(values)
    const customSummary = props.summaryFormatter?.({
      values,
      activeFieldCount: keys.length,
      selectedValueCount,
      hasMultiValue,
    })

    if (customSummary && customSummary.trim().length > 0) {
      return customSummary.trim()
    }

    const summary = buildSummaryFromControls(controls)
    if (summary) return summary

    // Fallback: when no display text is available, keep compact count-based output.
    return hasMultiValue ? `${selectedValueCount}` : keys.join(', ')
  }

  function buildAppliedState(values: Record<string, FilterFieldValue>, controls: FilterControl[]): FilterItemAppliedState | null {
    const activeFieldCount = Object.keys(values).length
    if (!activeFieldCount) return null

    const { selectedValueCount, hasMultiValue } = countSelectedValues(values)

    return {
      values,
      summary: buildSummary(values, controls),
      activeFieldCount,
      selectedValueCount,
      hasMultiValue,
    }
  }

  function clearControl(control: FilterControl) {
    if (control instanceof HTMLSelectElement) {
      const tomSelect = tomSelectInstances.get(control)

      if (tomSelect) {
        tomSelect.clear()
        return
      }

      if (control.multiple) {
        Array.from(control.options).forEach((option) => {
          option.selected = false
        })
      } else {
        control.selectedIndex = 0
      }

      control.dispatchEvent(new Event('change', { bubbles: true }))
      return
    }

    if (control instanceof HTMLTextAreaElement) {
      control.value = ''
      control.dispatchEvent(new Event('input', { bubbles: true }))
      return
    }

    if (control.type === 'radio' || control.type === 'checkbox') {
      control.checked = false
      control.dispatchEvent(new Event('change', { bubbles: true }))
      return
    }

    control.value = ''
    control.dispatchEvent(new Event('input', { bubbles: true }))
  }

  function resetInternally() {
    const controls = getControls()
    controls.forEach(clearControl)
    appliedState.value = null
  }

  function onApply() {
    const controls = getControls()
    const values = collectValues()
    const nextState = buildAppliedState(values, controls)

    appliedState.value = nextState
    filterContext?.commitItem(filterItemId, nextState, 'apply')
    closeDropdown()
  }

  function onClear() {
    resetInternally()
    filterContext?.commitItem(filterItemId, null, 'clear')
    closeDropdown()
  }

  function initializeTomSelects() {
    const root = filterBodyRef.value
    if (!root) return

    const multiSelects = Array.from(root.querySelectorAll<HTMLSelectElement>('select[multiple]'))

    multiSelects.forEach((select) => {
      if (tomSelectInstances.has(select)) return

      const instance = new TomSelect(select, tomSelectOptions)
      tomSelectInstances.set(select, instance)
    })
  }

  function destroyTomSelects() {
    tomSelectInstances.forEach((instance) => instance.destroy())
    tomSelectInstances.clear()
  }

  const hasAppliedValue = computed(() => appliedState.value !== null)
  const displayValue = computed(() => appliedState.value?.summary ?? '')

  onMounted(async () => {
    await nextTick()
    initializeTomSelects()

    filterContext?.registerItem(filterItemId, props.title, () => {
      resetInternally()
    })
  })

  onUnmounted(() => {
    filterContext?.unregisterItem(filterItemId)
    destroyTomSelects()
  })
</script>

<template>
  <div class="filter">
    <!-- !!! data-bs-auto-close="outside" -->
    <!-- !! https://getbootstrap.com/docs/5.3/components/dropdowns/#auto-close-behavior -->
    <button ref="filterToggleRef" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" draggable="false" type="button">
      <!-- [x] Clear button -->
      <span
        v-if="hasAppliedValue"
        title="Zrušit filtr"
        role="button"
        tabindex="-1"
        @click.stop.prevent="onClear">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </span>
      <!-- [+] icon -->
      <svg title="Přidat filtr" v-if="!hasAppliedValue" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M5 12l14 0" />
      </svg>
      <!-- Title -->
      <span class="text-muted">{{ props.title }}</span>
      <!-- Label to show active value(s) -->
      <span v-if="hasAppliedValue" class="border-start ms-2 px-2">{{ displayValue }}</span>
    </button>
    <!-- TODO: replace BS dropdown with proper popover -->
    <div class="dropdown-menu dropdown-menu-card filter-content">
      <div class="card">
        <div class="card-body">
          <div class="divide-y-2">
            <div>
              <div class="strong mb-2">{{ props.title }}</div>
              <div ref="filterBodyRef" class="space-y-2">
                <slot />
              </div>
            </div>
            <div class="btn-list">
              <button class="btn btn-primary w-100 btn-sm" type="button" @click.prevent="onApply">Použít</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .filter {
    position: relative;
  }

  .filter-content {
    width: 280px;

    .dropdown .btn {
      justify-content: start;
      text-align: start;
    }

  }
</style>