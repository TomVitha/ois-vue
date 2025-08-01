<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import PaymentItem from '@/components/PaymentItem.vue'
</script>

<template>

  <PageTemplate title="Platby">
    <!-- ALERTS -->
    <div class="alert alert-danger alert-dismissible" role="alert">
      <div class="alert-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon icon-2">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
          <path d="M12 8v4"></path>
          <path d="M12 16h.01"></path>
        </svg>
      </div>
      <div>
        <h4 class="alert-heading">Password does not meet requirements:</h4>
        <div class="alert-description">
          You done fucked up this time.
        </div>
      </div>
      <a class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>
    </div>
    <div class="alert alert-important alert-danger alert-dismissible" role="alert">
      <div class="alert-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon icon-2">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
          <path d="M12 8v4"></path>
          <path d="M12 16h.01"></path>
        </svg>
      </div>
      <div>
        <h4 class="alert-heading">Password does not meet requirements:</h4>
        <div class="alert-description">
          You done fucked up this time.
        </div>
      </div>
      <a class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>
    </div>
    <div class="alert alert-warning alert-dismissible w-100" role="alert">
      <div class="alert-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon icon-2">
          <path d="M12 9v4"></path>
          <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z">
          </path>
          <path d="M12 16h.01"></path>
        </svg>
      </div>
      <div>
        <h4 class="alert-heading">Some information is missing!</h4>
        <div class="alert-description">This is a custom alert box with a description. <a href="#" class="alert-action">Link</a></div>
      </div>
      <a class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>
    </div>
    <div class="alert alert-important alert-warning alert-dismissible" role="alert">
      <div class="alert-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon icon-2">
          <path d="M12 9v4"></path>
          <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z">
          </path>
          <path d="M12 16h.01"></path>
        </svg>
      </div>
      <div>
        <h4 class="alert-heading">This is a custom alert box!</h4>
        <div class="alert-description">This is a custom alert box with a description.</div>
      </div>
      <a class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>
    </div>
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
      <!-- TODO: Lidé chtějí odklad plateb -> 3 dots submenu with actions ? -->
      <h3 class="mt-4 mb-0">Nadcházející</h3>
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
        <PaymentItem title="Výstavba kolárny" duedate="2024-01-01" :amount="36771" :paid="7547"/>
      </div>
      <h3 class="mt-4 mb-0">Zaplacené</h3>
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
        <PaymentItem title="Odklid mrtvol" duedate="2024-01-01" :amount="14873" :paid="140000"/>
      </div>
    </div>
  </PageTemplate>

</template>

<style scoped></style>