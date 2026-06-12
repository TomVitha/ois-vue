<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router'
  import PageTemplate from '@/components/PageTemplate.vue'
  import Empty from '@/components/Empty.vue'
  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  import { useDropzone } from '@/composables/useDropzone'
  import 'dropzone/dist/dropzone.css'
  import OrderComments from '@/components/DOIS/OrderComments.vue'
  import { useDoisOrders } from '@/stores/dois-orders'
  const doisOrdersStore = useDoisOrders()


  const unsavedChanges = ref(false)
  function handleBack(navigate: () => void) {
    if (!unsavedChanges.value || (unsavedChanges.value && confirm("Neuložené změny budou ztraceny. Opravdu chcete odejít?"))) {
      navigate()
    }
  }

  const route = useRoute()
  const isDesktop = matchesMediaQuery('(min-width: 992px)')

  // NOTE: dzOrderAttachments.value is available for manual calls
  const { dropzone: dzOrderAttachments } = useDropzone({
    selector: '#dropzone-order-attachments',
    options: {
      url: './',
    },
  })

  // TEMP - hard-coded natáhnout komentáře k dané objednávce
  const comments = computed(() => {
    return doisOrdersStore.getOrderComments(0)
  })

</script>

<template>
  <PageTemplate :title="`Objednávka ${route.params.orderId}`" back-to="/dois/objednavky-uvd" @back="handleBack">

    <template #actions>
      <div class="btn-list">
        <!-- NOTE: Akce v dropdownu pro mobil -->
        <div v-if="!isDesktop" class="dropdown">
          <a class="btn dropdown-toggle btn-outline" data-bs-toggle="dropdown">
            Akce
          </a>
          <div class="dropdown-menu dropdown-menu-end">
            <button class="dropdown-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
              Odeslat objednávku
            </button>
            <button class="dropdown-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
              Připojit objednávku
            </button>
            <div class="dropdown-divider"></div>
            <button class="dropdown-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
              </svg>
              Náhled
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
            <div class="dropdown-divider"></div>
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
          Zrušit změny
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
      <!-- NOTE: Akce v toolbaru pro desktop -->
      <div v-if="isDesktop" class="btn-list mb-3">
        <button class="btn btn-sm btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 14l11 -11" />
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
          </svg>
          Odeslat objednávku
        </button>
        <button class="btn btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
          Připojit objednávku
        </button>
        <div class="dropdown">
          <button class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown">
            Dokumenty
          </button>
          <div class="dropdown-menu">
            <button class="dropdown-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
              </svg>
              Náhled
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
          </div>
        </div>
        <button class="btn btn-sm btn-outline btn-danger" data-bs-toggle="modal" data-bs-target="#order-cancel-confirm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cancel">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M18.364 5.636l-12.728 12.728" />
          </svg>
          Stornovat
        </button>
      </div>

      <!-- * Záložky -->
      <ul class="nav nav-underline mb-n3 flex-nowrap scroll-x" data-bs-toggle="tabs" role="tablist">
        <li class="nav-item" role="presentation">
          <a href="#tab-order-info" class="nav-link active" data-bs-toggle="tab" aria-selected="true" role="tab" draggable="false">Objednávka</a>
        </li>
        <li class="nav-item" role="presentation">
          <a href="#tab-items" class="nav-link" data-bs-toggle="tab" aria-selected="false" role="tab" draggable="false">Položky</a>
        </li>
        <li class="nav-item" role="presentation">
          <a href="#tab-attachments" class="nav-link" data-bs-toggle="tab" aria-selected="false" role="tab" draggable="false">Přílohy</a>
        </li>
        <li class="nav-item" role="presentation">
          <a href="#tab-construction" class="nav-link" data-bs-toggle="tab" aria-selected="false" role="tab" draggable="false">Stavba</a>
        </li>
        <!-- TODO: Komunikace -->
        <li class="nav-item" role="presentation">
          <a href="#tab-communication" class="nav-link" data-bs-toggle="tab" aria-selected="false" role="tab" draggable="false">Komunikace</a>
        </li>
      </ul>

    </template>

    <div class="tab-content">
      <!-- * Záložka: Objednávka -->
      <div class="tab-pane active show" id="tab-order-info" role="tabpanel">
        <div class="row row-cards">
          <div class="col-12">
            <div class="card card-md">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-xxl-10">
                    <div class="row g-3">
                      <div class="col-12">
                        <div class="text-muted">Interní číslo</div>
                        <div>
                          <span class="h2">{{ route.params.orderId }}</span>
                          <span class="status status-info align-text-bottom ms-2">Nová</span>
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
                      <div class="col-12 col-md-6 d-flex">
                        <div class="text-muted w-50">Dodavatel</div>
                        <div class="w-50">Společnost s.r.o.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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

          <div class="col-12">
            <div class="card card-md">
              <div class="card-header">
                <h3 class="card-title">Dodavatel</h3>
              </div>
              <div class="card-body">
                <div class="row gy-3">
                  <div class="col-12">
                    <span class="form-label">Poznámka dodavatele</span>
                    <p class="form-control-plaintext">Tohle je ten nejhezčí byt, ve kterém jsem kdy byl.</p>
                  </div>
                  <div class="col-12">
                    <label class="form-label" for="order-technician-note">Poznámka technika</label>
                    <textarea class="form-control" name="order-technician-note" id="order-technician-note" rows="1" placeholder="Poznámka technika..." style="resize: none; field-sizing: content;"></textarea>
                  </div>
                  <div class="col-xl-6">
                    <label class="form-label" for="order-flaws">Vady</label>
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
        </div>
      </div>

      <!-- * Záložka: Položky -->
      <div class="tab-pane" id="tab-items" role="tabpanel">
        <div class="row row-cards">
          <div class="col-12">
            <div class="card">
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

      <!-- * Záložka: Přílohy -->
      <div class="tab-pane" id="tab-attachments" role="tabpanel">
        <div class="row row-cards">
          <!-- * Přílohy -->
          <!-- TODO: Předělej položky pomocí <div> (a na mobilu skryt checkboxy?) -->
          <div class="col-12">
            <div class="card">
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
                            <div class="dropdown-menu dropdown-menu-end">
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
        </div>
      </div>

      <!-- * Záložka: Stavba -->
      <div class="tab-pane" id="tab-construction" role="tabpanel">
        <div class="row row-cards">
          <div class="col-12">
            <div class="card card-md">
              <div class="card-body">
                <div class="row gy-3">
                  <div class="col-12 col-lg-4">
                    <label for="order-construction-readiness" class="form-label">Připravenost stavba</label>
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
                      <input type="date" class="form-control" name="order-construction-readiness" id="order-construction-readiness">
                    </div>
                  </div>
                  <div class="col">
                    <label for="order-construction-note" class="form-label">Poznámka stavba</label>
                    <input type="text" class="form-control" name="order-construction-note" id="order-construction-note" placeholder="Poznámka...">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TODO -->
      <!-- * Záložka: Komunikace -->
      <div class="tab-pane" id="tab-communication" role="tabpanel">
        <div class="row row-cards">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <OrderComments :comments="comments" />
              </div>
            </div>
          </div>
        </div>
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

  </PageTemplate>
</template>

<style scoped>

  /* TEMP */
  .collapsing,
  .accordion-button-toggle {
    transition: none !important;
  }


</style>