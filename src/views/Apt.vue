<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
</script>

<template>

  <!-- NOTE: Pretitle je typ produktu: Byt/Bytová jednotka, Ateliér, Rodinný dům, Komerční prostor atd. -->
  <PageTemplate pretitle="Bytová jednotka" title="192-03-147">
    <!-- <template #actions>
      <div class="btn-list">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <path d="M13.5 6.5l4 4" />
          </svg>
          Přejmenovat
        </button>
      </div>
      <div class="modal" id="exampleModal" tabindex="-1">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div>
                <label class="form-label d-inline-flex" for="apt-name">Název</label>
                <input type="text" class="form-control" name="example-text-input" id="apt-name" placeholder="D 331" />
              </div>
            </div>
            <div class="modal-footer">
              <div class="btn-list">
                <button type="button" class="btn" data-bs-dismiss="modal">Zrušit</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Uložit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template> -->

    <div class="row row-cards">

      <!-- <div class="col-12">
        <div class="card">
          <div class="card-body">
            půdorys? velká ilustrace? ostatní pohledy?
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body space-y-1">
            <h3 class="card-title">Základní údaje</h3>
            <div class="row">
              <div class="col">Dispozice</div>
              <div class="col-auto text-secondary">2+kk</div>
            </div>
            <div class="row">
              <div class="col">Podlaží</div>
              <div class="col-auto text-secondary">3. patro</div>
            </div>
            <div class="row">
              <div class="col">Plocha</div>
              <div class="col-auto text-secondary">174&nbsp;m²</div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-body space-y-1">
            <h3 class="card-title">Místnosti</h3>
            <div class="row">
              <div class="col">Obývací pokoj a kuchyňský kout</div>
              <div class="col-auto text-secondary">23,5&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Pokoj</div>
              <div class="col-auto text-secondary">14&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Koupelna</div>
              <div class="col-auto text-secondary">12,6&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Toaleta</div>
              <div class="col-auto text-secondary">1,6&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Předsíň</div>
              <div class="col-auto text-secondary">5,1&nbsp;m²</div>
            </div>
            <hr class="my-2">
            <div class="row">
              <div class="col">Šatna</div>
              <div class="col-auto text-secondary">4,5&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Komora</div>
              <div class="col-auto text-secondary">3,9&nbsp;m²</div>
            </div>
            <hr class="my-2">
            <div class="row">
              <div class="col">Terasa</div>
              <div class="col-auto text-secondary">15,4&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Předzahrádka</div>
              <div class="col-auto text-secondary">28&nbsp;m²</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body space-y-1">
            <h3 class="card-title">Příslušenství</h3>
            <div class="row">
              <div class="col">Terasa</div>
              <div class="col-auto text-secondary">15,4&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Sklep</div>
              <div class="col-auto">
                <a href="#">
                  PP2 / S24
                  <i class="ti ti-external-link"></i>
                </a>
              </div>
              <div class="col-auto text-secondary">23,5&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Parkování</div>
              <div class="col-auto">
                <a href="#">
                  PP2 / P49
                  <i class="ti ti-external-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            speciální vybavení
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            Timeline? (viz Sabča Figma návrh)
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            Kontaktní osoby (ty v tento okamžik relevantní)
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            GALERIE ?
          </div>
        </div>
      </div> -->

      <div class="col-lg-12">
        <div class="card card-md overflow-hidden">
          <div class="row row-0">
            <!-- vizualizace -->
            <div class="col-12 col-lg-4">
              <img src="https://www.central-group.cz/Uloziste/c5/c5048395-8411-40a4-812e-306447b0961f.jpg" class="w-100 h-100 object-cover" alt="">
            </div>
            <div class="col-12 col-lg">
              <div class="card-body p-md-5">
                <!-- <h2>192-03-147</h2> -->
                <!-- <p class="text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur
                  perferendis sed suscipit velit vitae voluptatem.
                </p> -->
                <div class="datagrid" hidden>
                  <div class="datagrid-item">
                    <div class="datagrid-title">Projekt</div>
                    <div>Rezidenční čtvrť Tesla Hloubětín</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">Lokalita</div>
                    <div>Praha 9 - Hloubětín</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">Bytový dům</div>
                    <div>A</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">Patro</div>
                    <div>2 NP</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">Dispozice</div>
                    <div>3+kk</div>
                  </div>
                  <!-- <div class="datagrid-item">
                    <div class="datagrid-title">Plocha</div>
                    <div>86 m²</div>
                  </div> -->
                </div>
                <div class="mb-3">
                  <h2 class="mb-0">Rezidenční čtvrť Tesla Hloubětín</h2>
                  <h3>Praha 9 - Hloubětín</h3>
                </div>
                <!-- <div class="row text-center text-lg-start">
                  <div class="col">
                    <div class="datagrid-title">Bytový dům</div>
                    <div>A</div>
                  </div>
                  <div class="col">
                    <div class="datagrid-title">Patro</div>
                    <div>2 NP</div>
                  </div>
                  <div class="col">
                    <div class="datagrid-title">Dispozice</div>
                    <div>3+kk</div>
                  </div>
                </div> -->
                <div class="row gy-3">
                  <div class="col-4">
                    <div class="row">
                      <div class="col-auto d-none d-sm-block">
                        <span class="avatar">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 21l18 0" />
                            <path d="M9 8l1 0" />
                            <path d="M9 12l1 0" />
                            <path d="M9 16l1 0" />
                            <path d="M14 8l1 0" />
                            <path d="M14 12l1 0" />
                            <path d="M14 16l1 0" />
                            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                          </svg>
                        </span>
                      </div>
                      <div class="col">
                        <div class="text-secondary">Bytový dům</div>
                        <div>A</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="row">
                      <div class="col-auto d-none d-sm-block">
                        <span class="avatar">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-stack-2">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 4l-8 4l8 4l8 -4l-8 -4" />
                            <path d="M4 12l8 4l8 -4" />
                            <path d="M4 16l8 4l8 -4" />
                          </svg>
                        </span>
                      </div>
                      <div class="col">
                        <div class="text-secondary">Patro</div>
                        <div>2 NP</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="row">
                      <div class="col-auto d-none d-sm-block">
                        <span class="avatar">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-board">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M4 9h8" />
                            <path d="M12 15h8" />
                            <path d="M12 4v16" />
                          </svg>
                        </span>
                      </div>
                      <div class="col">
                        <div class="text-secondary">Dispozice</div>
                        <div>3+kk</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="row">
                      <div class="col-auto d-none d-sm-block">
                        <span class="avatar">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-ruler">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
                            <path d="M4 8l2 0" />
                            <path d="M4 12l3 0" />
                            <path d="M4 16l2 0" />
                            <path d="M8 4l0 2" />
                            <path d="M12 4l0 3" />
                            <path d="M16 4l0 2" />
                          </svg>
                        </span>
                      </div>
                      <div class="col">
                        <div class="text-secondary">Plocha</div>
                        <div>159 m²</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="row">
                      <div class="col-auto d-none d-sm-block">
                        <span class="avatar">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-leaf">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
                            <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
                          </svg>
                        </span>
                      </div>
                      <div class="col">
                        <div class="text-secondary">Energetická třída</div>
                        <div>B</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="row">
                      <div class="col-auto d-none d-sm-block">
                        <span class="avatar">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-compass">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M8 16l2 -6l6 -2l-2 6l-6 2" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 3l0 2" />
                            <path d="M12 19l0 2" />
                            <path d="M3 12l2 0" />
                            <path d="M19 12l2 0" />
                          </svg>
                        </span>
                      </div>
                      <div class="col">
                        <div class="text-secondary">Orientace</div>
                        <div>SV</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- * postup předání old -->
      <!-- <div class="col-lg-5">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Postup předání</h3>
          </div>
          <div class="card-body">
            <ul class="steps steps-green steps-counter steps-vertical border-0 m-0 p-0 ps-2">
              <li class="step-item">
                <h4>Zjišťovací protokol</h4>
                <div class="text-secondary">
                  vysvětlení o co jde a co se po klientovi chce
                </div>
              </li>
              <li class="step-item active">
                <h4>Platby ověřeny</h4>
                <div class="text-secondary">
                  vysvětlení o co jde a co se po klientovi chce
                </div>
              </li>
              <li class="step-item">
                <h4>Splněné podmínky</h4>
                <div class="text-secondary">
                  vysvětlení o co jde a co se po klientovi chce
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div> -->

      <!-- WIP -->
      <div class="col-lg-5">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Postup předání</h3>
          </div>
          <div class="card-body">
            <div class="space-y">
              <!-- * Completed -->
              <div class="row g-3">
                <div class="col-auto">
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-md text-success icon-tabler icons-tabler-outline icon-tabler-circle-check">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg> -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-md text-success icon-tabler icons-tabler-filled icon-tabler-circle-check">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                  </svg>
                </div>
                <div class="col">
                  <strong>Podpis smlouvy</strong>
                  <div class="text-secondary">Kupní smlouva byla podepsána všemi stranami.</div>
                </div>
              </div>
              <!-- * Completed -->
              <div class="row g-3">
                <div class="col-auto">
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-md text-success icon-tabler icons-tabler-outline icon-tabler-circle-check">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg> -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-md text-success icon-tabler icons-tabler-filled icon-tabler-circle-check">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                  </svg>
                </div>
                <div class="col">
                  <strong>Úhrada zálohy</strong>
                  <div class="text-secondary">Záloha ve výši 10 % kupní ceny byla uhrazena.</div>
                </div>
              </div>
              <!-- * Not completed -->
              <div class="row g-3">
                <div class="col-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-md text-secondary icons-tabler-outline icon-tabler-circle">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  </svg>
                </div>
                <div class="col">
                  <strong>Zjišťovací protokol</strong>
                  <div class="text-secondary">Prohlídka jednotky a sepsání zjišťovacího protokolu.</div>
                </div>
              </div>
              <!-- * Unavailable not completed -->
              <div class="row g-3 text-secondary">
                <div class="col-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-md icon-tabler icons-tabler-outline icon-tabler-circle-dashed">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
                    <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
                    <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
                    <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
                    <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
                    <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
                    <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
                    <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
                  </svg>
                </div>
                <div class="col">
                  <strong>Doplatek kupní ceny</strong>
                  <div class="text-secondary">Úhrada zbývající části kupní ceny.</div>
                  <div class="fs-5">Vyžaduje dokončit: Zjišťovací protokol</div>
                </div>
              </div>
              <!-- * Unavailable not completed -->
              <div class="row g-3 text-secondary">
                <div class="col-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-md icon-tabler icons-tabler-outline icon-tabler-circle-dashed">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
                    <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
                    <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
                    <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
                    <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
                    <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
                    <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
                    <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
                  </svg>
                </div>
                <div class="col">
                  <strong>Předání klíčů</strong>
                  <div class="text-secondary">Fyzické předání jednotky a podpis předávacího protokolu.</div>
                  <div class="fs-5">Vyžaduje dokončit: Doplatek kupní ceny</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- WIP - Timeline bytu -->
      <!-- terminy splatnosti vsech faktur; stavebni milniky, klientske terminy (terminove sekce), nastehovani -->
      <!-- budou tam i uvery pro uverove financovaní -->
      <div class="col">
        <div class="card card-md">
          <div class="card-header">
            <h3 class="card-title">Časová osa</h3>
          </div>
          <div class="card-body">
            <div class="steps steps-vertical border-0 m-0 p-0 ps-2">

              <!-- TODO: Přidat splatnosti faktur (platby k zaplacení) -->

              <!-- TODO: ke klientským termínům přidat odkaz na Žádosti a změny, ať si může provést změny -->

              <div class="step-item inactive">
                <div class="row">
                  <div class="col-auto">
                    <span class="avatar">
                      <!-- Výstavba - crane -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-crane">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 21h6" />
                        <path d="M9 21v-18l-6 6h18" />
                        <path d="M9 3l10 6" />
                        <path d="M17 9v4a2 2 0 1 1 -2 2" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="text-secondary">1.6.2022</div>
                    <div class="fw-semibold">Zahájení výstavby</div>
                  </div>
                </div>
              </div>

              <div class="step-item inactive">
                <div class="row">
                  <div class="col-auto">
                    <span class="avatar">
                      <!-- Klientské termíny - paint -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-paint">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -2" />
                        <path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2" />
                        <path d="M10 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="text-secondary">16.9.2022</div>
                    <div class="fw-semibold">1. termínová sekce</div>
                  </div>
                </div>
              </div>

              <div class="step-item inactive">
                <div class="row">
                  <div class="col-auto">
                    <span class="avatar">
                      <!-- Klientské termíny - paint -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-paint">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -2" />
                        <path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2" />
                        <path d="M10 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="text-secondary">12.12.2022</div>
                    <div class="fw-semibold">2. termínová sekce</div>
                  </div>
                </div>
              </div>

              <div class="step-item inactive">
                <div class="row">
                  <div class="col-auto">
                    <span class="avatar">
                      <!-- Klientské termíny - paint -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-paint">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -2" />
                        <path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2" />
                        <path d="M10 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="text-secondary">14.7.2023</div>
                    <div class="fw-semibold">3. termínová sekce</div>
                  </div>
                </div>
              </div>


              <div class="step-item">
                <div class="row">
                  <div class="col-auto">
                    <span class="avatar">
                      <!-- Výstavba - crane -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-crane">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 21h6" />
                        <path d="M9 21v-18l-6 6h18" />
                        <path d="M9 3l10 6" />
                        <path d="M17 9v4a2 2 0 1 1 -2 2" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="text-secondary">29.2.2024</div>
                    <div class="fw-semibold">Dokončení hrubé stavby</div>
                  </div>
                </div>
              </div>

              <div class="step-item">
                <div class="row">
                  <div class="col-auto">
                    <span class="avatar">
                      <!-- Klientské termíny - paint -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-paint">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -2" />
                        <path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2" />
                        <path d="M10 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="text-secondary">30.8.2024</div>
                    <div class="fw-semibold">4. termínová sekce</div>
                  </div>
                </div>
              </div>


              <div class="step-item">
                <div class="row">
                  <div class="col-auto">
                    <span class="avatar">
                      <!-- Předání - key -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-key">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0" />
                        <path d="M15 9h.01" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="text-secondary">25.10.2024</div>
                    <div class="fw-semibold">Podání prohlášení vlastníka</div>
                  </div>
                </div>
              </div>

              <div class="step-item">
                <div class="row">
                  <div class="col-auto">
                    <span class="avatar">
                      <!-- Výstavba - crane -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-crane">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 21h6" />
                        <path d="M9 21v-18l-6 6h18" />
                        <path d="M9 3l10 6" />
                        <path d="M17 9v4a2 2 0 1 1 -2 2" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="text-secondary">31.12.2024</div>
                    <div class="fw-semibold">Dokončení stavby</div>
                  </div>
                </div>
              </div>

              <div class="step-item">
                <div class="row">
                  <div class="col-auto">
                    <span class="avatar">
                      <!-- Předání - key -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-key">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0" />
                        <path d="M15 9h.01" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="text-secondary">20.3.2025</div>
                    <div class="fw-semibold">Kolaudace</div>
                  </div>
                </div>
              </div>

              <div class="step-item">
                <div class="row">
                  <div class="col-auto">
                    <span class="avatar">
                      <!-- Předání - key -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-key">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0" />
                        <path d="M15 9h.01" />
                      </svg>
                    </span>
                  </div>
                  <div class="col">
                    <div class="text-secondary">28.2.2025</div>
                    <div class="fw-semibold">Nastěhování</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Galerie</h3>
          </div>
          <div class="card-body">
            <!-- TODO: Galerie -->
          </div>
        </div>
      </div>

    </div>
  </PageTemplate>

</template>

<style scoped>

  /* .floor-plan {
    max-height: 300px;
  } */
  /* WIP */
  .step-item.inactive {
    color: var(--tblr-disabled-color);
  }

  /* * Custom class .inactive */
  .step-item.inactive:after, .step-item.inactive:before {
    background: var(--tblr-steps-inactive-color);
  }
</style>