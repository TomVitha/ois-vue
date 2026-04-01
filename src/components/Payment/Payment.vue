<script setup lang="ts">
  import { computed } from 'vue'
  import { RouterLink } from 'vue-router'

  import { useFormatting } from '@/composables/formatting'
  import { useLocaleStore } from '@/stores/locale'
  import { usePaymentsStore } from '@/stores/payments'

  const { formatDate, formatCurrency } = useFormatting()
  const localeStore = useLocaleStore()
  const paymentsStore = usePaymentsStore()

  const props = withDefaults(defineProps<{
    id: number
    title: string
    duedate: string
    amount: number
    paid: number
    isInvoiceShown?: boolean
    variant?: 'list' | 'table'
  }>(), {
    variant: 'list'
  })

  const dueDate = new Date(props.duedate)
  if (isNaN(dueDate.getTime())) { dueDate.setTime(99999999999999999999999999) }   // HACK to display browser-native invalid date message

  const dueDaysThreshold = 7
  const remainingAmount = computed(() => props.amount - props.paid)

  const isPaid = computed(() => props.paid >= props.amount)
  const isPartiallyPaid = computed(() => props.paid > 0 && props.paid < props.amount)
  const percentagePaid = computed(() => {
    if (props.amount === 0) return 0      // avoid division by zero
    return Math.min(100, (props.paid / props.amount) * 100).toFixed(2)
  })

  type PaymentStatus = 'unknown' | 'upcoming' | 'due' | 'overdue' | 'paid'
  const status = computed<PaymentStatus>(() => {
    const today = new Date('2025-08-01')    // DEV: hard-coded today date for dev purposes
    const dueDate = new Date(props.duedate)
    today.setHours(0, 0, 0, 0)
    dueDate.setHours(0, 0, 0, 0)
    const diffDays = Math.ceil((dueDate.getTime() - today.getTime()) / (24 * 60 * 60 * 1000))

    if (isPaid.value) return 'paid'
    if (diffDays < 0) return 'overdue'
    if (diffDays <= dueDaysThreshold) return 'due'
    if (diffDays > dueDaysThreshold) return 'upcoming'
    return 'unknown'
  })

  const statusText = computed(() => {
    const map: Record<PaymentStatus, Record<string, string>> = {
      unknown: { cs: 'Neznámý', en: 'Unknown' },
      upcoming: { cs: 'Nadcházející', en: 'Upcoming' },
      due: { cs: 'Blíží se', en: 'Due' },
      overdue: { cs: 'Po splatnosti', en: 'Overdue' },
      paid: { cs: 'Zaplaceno', en: 'Paid' },
    }
    const locale = localeStore.locale.startsWith('cs') ? 'cs' : 'en'
    return map[status.value][locale]
  })

  function openPayment() {
    paymentsStore.selectPaymentById(props.id)
  }
</script>

<template>
  <!-- * Mobile: list item -->
  <!-- NOTE: Href odkaz povede na konkrétní platbu -->
   <!-- FIXME: Měl by být <RouterLink> namísto <a>, ale pak se tam cpe třída .active, protože adresa odkazu sedí se současnou adresou -->
  <a
    v-if="props.variant === 'list'"
    href="#payment-modal"
    class="list-group-item list-group-item-action"
    role="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#payment-offcanvas"
    @click="openPayment">
    <div>
      <div class="row gy-2 align-items-center">
        <div class="col">
          <div>{{ title }}</div>
          <div class="text-secondary">Splatnost: {{ formatDate(dueDate) }}</div>
        </div>
        <div class="col-auto text-end">
          <div class="fw-bold">{{ formatCurrency(props.amount) }}</div>
          <span
            class="badge"
            :class="{
              'bg-success-lt': status === 'paid',
              'bg-info-lt': status === 'upcoming',
              'bg-warning-lt': status === 'due',
              'bg-danger-lt': status === 'overdue'
            }">
            {{ statusText }}
          </span>
        </div>
        <div class="col-12" v-if="isPartiallyPaid">
          <div class="row gy-1">
            <div class="col">
              <!-- <div class="text-secondary">Zaplaceno</div> -->
              <div class="fs-5 text-success">{{ formatCurrency(props.paid) }}</div>
            </div>
            <div class="col text-end">
              <!-- <div class="text-secondary">Zbývá</div> -->
              <div class="fs-5 text-secondary">{{ formatCurrency(remainingAmount) }}</div>
            </div>
            <div class="col-12">
              <div class="progress progress-sm">
                <div
                  class="progress-bar bg-success"
                  :style="`width: ${percentagePaid}%`"
                  :title="`${percentagePaid}% zaplaceno`"
                  role="progressbar"
                  :aria-valuenow="percentagePaid"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  <span class="visually-hidden"> {{ percentagePaid }}% zaplaceno</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>

  <!-- * Desktop: table row -->
  <tr
    v-else
    class="position-relative">
    <td data-label="Popis" class="text-wrap">
      {{ title }}
      <!-- NOTE: Odkaz je absolutně napozicován a tento odkaz pokrývá celý řádek (použitím třídy .stretched-link), aby byl celý řádek klikatelný -->
      <RouterLink
        :to="`#platba-${id}`"
        class="stretched-link"
        data-bs-toggle="offcanvas"
        data-bs-target="#payment-offcanvas"
        @click.prevent="openPayment">
      </RouterLink>
    </td>
    <td data-label="Splatnost">{{ formatDate(dueDate) }}</td>
    <td data-label="Stav">
      <span
        class="badge"
        :class="{
          'bg-success-lt': status === 'paid',
          'bg-info-lt': status === 'upcoming',
          'bg-yellow-lt': status === 'due',
          'bg-danger-lt': status === 'overdue'
        }">
        {{ statusText }}
      </span>
    </td>
    <td class="text-success text-sm-end" data-label="Částka">{{ formatCurrency(props.amount) }}</td>
    <td class="text-sm-end" data-label="Zaplaceno">{{ formatCurrency(props.paid) }}</td>
    <td class="text-sm-end" data-label="Zbývá">{{ formatCurrency(remainingAmount) }}</td>
  </tr>
</template>

<style scoped>
  tbody tr {
    /* height on <tr> acts like min-height */
    height: 3.5rem;
  }
</style>