<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import PageTemplate from '@/components/PageTemplate.vue'

  // Installed version (6.0.0-beta.2) doesn't bundle TypeScript type declarations  
  // @ts-expect-error
  import Dropzone from "dropzone";
  import "dropzone/dist/dropzone.css";

  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';

  onMounted(() => {
    let dropzoneOrderAttachments = new Dropzone("#dropzone-order-attachments");
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
                  <th class="w-1"><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Vybrat všechny položky"></th>
                  <th><button class="table-sort d-flex justify-content-between desc" data-sort="sort-id">Interní číslo</button></th>
                  <th><button class="table-sort d-flex justify-content-between" data-sort="sort-receipt">Číslo SoD</button></th>
                  <th><button class="table-sort d-flex justify-content-between" data-sort="sort-status">Stav</button></th>
                  <th><button class="table-sort d-flex justify-content-between" data-sort="sort-technician">Technik ÚVD</button></th>
                  <th><button class="table-sort d-flex justify-content-between" data-sort="sort-supplier">Dodavatel</button></th>
                  <th><button class="table-sort d-flex justify-content-between" data-sort="sort-readiness">Připravenost stavba</button></th>
                  <th><button class="table-sort d-flex justify-content-between" data-sort="sort-item">Položka</button></th>
                  <th><button class="table-sort d-flex justify-content-between" data-sort="sort-completion">Termín splnění dle SoD</button></th>
                  <th><button class="table-sort d-flex justify-content-between" data-sort="sort-accept">Datum akceptace dodavatelem</button></th>
                </tr>
              </thead>
              <tbody class="table-tbody">
                <tr>
                  <td><input class="form-check-input m-0 align-middle table-selectable-check" type="checkbox" aria-label="Vybrat položku"></td>
                  <!-- ! OLD: Modal dialog -->
                  <!-- <td class="sort-id"><a href="#" class="text-reset" tabindex="-1" data-bs-toggle="modal" data-bs-target="#temp-detail-modal">458-2025-ÚVD</a></td> -->
                  <!-- TEMP hard-coded link -> dynamic -->
                  <td class="sort-id"><RouterLink to="/dois/objednavka/458-2025-ÚVD" class="text-reset" tabindex="-1">458-2025-ÚVD</RouterLink></td>
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
          <div class="card-footer">
            <div class="row g-2 justify-content-center justify-content-sm-between">
              <div class="col-auto d-flex align-items-center">
                <div class="dropdown">
                  <a class="btn dropdown-toggle" data-bs-toggle="dropdown">
                    <span id="page-count" class="me-1">20</span>
                    <span>záznamů</span>
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" onclick="setPageListItems(event)" data-value="10">10 záznamů</a>
                    <a class="dropdown-item" onclick="setPageListItems(event)" data-value="20">20 záznamů</a>
                    <a class="dropdown-item" onclick="setPageListItems(event)" data-value="50">50 záznamů</a>
                    <a class="dropdown-item" onclick="setPageListItems(event)" data-value="100">100 záznamů</a>
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

    <div class="modal" id="temp-detail-modal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl modal-fullscreen-xl-down" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <!-- <div class="col-auto">
              <span class="avatar avatar-xs avatar-1 me-1 bg-red text-white align-middle" title="Ateliér" aria-label="Ateliér"> A </span>
            </div> -->
            <div class="col">
              <h5 class="modal-title">Objednávka 458-2025-ÚVD</h5>
            </div>
            <div class="col-auto">
              <span class="status status-success align-middle">Nová</span>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-0">
            <!-- WIP - akce -->
            <div class="btn-list justify-content-end">
              <!-- TEMP title ATRIBUTY -->
              <button class="btn btn-sm btn-outline" title="Otevřít reportér s vygenerovaným reportem">
                Náhled objednávky
              </button>
              <button class="btn btn-sm btn-outline" title="Vygenerovat report a uložit do PDF">
                Připojit objednávku
              </button>
              <button class="btn btn-sm btn-outline">
                Odeslat objednávku
              </button>
              <button class="btn btn-sm btn-outline" title="Otevřít reportér s vygenerovaným reportem">
                Předávací protokol
              </button>
              <button class="btn btn-sm btn-outline" title="Otevřít reportér s vygenerovaným reportem">
                Protokol o odstranění vad
              </button>
              <button class="btn btn-sm btn-outline btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cancel">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M18.364 5.636l-12.728 12.728" />
                </svg>
                Stornovat
              </button>
            </div>
            <div class="card border-0">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" data-bs-toggle="tabs">
                  <li class="nav-item">
                    <a href="#tab-order-info" class="nav-link active" data-bs-toggle="tab" draggable="false">Objednávka</a>
                  </li>
                  <li class="nav-item">
                    <a href="#tab-construction" class="nav-link" data-bs-toggle="tab" draggable="false">Stavba</a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <!-- Objednávka (tab content) -->
                  <div class="tab-pane active show card border-0" id="tab-order-info">
                    <div class="card-body ps-0 pe-0">
                      <div class="row row-cards">

                        <!-- TODO: Zjistit -->
                        <!-- ? Co z toho je výpis údajů dané faktury ? -->
                        <!-- ? A co z toho je filtrování ? -->
                        <!-- Resp. to ani nevypadá na filtrování, spíš jen na přiřazování údajů -->

                        <div class="col-md-6 col-lg-3">
                          <label class="form-label" for="order-input-id">Interní číslo objednávky</label>
                          <input type="text" class="form-control" name="order-input-id" value="458-2025-ÚVD" disabled>
                        </div>
                        <div class="col-md-6 col-lg-3">
                          <label class="form-label" for="order-input-sod-number">Číslo SoD</label>
                          <input type="text" class="form-control" name="order-input-sod-number" value="192-01-086-IS-I" disabled>
                        </div>
                        <div class="col-md-6 col-lg-3">
                          <label class="form-label" for="order-input-date-sod">Datum podpisu SoD</label>
                          <input type="date" class="form-control" name="order-input-date-sod" value="2025-12-01" disabled>
                        </div>
                        <div class="col-md-6 col-lg-3">
                          <label class="form-label" for="order-input-catalog-number">Katalogové číslo</label>
                          <input type="text" class="form-control" name="order-input-catalog-number" value="192-01-086" disabled>
                        </div>
                        <div class="col-md-6 col-lg-3">
                          <label class="form-label" for="order-input-supplier">Dodavatel</label>
                          <input type="text" class="form-control" name="order-input-supplier" value="Společnost s.r.o." disabled>
                        </div>
                        <div class="col-md-6 col-lg-3">
                          <label class="form-label" for="order-input-date-sod">Termín splnění dle SoD</label>
                          <input type="date" class="form-control" name="order-input-date-sod">
                        </div>
                        <!-- ? Multiple options ? -->
                        <div class="col-md-6 col-lg-3">
                          <label class="form-label" for="order-input-seller">Prodejce</label>
                          <select class="form-select" id="order-input-seller" autocomplete="off">
                            <option selected>Vyberte</option>
                            <option value="1">Možnost 1</option>
                            <option value="2">Možnost 2</option>
                            <option value="3">Možnost 3</option>
                            <option value="4">Možnost 4</option>
                            <option value="5">Možnost 5</option>
                          </select>
                        </div>
                        <!-- ? Multiple options ? -->
                        <div class="col-md-6 col-lg-3">
                          <label class="form-label" for="order-input-technician">Technik ÚVD</label>
                          <select class="form-select" id="order-input-technician" autocomplete="off">
                            <option selected>Vyberte</option>
                            <option value="1">Možnost 1</option>
                            <option value="2">Možnost 2</option>
                            <option value="3">Možnost 3</option>
                            <option value="4">Možnost 4</option>
                            <option value="5">Možnost 5</option>
                          </select>
                        </div>
                        <!-- ? Multiple options ? -->
                        <div class="col-md-6 col-lg-3">
                          <label class="form-label" for="order-input-oversight">Stavební dozor</label>
                          <select class="form-select" id="order-input-oversight" autocomplete="off">
                            <option selected>Vyberte</option>
                            <option value="1">Možnost 1</option>
                            <option value="2">Možnost 2</option>
                            <option value="3">Možnost 3</option>
                            <option value="4">Možnost 4</option>
                            <option value="5">Možnost 5</option>
                          </select>
                        </div>
                        <div class="col-md-6 col-lg-3">
                          <label class="form-label" for="order-input-date-sod">Datum akceptace objednávky</label>
                          <input type="date" class="form-control" name="order-input-date-sod" value="2026-01-07" disabled>
                        </div>
                        <div class="col-md-6 col-lg-3">
                          <label class="form-label" for="order-input-date-installation-start">Zahájení montáže</label>
                          <input type="date" class="form-control" name="order-input-date-installation-start">
                        </div>
                        <div class="col-md-6 col-lg-3">
                          <label class="form-label" for="order-input-date-installation-end">Dokončení montáže</label>
                          <input type="date" class="form-control" name="order-input-date-installation-end">
                        </div>
                        <!-- ? Proč je datum ? -->
                        <div class="col-md-6 col-lg-3">
                          <label class="form-label" for="order-input-date-installation-protocol">Předávací protokol k montáži</label>
                          <input type="date" class="form-control" name="order-input-date-installation-protocol">
                        </div>
                        <div class="col-12">
                          <label class="form-label" for="order-technician-note">Poznámka technika <span class="form-label-description">xx/yy</span></label>
                          <textarea class="form-control" name="order-technician-note" id="order-technician-note" rows="2" placeholder="Poznámka technika..."></textarea>
                        </div>
                        <div class="col-12">
                          <label class="form-label" for="order-supplier-note">Poznámka dodavatele (k objednávce) <span class="form-label-description">xx/yy</span></label>
                          <textarea class="form-control" name="order-supplier-note" id="order-supplier-note" rows="2" placeholder="Poznámka dodavatele..." disabled></textarea>
                        </div>
                        <div class="col-12">
                          <label class="form-label" for="order-flaws">Vady <span class="form-label-description">xx/yy</span></label>
                          <textarea class="form-control" name="order-flaws" id="order-flaws" rows="2" placeholder="Vady..."></textarea>
                        </div>
                        <div class="col-md-6 col-lg-3">
                          <label class="form-label" for="order-input-date-flaws-protocol">Předávací protokol k odstranění vad</label>
                          <input type="date" class="form-control" name="order-input-date-flaws-protocol">
                        </div>
                        <div class="col-lg-12">
                          <div class="form-label">
                            Přílohy
                            <span class="form-label-description">56/100</span>
                          </div>
                          <div class="card">
                            <div class="card-header">
                              <div class="col-md-auto col-sm-12">
                                <div class="ms-auto d-flex flex-wrap btn-list">
                                  <a class="btn" title="Přidat přílohu">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                                      <path d="M12 5l0 14"></path>
                                      <path d="M5 12l14 0"></path>
                                    </svg>
                                    Přidat
                                  </a>
                                  <a class="btn" title="Stáhnout označené přílohy">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-download">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                      <path d="M7 11l5 5l5 -5" />
                                      <path d="M12 4l0 12" />
                                    </svg>
                                    Stáhnout označené
                                  </a>
                                </div>
                              </div>
                            </div>
                            <table class="table card-table">
                              <tbody>
                                <tr>
                                  <td class="w-1"><input class="form-check-input m-0 align-middle table-selectable-check" type="checkbox" aria-label="Vybrat reklamaci"></td>
                                  <td>
                                    <div>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-text">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                                        <path d="M9 9l1 0" />
                                        <path d="M9 13l6 0" />
                                        <path d="M9 17l6 0" />
                                      </svg>
                                      192-01-81_os1.pdf
                                    </div>
                                    <div class="text-muted">Poznámka dodavatele k jednotlivým přílohám</div>
                                  </td>
                                  <td class="w-1 text-end p-0">
                                    <div class="btn-actions">
                                      <a href="#" class="btn btn-action" aria-label="Edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-download">
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                          <path d="M7 11l5 5l5 -5" />
                                          <path d="M12 4l0 12" />
                                        </svg>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div class="card-body d-none d-lg-block">
                              <form class="dropzone dz-clickable" id="dropzone-order-attachments" action="./" autocomplete="off" novalidate>
                                <div class="dz-default dz-message">
                                  <button class="dz-button" type="button">
                                    <span class="d-none d-lg-inline">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-drag-drop">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                                        <path d="M13 13l9 3l-4 2l-2 4l-3 -9" />
                                        <path d="M3 3l0 .01" />
                                        <path d="M7 3l0 .01" />
                                        <path d="M11 3l0 .01" />
                                        <path d="M15 3l0 .01" />
                                        <path d="M3 7l0 .01" />
                                        <path d="M3 11l0 .01" />
                                        <path d="M3 15l0 .01" />
                                      </svg>
                                      Přetáhněte soubory nebo klikněte pro výběr
                                    </span>
                                    <span class="d-lg-none">Kliknutím vyberte soubory</span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Stavba (tab content) -->
                  <div class="tab-pane card border-0" id="tab-construction">
                    <div class="card-body ps-0 pe-0">
                      <div class="row row-cards">
                        <div class="col-12">
                          <label class="form-label" for="temp-el-1">Lorem Ipsum</label>
                          <textarea class="form-control" name="temp-el-1" id="temp-el-1" rows="3" placeholder="Lorem Ipsum..."></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">Zavřít</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
              Uložit
            </button>
          </div>
        </div>
      </div>
    </div>
  </PageTemplate>
</template>

<style scoped></style>