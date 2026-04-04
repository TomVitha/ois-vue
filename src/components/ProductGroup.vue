<script setup lang="ts">
  // ? Maybe - collapsable: Boolean - toggles .pe-none class?
</script>

<template>
  <div class="accordion accordion-flush w-100">
    <slot />
  </div>
</template>

<style scoped>
  .accordion {
    --tblr-accordion-padding-x: 0;
  }

  /* :deep() allows for styling child components */
  :deep(.accordion-item + .accordion-item) {
    margin-top: var(--tblr-gutter-y, var(--tblr-page-padding, var(--tblr-spacer-3)));
  }
</style>