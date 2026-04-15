<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import Payments from '@/components/Payment/Payments.vue'
  import PaymentOffcanvas from '@/components/Payment/PaymentOffcanvas.vue'
  import VoucherDialog from '@/components/Payment/VoucherDialog.vue'
  import Empty from '@/components/Empty.vue'
  // import Alert from '@/components/Alert.vue'

  import { usePaymentsStore } from '@/stores/payments'
  const paymentsStore = usePaymentsStore()
</script>

<template>
  <PageTemplate title="Platby">

    <template #extra>
      <div class="text-secondary">15 celkem</div>
    </template>

    <!-- <template #actions>
      <div class="btn-list">
        <RouterLink to="/zadosti">
          Požádat o odklad platby
        </RouterLink>
      </div>
    </template> -->

    <!-- NOTE: Sem by případně šli Alerts -->

    <div class="row row-deck row-cards">

      <!-- NOTE: Na tyto údaje se nevztahuje filtrování -->
      <div class="col-12 col-lg-4">
        <div class="card">
          <div class="card-body p-sm-5">
            <div class="subheader mb-1">Celá částka</div>
            <p class="h1 m-0 text-nowrap">5&nbsp;780&nbsp;000&nbsp;Kč</p>
            <!-- NOTE: Když bude mít klient zaplacené všechny platby, všechny tyto malé texty zmizí! -->
            <!-- NOTE: Datum nepozdější platby -->
            <div class="text-secondary mt-2">Splácení do: 31.12.2035</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card">
          <div class="card-body p-sm-5">
            <div class="subheader mb-1">Zaplaceno</div>
            <p class="h1 m-0 text-nowrap text-green">4&nbsp;866&nbsp;391&nbsp;Kč</p>
            <!-- NOTE: Datum naposledy kompletně uhrazené platby. Pokud žádná taková není, zobrazí se "Žádná". -->
            <div class="text-secondary mt-2">Poslední platba: 26.04.2025</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card">
          <div class="card-body p-sm-5">
            <div class="subheader mb-1">Zbývá</div>
            <p class="h1 m-0 text-nowrap text-red">913&nbsp;609&nbsp;Kč</p>
            <!-- NOTE: Datum nejbližší platby. -->
            <div class="text-secondary mt-2">Další platba: 31.02.2026</div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="w-100">
          <div class="border-bottom py-3">
            <div class="btn-list">
              <div class="dropdown">
                <a href="#" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                  Produkty
                  <!-- NOTE: Zde se výjimečně budou vypisovat všechny nakliklé položky (zde produkty) - Jeden badge na položku! -->
                  <span class="badge ms-2">192-03-147</span>
                </a>
                <div class="dropdown-menu">
                  <label class="dropdown-item">
                    <input class="form-check-input m-0 me-2" type="checkbox" checked />
                    192-03-147
                  </label>
                  <label class="dropdown-item">
                    <input class="form-check-input m-0 me-2" type="checkbox" />
                    192-666-999
                  </label>
                  <label class="dropdown-item">
                    <input class="form-check-input m-0 me-2" type="checkbox" />
                    192-RD-007
                  </label>
                </div>
              </div>
              <div class="dropdown">
                <a href="#" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                  Stav
                  <!-- NOTE: Zde se objeví badge s počet aktivních položek filtru. -->
                  <!-- <span class="badge ms-2">1</span> -->
                </a>
                <!-- NOTE: Výchozí stav: Žádné checkboxy nezaškrtnuty = žádné aktivní filtry => zobrazit všechny položky. Pak zobrazit položky vyhovující právě těm zaškrtnutým filtrům. -->
                <div class="dropdown-menu">
                  <label class="dropdown-item">
                    <input class="form-check-input m-0 me-2" type="checkbox" />
                    Zaplaceno
                  </label>
                  <label class="dropdown-item">
                    <input class="form-check-input m-0 me-2" type="checkbox" />
                    Nadcházející
                  </label>
                  <label class="dropdown-item">
                    <input class="form-check-input m-0 me-2" type="checkbox" />
                    Blíží se
                  </label>
                  <label class="dropdown-item">
                    <input class="form-check-input m-0 me-2" type="checkbox" />
                    Po splatnosti
                  </label>
                </div>
              </div>
              <!-- NOTE: Použijeme, pokud by se výsledky neupdatovali okamžitě. Zobrazí se pouze když právě navolené filtry se liší od aktivních (tedy když uživatel si nakliká filtry, ale nejsou aplikovány). -->
              <button type="button" class="btn-link text-success text-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                Aplikovat
              </button>
              <button type="button" class="btn-link text-body text-nowrap">
                Zrušit filtry
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <!-- * Empty state - Pokud nejsou žádné platby -->
          <!-- <Empty title="Žádné platby" subtitle="Nemáte žádné nadcházející, či zaplacené platby platby." /> -->
          <!-- * Empty state - Pokud filtru neodpovídají žádné platby -->
          <!-- <Empty title="Nenalezeny žádné výsledky" subtitle="Vaším požadavkům nevyhovují žádné položky. Upravte parametry a zkuste to znovu.">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-zoom">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </template>
          </Empty> -->
          <!-- * Platby -->
          <Payments :payments="paymentsStore.payments" />
        </div>
      </div>

    </div>

    <PaymentOffcanvas />
    <VoucherDialog />

  </PageTemplate>

</template>

<style scoped></style>