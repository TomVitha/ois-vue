<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'

  import ContactBlock from '@/components/ContactBlock.vue'
</script>

<template>
  <PageTemplate title="Kontakty">
    <div class="row row-cards row-deck">
      <div class="col-md-6">
        <ContactBlock 
          name="Ing. Alois Vyleta" 
          position="Vedoucí skupiny prodeje" 
          phone="+420 770 317 230" 
          email="alois.vyleta@central-group.cz"
          imgURL="/contacts/alois-vyleta-photo.jpeg"
        />
      </div>
      <div class="col-md-6">
        <ContactBlock 
          name="Ing. Vladimír Srnec" 
          position="Vedoucí úseku klientského centra" 
          phone="+420 721 826 644" 
          email="	vladimir.srnec@central-group.cz"
          imgURL="./public/contacts/vladimir-srnec-photo.jpeg"
        />
      </div>
      <div class="col-md-6">
        <ContactBlock 
          name="Ing. Vladimír Srnec" 
          position="Vedoucí úseku klientského centra" 
          phone="+420 721 826 644" 
          email="	vladimir.srnec@central-group.cz"
          imgURL="/public/contacts/vladimir-srnec-photo.jpeg"
        />
      </div>
    </div>
  </PageTemplate>
</template>

<style scoped></style>