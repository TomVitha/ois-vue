<script setup lang="ts">
  import NavbarNav from '@/components/NavbarNav.vue'
</script>

<template>
  <header class="navbar navbar-expand-lg d-print-none d-none d-lg-flex">
    <div class="container-xl">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div><!-- Empty div for layout purposes --></div>

      <NavbarNav />

    </div>
  </header>
</template>

<style scoped></style>