<script lang="ts">
  // import type { RequestTemplateDefinition } from '@/requests/types'

  // import Alert from '@/components/Alert.vue'

  // export const requestTemplateMeta: RequestTemplateDefinition = {
  //   id: 3,
  //   name: 'update-contact-information',
  //   title: 'Změna osobních údajů',
  //   description: 'Nahlaste změny vašich kontaktních údajů.',
  //   category: 'Osobní údaje',
  //   availableForPropertyIds: ['192-03-147', '194-RD-007'],
  // }

  // import { ref } from 'vue'
  // import type { RequestFormExpose } from '@/requests/forms/types'

  // // ! Placeholder values
  // const fullName = ref('Jan Novák')
  // const address = ref('Praha 1, Česká republika')
  // const email = ref('jan.novak@seznam.cz')
  // const phone = ref('+420 123 456 789')

  // function validate() {
  //   return (
  //     fullName.value.trim().length > 0 &&
  //     address.value.trim().length > 0 &&
  //     email.value.trim().length > 0 &&
  //     phone.value.trim().length > 0
  //   )
  // }

  // function getValues() {
  //   return {
  //     fullName: fullName.value,
  //     address: address.value,
  //     email: email.value,
  //     phone: phone.value,
  //   }
  // }

  // defineExpose<RequestFormExpose>({
  //   getValues,
  //   validate,
  // })
</script>

<template>
  <!-- <div class="space-y">

    <div>
      <label class="form-label required" for="update-contact-full-name">Smluvní strana (partner)</label>
      <input
        id="update-contact-full-name"
        v-model="fullName"
        class="form-control"
        type="text"
        autocomplete="name"
        required
        disabled>
      <small class="form-hint">Tato položka je pouze informativní a nelze ji samostatně změnit. Pro změnu kupujících využijte žádost Změna klienta ve smlouvě.</small>
    </div>

    <Alert
      type="warning">
      Změna telefonního čísla pro podepisování dokumentů je možná pouze písemně. Po odeslání žádosti připravíme dokument k podpisu (lze podepsat přes platformu SOFA). Dokument bude zaslán na stávající telefonní číslo, dokud nebude změna potvrzena.
    </Alert>

    <div>
      <label class="form-label required" for="update-contact-phone">Telefon</label>
      <input
        id="update-contact-phone"
        v-model="phone"
        class="form-control"
        type="tel"
        autocomplete="tel"
        required>
      <small class="form-hint">Používá se pro podepisování elektronických dokumentů (SOFA)</small>
    </div>

    <div>
      <label class="form-label required" for="update-contact-email">Email</label>
      <input
        id="update-contact-email"
        v-model="email"
        class="form-control"
        type="email"
        autocomplete="email"
        required>
    </div>

    <div>
      <label class="form-label required" for="update-contact-address">Adresa trvalého bydliště</label>
      <input
        id="update-contact-address"
        v-model="address"
        class="form-control"
        type="text"
        autocomplete="street-address"
        required>
    </div>

  </div> -->
</template>

<style scoped></style>