<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
</script>

<template>

  <PageTemplate title="Dokumenty">
    <!-- <template #actions>
      <div class="btn-list">
        <button type="button" class="btn">
          Action
        </button>
      </div>
    </template> -->

    <div class="row row-cards">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                Návod na údržbu bytu.pdf <span class="text-secondary">(14&nbsp;kB)</span>
              </div>
              <div class="col">
                <div class="text-secondary">Platnost od</div>
                <div>9.9.2019</div>
              </div>
              <div class="col-auto d-print-none">
                <a href="#" class="btn btn-1" aria-label="Download">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-download">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                  </svg>
                  <span>Stáhnout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                Návod na údržbu bytu<span class="badge bg-red text-red-fg mx-2">PDF</span>
              </div>
              <div class="col">
                <div class="text-secondary">Platnost od</div>
                <div>9.9.2019</div>
              </div>
              <div class="col-auto d-print-none">
                <a href="#" class="btn btn-6 btn-outline-primary" aria-label="Download">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-download">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                  </svg>
                  <span>Stáhnout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                Návod na údržbu bytu
              </div>
              <div class="col">
                <span class="badge bg-red text-red-fg">PDF</span>
                <!-- <span class="text-secondary">(14&nbsp;kB)</span> -->
              </div>
              <div class="col-auto d-print-none">
                <a href="#" class="btn btn-6 btn-primary" aria-label="Download">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-download">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                  </svg>
                  <span>Stáhnout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <a href="#" class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col col-md-8">
                Informace o postupu předávacího řízení (SBKS nedokončená).pdf
                <!-- Návod na údržbu bytu.pdf -->
                <span class="text-secondary">(14&nbsp;kB)</span>
              </div>
              <div class="col d-none d-md-block">
                <div class="text-secondary">Přidáno</div>
                <div>8.9.2019</div>
              </div>
              <div class="col-auto col-md">
                <div class="text-secondary">Platnost od</div>
                <div>9.9.2019</div>
              </div>
              <div class="col-auto d-none d-md-block d-print-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-download">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                  <path d="M7 11l5 5l5 -5" />
                  <path d="M12 4l0 12" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="col-12">
        <a href="#" class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col col-md-7">
                Informace o postupu předávacího řízení (SBKS nedokončená).pdf
                <span class="text-secondary">(14&nbsp;kB)</span>
              </div>
              <div class="col d-none d-md-block text-end">
                <div class="text-secondary">Přidáno</div>
                <div>8.9.2019</div>
              </div>
              <div class="col-auto col-md text-end">
                <div class="text-secondary">Platnost od</div>
                <div>9.9.2019</div>
              </div>
              <div class="col-auto col-md-1 text-end d-print-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-download">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M7 11l5 5l5 -5"></path>
                  <path d="M12 4l0 12"></path>
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-12">
        <a href="#" class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                Informace o postupu předávacího řízení (SBKS nedokončená).pdf
                <span class="text-secondary">(14&nbsp;kB)</span>
              </div>
              <div class="col-auto col-md-2 text-end text-md-start d-none d-md-block">
                <div class="text-secondary">Přidáno</div>
                <div>8.9.2019</div>
              </div>
              <div class="col-auto col-md-2 text-end text-md-start">
                <div class="text-secondary">Platnost od</div>
                <div>9.9.2019</div>
              </div>
              <div class="col-auto text-end d-none d-md-block d-print-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-download">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M7 11l5 5l5 -5"></path>
                  <path d="M12 4l0 12"></path>
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                Informace o postupu předávacího řízení (SBKS nedokončená).pdf
                <span class="text-secondary">(14&nbsp;kB)</span>
              </div>
              <div class="col-auto col-md-2 text-end text-md-start d-none d-md-block">
                <div class="text-secondary">Přidáno</div>
                <div>8.9.2019</div>
              </div>
              <div class="col-auto col-md-2 text-end text-md-start d-none d-md-block">
                <div class="text-secondary">Platnost od</div>
                <div>9.9.2019</div>
              </div>
              <div class="col-auto text-end d-print-none">
                <!-- FIXME: Dropdown hrabe do scrollu -->
                <div class="dropdown">
                  <a href="#" class="btn btn-icon btn-action dropdown-toggle" data-bs-toggle="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="/sample-invoice.pdf">Otevřít</a>
                    <a class="dropdown-item" href="/sample-invoice.pdf" download>Stáhnout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageTemplate>
</template>

<style scoped></style>