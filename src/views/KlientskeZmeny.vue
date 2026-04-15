<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import AccordionGroup from '@/components/AccordionGroup.vue'
  import AccordionItem from '@/components/AccordionItem.vue'
</script>

<template>

  <PageTemplate title="Klientské změny">

    <div class="row" data-bs-spy="scroll" data-bs-target="#pills">

      <!-- TODO: Někde by mělo nějak uvedeno, že pokud si chceš opravdu udělat změnu, musíš nás kontaktovat a budeš muset k nám fyzicky přijít -->

      <div class="col-xl-10">
        <div class="row row-deck row-cards">
          <div class="col-12">
            <h3 class="mt-3 mb-0">Termínové sekce</h3>
          </div>
          <div class="col-12">
            <div class="card card-md">
              <div class="card-body">
                <div class="mb-3">
                  <h3 class="mb-0">1. termínová sekce</h3>
                  <div class="d-flex align-items-center gap-3">
                    <div class="text-secondary">Do: 16.9.2022</div>
                    <span class="badge bg-danger-lt text-danger">Po termínu</span>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus hic quis vero blanditiis praesentium architecto sint recusandae debitis, assumenda eos error dolorum dignissimos atque, eveniet saepe ab neque commodi deleniti!
                </p>
              </div>
              <div class="card-body">
                <div class="mb-3">
                  <h3 class="mb-0">2. termínová sekce</h3>
                  <div class="d-flex align-items-center gap-3">
                    <div class="text-secondary">Do: 12.12.2022</div>
                    <span class="badge bg-danger-lt text-danger">Po termínu</span>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus hic quis vero blanditiis praesentium architecto sint recusandae debitis, assumenda eos error dolorum dignissimos atque, eveniet saepe ab neque commodi deleniti!
                </p>
              </div>
              <div class="card-body">
                <div class="mb-3">
                  <h3 class="mb-0">3. termínová sekce</h3>
                  <div class="d-flex align-items-center gap-3">
                    <div class="text-secondary">Do: 14.7.2023</div>
                    <span class="badge bg-warning-lt text-warning">Brzy končí</span>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus hic quis vero blanditiis praesentium architecto sint recusandae debitis, assumenda eos error dolorum dignissimos atque, eveniet saepe ab neque commodi deleniti!
                </p>
              </div>
              <div class="card-body">
                <div class="mb-3">
                  <h3 class="mb-0">4. termínová sekce</h3>
                  <div class="d-flex align-items-center gap-3">
                    <div class="text-secondary">Do: 30.8.2023</div>
                    <!-- <span class="badge bg-info-lt text-info">Probíhá</span> -->
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus hic quis vero blanditiis praesentium architecto sint recusandae debitis, assumenda eos error dolorum dignissimos atque, eveniet saepe ab neque commodi deleniti!
                </p>
              </div>
            </div>
          </div>
          <div class="col-12">
            <h3 class="mt-3 mb-0" id="dodavatele">Smluvní dodavatelé</h3>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <div class="card-title text-center">
                  <img src="https://www.barkotex.cz/images/barkotex/logo/barkotex-logo.svg" alt="Barkotex" title="Barkotex" class="d-block mb-2 mx-auto object-fit-contain" style="height: 80px; aspect-ratio: 5/3;">
                  <!-- Barkotex -->
                  <!-- <span class="badge">Podlahové krytiny</span> -->
                  <span class="badge bg-primary-lt text-primary-lt-fg">Podlahové krytiny</span>
                </div>
                <div class="mb-3">Výběr nadstandardních podlahových krytin. Možnost výběru širokého sortimentu dřevěných a laminátových podlah, vinylu, přírodního linolea, celoplošných a kusových koberců.</div>
                <div class="row gy-2">
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
                        <div>Poděbradská 777/9a</div>
                        <div>190 00 Praha 9 - Vysočany</div>
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
                      <div class="col"><a href="tel:+420123456789">+420 123 456 789</a></div>
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
                      <div class="col"><a href="mailto:kontakt@dodavatel.cz">kontakt@dodavatel.cz</a></div>
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
                      <div class="col"><a href="http://www.dodavatel.cz" target="_blank">www.dodavatel.cz</a></div>
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
                      <div class="col">Po - Pá 10 - 18h</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <div class="card-title text-center">
                  <img src="https://www.profilighting.cz/images/layout/logo.png" alt="Profilighting" title="Profilighting" class="d-block mb-2 mx-auto object-fit-contain" style="height: 80px; aspect-ratio: 5/3;">
                  <!-- Profilighting -->
                  <!-- <span class="badge">Osvětlení</span> -->
                  <span class="badge bg-primary-lt text-primary-lt-fg">Osvětlení</span>
                </div>
                <div class="mb-3">Výběr vnitřních svítidel od renomovaných tuzemských i zahraničních výrobců, klasická svítidla nebo možnost výroby svítidel na zakázku.</div>
                <div class="row gy-2">
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
                        <div>Sluneční náměstí 2583/12</div>
                        <div>158 OO Praha 5</div>
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
                      <div class="col"><a href="tel:+420777120208">+420 777 120 208</a></div>
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
                      <div class="col"><a href="mailto:kontakt@profilighting.cz">kontakt@profilighting.cz</a></div>
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
                      <div class="col"><a href="http://www.profilighting.cz" target="_blank">www.profilighting.cz</a></div>
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
                      <div class="col">Po - Pá 8 - 17h</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <div class="card-title text-center">
                  <img src="https://www.janjunek.com/dist/svg/Sapeli.svg" alt="Sapeli" title="Sapeli" class="d-block mb-2 mx-auto object-fit-contain" style="height: 80px; aspect-ratio: 5/3;">
                  <!-- Sapeli -->
                  <!-- <span class="badge">Interiérové dveře</span> -->
                  <span class="badge bg-primary-lt text-primary-lt-fg">Interiérové dveře</span>
                </div>
                <div class="mb-3">Výběr nadstandardních interiérových dveří</div>
                <div class="row gy-2">
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
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TODO: pod klient. termínama odkaz na vzorkovnu a int studio -->

  </PageTemplate>

</template>

<style scoped></style>