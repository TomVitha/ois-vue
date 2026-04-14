<script lang="ts">
  import type { RequestTemplateDefinition } from '@/requests/types'

  export const requestTemplateMeta: RequestTemplateDefinition = {
    id: 1,
    name: 'generic-request',
    title: 'Obecná žádost',
    description: 'Použijte, když žádná z předvolených možností neodpovídá tomu, co potřebujete.',
    category: 'Obecné',
    availableForPropertyIds: ['192-03-147', '192-666-999', '194-RD-007'],
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
        placeholder="">
    </div>

    <div class="col-12">
      <label class="form-label required" for="generic-request-message">Detaily</label>
      <textarea
        id="generic-request-message"
        v-model="message"
        class="form-control"
        rows="5"
        required
        placeholder=""></textarea>
    </div>
  </div>

  <!-- TODO: Attach files (drag and drop) -->
</template>

<style scoped></style>
