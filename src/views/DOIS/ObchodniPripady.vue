<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import Empty from '@/components/Empty.vue'
  import { onBeforeUnmount, onMounted, ref } from 'vue'
</script>

<template>

  <PageTemplate title="Obchodní případy">

    <template #toolbar>
      <div class="row align-items-center gy-2">
        <div class="col-lg-auto">
          <div class="form-floating">
            <input class="form-control" type="text">
            <label>Č. smlouvy / Název partnera</label>
          </div>
        </div>
        <div class="col-lg-auto">
          <label class="form-check my-0">
            <input class="form-check-input" type="checkbox">
            <span class="form-check-label">Zobrazit neaktivní</span>
          </label>
        </div>
        <div class="col-auto ms-auto">
          <div class="btn-list">
            <button type="button" class="btn btn-sm btn-outline-success text-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              Filtrovat
            </button>
            <button type="button" class="btn-link text-body text-nowrap">
              Zrušit filtry
            </button>
          </div>
        </div>
      </div>
    </template>

    <div class="row row-deck row-cards">

      <!-- * Empty state - Zobrazí se pokud nejsou žádné platby -->
      <!-- <div class="col-12">
        <div class="card">
          <Empty title="Nic" subtitle="Zatím tu nic není." />
        </div>
      </div> -->

      <div class="col-12">
        <div class="card">
          <div class="table-responsive">
            <table class="table table-vcenter table-selectable table-nowrap card-table">
              <thead>
                <tr>
                  <th class="w-1">Obchodní případ</th>
                  <th>Klient</th>
                  <th>Název</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <!-- TODO: Router params ?? -->
                    <RouterLink to="/dois/obchodni-pripad" class="text-reset">B152010372</RouterLink>
                  </td>
                  <td>Osoba</td>
                  <td>Veselý Pavel a Martina</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>

  </PageTemplate>

</template>

<style scoped></style>