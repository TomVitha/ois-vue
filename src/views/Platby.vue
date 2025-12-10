<script setup lang="ts">
  import { usePaymentsStore } from '@/stores/payments'
  const paymentsStore = usePaymentsStore()

  import PageTemplate from '@/components/PageTemplate.vue'
  import Payments from '@/components/Payment/Payments.vue'
  import PaymentDialog from '@/components/Payment/PaymentDialog.vue'
  import Voucher from '@/components/Payment/Voucher.vue'
</script>

<template>
  <PageTemplate title="Platby">

    <template #actions>
      <div class="btn-list">
        <RouterLink to="/zadosti">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 14l-4 -4l4 -4" />
            <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
          </svg> -->
          Požádat o odklad platby
        </RouterLink>
      </div>
    </template>

    <!-- # ALERTS (components) -->
    <!-- <Alert 
      heading="Dismissable non-important success box"
      type="success"
      :is-dismissable="true"
    >
      This is a component alert box description.
    </Alert>
    <Alert 
      heading="Non-dismissable non-important info box"
      type="info"
      :is-important="false"
      :is-dismissable="true"
    >
      This is a component alert box description.
    </Alert>
    <Alert 
      heading="Non-dismissable non-important warning box"
      type="warning"
    >
      This is a component alert box description.
    </Alert>
    <Alert 
      heading="Dismissable important warning box"
      type="warning"
      :is-important="true"
      :is-dismissable="true"
    >
      This is a component alert box description.
    </Alert>
    <Alert 
      heading="Dismissable non-important danger box"
      type="danger"
      :is-dismissable="true"
    >
      We require some <a href="" class="alert-action">action</a> from you.
    </Alert>
    <Alert 
      heading="Non-dismissable important danger box"
      type="danger"
      :is-important="true"
    >
      <ul class="alert-list">
        <li>Minimum 8 characters</li>
        <li>Include a special character</li>
      </ul>
    </Alert> -->

    <!-- CONTENT -->
    <div class="row row-deck row-cards">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Celá částka</h3>
            <!-- <div class="subheader">Celá částka</div> -->
            <p class="h1 m-0">5&nbsp;780&nbsp;000&nbsp;Kč</p>
            <div class="text-secondary mt-2">Splácení do: 31.12.2035</div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Zaplaceno</h3>
            <p class="h1 m-0 text-green">4&nbsp;866&nbsp;391&nbsp;Kč</p>
            <div class="text-secondary mt-2">Poslední platba: 26.04.2025</div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Zbývá</h3>
            <p class="h1 m-0 text-red">913&nbsp;609&nbsp;Kč</p>
            <div class="text-secondary mt-2">Další platba: 31.02.2026</div>
          </div>
        </div>
      </div>

      <!-- <div class="col-12">
        <h3 class="m-0 mt-3">Poukázky</h3>
      </div> -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Poukázky</h3>
          </div>
          <div class="card-body">
            <div class="row row-cards">
              <div class="col-lg-6">
                <Voucher
                  :title="'192-03-147 Věrnostní poukázka'"
                  :value="250000"
                  :spent="114367"
                  :breakdown="[
                    { label: 'KD2', date: '2024-04-26', amount: 77_425 },
                    { label: 'SOD-IS-I', date: '2024-06-16', amount: 136_942 }
                  ]" />
              </div>
              <div class="col-lg-6">
                <Voucher
                  :title="'192-03-147 z lásky'"
                  :value="69000" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TODO: Řazení? Filtrování? -->
      <!-- TODO: Lidé chtějí odklad plateb -> Odkaz "pod čarou" na Žádosti -->

      <div class="col-12">
        <h3 class="m-0 mt-3">Platby</h3>
      </div>
      <div class="col-12">
        <Payments :payments="paymentsStore.payments" />
      </div>


    </div>

    <!-- ! hard-coded values -->
    <!-- TODO: Refactor to accept data from store -->
    <PaymentDialog :amount="37450" accountNumber="670100-1234567890 / 6210" :varSymbol="7464685" message="192-03-147 KD1" />


  </PageTemplate>

</template>

<style scoped></style>