<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import PaymentItem from '@/components/Payment/PaymentItem.vue'
  import PaymentDialog from '@/components/Payment/PaymentDialog.vue'
  import DocumentItem from '@/components/DocumentItem.vue'
  import ContactBlock from '@/components/ContactCard.vue'
</script>

<template>

  <PageTemplate pretitle="Dobrý den" title="Vítejte ve svém klientském portálu">
    <!-- <template #actions>
      <div class="btn-list">
        <button class="btn btn-primary">Primary</button>
        <a href="#" class="btn">Secondary</a>
      </div>
    </template> -->

    <div class="row gx-5 gy-3">
      <div class="col-xl-3">
        <div class="card h-100">
          <div class="card-body">
            idk asi osobní údaje ?
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row row-deck row-cards">

          <!-- * Finanční bilance -->
          <!-- ! hidden -->
          <!-- <div class="col-12">
            <div class="card card-md">
              <div class="card-header">
                <h3 class="card-title">Finanční bilance</h3>
                <div class="ms-auto lh-1">
                  <div class="dropdown">
                    <a class="dropdown-toggle text-secondary" id="financial-balance-units-dropdown" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dohromady</a>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="financial-balance-units-dropdown">
                      <a class="dropdown-item active" href="#" aria-current="true">Dohromady</a>
                      <a class="dropdown-item" href="#">Jednotlivě</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row gy-2">
                  <div class="col-12 col-md-4">
                    <span class="subheader">Celá částka</span>
                    <p class="h1 m-0">35&nbsp;780&nbsp;000&nbsp;Kč</p>
                  </div>
                  <div class="col-12 col-md-4">
                    <span class="subheader">Zaplaceno</span>
                    <p class="h1 m-0 text-green">24&nbsp;866&nbsp;391&nbsp;Kč</p>
                  </div>
                  <div class="col-12 col-md-4">
                    <span class="subheader">Zbývá zaplatit</span>
                    <p class="h1 m-0 text-red">10&nbsp;913&nbsp;609&nbsp;Kč</p>
                  </div>
                </div>
              </div>
            </div>
          </div> -->

          <!-- ? Setup block -->
          <!-- <div class="col-lg-4">
            <div class="card overflow-hidden">
              <div id="carousel-1" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="card-body bg-primary-lt text-center">
                      <div class="text-body space-y-2 align-items-center">
                        <img src="https://tabler.io/_next/image?url=%2Fillustrations%2Fdark%2Fclock-and-cat.png&w=800&q=75" alt="" srcset="" width="150">
                        <div class="card-title m-0">Add a property</div>
                        <div>Add your first property to get started using TenantCloud</div>
                        <a href="#" class="text-primary">Get started</a>
                        <small class="text-secondary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-stopwatch">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0z" />
                            <path d="M14.5 10.5l-2.5 2.5" />
                            <path d="M17 8l1 -1" />
                            <path d="M14 3h-4" />
                          </svg>
                          Est. 2 min set up
                        </small>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" alt="" src="https://imagefaker.access.mx.com/1600x800?text=Step%201" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" alt="" src="https://imagefaker.access.mx.com/1600x800?text=Step%202" />
                  </div>
                </div>
                <a class="carousel-control-prev" data-bs-target="#carousel-1" role="button" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" data-bs-target="#carousel-1" role="button" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
            </div>
          </div> -->

          <!-- * platby po splatnosti -->
          <div class="col-12 mt-3">
            <h3 class="m-0">Po splatnosti</h3>
          </div>
          <div class="col-12">
            <div class="card">
              <!-- <div class="card-header">
                <h3 class="card-title">Po splatnosti</h3>
              </div> -->
              <ul class="list-group list-group-flush">
                <PaymentItem title="Výmalba společných prostor" duedate="2024-01-01" :amount="12000" :paid="0" />
              </ul>
            </div>
          </div>

          <!-- * blížící se platby (např v pristich 7 dnech) - výrazně co jsi nezaplatil nebo co máš zaplaceno -->
          <div class="col-12 mt-3">
            <h3 class="m-0">Blížící se platby -- za všechny byty (přidat označení bytu do těla platby?)</h3>
          </div>
          <div class="col-12">
            <div class="card">
              <!-- <div class="card-header">
                <h3 class="card-title">Blížící se platby</h3>
              </div> -->
              <div class="list-group list-group-flush">
                <PaymentItem title="Oprava střechy" duedate="2025-08-03" :amount="22000" :paid="0" />
                <PaymentItem title="Vytunelování společnosti" duedate="2025-08-04" :amount="33450" :paid="0" />
              </div>
            </div>
          </div>

          <!-- DEV: One dialog for all payments -->
          <!-- NOTE: Obviously each payment should have its own dialog instance -->
          <PaymentDialog
            :amount="50000"
            accountNumber="670100-1234567890 / 6210"
            :varSymbol="7464685"
            message="192-03-147 KD1"
          />

          <!-- ! REDO ! This should take you to the Message, where you "sign" the doc (there are no documents to display here) ! -->
          <!-- * dokumenty k podepsání (které ještě nebyly podepsány) -->
          <div class="col-12">
            <h3 class="mt-3 mb-0">Dokumenty k podepsání -- BLBĚ !!</h3>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="list-group list-group-flush">
                <DocumentItem title="Informace o postupu předávacího řízení (SBKS nedokončená).pdf" filesize="14 kB" dateAdded="3.2.2025" dateValid="4.2.2025" />
              </div>
            </div>
          </div>
          <!-- * blížící se termínovky - termín výběrů -->
          <div class="col-12">
            <h3 class="mt-3 mb-0">Blížící se termíny klientských změn</h3>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="list-group list-group-flush">
                <div class="list-group-item">cislo bytu/smlouvy - n-ta terminova sekce - 1 veta kratkeho popisu</div>
              </div>
            </div>
          </div>

          <!-- DEV Další -->
          <!-- <div class="col-12">
            <h3 class="mt-3 mb-0">další...</h3>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="list-group list-group-flush">
                <div class="list-group-item">? kontrola (potvrzení) osobních údajů (jednou za čas)</div>
                <div class="list-group-item">? Základní kontaktní osoby</div>
                <div class="list-group-item">? Propagace</div>
              </div>
            </div>
          </div> -->


        </div>
      </div>
      <div class="col-12">
        <div class="row row-deck row-cards">
          <div class="col-12">
            <h3 class="mt-3 mb-0">Obecné kontakty</h3>
          </div>
          <div class="col-sm-6 col-lg-6 col-xxl-4">
            <ContactBlock name="Homo Sapiens" position="Lidský zástupce společnosti" phone="+420 123 456 789" email="homo.sapiens@central-group.cz" imgURL="https://files.idyllic.app/files/static/151604?width=256&optimizer=image" />
          </div>
          <div class="col-sm-6 col-lg-6 col-xxl-4">
            <ContactBlock name="Ing. Homo Sapiensová" position="Lidská zástupkyně společnosti" phone="+420 987 654 321" email="	homo.sapiensova@central-group.cz" imgURL="https://files.idyllic.app/files/static/152445?width=256&optimizer=image" />
          </div>
        </div>
      </div>
    </div>


  </PageTemplate>

</template>

<style scoped></style>