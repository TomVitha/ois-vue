<script setup lang="ts">
  import { onMounted } from 'vue';
  import TomSelect from 'tom-select'

  // Initialize multiple Tom-selects
  const tomSelectSelectors = ['#order-input-new-item-name'] as const
  const tomSelectOptions = {
    allowEmptyOption: false,
    plugins: ['dropdown_input'],
  }

  onMounted(() => {
    tomSelectSelectors.forEach((selector) => {
      const element = document.querySelector(selector)

      if (element) {
        new TomSelect(selector, tomSelectOptions)
      }
    })
  })
</script>

<template>
  <div class="modal" id="order-add-item-modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Přidat položku</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-12">
              <label class="form-label required" for="order-input-new-item-name">Název položky</label>
              <select class="form-select" autocomplete="off" id="order-input-new-item-name" required>
                <option selected disabled>vyberte</option>
                <option value="1">Možnost 1</option>
                <option value="2">Možnost 2</option>
                <option value="3">Možnost 3</option>
                <option value="4">Možnost 4</option>
                <option value="5">Možnost 5</option>
              </select>
            </div>
            <div class="col-12">
              <label class="form-label" for="order-input-new-item-date-completion">Termín splnění</label>
              <div class="input-icon">
                <span class="input-icon-addon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                    <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                    <path d="M16 3v4"></path>
                    <path d="M8 3v4"></path>
                    <path d="M4 11h16"></path>
                    <path d="M11 15h1"></path>
                    <path d="M12 15v3"></path>
                  </svg>
                </span>
                <input type="date" class="form-control" id="order-input-new-item-date-completion">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">Zrušit</button>
          <button type="button" class="btn btn-primary">Přidat</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>