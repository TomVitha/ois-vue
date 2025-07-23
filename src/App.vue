<!-- <script setup lang="ts">
/// both registered globally, don't need to be imported
// import { RouterLink, RouterView } from 'vue-router'
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

</style> -->

<script setup lang="ts">
import { RouterView } from 'vue-router'
import LayoutDefault from './layouts/LayoutDefault.vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
themeStore.initTheme() // Initialize theme on mount

</script>

<template>
  <!-- https://itnext.io/3-ways-to-create-a-multiple-layouts-system-vue-3-b24c0736b7bb#57b2 -->
  <!-- Dynamic component - According to current view's layout (specified in router) -->
  <!-- Component = Page template (with headers, navbars, footers) -->
  <component :is="$route.meta.layout || LayoutDefault">
    <!-- RouterViews is passed to components's <slot> -->
    <RouterView />
  </component>
</template>

