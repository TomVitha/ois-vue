<script setup lang="ts">
  import { usePaymentsStore } from '@/stores/payments'
  const paymentsStore = usePaymentsStore()

  import Payments from '@/components/Payment/Payments.vue'
  import PageTemplate from '@/components/PageTemplate.vue'
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
            info o klientovi
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row row-deck row-cards">

          <!-- ? Setup block -->
          <div class="col-12">
            <div class="card overflow-hidden">
              <div id="carousel-1" class="carousel slide" data-bs-interval="false">
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
                    <img class="d-block w-100" alt="" src="https://imagefaker.access.mx.com/1600x800?text=Unit%201" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" alt="" src="https://imagefaker.access.mx.com/1600x800?text=Unit%202" />
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
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="row row-deck row-cards">
          <!-- * platby po splatnosti -->
          <div class="col-12">
            <h3 class="m-0 mt-3">Platby po splatnosti</h3>
          </div>
          <div class="col-12">
            <Payments :payments="paymentsStore.overduePayments" />
          </div>

          <!-- * blížící se platby (např v pristich 7 dnech) - výrazně co jsi nezaplatil nebo co máš zaplaceno -->
          <div class="col-12">
            <div class="d-flex justify-content-between align-items-baseline flex-fill">
              <h3 class="m-0 mt-3">Blížící se platby</h3>
              <RouterLink to="/account#upozorneni-plateb">Nastavení upozornění</RouterLink>
            </div>
          </div>
          <div class="col-12">
            <Payments :payments="paymentsStore.duePayments" />
          </div>

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
                <div class="list-group-item">datum; cislo bytu/smlouvy; n-ta terminova sekce; 1 veta kratkeho popisu</div>
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

    <!-- DEV: One dialog for all payments -->
    <!-- NOTE: Obviously each payment should have its own dialog instance -->
    <PaymentDialog
      :amount="50000"
      accountNumber="670100-1234567890 / 6210"
      :varSymbol="7464685"
      message="192-03-147 KD1" />


  </PageTemplate>

</template>

<style scoped></style>