<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'

  import ContactBlock from '@/components/ContactCard.vue'
</script>

<template>
  <PageTemplate title="Kontakty">
    <div class="row row-cards row-deck">

      <div class="col-12 mt-3">
        <h3 class="m-0">Kontakty pro daný byt</h3>
      </div>

      <div class="col-sm-6 col-lg-6 col-xxl-4">
        <ContactBlock
          name="Homo Sapiens"
          position="Lidský zástupce společnosti"
          phone="+420 123 456 789"
          email="homo.sapiens@central-group.cz"
          imgURL="https://files.idyllic.app/files/static/151605?width=256&optimizer=image" />
      </div>

      <div class="col-sm-6 col-lg-6 col-xxl-4">
        <ContactBlock
          name="Homo Sapiens"
          position="Lidský zástupce společnosti"
          phone="+420 123 456 789"
          email="homo.sapiens@central-group.cz"
          imgURL="https://files.idyllic.app/files/static/151603?width=256&optimizer=image" />
      </div>

      <div class="col-12 mt-3">
        <h3 class="m-0">Obecné</h3>
      </div>

      <div class="col-sm-6 col-lg-6 col-xxl-4">
        <ContactBlock
          name="Homo Sapiens"
          position="Lidský zástupce společnosti"
          phone="+420 123 456 789"
          email="homo.sapiens@central-group.cz"
          imgURL="https://files.idyllic.app/files/static/151604?width=256&optimizer=image" />
      </div>

      <div class="col-sm-6 col-lg-6 col-xxl-4">
        <ContactBlock
          name="Ing. Homo Sapiensová"
          position="Lidská zástupkyně společnosti"
          phone="+420 987 654 321"
          email="	homo.sapiensova@central-group.cz"
          imgURL="https://files.idyllic.app/files/static/152445?width=256&optimizer=image" />
      </div>

    </div>
  </PageTemplate>
</template>

<style scoped></style>