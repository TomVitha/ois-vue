<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import PageTemplate from '@/components/PageTemplate.vue'

  import OrderDetailDialog from '@/components/DOIS/OrderDetailDialog.vue'

  // Installed version (6.0.0-beta.2) doesn't bundle TypeScript type declarations  
  // @ts-expect-error
  import Dropzone from "dropzone";
  import "dropzone/dist/dropzone.css";

  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';

  onMounted(() => {
    let dzOrderAttachments = new Dropzone("#dropzone-order-attachments");
  });

  const isWideScreen = matchesMediaQuery('(min-width: 1600px)')
  const isFluidLayout = ref(false)

  // watch isFluid, add/remove class .fluid from body
  watch(isFluidLayout, (newValue) => {
    const pageBody = document.querySelector('.page-body') as HTMLElement
    if (newValue) {
      pageBody.classList.add('layout-fluid')
    } else {
      pageBody.classList.remove('layout-fluid')
    }
  })

</script>

<template>
  <PageTemplate title="Seznam objednávek">

    <template #actions>
      <div class="btn-list">
        <div class="btn-actions">
          <!-- TEMP -->
          <button
            v-if="isWideScreen"
            @click="isFluidLayout = !isFluidLayout"
            class="btn btn-action"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
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
        <RouterLink to="/todo" type="button" class="btn btn-primary">
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
          <div class="card-header">
            <div class="row w-full">
              <div class="col">
                <h3 class="card-title mb-0">Objednávky</h3>
                <p class="text-secondary m-0">Zobrazení <strong>1 až 8</strong> z <strong>16 záznamů</strong></p>
              </div>
              <div class="col-md-auto col-sm-12">
                <div class="ms-auto d-flex flex-wrap btn-list">
                  <div class="dropdown">
                    <a href="#" class="btn dropdown-toggle" data-bs-toggle="dropdown">Exportovat do</a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">XLSX</a>
                      <a class="dropdown-item" href="#">CSV</a>
                      <a class="dropdown-item" href="#">PDF</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <td class="sort-id"><RouterLink to="/dois/objednavka/458-2025-ÚVD" class="text-reset" tabindex="-1">458-2025-ÚVD</RouterLink></td>
                  <!-- ! OLD: Modal dialog -- zatím ponecháno pro referenci, poté odebrat -->
                  <td class="sort-receipt"><a href="#" class="text-reset" tabindex="-1" data-bs-toggle="modal" data-bs-target="#temp-detail-modal">192-01-086-IS-I</a></td>
                  <!-- <td class="sort-receipt">192-01-086-IS-I</td> -->
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
          <div class="card-footer">
            <div class="row g-2 justify-content-center justify-content-sm-between">
              <div class="col-auto d-flex align-items-center">
                <div class="dropdown">
                  <a class="btn dropdown-toggle" data-bs-toggle="dropdown">
                    <span id="page-count" class="me-1">20</span>
                    <span>záznamů</span>
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item">10 záznamů</a>
                    <a class="dropdown-item">20 záznamů</a>
                    <a class="dropdown-item">50 záznamů</a>
                    <a class="dropdown-item">100 záznamů</a>
                  </div>
                </div>
              </div>
              <div class="col-auto d-flex align-items-center">
                <p class="m-0 text-secondary">Zobrazení <strong>1 až 8</strong> z <strong>16 záznamů</strong></p>
              </div>
              <div class="col-auto">
                <ul class="pagination m-0 ms-auto">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                        <path d="M15 6l-6 6l6 6"></path>
                      </svg>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">4</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">5</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                        <path d="M9 6l6 6l-6 6"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TODO: Deprecate in favor of DetailObjednavky view; Left for now for reference -->
    <OrderDetailDialog />

  </PageTemplate>
</template>

<style scoped></style>