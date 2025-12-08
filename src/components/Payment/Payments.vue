<script setup lang="ts">
import Payment from '@/components/Payment/Payment.vue'

type PaymentItem = {
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
  <div class="list-group list-group-flush list-group-hoverable d-lg-none">
    <Payment
      v-for="payment in payments"
      :key="`${payment.title}-${payment.duedate}`"
      v-bind="payment"
      variant="list"
    />
  </div>

  <!-- Desktop: table rendering -->
  <div class="table-responsive d-none d-lg-block">
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
          <th></th>
        </tr>
      </thead>
      <tbody>
        <Payment
          v-for="payment in payments"
          :key="`${payment.title}-${payment.duedate}-table`"
          v-bind="payment"
          variant="table"
        />
      </tbody>
    </table>
  </div>
</template>
