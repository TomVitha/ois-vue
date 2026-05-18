<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import Empty from '@/components/Empty.vue'
</script>

<template>

  <PageTemplate title="Obchodní případy">

    <!-- WIP -->
    <template #toolbar>
      <div class="d-flex gap-3 align-items-baseline">
        <search class="input-icon">
          <span class="input-icon-addon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M21 21l-6 -6"></path>
            </svg>
          </span>
          <input type="search" class="form-control form-control-sm" placeholder="Hledejte…">
        </search>
        <span>[zde budou filtry]</span>
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
                  <th>Jméno</th>
                  <th>Příjmení</th>
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
                  <td>Pavel</td>
                  <td>Veselý</td>
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