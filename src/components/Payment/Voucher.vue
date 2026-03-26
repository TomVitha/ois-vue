<script setup lang="ts">
  import { computed } from 'vue'

  import { useLocaleStore } from '@/stores/locale'
  import { useVouchersStore } from '@/stores/vouchers'

  const localeStore = useLocaleStore()
  const vouchersStore = useVouchersStore()

  interface BreakdownItem {
    label: string
    date: string
    amount: number
  }

  const props = defineProps<{
    id: number
    title: string
    value: number
    spent?: number
    dateReceived: string
    dateExpiration: string
    breakdown?: BreakdownItem[]
  }>()

  const dateReceived = new Date(props.dateReceived)
  if (isNaN(dateReceived.getTime())) { dateReceived.setTime(99999999999999999999999999) }   // HACK to display browser-native invalid date message

  function formatDate(date: Date): string {
    return date.toLocaleDateString(localeStore.locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }

  const remaining = computed(() => Math.max(props.value - (props.spent || 0), 0))
  const remainingPercent = computed(() => {
    if (!props.value) return 0
    const rawPercent = (remaining.value / props.value) * 100
    return Math.max(0, Math.min(rawPercent, 100))
  })
  const isFullyUsed = computed(() => remaining.value <= 0)

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat(localeStore.locale, { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }).format(amount)

  function openVoucherDialog() {
    vouchersStore.selectVoucherById(props.id)
  }
</script>

<template>
  <a
    href="#voucher-modal"
    class="card card-link"
    role="button"
    data-bs-toggle="modal"
    data-bs-target="#voucher-modal"
    @click="openVoucherDialog">
    <div class="card-body">
      <div class="row row-gap-3 gx-4">
        <div class="col">
          <div>{{ title }}</div>
          <div class="text-secondary">Obdržena: {{ formatDate(dateReceived) }}</div>
        </div>
        <div class="col-auto text-end">
          <div class="text-secondary">V hodnotě</div>
          <div class="fw-bold">{{ formatCurrency(props.value) }}</div>
        </div>
        <div v-if="!isFullyUsed" class="col-12">
          <div class="row">
            <div class="col">
              <div class="text-secondary">Zbývá</div>
              <div class="fs-4 fw-bold text-success">{{ formatCurrency(remaining) }}</div>
            </div>
            <div class="col text-end">
              <div class="text-secondary">Vyčerpáno</div>
              <div class="fs-4 fw-bold text-secondary">{{ formatCurrency(props.spent || 0) }}</div>
            </div>
            <div class="col-12">
              <div class="progress progress-sm mt-2">
                <div
                  class="progress-bar bg-success"
                  :style="`width: ${remainingPercent}%`"
                  :title="`${remainingPercent}% zbývá`"
                  role="progressbar"
                  :aria-valuenow="remainingPercent"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  <span class="visually-hidden"> {{ remainingPercent }}% zbývá</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
