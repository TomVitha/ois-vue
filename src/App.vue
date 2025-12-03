<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import LayoutDefault from './layouts/LayoutDefault.vue'
  import { useThemeStore } from '@/stores/theme'

  const themeStore = useThemeStore()
  themeStore.initTheme() // Initialize theme on mount

</script>

<!-- Multiple layout system according to: https://itnext.io/3-ways-to-create-a-multiple-layouts-system-vue-3-b24c0736b7bb#57b2 -->
<!-- Component = The page template (with headers, navbars, footers etc.) -->
<!-- Dynamically chosen according to current view's layout, specified in router -->
<!-- Defaults to LayoutDefault if not specified -->
<template>
  <component :is="$route.meta.layout || LayoutDefault">
    <!-- RouterView is passed to components's default <slot> -->
    <RouterView />
  </component>
</template>
