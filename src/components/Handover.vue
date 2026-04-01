<script setup lang="ts">

</script>

<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Postup předání</h3>
    </div>
    <div class="card-body">
      <div class="space-y">
        <!-- TODO: Přidat splatnosti faktur (platby k zaplacení) -->
        <!-- ? Ke klientským termínům přidat odkaz na Žádosti a změny, ať si může provést změny -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>