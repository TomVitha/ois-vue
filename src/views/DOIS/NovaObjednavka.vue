<script setup lang="ts">
  import { computed, ref, onMounted } from 'vue';
  import PageTemplate from '@/components/PageTemplate.vue'
  import Empty from '@/components/Empty.vue'
  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  import { useDropzone } from '@/composables/useDropzone'
  import 'dropzone/dist/dropzone.css'
  import TomSelect from 'tom-select'

  const unsavedChanges = ref(true)
  function handleBack(navigate: () => void) {
    if (!unsavedChanges.value || (unsavedChanges.value && confirm("Neuložené změny budou ztraceny. Opravdu chcete odejít?"))) {
      navigate()
    }
  }

  const isDesktop = matchesMediaQuery('(min-width: 992px)')

  const steps = ['Objednávka', 'Položky', 'Přílohy'] as const
  const activeStepIndex = ref(0)

  const isFirstStep = computed(() => activeStepIndex.value === 0)
  const isLastStep = computed(() => activeStepIndex.value === steps.length - 1)
  const maxReachableStepIndex = computed(() => Math.min(activeStepIndex.value + 1, steps.length - 1))

  function goToStep(index: number) {
    if (index < 0 || index > maxReachableStepIndex.value) {
      return
    }

    activeStepIndex.value = index
  }

  function goToPreviousStep() {
    if (!isFirstStep.value) {
      activeStepIndex.value -= 1
    }
  }

  function goToNextStep() {
    if (!isLastStep.value) {
      activeStepIndex.value += 1
    }
  }

  // NOTE: dzOrderAttachments.value is available for manual calls
  const { dropzone: dzOrderAttachments } = useDropzone({
    selector: '#dropzone-order-attachments',
    options: {
      url: './',
    },
  })

  // Initialize multiple Tom-selects

  const tomSelectSelectors = ['#filter-item', '#order-input-supplier'] as const
  const tomSelectOptions = {
    allowEmptyOption: false,
    plugins: ['dropdown_input'],
  }

  onMounted(() => {
    tomSelectSelectors.forEach((selector) => {
      const element = document.querySelector(selector)

      if (element) {
        new TomSelect(selector, tomSelectOptions)
      }
    })
  })

</script>

<template>
  <PageTemplate :title="`Nová objednávka 999-2025-ÚVD`" back-to="/dois/objednavky-uvd" @back="handleBack">

    <div class="row mb-5">
      <div class="col-lg-8 mx-auto">
        <div class="steps steps-counter p-0 m-0 border-0">
          <button
            v-for="(step, index) in steps"
            :key="step"
            type="button"
            class="step-item border-0 bg-transparent"
            :class="{ active: activeStepIndex === index }"
            :disabled="index > maxReachableStepIndex"
            @click="goToStep(index)">
            {{ step }}
          </button>
        </div>
      </div>
    </div>

    <div class="tab-content">
      <!-- * Záložka: Objednávka -->
      <div class="tab-pane" :class="{ 'active show': activeStepIndex === 0 }" id="tab-order-info" role="tabpanel">
        <div class="row row-cards">
          <div class="col-12">
            <div class="card card-md">
              <div class="card-body">
                <div class="row gy-3">
                  <div class="col-12">
                    <div class="row g-3">
                      <div class="col-12">
                        <div class="text-muted">Interní číslo</div>
                        <div>
                          <span class="h2">999-2025-ÚVD</span>
                          <span class="status status-info align-text-bottom ms-2">Nová</span>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-6">
                        <label class="form-label" for="order-input-date-sod">Číslo SoD</label>
                        <input type="text" class="form-control" placeholder="Číslo SoD...">
                      </div>
                      <div class="col-md-6 col-lg-6">
                        <label class="form-label" for="order-input-date-sod">Katalogové číslo</label>
                        <input type="text" class="form-control" disabled>
                      </div>
                      <div class="col-md-6 col-lg-6">
                        <label class="form-label" for="order-input-date-sod">Datum podpisu SoD</label>
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
                          <input type="date" class="form-control" disabled>
                        </div>
                      </div>
                      <!-- ? Budeme vůbec zobrazovat při vytvoření, když nejde nastavit, a nastaví se samo až v budoucnu ? -->
                      <!-- <div class="col-md-6 col-lg-6">
                        <label class="form-label" for="order-input-date-sod">Datum akceptace objednávky</label>
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
                          <input type="date" class="form-control" disabled>
                        </div>
                      </div> -->
                      <div class="col-md-6 col-lg-6">
                        <label class="form-label" for="order-input-supplier">Dodavatel</label>
                        <select class="form-select" autocomplete="off" id="order-input-supplier">
                          <option selected disabled>vyberte</option>
                          <option value="1">Možnost 1</option>
                          <option value="2">Možnost 2</option>
                          <option value="3">Možnost 3</option>
                          <option value="4">Možnost 4</option>
                          <option value="5">Možnost 5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- * Záložka: Položky -->
      <div class="tab-pane" :class="{ 'active show': activeStepIndex === 1 }" id="tab-items" role="tabpanel">
        <div class="row row-cards">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <div class="d-flex align-items-center gap-2">
                  <h3 class="card-title">Položky</h3>
                  <span class="text-secondary d-none d-sm-inline">(Celkem x)</span>
                </div>
                <div class="btn-list card-actions">
                  <button
                    type="button"
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
              <!-- * Empty state -->
              <!-- <Empty title="Žádné Položky" subtitle="Přidejte položky kliknutím na tlačítko 'Přidat'." /> -->
              <!-- * Výpis přidaných -->
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
                        <td>
                          <!-- NOTE: Tom Select -->
                          <select class="form-select" autocomplete="off" id="filter-item">
                            <option selected disabled>vyberte</option>
                            <option value="1">Možnost 1</option>
                            <option value="2">Možnost 2</option>
                            <option value="3">Možnost 3</option>
                            <option value="4">Možnost 4</option>
                            <option value="5">Možnost 5</option>
                          </select>
                        </td>
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
            </div>
          </div>
        </div>
      </div>

      <!-- * Záložka: Přílohy -->
      <div class="tab-pane" :class="{ 'active show': activeStepIndex === 2 }" id="tab-attachments" role="tabpanel">
        <div class="row row-cards">
          <!-- * Přílohy -->
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <div class="d-flex align-items-center gap-2">
                  <h3 class="card-title">Přílohy</h3>
                  <span class="text-secondary d-none d-sm-inline">(Celkem x)</span>
                </div>
                <div class="btn-list card-actions">
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
              <!-- * Empty state -->
              <!-- <Empty title="Žádné Přílohy" subtitle="Přidejte přílohy kliknutím na tlačítko 'Přidat'." /> -->
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

    </div>

    <div class="col-12 mt-5">
      <div class="btn-list justify-content-center">
        <button type="button" class="btn btn-link" :disabled="isFirstStep" @click="goToPreviousStep">Zpět</button>
        <button v-if="!isLastStep" type="button" class="btn" @click="goToNextStep">Další</button>
        <RouterLink to="/dois/objednavky-uvd" class="btn btn-primary">{{ !isLastStep ? 'Uložit' : 'Dokončit' }}</RouterLink>
      </div>
    </div>

    <!-- * Nahrát soubory -->
    <!-- TODO: Place into component -->
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

  </PageTemplate>
</template>

<style scoped>

  /* TEMP */
  .collapsing,
  .accordion-button-toggle {
    transition: none !important;
  }
</style>