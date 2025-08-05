<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import DocumentItem from '@/components/DocumentItem.vue';
</script>

<template>

  <PageTemplate title="Dokumenty">
    <div class="row row-cards">
      <div class="col-12">
        <h3 class="m-0">Nedůležité</h3>
      </div>
      <div class="col-12">
        <DocumentItem title="Oznámení o demolici rodinného domu.pdf" filesize="1 kB" dateAdded="31.7.2025" />
      </div>
      <div class="col-12">
        <h3 class="m-0">Ostatní</h3>
      </div>
      <div class="col-12">
        <DocumentItem title="Informace o postupu předávacího řízení (SBKS nedokončená).pdf" filesize="14 kB" dateAdded="3.2.2025" dateValid="4.2.2025" />
      </div>
      <div class="col-12">
        <DocumentItem title="Klientské administrativní poplatky pro BD.pdf" filesize="9 kB" dateAdded="11.9.2024" />
      </div>
    </div>
  </PageTemplate>
</template>

<style scoped></style>