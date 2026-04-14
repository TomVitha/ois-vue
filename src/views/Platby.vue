<script setup lang="ts">
  import { usePaymentsStore } from '@/stores/payments'
  import { useVouchersStore } from '@/stores/vouchers'

  const paymentsStore = usePaymentsStore()
  const vouchersStore = useVouchersStore()

  import PageTemplate from '@/components/PageTemplate.vue'
  import Payments from '@/components/Payment/Payments.vue'
  import PaymentOffcanvas from '@/components/Payment/PaymentOffcanvas.vue'
  import Voucher from '@/components/Payment/Voucher.vue'
  import VoucherDialog from '@/components/Payment/VoucherDialog.vue'
  import Empty from '@/components/Empty.vue'
  // import Alert from '@/components/Alert.vue'
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

      <div class="col-12 col-lg-4">
        <div class="card">
          <div class="card-body p-sm-5">
            <div class="subheader mb-1">Celá částka</div>
            <p class="h1 m-0 text-nowrap">5&nbsp;780&nbsp;000&nbsp;Kč</p>
            <div class="text-secondary mt-2">Splácení do: 31.12.2035</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card">
          <div class="card-body p-sm-5">
            <div class="subheader mb-1">Zaplaceno</div>
            <p class="h1 m-0 text-nowrap text-green">4&nbsp;866&nbsp;391&nbsp;Kč</p>
            <div class="text-secondary mt-2">Poslední platba: 26.04.2025</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card">
          <div class="card-body p-sm-5">
            <div class="subheader mb-1">Zbývá</div>
            <p class="h1 m-0 text-nowrap text-red">913&nbsp;609&nbsp;Kč</p>
            <div class="text-secondary mt-2">Další platba: 31.02.2026</div>
          </div>
        </div>
      </div>

      <!-- TEMP: Sekce Poukázky skryty -> přesunuty na vlastní stránku Poukázky -->
      <div class="col-12" hidden>
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Poukázky</h3>
          </div>
          <div class="card-body">
            <div class="row row-cards">
              <div v-for="voucher in vouchersStore.vouchers" :key="voucher.id" class="col-lg-4">
                <Voucher
                  :id="voucher.id"
                  :title="voucher.title"
                  :value="voucher.value"
                  :spent="voucher.spent"
                  :date-received="voucher.dateReceived"
                  :date-expiration="voucher.dateExpiration"
                  :breakdown="voucher.breakdown" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- WIP: Filtrování -->
      <div class="col-12">
        <div class="w-100">
          <div class="border-bottom py-3">
            <div class="btn-list">
              <div class="dropdown">
                <a href="#" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                  Produkty
                  <span class="badge ms-2">192-03-147</span>
                </a>
                <div class="dropdown-menu">
                  <label class="dropdown-item">
                    <input class="form-check-input m-0 me-2" type="checkbox" checked />192-03-147
                  </label>
                  <label class="dropdown-item">
                    <input class="form-check-input m-0 me-2" type="checkbox" />Product 2
                  </label>
                  <label class="dropdown-item">
                    <input class="form-check-input m-0 me-2" type="checkbox" />Product 3
                  </label>
                </div>
              </div>
              <div class="dropdown">
                <a href="#" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                  Stav
                </a>
                <div class="dropdown-menu">
                  <label class="dropdown-item">
                    <input class="form-check-input m-0 me-2" type="checkbox" />Zaplaceno
                  </label>
                  <label class="dropdown-item">
                    <input class="form-check-input m-0 me-2" type="checkbox" />Nadcházející
                  </label>
                  <label class="dropdown-item">
                    <input class="form-check-input m-0 me-2" type="checkbox" />Blíží se
                  </label>
                  <label class="dropdown-item">
                    <input class="form-check-input m-0 me-2" type="checkbox" />Po splatnosti
                  </label>
                </div>
              </div>
              <button type="button" class="btn-link text-body">Zrušit filtry</button>
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