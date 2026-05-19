<script setup lang="ts">
  type StatusCode = 0 | 1 | 2 | 3

  const props = defineProps<{
    // * Stav dokumentu (Nové, Přijato, Odmítnuto)
    status: StatusCode
    // * Název dokumentu
    name: string
    // * Datum a čas vytvoření dokumentu
    // createdDate: string
  }>()

  // * Mapování stavů na text a barvu
  const statusMap: Record<StatusCode, { text: string; colorClass: string }> = {
    0: { text: 'Neznámé', colorClass: 'status-secondary' },
    1: { text: 'Nové', colorClass: 'status-info' },
    2: { text: 'Přijato', colorClass: 'status-success' },
    3: { text: 'Odmítnuto', colorClass: 'status-danger' },
  }
</script>

<template>
  <div class="list-group-item">
    <div class="row align-items-center">
      <div class="col-1">
        <!-- badge -->
        <span :class="['status', statusMap[props.status].colorClass]">
          {{ statusMap[props.status].text }}
        </span>
      </div>
      <div class="col-4">
        <RouterLink to="#" class="text-reset">{{ props.name }}</RouterLink>
      </div>
      <div class="col">
        <div>11.05.2026 14:38</div>
      </div>
      <!-- TODO: Zpřístupnit Potvrdit a Odmítnout pouze pokud je dokument od dodavatele !! -->
      <div class="col-auto">
        <div class="btn-actions">
          <!-- * Přijmout -->
          <button class="btn btn-action" data-bs-toggle="tooltip" title="Přijmout">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
          </button>
          <!-- * Odmítnout -->
          <button class="btn btn-action" data-bs-toggle="tooltip" title="Odmítnout">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
          <!-- * Přidat komentář -->
          <button class="btn btn-action" data-bs-toggle="tooltip" title="Přidat komentář">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>