<script setup lang="ts">
  import { computed } from 'vue'
  import { RouterLink } from 'vue-router'

  import { useLocaleStore } from '@/stores/locale'

  const localeStore = useLocaleStore()

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

  // Keep existing dev behaviors: hard-coded today and invalid-date hack
  const dueDate = new Date(props.duedate)
  if (isNaN(dueDate.getTime())) {
    dueDate.setTime(99999999999999999999999999)
  }

  const dueDaysThreshold = 7
  const remainingAmount = computed(() => props.amount - props.paid)

  const isPaid = computed(() => props.paid >= props.amount)
  const isPartiallyPaid = computed(() => props.paid > 0 && props.paid < props.amount)
  const percentagePaid = computed(() => {
    if (props.amount === 0) return 0            // avoid division by zero
    return Math.min(100, (props.paid / props.amount) * 100).toFixed(2)
  })

  type PaymentStatus = 'unknown' | 'upcoming' | 'due' | 'overdue' | 'paid'
  const status = computed<PaymentStatus>(() => {
    const today = new Date('2025-08-01') // DEV: hard-coded today date for dev purposes
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

  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat(localeStore.locale, {
      style: 'currency',
      currency: 'CZK',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  function formatDate(date: Date): string {
    return date.toLocaleDateString(localeStore.locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }
</script>

<template>
  <!-- Mobile: list item is clickable anchor that opens payment dialog -->
  <!-- NOTE: Href will point to the actual individual payment -->
  <a
    v-if="props.variant === 'list'"
    href="#temp-payment-modal"
    class="card"
    role="button"
    data-bs-toggle="modal"
    data-bs-target="#temp-payment-modal">
    <div class="card-body">
      <div class="row row-gap-3 align-items-center gx-4">
        <div class="col">
          <div>
            <strong>{{ title }}</strong>
          </div>
          <div class="text-secondary">Splatnost: {{ formatDate(dueDate) }}</div>
        </div>
        <div class="col-auto text-end">
          <div class="fs-3 fw-bold">{{ formatCurrency(props.amount) }}</div>
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
          <div class="row">
            <div class="col">
              <div class="text-secondary">Zaplaceno</div>
              <div class="fs-4 fw-bold text-success">{{ formatCurrency(props.paid) }}</div>
            </div>
            <div class="col text-end">
              <div class="text-secondary">Zbývá</div>
              <div class="fs-4 fw-bold text-warning">{{ formatCurrency(remainingAmount) }}</div>
            </div>
            <div class="col-12">
              <div class="progress progress-sm mt-2">
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
        <div v-if="isInvoiceShown && isPaid" class="col-12 order-last text-end">
          <span class="text-secondary">Faktura dostupná</span>
        </div>
      </div>
    </div>
  </a>

  <!-- Desktop: table row with pay button -->
  <tr
    style="height: 4rem;"
    v-else
    class="card-link position-relative">
    <td data-label="Popis">
      {{ title }}
      <!-- ! This link covers the entire row (using class .stretched-link), making it clickable -->
      <RouterLink
        :to="`#platba-${id}`"
        class="stretched-link"
        data-bs-toggle="modal"
        data-bs-target="#temp-payment-modal"
        @click.prevent>
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
