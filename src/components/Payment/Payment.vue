<script setup lang="ts">
  import { useFormatting } from '@/composables/formatting'
  import { usePaymentsStore } from '@/stores/payments'
  import type { PaymentStatusCode } from '@/stores/payments'

  const { formatDate, formatCurrency } = useFormatting()
  const paymentsStore = usePaymentsStore()

  // Prevent undeclared props from falling through onto the root DOM element.
  // This avoids extra attributes from appearing on the <div>/<tr> element.
  defineOptions({
    inheritAttrs: false
  })

  const props = withDefaults(defineProps<{
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
    variant?: 'list' | 'table'
  }>(), {
    variant: 'list'
  })

  function openPayment() {
    paymentsStore.selectPaymentById(props.id)
  }
</script>

<template>
  <!-- * Mobile: list item -->
  <div
    v-if="props.variant === 'list'"
    @click="openPayment"
    data-bs-toggle="offcanvas"
    data-bs-target="#payment-offcanvas"
    class="list-group-item list-group-item-action cursor-pointer"
    role="button">
    <div class="row gy-2 align-items-center">
      <div class="col">
        <div>{{ props.title }}</div>
        <div class="text-secondary">Splatnost: {{ formatDate(props.duedate) }}</div>
      </div>
      <div class="col-auto text-end">
        <div class="fw-bold">{{ formatCurrency(props.amount) }}</div>
        <span
          class="badge"
          :class="props.statusBadgeClass">
          {{ props.statusText }}
        </span>
      </div>
      <div class="col-12" v-if="props.isPartiallyPaid">
        <div class="row gy-1">
          <div class="col">
            <!-- <div class="text-secondary">Zaplaceno</div> -->
            <div class="fs-5 text-success">{{ formatCurrency(props.paid) }}</div>
          </div>
          <div class="col text-end">
            <!-- <div class="text-secondary">Zbývá</div> -->
            <div class="fs-5 text-secondary">{{ formatCurrency(props.remaining) }}</div>
          </div>
          <div class="col-12">
            <div class="progress progress-sm">
              <div
                class="progress-bar bg-success"
                :style="`width: ${props.percentPaid}%`"
                :title="`${props.percentPaid}% zaplaceno`"
                role="progressbar"
                :aria-valuenow="props.percentPaid"
                aria-valuemin="0"
                aria-valuemax="100">
                <span class="visually-hidden"> {{ props.percentPaid }}% zaplaceno</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- * Desktop: table row -->
  <tr
    v-else
    @click.prevent="openPayment"
    data-bs-toggle="offcanvas"
    data-bs-target="#payment-offcanvas"
    class="position-relative cursor-pointer">
    <td data-label="Popis" class="text-wrap">
      {{ title }}
    </td>
    <!-- NOTE: Atribut data-sort je pro DataTables. Hodnota je používána pro řazení, např tady předáváme datum v ISO formátu, aby se dalo podle něj abecedně řadit. Jinak by se řadilo dle naformátovaného textu v buňce. -->
    <td data-label="Splatnost" :data-sort="props.duedate">
      {{ formatDate(props.duedate) }}
    </td>
    <td data-label="Stav" :data-sort="props.status">
      <span
        class="badge"
        :class="props.statusBadgeClass">
        {{ props.statusText }}
      </span>
    </td>
    <td class="text-success text-sm-end" :data-sort="props.amount" data-label="Částka">
      {{ formatCurrency(props.amount) }}
    </td>
    <td class="text-sm-end" :data-sort="props.paid" data-label="Zaplaceno">
      {{ formatCurrency(props.paid) }}
    </td>
    <td class="text-sm-end" :data-sort="props.remaining" data-label="Zbývá">
      {{ formatCurrency(props.remaining) }}
    </td>
  </tr>
</template>

<style scoped>
  tbody tr {
    /* height on <tr> acts like min-height */
    height: 3.5rem;
  }
</style>