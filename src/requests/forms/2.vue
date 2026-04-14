<script lang="ts">
  import type { RequestTemplateDefinition } from '@/requests/types'

  export const requestTemplateMeta: RequestTemplateDefinition = {
    id: 2,
      name: 'update-contact-information',
      title: 'Změna osobních údajů',
      description: 'Nahlaste změny vašich kontaktních údajů.',
      category: 'Osobní údaje',
      availableForPropertyIds: ['192-03-147', '194-RD-007'],
  }
</script>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { RequestFormExpose } from '@/requests/forms/types'

  import Alert from '@/components/Alert.vue'

  const subject = ref('')
  const message = ref('')

  function validate() {
    return subject.value.trim().length > 0 && message.value.trim().length > 0
  }

  function getValues() {
    return {
      subject: subject.value,
      message: message.value,
    }
  }

  defineExpose<RequestFormExpose>({
    getValues,
    validate,
  })
</script>

<template>
  <div class="row g-3">
    <div class="col-12">
      <label class="form-label required" for="generic-request-subject">Předmět žádosti</label>
      <input
        id="generic-request-subject"
        v-model="subject"
        class="form-control"
        type="text"
        required
        placeholder="Zde vypište, které údaje chcete změnit (např. e-mail, telefon, adresa).">
    </div>

    <div class="col-12">
      <label class="form-label required" for="generic-request-message">Detaily</label>
      <textarea
        id="generic-request-message"
        v-model="message"
        class="form-control"
        rows="5"
        required
        placeholder="Zde podrobně popište, jaké změny chcete provést. Uveďte jak starou, tak novou hodnotu údaje."></textarea>
    </div>
  </div>

  <!-- TODO: Attach files (drag and drop) -->
</template>

<style scoped></style>
