<script setup lang="ts">
import NavbarVertical from '../components/Nav/NavbarVertical.vue'
import Navbar from '../components/Nav/Navbar.vue'
// import MobileNav from '../components/MobileNav.vue'
</script>

<template>
  <NavbarVertical />
  <Navbar />
  <div class="page-wrapper">
    <slot />
    <!-- <MobileNav /> -->
  </div>
</template>