<script setup lang="ts">
  import { nextTick, onUnmounted, ref, watch } from 'vue'
  import Payment from '@/components/Payment/Payment.vue'
  import DataTable from 'datatables.net-dt'
  import { matchesMediaQuery } from '@/composables/matchesMediaQuery'
  import type { PaymentStatusCode } from '@/stores/payments'

  type PaymentItem = {
    id: number
    title: string
    duedate: string
    amount: number
    paid: number
    remaining: number
    isPartiallyPaid: boolean
    percentPaid: number
    status: PaymentStatusCode
    statusText: string
    statusBadgeClass: string
    isInvoiceShown?: boolean
  }

  const props = defineProps<{
    payments: PaymentItem[]
  }>()

  const isDesktop = matchesMediaQuery('(min-width: 992px)')
  const paymentTableRef = ref<HTMLTableElement | null>(null)
  let paymentsTable: InstanceType<typeof DataTable> | null = null

  async function initDataTable() {
    await nextTick()

    if (!isDesktop.value || !paymentTableRef.value || paymentsTable) return

    // DataTables pro řazení (a dále případně filtrování, stránkování, vyhledávání).
    paymentsTable = new DataTable(paymentTableRef.value, {
      paging: false,
      searching: false,
      info: false,
      autoWidth: false,
      orderClasses: false,
      order: [[1, 'asc']],       // Sloupec podle kterého se bude defaultně řadit - index sloupce (od 0); směr řazení
    })
  }

  function destroyDataTable() {
    paymentsTable?.destroy()
    paymentsTable = null
  }

  // Initialize DataTables if isDesktop is true, destroy if false
  watch(isDesktop, (desktop) => {
    if (desktop) {
      void initDataTable()
      return
    }

    destroyDataTable()
  }, {
    immediate: true,
    flush: 'post'
  })

  onUnmounted(() => {
    destroyDataTable()
  })

</script>

<template>

  <!-- Mobile: list rendering -->
  <div v-if="!isDesktop" class="list-group list-group-flush">
    <Payment
      v-for="payment in payments"
      :key="`${payment.title}-${payment.duedate}`"
      v-bind="payment"
      variant="list" />
  </div>
  <!-- Desktop: table rendering -->
  <div v-else class="table-responsive">
    <table ref="paymentTableRef" id="payments-table" class="table table-hover table-selectable card-table table-vcenter text-nowrap datatable table-mobile-sm">
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

</style>
