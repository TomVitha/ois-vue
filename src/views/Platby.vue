<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import PaymentItem from '@/components/Payment/PaymentItem.vue'
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

      <div class="col-12">
        TODO: Toolbar (download all)
      </div>

      <!-- <div class="col-12">
        <h3 class="m-0 mt-3">Platby</h3>
      </div> -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Platby</h3>
          </div>
          <div class="list-group list-group-flush">
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
          <div class="list-group list-group-flush">
            <div class="list-group-item">poukázkyyyyy</div>
          </div>
        </div>
      </div>


      <!-- TEMP: TABLE -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Invoices</h3>
          </div>
          <div class="table-responsive">
            <table class="table table-selectable card-table table-vcenter text-nowrap datatable table-mobile-sm">
              <colgroup>
                <col>
                <col>
                <col style="color: red">
                <col>
                <col>
                <col>
              </colgroup>
              <thead>
                <tr>
                  <th class="w-100">Název platby</th>
                  <th>Zaplaceno</th>
                  <th>Zbývá</th>
                  <th>Částka</th>
                  <th>Splatnost</th>
                  <th>Akce</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="invoice.html" class="text-reset" tabindex="-1">Odblokování toalety</a></td>
                  <td>45 340 Kč</td>
                  <td>0 Kč</td>
                  <td>45 340 Kč</td>
                  <td><span class="badge bg-warning me-1"></span> 01. 02. 2026</td>
                  <td class="text-end">
                    <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  </td>
                </tr>
                <tr>
                  <td><a href="invoice.html" class="text-reset" tabindex="-1">Zametení stop</a></td>
                  <td>20 000 Kč</td>
                  <td>16 477 Kč</td>
                  <td>36 477 Kč</td>
                  <td><span class="badge bg-danger me-1"></span> 13. 11. 2025</td>
                  <td class="text-end">
                    <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer">
            <div class="row g-2 justify-content-center justify-content-sm-between">
              <div class="col-auto d-flex align-items-center">
                <p class="m-0 text-secondary">Showing <strong>1 to 8</strong> of <strong>16 entries</strong></p>
              </div>
              <div class="col-auto">
                <ul class="pagination m-0 ms-auto">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                      <!-- Download SVG icon from http://tabler.io/icons/icon/chevron-left -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                        <path d="M15 6l-6 6l6 6"></path>
                      </svg>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">4</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">5</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      <!-- Download SVG icon from http://tabler.io/icons/icon/chevron-right -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                        <path d="M9 6l6 6l-6 6"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PaymentDialog :amount="37450" accountNumber="670100-1234567890 / 6210" :varSymbol="7464685" message="192-03-147 KD1" />


  </PageTemplate>

</template>

<style scoped></style>