<script setup lang="ts">
  import { ref, computed } from 'vue'
  const props = defineProps<{
    title: string
    file: string
    // dateAdded?: string
  }>()

</script>

<template>
  <RouterLink to="/komunikace?m=msg-2" class="list-group-item d-flex align-items-center card-link">
    <div class="row align-items-center flex-fill">
      <div class="col">
        <div>{{ title }}</div>
        <div class="text-secondary">{{ file }}</div>
      </div>
      <!-- <div v-if="dateAdded" class="col-auto col-md-2 text-end text-md-start d-none d-md-block">
        <div class="text-secondary">Přidáno</div>
        <div>{{ dateAdded }}</div>
      </div> -->
      <div class="col-auto text-end d-print-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped></style>