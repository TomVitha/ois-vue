<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavbarVertical from './components/NavbarVertical.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>

  <NavbarVertical />
  <Navbar />

  <div class="page-wrapper">
    <RouterView />
    <Footer />
  </div>

</template>

<style scoped>

</style>
