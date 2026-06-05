<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import PageTemplate from '@/components/PageTemplate.vue'


  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  const isWideScreen = matchesMediaQuery('(min-width: 1600px)')
  const isFluidLayout = ref(false)

  // Toggle fluid layout
  watch(isFluidLayout, (newValue) => {
    (document.querySelector('.page-body') as HTMLElement).classList.toggle('layout-fluid', newValue)
  })

</script>

<template>
  <PageTemplate title="Objednávky ÚVD">



    <!-- Je tenhle filtr zločin proti lidskosti? Ano. Ale, takhle to chtěli, tak to tak mají. -->
    <template #toolbar>

      <div class="row align-items-center gy-2">

        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="text">
            <label>Interní číslo objednávky</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="text">
            <label>Katalogové číslo</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="text">
            <label>Bytový dům</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="text">
            <label>Číslo SoD</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="date">
            <label>Datum podpisu SoD</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <select class="form-select" autocomplete="off">
              <option selected>všichni</option>
              <option value="1">Možnost 1</option>
              <option value="2">Možnost 2</option>
              <option value="3">Možnost 3</option>
              <option value="4">Možnost 4</option>
              <option value="5">Možnost 5</option>
            </select>
            <label>Stav objednávky</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <select class="form-select" autocomplete="off">
              <option selected>všichni</option>
              <option value="1">Možnost 1</option>
              <option value="2">Možnost 2</option>
              <option value="3">Možnost 3</option>
              <option value="4">Možnost 4</option>
              <option value="5">Možnost 5</option>
            </select>
            <label>Položka</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <select class="form-select" autocomplete="off">
              <option selected>všichni</option>
              <option value="1">Možnost 1</option>
              <option value="2">Možnost 2</option>
              <option value="3">Možnost 3</option>
              <option value="4">Možnost 4</option>
              <option value="5">Možnost 5</option>
            </select>
            <label>Dodavatel</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <select class="form-select" autocomplete="off">
              <option selected>všichni</option>
              <option value="1">Možnost 1</option>
              <option value="2">Možnost 2</option>
              <option value="3">Možnost 3</option>
              <option value="4">Možnost 4</option>
              <option value="5">Možnost 5</option>
            </select>
            <label>Technik ÚVD</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <select class="form-select" autocomplete="off">
              <option selected>všichni</option>
              <option value="1">Možnost 1</option>
              <option value="2">Možnost 2</option>
              <option value="3">Možnost 3</option>
              <option value="4">Možnost 4</option>
              <option value="5">Možnost 5</option>
            </select>
            <label>Stavební dozor</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <select class="form-select" autocomplete="off">
              <option selected>všichni</option>
              <option value="1">Možnost 1</option>
              <option value="2">Možnost 2</option>
              <option value="3">Možnost 3</option>
              <option value="4">Možnost 4</option>
              <option value="5">Možnost 5</option>
            </select>
            <label>Prodejce</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="date">
            <label>Datum akceptace objednávky</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="date">
            <label>Zahájení montáže</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="date">
            <label>Dokončení montáže</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="date">
            <label>Termín splnění dle SoD</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="date">
            <label>Připravenost stavba od</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="date">
            <label>Připravenost stavba do</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <select class="form-select" autocomplete="off">
              <option selected>všichni</option>
              <option value="1">Možnost 1</option>
              <option value="2">Možnost 2</option>
              <option value="3">Možnost 3</option>
              <option value="4">Možnost 4</option>
              <option value="5">Možnost 5</option>
            </select>
            <label>Předávací protokol montáž</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <select class="form-select" autocomplete="off">
              <option selected>všichni</option>
              <option value="1">Možnost 1</option>
              <option value="2">Možnost 2</option>
              <option value="3">Možnost 3</option>
              <option value="4">Možnost 4</option>
              <option value="5">Možnost 5</option>
            </select>
            <label>Předávací protokol vady</label>
          </div>
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

    <template #actions>
      <div class="btn-list">
        <div class="btn-actions">

          <button
            v-if="isWideScreen"
            @click="isFluidLayout = !isFluidLayout"
            class="btn btn-action"
            data-bs-toggle="tooltip"
            :title="!isFluidLayout ? 'Rozšířené zobrazení' : 'Normální zobrazení'">
            <svg v-if="!isFluidLayout" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-viewport-wide">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 12h-7l3 -3" />
              <path d="M6 15l-3 -3" />
              <path d="M14 12h7l-3 -3" />
              <path d="M18 15l3 -3" />
              <path d="M3 6v-1a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v1" />
              <path d="M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-1" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-viewport-narrow">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12h7l-3 -3" />
              <path d="M7 15l3 -3" />
              <path d="M21 12h-7l3 -3" />
              <path d="M17 15l-3 -3" />
              <path d="M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" />
              <path d="M9 18v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-1" />
            </svg>
          </button>
        </div>
        <!-- WIP -->
        <div class="dropdown">
          <button class="btn dropdown-toggle" data-bs-toggle="dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-download">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 11l5 5l5 -5" />
              <path d="M12 4l0 12" />
            </svg>
            Exportovat
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">XLSX</a>
            <a class="dropdown-item" href="#">CSV</a>
            <a class="dropdown-item" href="#">PDF</a>
          </div>
        </div>
        <RouterLink to="/dois/nova-objednavka" type="button" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-1">
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
          Vytvořit
        </RouterLink>
      </div>
    </template>

    <div class="row row-cards">
      <div class="col-12">
        <div class="card">
          <div class="table-responsive">
            <table class="table table-vcenter table-selectable table-nowrap card-table">
              <thead>
                <tr>
                  <th class="w-1">
                    <input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Vybrat všechny položky">
                  </th>
                  <th>Interní číslo</th>
                  <th>Číslo SoD</th>
                  <th>Stav</th>
                  <th>Technik ÚVD</th>
                  <th>Dodavatel</th>
                  <th>Připravenost stavba</th>
                  <th>Položka</th>
                  <th>Termín splnění dle SoD</th>
                  <th>Datum akceptace dodavatelem</th>
                </tr>
              </thead>
              <tbody class="table-tbody">
                <!-- WIP -->
                <tr>
                  <td><input class="form-check-input m-0 align-middle table-selectable-check" type="checkbox" aria-label="Vybrat položku"></td>
                  <!-- TEMP hard-coded link -> dynamic -->
                  <td class="sort-id">
                    <RouterLink to="/dois/objednavka/458-2025-ÚVD" class="text-reset" tabindex="-1">458-2025-ÚVD</RouterLink>
                  </td>
                  <td class="sort-receipt">192-01-086-IS-I</td>
                  <td class="sort-status" date-status="0"><span class="status status-success">Nová</span></td>
                  <td class="sort-technician">Petr Lamata</td>
                  <td class="sort-readiness">Indeco</td>
                  <td>30.01.2026</td>
                  <td class="sort-item">Skříň - chodba</td>
                  <td class="sort-completion">12.01.2026</td>
                  <td class="sort-accept">20.01.2026</td>
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