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
      <!-- TODO: Lidé chtějí odklad plateb -> Odkaz "pod čarou" na Žádosti -->
      <!-- <div class="col-12">
        <h3 class="m-0 mt-3">Nadcházející</h3>
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


      <!-- TEMP: TABLE -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Invoices</h3>
          </div>
          <div class="table-responsive">
            <table class="table table-selectable card-table table-vcenter text-nowrap datatable">
              <thead>
                <tr>
                  <th class="w-1"><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices"></th>
                  <th class="w-1">
                    No.
                    <!-- Download SVG icon from http://tabler.io/icons/icon/chevron-up -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-sm icon-thick icon-2">
                      <path d="M6 15l6 -6l6 6"></path>
                    </svg>
                  </th>
                  <th>Invoice Subject</th>
                  <th>Client</th>
                  <th>VAT No.</th>
                  <th>Created</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input class="form-check-input m-0 align-middle table-selectable-check" type="checkbox" aria-label="Select invoice"></td>
                  <td><span class="text-secondary">001401</span></td>
                  <td><a href="invoice.html" class="text-reset" tabindex="-1">Design Works</a></td>
                  <td>
                    <span class="flag flag-xs flag-country-us me-2"></span>
                    Carlson Limited
                  </td>
                  <td>87956621</td>
                  <td>15 Dec 2017</td>
                  <td><span class="badge bg-success me-1"></span> Paid</td>
                  <td>$887</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#"> Action </a>
                        <a class="dropdown-item" href="#"> Another action </a>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td><input class="form-check-input m-0 align-middle table-selectable-check" type="checkbox" aria-label="Select invoice"></td>
                  <td><span class="text-secondary">001402</span></td>
                  <td><a href="invoice.html" class="text-reset" tabindex="-1">UX Wireframes</a></td>
                  <td>
                    <span class="flag flag-xs flag-country-gb me-2"></span>
                    Adobe
                  </td>
                  <td>87956421</td>
                  <td>12 Apr 2017</td>
                  <td><span class="badge bg-warning me-1"></span> Pending</td>
                  <td>$1200</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#"> Action </a>
                        <a class="dropdown-item" href="#"> Another action </a>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td><input class="form-check-input m-0 align-middle table-selectable-check" type="checkbox" aria-label="Select invoice"></td>
                  <td><span class="text-secondary">001403</span></td>
                  <td><a href="invoice.html" class="text-reset" tabindex="-1">New Dashboard</a></td>
                  <td>
                    <span class="flag flag-xs flag-country-de me-2"></span>
                    Bluewolf
                  </td>
                  <td>87952621</td>
                  <td>23 Oct 2017</td>
                  <td><span class="badge bg-warning me-1"></span> Pending</td>
                  <td>$534</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown" aria-expanded="false">Actions</button>
                      <div class="dropdown-menu dropdown-menu-end" style="">
                        <a class="dropdown-item" href="#"> Action </a>
                        <a class="dropdown-item" href="#"> Another action </a>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td><input class="form-check-input m-0 align-middle table-selectable-check" type="checkbox" aria-label="Select invoice"></td>
                  <td><span class="text-secondary">001404</span></td>
                  <td><a href="invoice.html" class="text-reset" tabindex="-1">Landing Page</a></td>
                  <td>
                    <span class="flag flag-xs flag-country-br me-2"></span>
                    Salesforce
                  </td>
                  <td>87953421</td>
                  <td>2 Sep 2017</td>
                  <td><span class="badge bg-secondary me-1"></span> Due in 2 Weeks</td>
                  <td>$1500</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#"> Action </a>
                        <a class="dropdown-item" href="#"> Another action </a>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td><input class="form-check-input m-0 align-middle table-selectable-check" type="checkbox" aria-label="Select invoice"></td>
                  <td><span class="text-secondary">001405</span></td>
                  <td><a href="invoice.html" class="text-reset" tabindex="-1">Marketing Templates</a></td>
                  <td>
                    <span class="flag flag-xs flag-country-pl me-2"></span>
                    Printic
                  </td>
                  <td>87956621</td>
                  <td>29 Jan 2018</td>
                  <td><span class="badge bg-danger me-1"></span> Paid Today</td>
                  <td>$648</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#"> Action </a>
                        <a class="dropdown-item" href="#"> Another action </a>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td><input class="form-check-input m-0 align-middle table-selectable-check" type="checkbox" aria-label="Select invoice"></td>
                  <td><span class="text-secondary">001406</span></td>
                  <td><a href="invoice.html" class="text-reset" tabindex="-1">Sales Presentation</a></td>
                  <td>
                    <span class="flag flag-xs flag-country-br me-2"></span>
                    Tabdaq
                  </td>
                  <td>87956621</td>
                  <td>4 Feb 2018</td>
                  <td><span class="badge bg-secondary me-1"></span> Due in 3 Weeks</td>
                  <td>$300</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#"> Action </a>
                        <a class="dropdown-item" href="#"> Another action </a>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td><input class="form-check-input m-0 align-middle table-selectable-check" type="checkbox" aria-label="Select invoice"></td>
                  <td><span class="text-secondary">001407</span></td>
                  <td><a href="invoice.html" class="text-reset" tabindex="-1">Logo &amp; Print</a></td>
                  <td>
                    <span class="flag flag-xs flag-country-us me-2"></span>
                    Apple
                  </td>
                  <td>87956621</td>
                  <td>22 Mar 2018</td>
                  <td><span class="badge bg-success me-1"></span> Paid Today</td>
                  <td>$2500</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#"> Action </a>
                        <a class="dropdown-item" href="#"> Another action </a>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td><input class="form-check-input m-0 align-middle table-selectable-check" type="checkbox" aria-label="Select invoice"></td>
                  <td><span class="text-secondary">001408</span></td>
                  <td><a href="invoice.html" class="text-reset" tabindex="-1">Icons</a></td>
                  <td>
                    <span class="flag flag-xs flag-country-pl me-2"></span>
                    Tookapic
                  </td>
                  <td>87956621</td>
                  <td>13 May 2018</td>
                  <td><span class="badge bg-success me-1"></span> Paid Today</td>
                  <td>$940</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#"> Action </a>
                        <a class="dropdown-item" href="#"> Another action </a>
                      </div>
                    </span>
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


  </PageTemplate>

</template>

<style scoped></style>