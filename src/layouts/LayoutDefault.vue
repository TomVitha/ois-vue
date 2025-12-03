<script setup lang="ts">
import NavbarVertical from '../components/Nav/NavbarVertical.vue'
import Navbar from '../components/Nav/Navbar.vue'
</script>

<template>
  <NavbarVertical />
  <Navbar />
  <div class="page-wrapper">
    <slot />
  </div>
</template>