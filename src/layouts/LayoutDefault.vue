<script setup lang="ts">
import NavbarVertical from '../components/NavbarVertical.vue'
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <NavbarVertical />
  <Navbar />
  <div class="page-wrapper">
    <slot />
  </div>
</template>