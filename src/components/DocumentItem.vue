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
  <div class="card">
    <div class="card-body">
      <div class="row align-items-center">
        <div class="col">
          {{ title }}
          <span class="text-secondary">({{ filesize }})</span>
        </div>
        <div v-if="dateValid" class="col-auto col-md-2 text-end text-md-start d-none d-md-block">
          <div class="text-secondary">Platnost od</div>
          <div>{{ dateValid }}</div>
        </div>
        <div v-if="dateAdded" class="col-auto col-md-2 text-end text-md-start d-none d-md-block">
          <div class="text-secondary">Přidáno</div>
          <div>{{ dateAdded }}</div>
        </div>
        <!-- Hamburger - Open, Download -->
        <div class="col-auto text-end d-print-none">
          <!-- FIXME: Opening dropdown causes page to scroll -->
          <div class="dropdown">
            <a href="#" class="btn btn-icon btn-action dropdown-toggle" data-bs-toggle="dropdown" draggable="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </a>
            <!-- TEMP Preview invoice -->
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="sample-invoice.pdf">Otevřít</a>
              <a class="dropdown-item" href="sample-invoice.pdf" download>Stáhnout</a>
            </div>
          </div>
        </div>
        <!-- Download Icon -->
        <!-- <div class="col-auto col-md-1 text-end d-print-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-download">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
            <path d="M7 11l5 5l5 -5"></path>
            <path d="M12 4l0 12"></path>
          </svg>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>