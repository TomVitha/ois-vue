<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import PaymentItem from '@/components/PaymentItem.vue'
  import Alert from '@/components/Alert.vue'
</script>

<template>
  <PageTemplate title="Platby">
    <!-- ALERTS (components) -->
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
      <!-- TODO: Řazení? Filtrování? -->
      <!-- TODO: Lidé chtějí odklad plateb -> Odkaz "pod čarou" na Žádosti a změny -->
      <div class="col-12">
        <h3 class="m-0">Nadcházející</h3>
      </div>
      <!-- Unpaid, upcoming -->
      <div class="col-12">
        <PaymentItem title="Oprava střechy" duedate="2026-01-01" :amount="50000" :paid="0" :is-invoice-shown="true" />
      </div>
      <!-- Unpaid, due -->
      <div class="col-12">
        <PaymentItem title="Oprava střechy" duedate="2025-08-02" :amount="22000" :paid="0" :is-invoice-shown="true" />
      </div>
      <!-- Partially paid, due -->
      <div class="col-12">
        <PaymentItem title="Modernizace výtahu" duedate="2026-06-01" :amount="45000" :paid="32000" />
      </div>
      <!-- Partially paid, due -->
      <div class="col-12">
        <PaymentItem title="Rekonstrukce fasády" duedate="2025-08-03" :amount="50000" :paid="22000" />
      </div>
      <!-- Overdue, unpaid -->
      <div class="col-12">
        <PaymentItem title="Výmalba společných prostor" duedate="2024-01-01" :amount="12000" :paid="0" />
      </div>
      <!-- Overdue, partially paid -->
      <div class="col-12">
        <PaymentItem title="Výstavba kolárny" duedate="2024-01-01" :amount="36771" :paid="7547" />
      </div>
      <div class="col-12">
        <h3 class="m-0">Zaplacené</h3>
      </div>
      <!-- Paid -->
      <div class="col-12">
        <PaymentItem title="Oprava výtahu" duedate="2025-08-03" :amount="50000" :paid="50000" />
      </div>
      <!-- Overdue, paid -->
      <div class="col-12">
        <PaymentItem title="Revize elektroinstalace" duedate="2024-01-01" :amount="50000" :paid="50000" />
      </div>
      <!-- Paid, with invoice -->
      <div class="col-12">
        <PaymentItem title="Nové vchodové dveře" duedate="2025-08-03" :amount="50000" :paid="50000" :is-invoice-shown="true" />
      </div>
      <!-- Overdue, paid, invalid date -->
      <div class="col-12">
        <PaymentItem title="Instalace mučící komory" duedate="lkdahgiurn" :amount="15301" :paid="50000" />
      </div>
      <!-- Partially paid, overpaid -->
      <div class="col-12">
        <PaymentItem title="Odklid mrtvol" duedate="2024-01-01" :amount="14873" :paid="140000" />
      </div>
    </div>
    <!-- Footer message -->
     <div class="col-12">

     </div>

    <!-- WIP -->
    <!-- TODO: Create proper design (with proper code) -->
    <!-- TODO: Click to copy text buttons -->
    <!-- TODO: Breakdown for partially paid (like on payments page) -->
    <!-- * Povinné údaje: částka, variabilní symbol, číslo účtu  -->
    <!-- * Nepovinné/případné údaje: qr kód, podrobnější popis -->
    <div class="modal" id="temp-payment-modal">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Zaplatit platbu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="space-y-4">
              <img src="/qr-temp.svg" alt="QR kód se nepodařilo načíst" width="200" class="d-block mx-auto" title="Zaplaťte načtením QR kódu ve své bankovní mobilní aplikaci" />
              <div class="space-y-2">
                <div class="d-flex justify-content-between">
                  <span class="text-secondary">Číslo účtu</span>
                  <span class="text-end">670100-1234567890 / 6210</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span class="text-secondary">Variabilní symbol</span>
                  <span class="text-end">7464685</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span class="text-secondary">Částka</span>
                  <span class="text-end">50 000 Kč</span>
                </div>
              </div>
              <div>Také se zde může nacházet případný popis s podrobnějšími detaily týkající se platby.</div>
              <div>Možná: <a href="#">Požádat o odklad platby</a> ?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageTemplate>

</template>

<style scoped>

</style>