<script setup lang="ts">
  defineProps<{
    title: string
    filesize?: string
    dateAdded?: string
    dateValid?: string
    fileUrl?: string
  }>()

</script>

<template>
  <div class="list-group-item">
    <div class="row align-items-center">
      <div class="col">
        {{ title }}
        <span v-if="filesize" class="text-secondary">({{ filesize }})</span>
      </div>
      <div v-if="dateAdded" class="col-auto col-md-2 text-end text-md-start d-none d-md-block">
        <!-- <div class="text-secondary">Přidáno</div> -->
        <div>{{ dateAdded }}</div>
      </div>
      <!-- * Actions: Open, Download -->
      <div class="col-auto text-end d-print-none">
        <div class="dropdown">
          <button class="btn btn-icon btn-action dropdown-toggle" data-bs-toggle="dropdown" draggable="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </button>
          <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" :href="fileUrl" target="_blank">Otevřít</a>
            <a class="dropdown-item" :href="fileUrl" download>Stáhnout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>