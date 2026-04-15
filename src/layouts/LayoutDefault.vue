<script setup lang="ts">
import NavbarVertical from '../components/Nav/NavbarVertical.vue'
import Navbar from '../components/Nav/Navbar.vue'

import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
const isDesktop = matchesMediaQuery('(min-width: 992px)')

// Experiment: Mobilní nav - nejspíše nevyužijeme
// import MobileNav from '../components/MobileNav.vue'
</script>

<template>
  <NavbarVertical />
  <Navbar v-if="isDesktop" />
  <div class="page-wrapper">
    <slot />
    <!-- <MobileNav /> -->
  </div>
</template>