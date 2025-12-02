<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import DocumentItem from '@/components/DocumentItem.vue';
</script>

<template>

  <PageTemplate title="Dokumenty">
    <div class="row row-deck row-cards">

      <div class="col-12 mt-3">
        <h3 class="mb-0">Nedůležité</h3>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="list-group list-group-flush">
            <DocumentItem title="Informace o postupu předávacího řízení (SBKS nedokončená).pdf" filesize="14 kB" dateAdded="3.2.2025" dateValid="4.2.2025" />
            <DocumentItem title="Klientské administrativní poplatky pro BD.pdf" filesize="9 kB" dateAdded="11.9.2024" />
          </div>
        </div>
      </div>

      <div class="col-12 mt-3">
        <h3 class="mb-0">Důležité</h3>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="list-group list-group-flush">
            <DocumentItem title="Oznámení o demolici rodinného domu.pdf" filesize="1 kB" dateAdded="31.7.2025" />
          </div>
        </div>
      </div>

    </div>
  </PageTemplate>
</template>

<style scoped></style>