<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import PageTemplate from '@/components/PageTemplate.vue'
  import Empty from '@/components/Empty.vue'

  // Installed version (6.0.0-beta.2) doesn't bundle TypeScript type declarations  
  // @ts-expect-error
  import Dropzone from "dropzone";
  import "dropzone/dist/dropzone.css";

  onMounted(() => {
    let myDropzone = new Dropzone("#dropzone-order-attachments");
  });

  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  const isDesktop = matchesMediaQuery('(min-width: 992px)')


  // NOTE: Pouze pokud budou neuložené změny
  function handleBack(navigate: () => void) {
    if (confirm("Máte neuložené změny, které budou ztraceny. Opravdu chcete odejít?")) {
      navigate()
    }
  }
</script>

<template>
  <PageTemplate title="Objednávka 458-2025-ÚVD" back-to="/dois/seznam-objednavek" @back="handleBack">

    <template #actions>
      <div class="btn-list">
        <RouterLink to="/dois/seznam-objednavek" type="button" class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
          Zrušit
        </RouterLink>
        <RouterLink to="/dois/seznam-objednavek" type="button" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
          Uložit
        </RouterLink>
      </div>
    </template>

    <template #toolbar>
      <div class="btn-list">
        <button class="btn btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
          </svg>
          Náhled
        </button>
        <button class="btn btn-sm">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" /><path d="M12 11l0 6" /><path d="M9 14l6 0" /></svg> -->
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" /><path d="M12 9v6" /></svg> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
          Připojit objednávku
        </button>
        <button class="btn btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 14l11 -11" />
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
          </svg>
          Odeslat objednávku
        </button>
        <button class="btn btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-check">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
            <path d="M9 15l2 2l4 -4" />
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> -->
          Předávací protokol
        </button>
        <button class="btn btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-tool">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
          </svg>
          Protokol o odstranění vad
        </button>
        <button class="btn btn-sm btn-outline btn-danger" data-bs-toggle="modal" data-bs-target="#order-cancel-confirm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cancel">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M18.364 5.636l-12.728 12.728" />
          </svg>
          Stornovat
        </button>
      </div>
    </template>

    <!-- TODO: Někde ti tu chybí stav (např Nová) -->

    <div class="row row-cards">
      <div class="col-12">
        <div class="card card-md">
          <div class="card-header">
            <h3 class="card-title">Údaje objednávky</h3>
          </div>
          <!-- Výčet údajů (#0) -->
          <!-- <div class="card-body">
            <p>Interní číslo: 458-2025-ÚVD</p>
            <p>Číslo SoD: 192-01-086-IS-I</p>
            <p>Datum podpisu SoD: 01.05.2025</p>
            <p>Katalogové číslo: 192-01-086</p>
            <p>Dodavatel: Společnost s.r.o.</p>
            <p>Datum akceptace objednávky: 15.05.2025</p>
          </div> -->
          <!-- Výčet údajů (#1) -->
          <!-- <div class="card-body">
            <div class="row">
              <div class="col-12 col-xxl-10">
                <dl class="datagrid">
                  <div class="datagrid-item">
                    <dt class="datagrid-title">Interní číslo</dt>
                    <dd class="datagrid-content">458-2025-ÚVD</dd>
                  </div>
                  <div class="datagrid-item">
                    <dt class="datagrid-title">Číslo SoD</dt>
                    <dd class="datagrid-content">192-01-086-IS-I</dd>
                  </div>
                  <div class="datagrid-item">
                    <dt class="datagrid-title">Datum podpisu SoD</dt>
                    <dd class="datagrid-content">01.05.2025</dd>
                  </div>
                  <div class="datagrid-item">
                    <dt class="datagrid-title">Katalogové číslo</dt>
                    <dd class="datagrid-content">192-01-086</dd>
                  </div>
                  <div class="datagrid-item">
                    <dt class="datagrid-title">Dodavatel</dt>
                    <dd class="datagrid-content">Společnost s.r.o.</dd>
                  </div>
                  <div class="datagrid-item">
                    <dt class="datagrid-title">Datum akceptace objednávky</dt>
                    <dd class="datagrid-content">15.05.2025</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div> -->
          <!-- Výčet údajů (#2) -->
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-xxl-10">
                <div class="row g-3">
                  <!-- ? text-muted VS datagrid-title -->
                  <!-- ? nechat na 2 sloupce ? -->
                  <div class="col-6 col-md-4">
                    <div class="text-muted">Interní číslo</div>
                    <div>458-2025-ÚVD</div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="text-muted">Číslo SoD</div>
                    <div>192-01-086-IS-I</div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="text-muted">Datum podpisu SoD</div>
                    <div>01.05.2025</div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="text-muted">Katalogové číslo</div>
                    <div>192-01-086</div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="text-muted">Dodavatel</div>
                    <div>Společnost s.r.o.</div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="text-muted">Datum akceptace objednávky</div>
                    <div>15.05.2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card-body">
            <p>Termín splnění dle SoD: date | null</p>
            <p>Prodejce: Dropdown (multiple??)</p>
            <p>Technik ÚVD: Dropdown (multiple??)</p>
            <p>Stavební dozor: Dropdown (multiple??)</p>
            <p>Zahájení montáže: date | null</p>
            <p>Dokončení montáže: date | null</p>
            <p>Předávací protokol k montáži: date | null (co to znamená? proč je datum?)</p>
          </div> -->

          <!-- TODO: Chtělo by to nějakou vizuální hierarchii (ne jen tupý grid) -->
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-xxl-10">
                <div class="row g-3">
                  <div class="col-md-6 col-lg-6">
                    <label class="form-label" for="order-input-date-sod">Termín splnění dle SoD</label>
                    <input type="date" class="form-control" name="order-input-date-sod" id="order-input-date-sod">
                  </div>
                  <!-- ? Multiple options ? -->
                  <div class="col-md-6 col-lg-6">
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
                  <div class="col-md-6 col-lg-6">
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
                  <div class="col-md-6 col-lg-6">
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
                  <div class="col-md-6 col-lg-6">
                    <label class="form-label" for="order-input-date-installation-start">Zahájení montáže</label>
                    <input type="date" class="form-control" name="order-input-date-installation-start" id="order-input-date-installation-start">
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <label class="form-label" for="order-input-date-installation-end">Dokončení montáže</label>
                    <input type="date" class="form-control" name="order-input-date-installation-end" id="order-input-date-installation-end">
                  </div>
                  <!-- ? Proč je datum ? -->
                  <div class="col-md-6 col-lg-6">
                    <label class="form-label" for="order-input-date-installation-protocol">Předávací protokol k montáži</label>
                    <input type="date" class="form-control" name="order-input-date-installation-protocol" id="order-input-date-installation-protocol">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TODO: Odstraň accordion -->
      <!-- ? collapsable accordion ? -->
      <div class="col-12">
        <div class="card card-md">
          <div class="card-header">
            <div class="accordion-button" type="button" aria-expanded="true" data-bs-toggle="collapse" data-bs-target="#temp-collapse-1-default">
              <h3 class="card-title">Dodavatel</h3>
              <div class="accordion-button-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="card-body accordion-collapse collapse show" data-bs-parent="#accordion-default" id="temp-collapse-1-default">
            <div class="row gy-3">
              <div class="col-12">
                <!-- ? musí tam být ta závorka ? -->
                <!-- <p>Poznámka dodavatele (k objednávce): [VÝPIS] text</p> -->
                <span class="form-label">Poznámka dodavatele (k objednávce)</span>
                <p class="form-control-plaintext">Tohle je ten nejhezčí byt, ve kterém jsem kdy byl.</p>
              </div>
              <div class="col-12">
                <!-- <p>Poznámka technika: text</p> -->
                <label class="form-label" for="order-technician-note">Poznámka technika <span class="form-label-description">xx/yy</span></label>
                <textarea class="form-control" name="order-technician-note" id="order-technician-note" rows="1" placeholder="Poznámka technika..." style="resize: none;"></textarea>
              </div>
              <div class="col-xl-6">
                <!-- <p>Vady: text</p> -->
                <label class="form-label" for="order-flaws">Vady <span class="form-label-description">xx/yy</span></label>
                <textarea class="form-control" name="order-flaws" id="order-flaws" rows="1" placeholder="Vady..." style="resize: none;"></textarea>
              </div>
              <div class="col-xl-6">
                <!-- <p>Předávací protokol k odstranění vad: date | null</p> -->
                <label class="form-label" for="order-input-date-flaws-protocol">Předávací protokol k odstranění vad</label>
                <input type="date" class="form-control" name="order-input-date-flaws-protocol" id="order-input-date-flaws-protocol">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card card-md">
          <div class="card-header">
            <div class="d-flex w-100 align-items-center">
              <div class="d-flex align-items-center gap-2">
                <h3 class="card-title">Přílohy</h3>
                <span class="text-secondary d-none d-sm-inline">Celkem 2</span>
              </div>
              <div class="btn-list h-0 flex-nowrap ms-auto align-items-center">
                <!-- <div class="dropdown">
                  <button class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown" title="Filtrování">
                    Akce
                  </button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <button class="dropdown-item">něco</button>
                  </div>
                </div> -->
                <!-- NOTE: Hromadná akce - zobrazit pouze když je vybrána alespoň jedna příloha -->
                <!-- <button class="btn btn-outline btn-danger btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash text-reset">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                  Smazat
                </button> -->
                <!-- NOTE: Hromadná akce - zobrazit pouze když je vybrána alespoň jedna příloha -->
                <!-- <button type="button" class="btn btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-download">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                  </svg>
                  Stáhnout
                </button> -->
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#order-upload-attachment-modal"
                  class="btn btn-primary btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-1">
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                  Přidat
                </button>
              </div>
            </div>
          </div>
          <!-- * Empty state -->
          <!-- <Empty title="Žádné přílohy" subtitle="K objednávce nejsou připojeny žádné přílohy." /> -->
          <!-- * Výpis příloh -->
          <div class="card-body">
            <div class="card">
              <table class="table card-table table-selectable table-vcenter">
                <tbody>
                  <tr>
                    <td class="w-1"><input class="form-check-input m-0 table-selectable-check" type="checkbox" aria-label="Vybrat reklamaci"></td>
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
                        <!-- ? stáhnout kliknutím na název ? -->
                        <a href="./todo" class="text-reset">192-01-81_os1.pdf</a>
                      </div>
                      <div class="text-muted">Poznámka dodavatele k daným přílohám</div>
                    </td>
                    <td class="w-1 text-end ps-0">
                      <!-- * Options [⋮] -->
                      <div class="dropdown">
                        <!-- Thin button -->
                        <a href="#" class="btn-action p-2" data-bs-toggle="dropdown" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                          </svg>
                        </a>
                        <!-- Thicc button -->
                        <!-- <button class="btn btn-icon btn-action dropdown-toggle" data-bs-toggle="dropdown" draggable="false">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              </svg>
                            </button> -->
                        <div class="dropdown-menu dropdown-menu-end" style="">
                          <a href="#" class="dropdown-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon dropdown-item-icon icon-tabler icons-tabler-outline icon-tabler-download">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                              <path d="M7 11l5 5l5 -5" />
                              <path d="M12 4l0 12" />
                            </svg>
                            Stáhnout
                          </a>
                          <a href="#" class="dropdown-item text-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon dropdown-item-icon icon-tabler icons-tabler-outline icon-tabler-trash text-reset">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M4 7l16 0" />
                              <path d="M10 11l0 6" />
                              <path d="M14 11l0 6" />
                              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                            Smazat
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-1"><input class="form-check-input m-0 table-selectable-check" type="checkbox" aria-label="Vybrat reklamaci"></td>
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
                        <!-- ? stáhnout kliknutím na název ? -->
                        <a href="./todo" class="text-reset">192-01-81_os1.pdf</a>
                      </div>
                      <div class="text-muted">Poznámka dodavatele k daným přílohám</div>
                    </td>
                    <td class="w-1 text-end ps-0">
                      <!-- * Options [⋮] -->
                      <div class="dropdown">
                        <!-- Thin button -->
                        <a href="#" class="btn-action p-2" data-bs-toggle="dropdown" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                          </svg>
                        </a>
                        <!-- Thicc button -->
                        <!-- <button class="btn btn-icon btn-action dropdown-toggle" data-bs-toggle="dropdown" draggable="false">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              </svg>
                            </button> -->
                        <div class="dropdown-menu dropdown-menu-end" style="">
                          <a href="#" class="dropdown-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon dropdown-item-icon icon-tabler icons-tabler-outline icon-tabler-download">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                              <path d="M7 11l5 5l5 -5" />
                              <path d="M12 4l0 12" />
                            </svg>
                            Stáhnout
                          </a>
                          <a href="#" class="dropdown-item text-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon dropdown-item-icon icon-tabler icons-tabler-outline icon-tabler-trash text-reset">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M4 7l16 0" />
                              <path d="M10 11l0 6" />
                              <path d="M14 11l0 6" />
                              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                            Smazat
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card card-md">
          <div class="card-header">
            <h3 class="card-title">Položky</h3>
          </div>

          <!-- <div class="card-body"> -->
          <!-- <div class="card"> -->
          <table class="table table-vcenter table-selectable table-nowrap card-table">
            <thead>
              <tr>
                <th>Název</th>
                <th class="w-50">Termín dokončení dle SoD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Skříň chodba</td>
                <td>
                  <div class="input-icon">
                    <span class="input-icon-addon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                        <path d="M16 3v4"></path>
                        <path d="M8 3v4"></path>
                        <path d="M4 11h16"></path>
                        <path d="M11 15h1"></path>
                        <path d="M12 15v3"></path>
                      </svg>
                    </span>
                    <input type="date" class="form-control" id="">
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- </div> -->
          <!-- </div> -->

          <!-- TODO: Rozhodni se, které z těch dvou -->

          <div class="list-group list-group-flush">
            <div class="list-group-item">
              <div class="row align-items-center">
                <div class="col-md-6 text-truncate">
                  <span>Skříň chodba</span>
                </div>
                <div class="col-md-6">
                  <div class="input-icon">
                    <span class="input-icon-addon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                        <path d="M16 3v4"></path>
                        <path d="M8 3v4"></path>
                        <path d="M4 11h16"></path>
                        <path d="M11 15h1"></path>
                        <path d="M12 15v3"></path>
                      </svg>
                    </span>
                    <input type="date" class="form-control" id="">
                  </div>
                </div>
              </div>
            </div>
            <div class="list-group-item">
              <div class="row align-items-center">
                <div class="col-md-6 text-truncate">
                  <span>Skříň chodba</span>
                </div>
                <div class="col-md-6">
                  <div class="input-icon">
                    <span class="input-icon-addon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                        <path d="M16 3v4"></path>
                        <path d="M8 3v4"></path>
                        <path d="M4 11h16"></path>
                        <path d="M11 15h1"></path>
                        <path d="M12 15v3"></path>
                      </svg>
                    </span>
                    <input type="date" class="form-control" id="">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="card-body">
            <div class="card">
              <div class="card-body divide-y">
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <span class="col-form-label">skříň</span>
                  </div>
                  <div class="col-md-6">
                    <input type="date" class="form-control" name="" id="">
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <span class="col-form-label">skříň</span>
                  </div>
                  <div class="col-md-6">
                    <input type="date" class="form-control" name="" id="">
                  </div>
                </div>
              </div>
            </div>
          </div> -->

        </div>
      </div>
    </div>

    <!-- TEMP place -> into component -->
    <div class="modal" id="order-upload-attachment-modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nahrát přílohy</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
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
                    Přetáhněte soubory nebo kliknutím vyberte
                  </span>
                  <span class="d-lg-none">Kliknutím vyberte soubory k nahrání</span>
                </button>
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">Zrušit</button>
            <button type="button" class="btn btn-primary">Přidat</button>
          </div>
        </div>
      </div>
    </div>

    <!-- TEMP place -> into component -->
    <div class="modal" id="order-cancel-confirm" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="modal-status bg-danger"></div>
          <div class="modal-body text-center py-4">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon mb-2 text-danger icon-lg">
              <path d="M12 9v4"></path>
              <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"></path>
              <path d="M12 16h.01"></path>
            </svg> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon mb-2 text-danger icon-lg icon-tabler icons-tabler-outline icon-tabler-cancel">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M18.364 5.636l-12.728 12.728" />
            </svg>
            <h3>Stornovat objednávku</h3>
            <div class="text-secondary">Opravdu chcete stornovat tuto objednávku?</div>
          </div>
          <div class="modal-footer">
            <div class="w-100">
              <div class="row">
                <div class="col">
                  <a href="#" class="btn w-100" data-bs-dismiss="modal">Zrušit</a>
                </div>
                <div class="col">
                  <a href="#" class="btn btn-danger w-100" data-bs-dismiss="modal">Stornovat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </PageTemplate>
</template>

<style scoped>

  /* TEMP */
  .collapsing,
  .accordion-button-toggle {
    transition: none !important;
  }
</style>