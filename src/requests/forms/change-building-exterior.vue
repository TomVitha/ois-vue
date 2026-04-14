<script lang="ts">
  import type { RequestTemplateDefinition } from '@/requests/types'

  export const requestTemplateMeta: RequestTemplateDefinition = {
    id: 2,
    name: 'change-building-exterior',
    title: 'Změna vnějšího vzhledu budovy',
    description: 'Nahlaste změny vzhledu budovy.',
    category: 'Klientské změny',
    availableForPropertyIds: ['192-03-147'],
  }
</script>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { RequestFormExpose } from '@/requests/forms/types'

  const type = ref('')
  const description = ref('')
  const location = ref('')

  function validate() {
    return (
      type.value.trim().length > 0 &&
      description.value.trim().length > 0 &&
      location.value.trim().length > 0
    )
  }

  function getValues() {
    return {
      type: type.value,
      description: description.value,
      location: location.value,
    }
  }

  defineExpose<RequestFormExpose>({
    getValues,
    validate,
  })
</script>

<template>
  <div class="space-y">

    <div class="mb-3">
      <label class="form-label">Typ úpravy</label>
      <div class="form-selectgroup form-selectgroup-boxes w-100">
        <div class="row g-3 flex-fill">
          <div class="col-6 col-md-4">
            <label class="form-selectgroup-item m-0 flex-fill">
              <input v-model="type" type="radio" name="type" value="dodatecna-montaz-klimatizace" class="form-selectgroup-input">
              <div class="form-selectgroup-label d-flex align-items-center flex-column text-center">
                <div class="fs-1 lh-1 mb-2">❄️</div>
                <div>Dodatečná montáž klimatizace</div>
              </div>
            </label>
          </div>
          <div class="col-6 col-md-4">
            <label class="form-selectgroup-item m-0 flex-fill">
              <input v-model="type" type="radio" name="type" value="predoknenní-stineni" class="form-selectgroup-input">
              <div class="form-selectgroup-label d-flex align-items-center flex-column text-center">
                <div class="fs-1 lh-1 mb-2">🪟</div>
                <div>Předokenní stínění</div>
              </div>
            </label>
          </div>
          <div class="col-6 col-md-4">
            <label class="form-selectgroup-item m-0 flex-fill">
              <input v-model="type" type="radio" name="type" value="pergola" class="form-selectgroup-input">
              <div class="form-selectgroup-label d-flex align-items-center flex-column text-center">
                <div class="fs-1 lh-1 mb-2">🏡</div>
                <div>Pergola</div>
              </div>
            </label>
          </div>
          <div class="col-6 col-md-4">
            <label class="form-selectgroup-item m-0 flex-fill">
              <input v-model="type" type="radio" name="type" value="markyza" class="form-selectgroup-input">
              <div class="form-selectgroup-label d-flex align-items-center flex-column text-center">
                <div class="fs-1 lh-1 mb-2">☂️</div>
                <div>Markýza</div>
              </div>
            </label>
          </div>
          <div class="col-6 col-md-4">
            <label class="form-selectgroup-item m-0 flex-fill">
              <input v-model="type" type="radio" name="type" value="jine" class="form-selectgroup-input">
              <div class="form-selectgroup-label d-flex align-items-center flex-column text-center">
                <div class="fs-1 lh-1 mb-2">🔧</div>
                <div>Jiné</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div>
      <label for="" class="form-label">Popis plánovaného řešení</label>
      <textarea
        id="desc"
        v-model="description"
        placeholder="Detailně popište plánovanou úpravu — typ, materiál, rozměry, barva..."
        class="form-control"
        required></textarea>
    </div>

    <div>
      <label for="" class="form-label">Plánované umístění</label>
      <textarea
        id="location"
        v-model="location"
        placeholder="Popište přesné umístění na budově..."
        class="form-control"
        required></textarea>
    </div>

  </div>
</template>

<style scoped></style>