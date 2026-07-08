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

  /**
   * Closes the Bootstrap dropdown when it is currently open.
   */
  function closeDropdown() {
    if (!filterToggleRef.value) return

    const isOpen = filterToggleRef.value.classList.contains('show')
    if (isOpen) {
      filterToggleRef.value.click()
    }
  }

  /**
   * Collects user-editable filter controls from the filter body.
   *
   * @returns List of relevant controls (inputs, selects, textareas).
   */
  function getControls(): FilterControl[] {
    const root = filterBodyRef.value
    if (!root) return []

    const controls = Array.from(root.querySelectorAll<FilterControl>('input, select, textarea'))

    return controls.filter((control) => {
      // Ignore controls that are intentionally excluded from filter state.
      if (control.matches('[data-filter-ignore]')) return false
      if (control.disabled) return false
      if (control instanceof HTMLInputElement && control.type === 'button') return false
      if (control instanceof HTMLInputElement && control.type === 'submit') return false

      return true
    })
  }

  /**
   * Resolves a stable key used when storing collected field values.
   *
   * Priority: explicit data attribute -> name -> id -> positional fallback.
   *
   * @param control Control to derive a key from.
   * @param index Index of the control in traversal order.
   * @returns Stable field key.
   */
  function getFieldKey(control: FilterControl, index: number): string {
    const explicitKey = control.getAttribute('data-filter-key')
    if (explicitKey) return explicitKey

    if (control.name) return control.name
    if (control.id) return control.id

    return `field-${index + 1}`
  }

  /**
   * Trims a string and maps empty values to null.
   *
   * @param value Raw input string.
   * @returns Normalized non-empty value or null.
   */
  function normalizeString(value: string): string | null {
    const trimmed = value.trim()
    return trimmed ? trimmed : null
  }

  /**
   * Reads text from a standard .form-check label associated with an input.
   *
   * @param input Checkbox or radio input.
   * @returns Label text or null if not present.
   */
  function getFormCheckLabelText(input: HTMLInputElement): string | null {
    const formCheck = input.closest('.form-check')
    if (!formCheck) return null

    const labelText = normalizeString(formCheck.querySelector('.form-check-label')?.textContent ?? '')
    if (labelText) return labelText

    return null
  }

  /**
   * Returns a best-effort value for radio/checkbox controls.
   *
   * Uses explicit value attribute first, then falls back to nearest label text.
   *
   * @param input Checkbox or radio input.
   * @returns Display/value string or null when not derivable.
   */
  function getFallbackChoiceValue(input: HTMLInputElement): string | null {
    if (input.hasAttribute('value')) {
      return normalizeString(input.value)
    }

    const labelText = normalizeString(input.closest('label')?.textContent ?? '')
    if (labelText) return labelText

    return null
  }

  /**
   * Derives user-facing text for choice controls.
   *
   * @param input Checkbox or radio input.
   * @returns Preferred display text for summaries.
   */
  function getChoiceDisplayText(input: HTMLInputElement): string | null {
    return getFormCheckLabelText(input) ?? getFallbackChoiceValue(input)
  }

  /**
   * Collects selected values for a checkbox group identified by input name.
   *
   * @param input One member of the checkbox group.
   * @returns Array of selected values for the entire group.
   */
  function readCheckboxGroup(input: HTMLInputElement): string[] {
    const root = filterBodyRef.value
    const groupName = input.name
    if (!root || !groupName) return input.checked ? [input.value] : []

    // Find all checkboxes in this named group, keep only active checked ones, convert them to display values, and drop empty results.
    const group = Array.from(root.querySelectorAll<HTMLInputElement>(`input[type="checkbox"][name="${CSS.escape(groupName)}"]`))
      .filter((item) => !item.disabled && !item.matches('[data-filter-ignore]'))
      .filter((item) => item.checked)
      .map((item) => getFallbackChoiceValue(item))
      .filter((value): value is string => value !== null)

    return group
  }

  /**
   * Reads the current filter value from a single control.
   *
   * @param control Filter control to inspect.
   * @returns Normalized value or null when the control has no active selection.
   */
  function readValue(control: FilterControl): FilterFieldValue | null {
    // SELECT: return selected value(s), normalizing empty strings away.
    if (control instanceof HTMLSelectElement) {
      if (control.multiple) {
        // Multi-select keeps all selected option values as an array.
        const values = Array.from(control.selectedOptions)
          .map((option) => option.value.trim())
          .filter((value) => value.length > 0)

        return values.length ? values : null
      }

      // Single-select resolves to one normalized value.
      return normalizeString(control.value)
    }

    // TEXTAREA: treat non-empty text as a scalar filter value.
    if (control instanceof HTMLTextAreaElement) {
      return normalizeString(control.value)
    }

    // RADIO: read checked value (standalone) or selected member of the named group.
    if (control.type === 'radio') {
      if (!control.name) {
        return control.checked ? normalizeString(control.value) : null
      }

      const root = filterBodyRef.value
      if (!root) return null

      // Query the current checked radio in this group while honoring ignored/disabled flags.
      const selected = root.querySelector<HTMLInputElement>(
        `input[type="radio"][name="${CSS.escape(control.name)}"]:checked:not([data-filter-ignore]):not([disabled])`
      )

      if (!selected) return null
      return getFallbackChoiceValue(selected)
    }

    // CHECKBOX: named groups map to array values; standalone checkbox maps to value/boolean.
    if (control.type === 'checkbox') {
      if (control.name) {
        const values = readCheckboxGroup(control)
        return values.length ? values : null
      }

      if (!control.checked) return null
      // If no explicit text/value is available, keep checked state as true.
      const normalized = getFallbackChoiceValue(control)
      return normalized ?? true
    }

    // DEFAULT INPUTS: normalize plain input values.
    return normalizeString(control.value)
  }

  /**
   * Collects all currently active values from the filter UI.
   *
   * Radio and checkbox groups are processed once per unique name to avoid duplicates.
   *
   * @returns Key-value map of active filter fields.
   */
  function collectValues(): Record<string, FilterFieldValue> {
    const values: Record<string, FilterFieldValue> = {}
    const controls = getControls()
    const radioHandled = new Set<string>()
    const checkboxHandled = new Set<string>()

    controls.forEach((control, index) => {
      // Grouped radios should produce a single value entry.
      if (control instanceof HTMLInputElement && control.type === 'radio' && control.name) {
        if (radioHandled.has(control.name)) return
        radioHandled.add(control.name)
      }

      // Grouped checkboxes should produce a single array entry.
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

  /**
   * Computes aggregate metrics for currently selected values.
   *
   * @param values Applied filter values.
   * @returns Count metadata used by summary formatters and badges.
   */
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

  /**
   * Builds a human-readable summary based on actual controls and selected options.
   *
   * @param controls Controls currently rendered in the filter body.
   * @returns Comma-separated summary string.
   */
  function buildSummaryFromControls(controls: FilterControl[]): string {
    // Collected parts are joined into a compact label shown on the filter trigger.
    const summaryParts: string[] = []
    // Track processed named groups so each radio/checkbox group contributes once.
    const radioHandled = new Set<string>()
    const checkboxHandled = new Set<string>()

    controls.forEach((control) => {
      // SELECT: for multi-selects show count, for single select show selected option text/value.
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

      // TEXTAREA: include non-empty free text directly.
      if (control instanceof HTMLTextAreaElement) {
        const value = normalizeString(control.value)
        if (value) {
          summaryParts.push(value)
        }
        return
      }

      // RADIO: use selected item's display text; named groups are evaluated once.
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

      // CHECKBOX: unnamed checkbox adds its own label, named group adds selected count.
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

      // DATE: format raw ISO-like input into app-friendly localized output.
      if (control.type === 'date') {
        const value = normalizeString(control.value)
        if (value) {
          // Date values are formatted for display consistency with the app locale.
          summaryParts.push(formatDate(value))
        }
        return
      }

      // DEFAULT INPUTS: include any remaining normalized non-empty value.
      const value = normalizeString(control.value)
      if (value) {
        summaryParts.push(value)
      }
    })

    // Final trigger text uses comma-separated segments.
    return summaryParts.join(', ')
  }

  /**
   * Produces summary text with support for consumer-provided formatting.
   *
   * @param values Current active values.
   * @param controls Controls used for default summary generation.
   * @returns Final summary string shown in the filter trigger.
   */
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

  /**
   * Creates the full applied-state payload consumed by the shared filter context.
   *
   * @param values Active values map.
   * @param controls Controls used to build summary text.
   * @returns Applied state object or null when nothing is selected.
   */
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

  /**
   * Clears a single control and emits the appropriate input/change event.
   *
   * @param control Control to reset.
   */
  function clearControl(control: FilterControl) {
    // SELECT: reset either through TomSelect API or native select state.
    if (control instanceof HTMLSelectElement) {
      const tomSelect = tomSelectInstances.get(control)

      if (tomSelect) {
        // Keep TomSelect internal state and native select state in sync.
        tomSelect.clear()
        return
      }

      if (control.multiple) {
        // Multi-select: unselect every option.
        Array.from(control.options).forEach((option) => {
          option.selected = false
        })
      } else {
        // Single-select: move back to first option (usually placeholder/default).
        control.selectedIndex = 0
      }

      // Notify listeners that selection changed.
      control.dispatchEvent(new Event('change', { bubbles: true }))
      return
    }

    // TEXTAREA: clear text and emit input so bindings react immediately.
    if (control instanceof HTMLTextAreaElement) {
      control.value = ''
      control.dispatchEvent(new Event('input', { bubbles: true }))
      return
    }

    // CHOICE INPUTS: uncheck and emit change for radio/checkbox controls.
    if (control.type === 'radio' || control.type === 'checkbox') {
      control.checked = false
      control.dispatchEvent(new Event('change', { bubbles: true }))
      return
    }

    // DEFAULT INPUTS: clear value and emit input event.
    control.value = ''
    control.dispatchEvent(new Event('input', { bubbles: true }))
  }

  /**
   * Resets all controls and clears local applied state without notifying parent context.
   */
  function resetInternally() {
    const controls = getControls()
    controls.forEach(clearControl)
    appliedState.value = null
  }

  /**
   * Applies current filter values, publishes them to context, and closes the dropdown.
   */
  function onApply() {
    const controls = getControls()
    const values = collectValues()
    const nextState = buildAppliedState(values, controls)

    appliedState.value = nextState
    filterContext?.commitItem(filterItemId, nextState, 'apply')
    closeDropdown()
  }

  /**
   * Clears filter values, publishes reset to context, and closes the dropdown.
   */
  function onClear() {
    resetInternally()
    filterContext?.commitItem(filterItemId, null, 'clear')
    closeDropdown()
  }

  /**
   * Initializes TomSelect instances for all multi-select controls in this filter item.
   */
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

  /**
   * Destroys all TomSelect instances created by this component.
   */
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
    <!-- ! data-bs-auto-close="outside" - https://getbootstrap.com/docs/5.3/components/dropdowns/#auto-close-behavior -->
    <button ref="filterToggleRef" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" draggable="false" type="button">
      <!-- [+] icon -->
      <span v-if="!hasAppliedValue">
        <svg title="Přidat filtr" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus text-muted">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </span>
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
      <!-- Title -->
      <span class="text-muted">{{ props.title }}</span>
      <!-- Label to show active value(s) -->
      <span v-if="hasAppliedValue" class="border-start ms-2 px-2">{{ displayValue }}</span>
    </button>
    <!-- TODO: Replace Bootstrap dropdown with a proper popover -->
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