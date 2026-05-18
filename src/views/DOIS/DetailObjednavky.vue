<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router'
  import PageTemplate from '@/components/PageTemplate.vue'
  import Empty from '@/components/Empty.vue'
  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  import { useDropzone } from '@/composables/useDropzone'
  import 'dropzone/dist/dropzone.css'

  
  const unsavedChanges = ref(false)
  function handleBack(navigate: () => void) {
    if (!unsavedChanges.value || (unsavedChanges.value && confirm("Neuložené změny budou ztraceny. Opravdu chcete odejít?"))) {
      navigate()
    } 
  }

  const route = useRoute()
  const isDesktop = matchesMediaQuery('(min-width: 992px)')
  // TEMP
  // TODO: Odstranit až se rozhodne který layout budeme chtít
  const tempShowActionsBar = ref(false)

  // NOTE: dzOrderAttachments.value is available for manual calls
  const { dropzone: dzOrderAttachments } = useDropzone({
    selector: '#dropzone-order-attachments',
    options: {
      url: './',
    },
  })

</script>

<template>
  <PageTemplate :title="`Objednávka ${route.params.orderId}`" back-to="/dois/objednavky-uvd" @back="handleBack">

    <template #actions>
      <div class="btn-list">
        <div class="dropdown">
          <a class="btn dropdown-toggle btn-outline" data-bs-toggle="dropdown">
            Akce
          </a>
          <div class="dropdown-menu dropdown-menu-end">
            <button class="dropdown-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
              </svg>
              Náhled
            </button>
            <button class="dropdown-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
              Připojit objednávku
            </button>
            <button class="dropdown-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
              Odeslat objednávku
            </button>
            <button class="dropdown-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-check">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                <path d="M9 15l2 2l4 -4" />
              </svg>
              Předávací protokol
            </button>
            <button class="dropdown-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-tool">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
              </svg>
              Protokol o odstranění vad
            </button>
            <button class="dropdown-item text-danger" data-bs-toggle="modal" data-bs-target="#order-cancel-confirm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cancel">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M18.364 5.636l-12.728 12.728" />
              </svg>
              Stornovat
            </button>
          </div>
        </div>
        <RouterLink to="/dois/objednavky-uvd" type="button" class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
          Zrušit
        </RouterLink>
        <RouterLink to="/dois/objednavky-uvd" type="button" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
          Uložit
        </RouterLink>
      </div>
    </template>

    <template #toolbar>

      <div v-if="tempShowActionsBar" class="btn-list">
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

      <ul class="nav nav-underline mb-n3 flex-nowrap scroll-x" :class="{ 'mt-3': tempShowActionsBar }" data-bs-toggle="tabs" role="tablist">
        <li class="nav-item" role="presentation">
          <a href="#tab-order-info" class="nav-link active" data-bs-toggle="tab" aria-selected="true" role="tab" draggable="false">Objednávka</a>
        </li>
        <li class="nav-item" role="presentation">
          <a href="#tab-construction" class="nav-link" data-bs-toggle="tab" aria-selected="false" role="tab" draggable="false">Stavba</a>
        </li>
      </ul>

    </template>

    <!-- TODO: Někde ti tu chybí stav (např Nová) -->

    <div class="tab-content">
      <!-- * Záložka - Objednávka -->
      <div class="tab-pane active show" id="tab-order-info" role="tabpanel">
        <div class="row row-cards">
          <div class="col-12">
            <div class="card card-md">
              <!-- ? card header ? -->
              <!-- <div class="card-header">
                <h3 class="card-title">Objednávka</h3>
              </div> -->
              <!-- Výčet údajů (#0) -->
              <!-- <div class="card-body">
                <p>Interní číslo: {{ route.params.orderId }}</p>
                <p>Stav: Nová</p>
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
                        <dd class="datagrid-content">{{ route.params.orderId }}</dd>
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
              <!-- <div class="card-body">
                <div class="row">
                  <div class="col-12 col-xxl-10">
                    <div class="row gy-3">
                      <div class="col-12">
                        <div class="form-label mb-0">Interní číslo</div>
                        <div>
                          <span class="h2">{{ route.params.orderId }}</span>
                          <span class="status status-success align-text-bottom ms-2">Nová</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="row">
                          <div class="col-6 col-md-12">
                            <div class="form-label mb-0">Číslo SoD</div>
                          </div>
                          <div class="col-6 col-md-12">
                            <div>192-01-086-IS-I</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="row">
                          <div class="col-6 col-md-12">
                            <div class="form-label mb-0">Katalogové číslo</div>
                          </div>
                          <div class="col-6 col-md-12">
                            <div>192-01-086</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="row">
                          <div class="col-6 col-md-12">
                            <div class="form-label mb-0">Datum podpisu SoD</div>
                          </div>
                          <div class="col-6 col-md-12">
                            <div>01.05.2025</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="row">
                          <div class="col-6 col-md-12">
                            <div class="form-label mb-0">Datum akceptace objednávky</div>
                          </div>
                          <div class="col-6 col-md-12">
                            <div>15.05.2025</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="row">
                          <div class="col-6 col-md-12">
                            <div class="form-label mb-0">Dodavatel</div>
                          </div>
                          <div class="col-6 col-md-12">
                            <div>Společnost s.r.o.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              <!-- Výčet údajů (#3) -->
              <!-- <div class="card-body">
                <div class="row">
                  <div class="col-12 col-xxl-10">
                    <div class="row gy-3">
                      <div class="col-12">
                        <div class="datagrid-title">Interní číslo</div>
                        <div>
                          <span class="h2">{{ route.params.orderId }}</span>
                          <span class="status status-success align-text-bottom ms-2">Nová</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="datagrid-title">Číslo SoD</div>
                        <div>192-01-086-IS-I</div>
                      </div>
                      <div class="col-md-6">
                        <div class="datagrid-title">Katalogové číslo</div>
                        <div>192-01-086</div>
                      </div>
                      <div class="col-md-6">
                        <div class="datagrid-title">Datum podpisu SoD</div>
                        <div>01.05.2025</div>
                      </div>
                      <div class="col-md-6">
                        <div class="datagrid-title">Datum akceptace objednávky</div>
                        <div>15.05.2025</div>
                      </div>
                      <div class="col-md-6">
                        <div class="datagrid-title">Dodavatel</div>
                        <div>Společnost s.r.o.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              <!-- ? text-muted VS datagrid-title -->
              <!-- ? nechat na 2 sloupce ? -->
              <!-- * Výčet údajů (#4) -->
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-xxl-10">
                    <div class="row g-3">
                      <div class="col-12">
                        <div class="text-muted">Interní číslo</div>
                        <div>
                          <span class="h2">{{ route.params.orderId }}</span>
                          <span class="status status-success align-text-bottom ms-2">Nová</span>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 d-flex">
                        <div class="text-muted w-50">Číslo SoD</div>
                        <div class="w-50">192-01-086-IS-I</div>
                      </div>
                      <div class="col-12 col-md-6 d-flex">
                        <div class="text-muted w-50">Katalogové číslo</div>
                        <div class="w-50">192-01-086</div>
                      </div>
                      <div class="col-12 col-md-6 d-flex">
                        <div class="text-muted w-50">Datum podpisu SoD</div>
                        <div class="w-50">01.05.2025</div>
                      </div>
                      <div class="col-12 col-md-6 d-flex">
                        <div class="text-muted w-50">Datum akceptace objednávky</div>
                        <div class="w-50">15.05.2025</div>
                      </div>
                      <!-- <div class="col-12 col-md-6 d-flex">
                        <div class="text-muted w-50">Dodavatel</div>
                        <div class="w-50">Společnost s.r.o.</div>
                      </div> -->
                      <!-- ? maybe ? -->
                      <div class="col-12 col-md-6 d-flex flex-column">
                        <div class="text-muted">Dodavatel</div>
                        <div>
                          <span
                            data-bs-toggle="modal"
                            data-bs-target="#order-supplier-infobox"
                            class="badge badge-lg bg-default text-body cursor-pointer">
                            Společnost s.r.o.
                          </span>
                        </div>
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

              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-xxl-10">
                    <div class="row g-3">
                      <div class="col-md-6 col-lg-6">
                        <label class="form-label" for="order-input-date-sod">Termín splnění dle SoD</label>
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
                          <input type="date" class="form-control" name="order-input-date-sod" id="order-input-date-sod" value="2025-07-01">
                        </div>
                      </div>
                      <!-- ? Multiple options ? -->
                      <div class="col-md-6 col-lg-6">
                        <label class="form-label" for="order-input-seller">Prodejce</label>
                        <select class="form-select" id="order-input-seller" autocomplete="off">
                          <option>Vyberte</option>
                          <option value="1">Možnost 1</option>
                          <option value="2">Možnost 2</option>
                          <option value="3" selected>Možnost 3</option>
                          <option value="4">Možnost 4</option>
                          <option value="5">Možnost 5</option>
                        </select>
                      </div>
                      <!-- ? Multiple options ? -->
                      <div class="col-md-6 col-lg-6">
                        <label class="form-label" for="order-input-technician">Technik ÚVD</label>
                        <select class="form-select" id="order-input-technician" autocomplete="off">
                          <option>Vyberte</option>
                          <option value="1">Možnost 1</option>
                          <option value="2" selected>Možnost 2</option>
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
                          <option value="5" selected>Možnost 5</option>
                        </select>
                      </div>
                      <div class="col-md-6 col-lg-6">
                        <label class="form-label" for="order-input-date-installation-start">Zahájení montáže</label>
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
                          <input type="datetime-local" class="form-control" name="order-input-date-installation-start" id="order-input-date-installation-start">
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-6">
                        <label class="form-label" for="order-input-date-installation-end">Dokončení montáže</label>
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
                          <input type="datetime-local" class="form-control" name="order-input-date-installation-end" id="order-input-date-installation-end">
                        </div>
                      </div>
                      <!-- ? Proč je datum ? -->
                      <div class="col-md-6 col-lg-6">
                        <label class="form-label" for="order-input-date-installation-protocol">Předávací protokol k montáži</label>
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
                          <input type="datetime-local" class="form-control" name="order-input-date-installation-protocol" id="order-input-date-installation-protocol">
                        </div>
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
                <h3 class="card-title">Dodavatel</h3>
              </div>
              <div class="card-body">
                <div class="row gy-3">
                  <div class="col-12">
                    <!-- <span class="form-label">Poznámka dodavatele</span> -->
                    <label class="form-label" for="order-supplier-note">Poznámka dodavatele</label>
                    <p class="form-control-plaintext">Tohle je ten nejhezčí byt, ve kterém jsem kdy byl.</p>
                    <!-- <textarea class="form-control" name="order-supplier-note" id="order-supplier-note" rows="1" placeholder="Poznámka dodavatele..." style="resize: none; field-sizing: content;" value="Tohle je ten nejhezčí byt, ve kterém jsem kdy byl." readonly disabled></textarea> -->
                  </div>
                  <div class="col-12">
                    <label class="form-label" for="order-technician-note">Poznámka technika <span class="form-label-description">xx/yy</span></label>
                    <textarea class="form-control" name="order-technician-note" id="order-technician-note" rows="1" placeholder="Poznámka technika..." style="resize: none; field-sizing: content;"></textarea>
                  </div>
                  <div class="col-xl-6">
                    <label class="form-label" for="order-flaws">Vady <span class="form-label-description">xx/yy</span></label>
                    <textarea class="form-control" name="order-flaws" id="order-flaws" rows="1" placeholder="Vady..." style="resize: none;"></textarea>
                  </div>
                  <div class="col-xl-6">
                    <label class="form-label" for="order-input-date-flaws-protocol">Předávací protokol k odstranění vad</label>
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
                      <input type="date" class="form-control" name="order-input-date-flaws-protocol" id="order-input-date-flaws-protocol">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- TODO: Předělej položky pomocí <div> (a na mobilu skryt checkboxy?) -->
          <div class="col-12">
            <div class="card card-md">
              <div class="card-header">
                <div class="d-flex w-100 align-items-center">
                  <div class="d-flex align-items-center gap-2">
                    <h3 class="card-title">Přílohy</h3>
                    <span class="text-secondary d-none d-sm-inline">(Celkem 3)</span>
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
                    <div class="dropdown">
                      <a class="btn btn-sm dropdown-toggle btn-outline" data-bs-toggle="dropdown">
                        Akce
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <button class="dropdown-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-download">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 11l5 5l5 -5" />
                            <path d="M12 4l0 12" />
                          </svg>
                          Stáhnout vybrané
                        </button>
                        <button class="dropdown-item text-danger">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash text-reset">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 7l16 0" />
                            <path d="M10 11l0 6" />
                            <path d="M14 11l0 6" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                          </svg>
                          Smazat vybrané
                        </button>
                      </div>
                    </div>
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
              <div :class="{ 'card-body': isDesktop }">
                <div :class="{ 'card': isDesktop }">
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
                          <div class="row">
                            <div class="col-auto">
                              <span class="avatar">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-text">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                                  <path d="M9 9l1 0" />
                                  <path d="M9 13l6 0" />
                                  <path d="M9 17l6 0" />
                                </svg>
                              </span>
                            </div>
                            <div class="col">
                              <div>
                                <a href="https://google.com" class="text-reset">192-01-81_os1.pdf</a>
                              </div>
                              <div class="text-muted">Poznámka dodavatele k daným přílohám</div>
                            </div>
                          </div>
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
                          <div class="row">
                            <div class="col-auto">
                              <span class="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-md icon-tabler icons-tabler-outline icon-tabler-file-text">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                                  <path d="M9 9l1 0" />
                                  <path d="M9 13l6 0" />
                                  <path d="M9 17l6 0" />
                                </svg>
                              </span>
                            </div>
                            <div class="col">
                              <div>
                                <a href="https://google.com" class="text-reset">192-01-81_os1.pdf</a>
                              </div>
                              <div class="text-muted">Poznámka dodavatele k daným přílohám</div>
                            </div>
                          </div>
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
                <div class="d-flex w-100 align-items-center">
                  <div class="d-flex align-items-center gap-2">
                    <h3 class="card-title">Položky</h3>
                    <span class="text-secondary d-none d-sm-inline">(Celkem 7)</span>
                  </div>
                </div>
              </div>

              <div :class="{ 'card-body': isDesktop }">
                <div :class="{ 'card': isDesktop }">
                  <table class="table table-vcenter table-selectable card-table">
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
                      <tr>
                        <td>Nějaká položka s dlouhým názvem</td>
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
                </div>
              </div>

              <!-- <div class="card-body">
                <div class="list-group overflow-auto">
                  <div class="list-group-item">
                    <div class="row align-items-center gy-3">
                      <div class="col-sm-5">
                        <span>Skříň chodba</span>
                      </div>
                      <div class="col">
                        <div class="form-floating">
                          <input type="date" class="form-control" id="">
                          <label for="floating-password">Termín dokončení dle SoD</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-group-item">
                    <div class="row align-items-center gy-3">
                      <div class="col-sm-5">
                        <span>Nějaká položka s dlouhým názvem</span>
                      </div>
                      <div class="col">
                        <div class="form-floating">
                          <input type="date" class="form-control" id="">
                          <label for="floating-password">Termín dokončení dle SoD</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->

              <!-- TODO: Rozhodni se, které z těch dvou -->

              <!-- <div class="list-group list-group-flush">
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
              </div> -->

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
      </div>
      <!-- * Záložka - Stavba -->
      <div class="tab-pane" id="tab-construction" role="tabpanel">
        todo
      </div>
    </div>

    <!-- * Nahrát soubory -->
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
              <div class="dz-default dz-message m-0">
                <button class="dz-button" type="button">
                  <Empty title="Přetáhněte soubory" subtitle="nebo kliknutím vyberte">
                    <template #icon>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cloud-upload">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                        <path d="M9 15l3 -3l3 3" />
                        <path d="M12 12l0 9" />
                      </svg>
                    </template>
                  </Empty>
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

    <!-- * Stornovat objednávku? -->
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

    <!-- * Dodavatel infobox -->
    <!-- TEMP place -> into component -->
    <div class="modal" id="order-supplier-infobox" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="modal-body text-center py-4">
            <div class="card-title text-center">
              <img src="https://www.barkotex.cz/images/barkotex/logo/barkotex-logo.svg" alt="Barkotex" title="Barkotex" class="d-block mb-2 mx-auto object-fit-contain" style="height: 80px; aspect-ratio: 5 / 3;">
              <span class="badge bg-primary-lt text-primary-lt-fg">Podlahové krytiny</span>
            </div>
            <div class="row gy-2 text-start">
              <div class="col-12">
                <div class="row">
                  <div class="col-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
                    </svg>
                  </div>
                  <div class="col">
                    <div>Šafránková 1238/1</div>
                    <div>Praha 5155 00</div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <div class="col"><a href="tel:+420602280008">+420 602 280 008</a></div>
                </div>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                  </div>
                  <div class="col"><a href="mailto:klient@development-sapeli.cz">klient@development-sapeli.cz</a></div>
                </div>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                      <path d="M3.6 9h16.8" />
                      <path d="M3.6 15h16.8" />
                      <path d="M11.5 3a17 17 0 0 0 0 18" />
                      <path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                  </div>
                  <div class="col"><a href="http://www.sapeli.cz" target="_blank">www.sapeli.cz</a></div>
                </div>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                  </div>
                  <div class="col">Po - Pá 8 - 18h</div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex">
            <RouterLink to="/komunikace" class="card-btn" draggable="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon me-2 text-muted icon-tabler icons-tabler-outline icon-tabler-mail">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              Zpráva
            </RouterLink>
            <!-- ? Sjednat schůzku  -->
            <!-- <RouterLink to="#" class="card-btn" draggable="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon me-2 text-muted icon-tabler icons-tabler-outline icon-tabler-calendar-time">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M15 3v4" />
                <path d="M7 3v4" />
                <path d="M3 11h16" />
                <path d="M18 16.496v1.504l1 1" />
              </svg>
              Schůzka
            </RouterLink> -->
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