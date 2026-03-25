import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

type VoucherBreakdownItem = {
  id: number
  label: string
  date: string
  amount: number
}

type VoucherDataItem = {
  id: number
  title: string
  value: number
  dateReceived: string
  dateExpiration: string
  breakdown?: VoucherBreakdownItem[]
}

const vouchersData = ref<VoucherDataItem[]>([
  {
    id: 1,
    title: '192-03-147 Věrnostní poukázka',
    value: 250000,
    dateReceived: '2025-11-07',
    dateExpiration: '2026-12-31',
    breakdown: [
      { id: 101, label: 'KD2', date: '2024-04-26', amount: 77425 },
      { id: 102, label: 'SOD-IS-I', date: '2024-06-16', amount: 136942 },
    ],
  },
  {
    id: 2,
    title: '192-03-147 z lásky',
    value: 69000,
    dateReceived: '2025-11-07',
    dateExpiration: '2026-12-31',
    breakdown: [],
  },
])

export const useVouchersStore = defineStore('vouchers', () => {
  const selectedVoucherId = ref<number | null>(null)

  const vouchers = computed(() =>
    vouchersData.value.map((v) => {
      const breakdown = v.breakdown ?? []
      const spent = breakdown.reduce((sum, item) => sum + item.amount, 0)
      const remaining = Math.max(v.value - spent, 0)
      const remainingPercent = v.value === 0 ? 0 : Math.max(0, Math.min((remaining / v.value) * 100, 100))

      return {
        ...v,
        breakdown,
        spent,
        remaining,
        remainingPercent,
        isFullyUsed: remaining <= 0,
      }
    })
  )

  const selectedVoucher = computed(() =>
    vouchers.value.find((v) => v.id === selectedVoucherId.value) ?? null
  )

  function selectVoucherById(voucherId: number) {
    selectedVoucherId.value = voucherId
  }

  function clearSelectedVoucher() {
    selectedVoucherId.value = null
  }

  return {
    vouchers,
    selectedVoucherId,
    selectedVoucher,
    selectVoucherById,
    clearSelectedVoucher,
  }
})
