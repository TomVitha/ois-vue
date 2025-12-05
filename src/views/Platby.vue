<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import PaymentItem from '@/components/Payment/PaymentItem.vue'
  import PaymentRow from '@/components/Payment/PaymentRow.vue'
  import PaymentDialog from '@/components/Payment/PaymentDialog.vue'
  import Alert from '@/components/Alert.vue'
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
          Podat žádost o odklad platby
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
      <!-- TODO: Řazení? Filtrování? -->
      <!-- TODO: Lidé chtějí odklad plateb -> Odkaz "pod čarou" na Žádosti -->

      <!-- <div class="col-12">
        <h3 class="m-0 mt-3">Platby</h3>
      </div> -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Platby</h3>
          </div>
          <div class="list-group list-group-flush">
            <div class="list-group-header">separátor dle měsíce</div>
            <!-- Overdue, unpaid -->
            <PaymentItem title="Výmalba společných prostor" duedate="2024-01-01" :amount="12000" :paid="0" />
            <!-- Overdue, partially paid -->
            <PaymentItem title="Výstavba kolárny" duedate="2024-01-01" :amount="36771" :paid="7547" />
            <!-- Unpaid, upcoming -->
            <PaymentItem title="Oprava střechy" duedate="2026-01-01" :amount="50000" :paid="0" :is-invoice-shown="true" />
            <!-- Unpaid, due -->
            <PaymentItem title="Oprava střechy" duedate="2025-08-02" :amount="22000" :paid="0" :is-invoice-shown="true" />
            <!-- Partially paid, due -->
            <PaymentItem title="Modernizace výtahu" duedate="2026-06-01" :amount="45000" :paid="32000" />
            <!-- Partially paid, due -->
            <PaymentItem title="Rekonstrukce fasády" duedate="2025-08-03" :amount="50000" :paid="22000" />
            <!-- Paid -->
            <PaymentItem title="Oprava výtahu" duedate="2025-08-03" :amount="50000" :paid="50000" />
            <!-- Overdue, paid -->
            <PaymentItem title="Revize elektroinstalace" duedate="2024-01-01" :amount="50000" :paid="50000" />
            <!-- Paid, with invoice -->
            <PaymentItem title="Nové vchodové dveře" duedate="2025-08-03" :amount="50000" :paid="50000" :is-invoice-shown="true" />
            <!-- Overdue, paid, invalid date -->
            <PaymentItem title="Instalace mučící komory" duedate="lkdahgiurn" :amount="15301" :paid="50000" />
            <!-- Partially paid, overpaid -->
            <PaymentItem title="Odklid mrtvol" duedate="2024-01-01" :amount="14873" :paid="140000" />
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
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">186-06-025 Věrnostní poukázka</h4>
                    <div class="card-subtitle">Využití: na co ji lze využít</div>
                    <div class="row row-gap-2">
                      <div class="col-12">
                        <div class="progress">
                          <div class="progress-bar bg-success" style="width: 38%"></div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="text-secondary">Využito</div>
                        <div class="fw-bold text-success">7&nbsp;547&nbsp;Kč</div>
                      </div>
                      <div class="col-6 text-end">
                        <div class="text-secondary">Zbývá</div>
                        <div class="fw-bold">29&nbsp;224&nbsp;Kč</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body p-0">
                    <div class="table-responsive">
                      <div class="table-responsive">
                        <table class="table table-selectable card-table table-vcenter text-nowrap datatable">
                          <thead>
                            <tr>
                              <th class="text-start">Dodatek</th>
                              <th class="text-center">Datum</th>
                              <th class="text-end">Hodnota</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="text-start">KD2</td>
                              <td class="text-center">26.04.2024</td>
                              <td class="text-end">77 425 Kč</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>


      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Platby</h3>
          </div>
          <div class="table-responsive">
            <table class="table table-selectable card-table table-vcenter text-nowrap datatable table-mobile-sm">
              <thead>
                <tr>
                  <th>Stav</th>
                  <th>Splatnost</th>
                  <th class="w-100">Popis</th>
                  <th class="text-sm-end">Částka</th>
                  <th class="text-sm-end">Zaplaceno</th>
                  <th class="text-sm-end">Zbývá</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <PaymentRow title="192-03-147 dopl.BD" duedate="2025-05-11" :amount="45000" :paid="45000" />
                <PaymentRow title="192-03-147 SOD" duedate="2025-06-03" :amount="336600" :paid="245000" />
                <PaymentRow title="192-03-147 Odchylka" duedate="2025-08-03" :amount="45000" :paid="32000" />
                <PaymentRow title="192-03-147 dopLPZ" duedate="2025-10-29" :amount="45000" :paid="32000" />
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>


    <PaymentDialog :amount="37450" accountNumber="670100-1234567890 / 6210" :varSymbol="7464685" message="192-03-147 KD1" />


  </PageTemplate>

</template>

<style scoped></style>