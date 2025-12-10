<script setup lang="ts">
  import { ref, computed } from 'vue'
  const props = defineProps<{
    title: string
    filesize?: string
    dateAdded?: string
    dateValid?: string
  }>()

</script>

<template>
  <div class="list-group-item">
    <div class="row align-items-center">
      <div class="col">
        {{ title }}
        <span class="text-secondary">({{ filesize }})</span>
      </div>
      <div v-if="dateAdded" class="col-auto col-md-2 text-end text-md-start d-none d-md-block">
        <div class="text-secondary">Přidáno</div>
        <div>{{ dateAdded }}</div>
      </div>
      <!-- Hamburger - Open, Download -->
      <div class="col-auto text-end d-print-none">
        <!-- FIXME: Opening dropdown causes page to scroll -->
        <div class="dropdown">
          <button class="btn btn-icon btn-action dropdown-toggle" data-bs-toggle="dropdown" draggable="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </button>
          <!-- DEV Preview invoice -->
          <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="sample-invoice.pdf" target="_blank">Otevřít</a>
            <a class="dropdown-item" href="sample-invoice.pdf" download>Stáhnout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>