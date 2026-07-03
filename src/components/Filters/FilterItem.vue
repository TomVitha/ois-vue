<script setup lang="ts">
  import { computed, ref, useTemplateRef } from 'vue';
  import TomSelect from 'tom-select'

  const props = withDefaults(defineProps<{
    title: string
  }>(), {

  })

  // const tomSelectSelectors = ['#filter-item', '#order-input-supplier'] as const
  // const tomSelectOptions = {
  //   allowEmptyOption: false,
  //   plugins: ['dropdown_input'],
  // }

  // onMounted(() => {
  //   tomSelectSelectors.forEach((selector) => {
  //     const element = document.querySelector(selector)

  //     if (element) {
  //       new TomSelect(selector, tomSelectOptions)
  //     }
  //   })
  // })

  const filterInputRef = useTemplateRef<HTMLSelectElement>('filterSelectRef')
  const filterToggleRef = useTemplateRef<HTMLAnchorElement>('filterToggleRef')
  const activeValue = ref('')

  function closeDropdown() {
    if (!filterToggleRef.value) return

    const isOpen = filterToggleRef.value.classList.contains('show')
    if (isOpen) {
      filterToggleRef.value.click()
    }
  }

  function onApply() {
    const selectedValue = filterInputRef.value?.value ?? null

    if (!selectedValue) {
      console.warn('No option selected.')
      revertFilterValue()
      closeDropdown()
      return
    }

    applyFilterValue(selectedValue)
    console.debug(`Applied filter '${props.title}', value: ${selectedValue}`)

    closeDropdown()
  }

  function applyFilterValue(newValue: any) {
    activeValue.value = newValue
  }

  function revertFilterValue() {
    if (!filterInputRef.value) return

    // Reset to initial placeholder option.
    filterInputRef.value.selectedIndex = 0
    activeValue.value = ''
  }

  function onRevertClick() {
    revertFilterValue()
    closeDropdown()
  }

  const displayValue = computed(() => {
    const rawValue = activeValue.value
    if (!rawValue) return ''

    const selectEl = filterInputRef.value
    if (!selectEl) return rawValue

    const matchedOption = Array.from(selectEl.options).find((option) => option.value === rawValue)
    const label = matchedOption?.text?.trim()

    return label || rawValue
  })

</script>

<template>
  <div class="filter">
    <!-- !!! data-bs-auto-close="outside" -->
    <!-- !! https://getbootstrap.com/docs/5.3/components/dropdowns/#auto-close-behavior -->
    <button ref="filterToggleRef" href="#" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" draggable="false">
      <!-- [x] Revert button -->
      <span
        v-if="activeValue"
        title="Zrušit filtr"
        role="button"
        tabindex="-1"
        @click.stop.prevent="onRevertClick">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </span>
      <!-- [+] icon -->
      <svg title="Přidat filtr" v-if="!activeValue" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M5 12l14 0" />
      </svg>
      <!-- Title -->
      <span class="text-muted">{{ props.title }}</span>
      <!-- Active value -->
      <span v-if="activeValue" class="border-start ms-2 px-2">{{ displayValue }}</span>
    </button>
    <div class="dropdown-menu dropdown-menu-card filter-content">
      <div class="card">
        <div class="card-body">
          <div class="divide-y-2">
            <div>
              <div class="strong mb-2">{{ props.title }}</div>
              <select ref="filterSelectRef" class="form-select" aria-label="Default select example">
                <option selected hidden disabled></option>
                <option value="one-time">Jednorázové</option>
                <option value="recurring">Pravidelné</option>
              </select>
            </div>
            <div class="btn-list">
              <button class="btn btn-primary w-100 btn-sm" @click.prevent="onApply">Apply</button>
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