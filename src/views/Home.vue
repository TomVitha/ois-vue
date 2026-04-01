<script setup lang="ts">
  import { usePaymentsStore } from '@/stores/payments'
  const paymentsStore = usePaymentsStore()

  import Payments from '@/components/Payment/Payments.vue'
  import PageTemplate from '@/components/PageTemplate.vue'
  import PaymentOffcanvas from '@/components/Payment/PaymentOffcanvas.vue'
  import SignaturePromptItem from '@/components/SignaturePromptItem.vue'
  import ClientTermItem from '@/components/ClientTermItem.vue'
  import ContactBlock from '@/components/ContactCard.vue'
  import Empty from '@/components/Empty.vue'
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

            <!-- Úvodní text -->
            <div class="col-12">
              <p>
                Zde najdete všechny důležité informace o svých projektech, termínech, platbách a dokumentech.
              </p>
            </div>

            <!-- * Platby -->
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <!-- * Výpis plateb -->
                  <h3 class="card-title me-auto">Platby</h3>
                  <RouterLink to="/platby">
                    Všechny
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 6l6 6l-6 6" />
                    </svg>
                  </RouterLink>
                </div>
                <!-- * Empty state - Zobrazí se pokud nejsou žádné platby -->
                <!-- <Empty title="Žádné platby" subtitle="Nemáte žádné nadcházející platby." /> -->
                <!-- * Výpis plateb -->
                <Payments :payments="paymentsStore.upcomingPayments" />
              </div>
            </div>

            <!-- * Dokumenty k podepsání (Akceptace dodatků) (které ještě nebyly podepsány) -->
            <div class="col-xl-6">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Dokumenty k podepsání</h3>
                </div>
                <div class="list-group list-group-flush">
                  <SignaturePromptItem title="Návrh klientského dodatku" file="192-03-147_KD2.pdf" />
                  <SignaturePromptItem title="Návrh smlouvy o dílo" file="192-03-147_XY3.pdf" />
                </div>
                <!-- * Empty state - Zobrazí se pokud nejsou žádné dokumenty k podepsání -->
                <!-- <Empty title="Žádné dokumenty" subtitle="Nemáte žádné dokumenty, které by čekaly na váš podpis." /> -->
              </div>
            </div>

            <!-- * Blížící se termínovky - termín výběrů -->
            <!-- NOTE: Ke každé jednotce ukáže tu jednu nejbližší termínovku -->
            <div class="col-xl-6">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Termíny klientských změn</h3>
                </div>
                <div class="list-group list-group-flush">
                  <ClientTermItem date="2026-06-31" product="192-03-147" title="2. termínová sekce" description="Dispoziční změny zasahující do nosných konstrukcí." />
                  <ClientTermItem date="2027-07-15" product="192-RD-007" title="1. termínová sekce" description="Další změny v konstrukci." />
                </div>
                <!-- * Empty state - Zobrazí se pokud nejsou žádné termínovky -->
                <!-- <Empty title="Žádné termíny" subtitle="Nemáte žádné nadcházející termíny klientských změn." /> -->
              </div>
            </div>

            <div class="col-12">
              <h3 class="mt-3 mb-0">Obecné kontakty</h3>
            </div>
            <div class="col-sm-6 col-md-4">
              <ContactBlock name="Homo Sapiens" position="Lidský zástupce společnosti" phone="+420 123 456 789" email="homo.sapiens@central-group.cz" imgURL="https://files.idyllic.app/files/static/151604?width=256&optimizer=image" />
            </div>
            <div class="col-sm-6 col-md-4">
              <ContactBlock name="Ing. Homo Sapiensová" position="Lidská zástupkyně společnosti" phone="+420 987 654 321" email="	homo.sapiensova@central-group.cz" imgURL="https://files.idyllic.app/files/static/152445?width=256&optimizer=image" />
            </div>

          </div>
        </div>
      </div>
    </div>

    <PaymentOffcanvas />

  </PageTemplate>

</template>

<style scoped></style>