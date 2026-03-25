<script lang="ts">
import type { RequestTemplateDefinition } from '@/requests/types'

export const requestTemplateMeta: RequestTemplateDefinition = {
  id: 'update-contact-information',
  name: 'Změna osobních údajů',
  description: 'Nahlaste změny vašich kontaktních údajů.',
  category: 'Osobní údaje',
  availableForPropertyIds: ['192-03-147', '194-RD-007'],
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import type { RequestFormExpose } from '@/requests/forms/types'

const fullName = ref('')
const address = ref('')
const email = ref('')
const phone = ref('')

function validate() {
  return (
    fullName.value.trim().length > 0 &&
    address.value.trim().length > 0 &&
    email.value.trim().length > 0 &&
    phone.value.trim().length > 0
  )
}

function getValues() {
  return {
    fullName: fullName.value,
    address: address.value,
    email: email.value,
    phone: phone.value,
  }
}

defineExpose<RequestFormExpose>({
  getValues,
  validate,
})
</script>

<template>
  <div class="row g-3">
    <div class="col-12 col-md-6">
      <label class="form-label required" for="update-contact-full-name">Jméno a příjmení</label>
      <input
        id="update-contact-full-name"
        v-model="fullName"
        class="form-control"
        type="text"
        autocomplete="name"
        required
      >
    </div>

    <div class="col-12 col-md-6">
      <label class="form-label required" for="update-contact-address">Adresa</label>
      <input
        id="update-contact-address"
        v-model="address"
        class="form-control"
        type="text"
        autocomplete="street-address"
        required
      >
    </div>

    <div class="col-12 col-md-6">
      <label class="form-label required" for="update-contact-email">Email</label>
      <input
        id="update-contact-email"
        v-model="email"
        class="form-control"
        type="email"
        autocomplete="email"
        required
      >
    </div>

    <div class="col-12 col-md-6">
      <label class="form-label required" for="update-contact-phone">Telefon</label>
      <input
        id="update-contact-phone"
        v-model="phone"
        class="form-control"
        type="tel"
        autocomplete="tel"
        required
      >
    </div>
  </div>
</template>

<style scoped></style>
