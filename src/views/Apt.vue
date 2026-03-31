<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'

  import Handover from '@/components/Handover.vue'
  import HandoverItem from '@/components/HandoverItem.vue'

  import Milestones from '@/components/Milestones.vue'
  import MilestonesItem from '@/components/MilestonesItem.vue'
</script>

<template>

  <!-- NOTE: Pretitle je typ produktu: Byt/Bytová jednotka, Ateliér, Rodinný dům, Komerční prostor atd. -->
  <PageTemplate pretitle="Bytová jednotka" title="192-03-147">

    <div class="row row-cards">

      <div class="row row-cards">
        <div class="col-lg-6">
          <div class="row row-deck row-cards">
            <!-- sekce 1 -->
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
            <!-- sekce 2 -->
            <div class="col-12">
              <div class="card card-md overflow-hidden">
                <div class="row row-0">
                  <!-- vizualizace -->
                  <div class="col-12">
                    <img src="https://www.central-group.cz/Uloziste/c5/c5048395-8411-40a4-812e-306447b0961f.jpg" class="w-100 object-cover" alt="">
                  </div>
                  <div class="col-12">
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
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row row-deck row-cards">
            <div class="col-12">
              <!-- WIP: postup předání -->
              <Handover>
                <HandoverItem title="Podpis smlouvy" description="Kupní smlouva byla podepsána všemi stranami." status="done" />
                <HandoverItem title="Úhrada zálohy" description="Záloha ve výši 10 % kupní ceny byla uhrazena." status="done" />
                <HandoverItem title="Zjišťovací protokol" description="Prohlídka jednotky a sepsání zjišťovacího protokolu." status="incomplete" />
                <HandoverItem title="Doplatek kupní ceny" description="Úhrada zbývající části kupní ceny." status="unavailable" :dependencies="['Zjišťovací protokol']" />
                <HandoverItem title="Předání klíčů" description="Fyzické předání jednotky a podpis předávacího protokolu." status="unavailable" :dependencies="['Doplatek kupní ceny']" />
              </Handover>
            </div>

            <!-- WIP - Timeline bytu component -->
            <div class="col-12">
              <div class="col-12">
                <div class="card card-md">
                  <div class="card-header">
                    <h3 class="card-title">Časová osa / Milníky / Roadmap</h3>
                  </div>
                  <div class="card-body">
                    <Milestones>
                      <MilestonesItem title="Zahájení výstavby" date="2026-06-01" category="construction" status="passed" />
                      <MilestonesItem title="1. termínová sekce" date="2022-09-16" category="changes" status="passed" />
                      <MilestonesItem title="2. termínová sekce" date="2022-12-01" category="changes" status="passed" />
                      <MilestonesItem title="3. termínová sekce" date="2023-07-14" category="changes" status="passed" />
                      <MilestonesItem title="Dokončení hrubé stavby" date="2024-02-29" category="construction" status="upcoming" />
                      <MilestonesItem title="4. termínová sekce" date="2024-08-30" category="changes" status="upcoming" />
                      <MilestonesItem title="Podání prohlášení vlastníka" date="2024-10-25" category="handover" status="upcoming" />
                      <MilestonesItem title="Dokončení stavby" date="2024-12-31" category="construction" status="upcoming" />
                      <MilestonesItem title="Kolaudace" date="2025-03-20" category="handover" status="upcoming" />
                      <MilestonesItem title="Nastěhování" date="2025-03-25" category="handover" status="upcoming" />
                    </Milestones>
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
        </div>
      </div>







    </div>
  </PageTemplate>

</template>

<style scoped></style>