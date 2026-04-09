<script setup lang="ts">
  import { onMounted } from 'vue'
  import Payment from '@/components/Payment/Payment.vue'

  import DataTable from 'datatables.net-dt';

  type PaymentItem = {
    id: number
    title: string
    duedate: string
    amount: number
    paid: number
    isInvoiceShown?: boolean
  }

  const props = defineProps<{
    payments: PaymentItem[]
  }>()

  onMounted(() => {
    // DataTables pro řazení (a dále případně filtrování, stránkování, vyhledávání). Není aktuálně nutné.
    const paymentsTable = new DataTable("#payments-table", {
      paging: false,
      searching: false,
      info: false,
      autoWidth: false,
      orderClasses: false,
      order: [[1, 'asc']],       // Sloupec podle kterého se bude defaultně řadit - index sloupce (od 0); směr řazení
    });
  })

</script>

<!-- TODO: Vylepšit logiku zobrazení pro různé velikosti obrazovky - teď ohavně řešeno přes Bootstrap třídy -->

<template>

  <!-- Mobile: list rendering -->
  <div class="list-group list-group-flush d-lg-none">
    <Payment
      v-for="payment in payments"
      :key="`${payment.title}-${payment.duedate}`"
      v-bind="payment"
      variant="list" />
  </div>

  <!-- Desktop: table rendering -->
  <div class="table-responsive d-none d-lg-block">
    <table id="payments-table" class="table table-hover table-selectable card-table table-vcenter text-nowrap datatable table-mobile-sm">
      <thead>
        <tr>
          <th>Popis</th>
          <th>Splatnost</th>
          <th>Stav</th>
          <th class="text-end">Částka</th>
          <th class="text-end">Zaplaceno</th>
          <th class="text-end">Zbývá</th>
        </tr>
      </thead>
      <tbody>
        <Payment
          v-for="payment in payments"
          :key="`${payment.title}-${payment.duedate}-table`"
          v-bind="payment"
          variant="table" />
      </tbody>
    </table>
  </div>


</template>

<style scoped>
  /* NOTE: 
    Tabler obsahuje stylování pro šipky pro sortable buňky, ale počítá s jinými třídami než DataTables používá. 
    Ideálně bychom si třídy v DataTables nastavili, ale nepřišel jsem na způsob jak. 
    Proto jsem je tady přepsal s použitím DataTables tříd.
  */

  :deep([class*="dt-orderable"]) {
    cursor: pointer;
  }

  :deep([class*="dt-ordering"]) {
    color: var(--tblr-body-color);
  }

  :deep(.dt-column-order::before) {
    content: "";
    display: inline-flex;
    width: 1rem;
    height: 1rem;
    vertical-align: bottom;
    mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1'><path d='M5 7l3 -3l3 3'/><path d='M5 10l3 3l3 -3'/></svg>");
    background: currentColor;
    margin-left: 0.25rem;
  }

  :deep(.dt-ordering-asc .dt-column-order::before) {
    mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M5 10l3 -3l3 3'/></svg>");
  }

  :deep(.dt-ordering-desc .dt-column-order::before) {
    mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M5 7l3 3l3 -3'/></svg>");
  }
</style>
