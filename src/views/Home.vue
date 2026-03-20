<script setup lang="ts">
  import { usePaymentsStore } from '@/stores/payments'
  const paymentsStore = usePaymentsStore()

  import Payments from '@/components/Payment/Payments.vue'
  import PageTemplate from '@/components/PageTemplate.vue'
  import PaymentDialog from '@/components/Payment/PaymentDialog.vue'
  import SignaturePromptItem from '@/components/SignaturePromptItem.vue'
  import ClientTermItem from '@/components/ClientTermItem.vue'
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

    <div class="row row-cards">
      <!-- <div class="col-xxl-3">
        <div class="card">
          <div class="card-body">
            <div class="space-y-1 justify-content-center text-center">
              <h3>Adam Novák</h3>
              <div>+420721584630</div>
              <div>novak@seznam.cz</div>
              <div>Pryskyřicova 304/11, Praha 0, 100 00</div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="col">

        <div class="col-12">
          <div class="row row-deck row-cards">


            <!-- * platby -->
            <!-- <div class="col-12">
              <div class="d-flex justify-content-between align-items-baseline flex-fill">
                <h3 class="m-0 mt-3">Platby po splatnosti</h3>
                <div class="btn-actions h-0">
                  <RouterLink to="/account#upozorneni-plateb" class="btn btn-action" data-bs-toggle="tooltip" data-bs-placement="top" title="Žádost o odklad platby">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-flag">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z" />
                      <path d="M5 21v-7" />
                    </svg>
                  </RouterLink>
                </div>
              </div>
            </div> -->
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title me-auto">Platby</h3>
                  <RouterLink to="/platby">
                    Všechny
                  </RouterLink>
                </div>
                <Payments :payments="paymentsStore.upcomingPayments" />
              </div>
            </div>


            <!-- * dokumenty k podepsání (které ještě nebyly podepsány) -->
            <div class="col-xl-6">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Dokumenty k podepsání</h3>
                </div>
                <div class="list-group list-group-flush">
                  <SignaturePromptItem title="Návrh klientského dodatku" file="192-03-147_KD2.pdf" />
                  <SignaturePromptItem title="Návrh smlouvy o dílo" file="192-03-147_XY3.pdf" />
                </div>
              </div>
            </div>
            <!-- * blížící se termínovky - termín výběrů -->
            <div class="col-xl-6">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Termíny klientských změn</h3>
                </div>
                <div class="list-group list-group-flush">
                  <ClientTermItem></ClientTermItem>
                </div>
              </div>
            </div>

            <!-- Payments breakdown -->
            <!-- <div class="col-xl-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Rozklad plateb</h3>
                  <div class="progress progress-separated mb-3">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 68.6%" aria-label="Regular"></div>
                    <div class="progress-bar bg-info" role="progressbar" style="width: 23.9%" aria-label="System"></div>
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 5.8%" aria-label="Shared"></div>
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 01.6%" aria-label="Shared"></div>
                  </div>
                  <div class="space-y-2">
                    <div class="d-flex align-items-center justify-content-between">
                      <div>
                        <span class="legend me-2 bg-success"></span> Zaplacené
                      </div>
                      <span>8 751 500 Kč</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                      <div>
                        <span class="legend me-2 bg-info"></span> Nadcházející
                      </div>
                      <span>3 047 880 Kč</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                      <div>
                        <span class="legend me-2 bg-warning"></span> Blížící se
                      </div>
                      <span>745 000 Kč</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                      <div>
                        <span class="legend me-2 bg-danger"></span> Po splatnosti
                      </div>
                      <span>204 633 Kč</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->

            <div class="col-12">
              <h3 class="mt-3 mb-0">Obecné kontakty</h3>
            </div>
            <div class="col-sm-6">
              <ContactBlock name="Homo Sapiens" position="Lidský zástupce společnosti" phone="+420 123 456 789" email="homo.sapiens@central-group.cz" imgURL="https://files.idyllic.app/files/static/151604?width=256&optimizer=image" />
            </div>
            <div class="col-sm-6">
              <ContactBlock name="Ing. Homo Sapiensová" position="Lidská zástupkyně společnosti" phone="+420 987 654 321" email="	homo.sapiensova@central-group.cz" imgURL="https://files.idyllic.app/files/static/152445?width=256&optimizer=image" />
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