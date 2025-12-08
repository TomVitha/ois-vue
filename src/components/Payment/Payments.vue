<script setup lang="ts">
  import Payment from '@/components/Payment/Payment.vue'

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
</script>

<template>
  <!-- Mobile: list rendering -->
  <div class="row row-deck row-cards d-lg-none">
    <div class="col-12"
      v-for="payment in payments"
      :key="`${payment.title}-${payment.duedate}`">
      <Payment
        v-bind="payment"
        variant="list" />
    </div>
  </div>

  <!-- Desktop: table rendering -->
  <div class="card d-none d-lg-block">
    <div class="table-responsive ">
      <table class="table table-selectable card-table table-vcenter text-nowrap datatable table-mobile-sm">
        <thead>
          <tr>
            <th>Popis</th>
            <th>Splatnost</th>
            <th>Stav</th>
            <th class="text-sm-end">Částka</th>
            <th class="text-sm-end">Zaplaceno</th>
            <th class="text-sm-end">Zbývá</th>
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
  </div>


</template>
