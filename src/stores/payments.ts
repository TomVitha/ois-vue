import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

type PaymentHistoryItem = {
  id: number
  date: string
  amount: number
  note?: string
}

type PaymentDataItem = {
  id: number
  title: string
  duedate: string
  amount: number
  paid: number
  isInvoiceShown?: boolean
  paymentHistory?: PaymentHistoryItem[]
}

const paymentsData = ref<PaymentDataItem[]>([
  { id: 0, title: 'Výmalba společných prostor', duedate: '2024-01-01', amount: 12000, paid: 0, paymentHistory: [] },
  // { id: 1, title: 'Výstavba kolárny', duedate: '2024-01-01', amount: 36771, paid: 7547 },
  {
    id: 2,
    title: '192-03-147 SOD',
    duedate: '2025-06-03',
    amount: 336600,
    paid: 245000,
    paymentHistory: [
      { id: 2001, date: '2025-01-15', amount: 35000, note: '1. záloha' },
      { id: 2002, date: '2025-01-31', amount: 35000, note: '2. záloha' },
      { id: 2003, date: '2025-02-14', amount: 35000, note: '3. záloha' },
      { id: 2004, date: '2025-02-28', amount: 35000, note: '4. záloha' },
      { id: 2005, date: '2025-03-14', amount: 35000, note: '5. záloha' },
      { id: 2006, date: '2025-03-28', amount: 35000, note: '6. záloha' },
      { id: 2007, date: '2025-04-11', amount: 35000, note: '7. záloha' },
    ],
  },
  { id: 3, title: 'Oprava střechy', duedate: '2025-08-02', amount: 22000, paid: 0, isInvoiceShown: true, paymentHistory: [] },
  {
    id: 4,
    title: '192-03-147 Odchylka',
    duedate: '2025-08-03',
    amount: 45000,
    paid: 32000,
    paymentHistory: [
      { id: 4001, date: '2025-07-01', amount: 12000 },
      { id: 4002, date: '2025-07-18', amount: 20000 },
    ],
  },
  { id: 5, title: 'Rekonstrukce fasády', duedate: '2025-08-03', amount: 50000, paid: 0, paymentHistory: [] },
  {
    id: 6,
    title: '192-03-147 dopLPZ',
    duedate: '2025-10-29',
    amount: 45000,
    paid: 32000,
    paymentHistory: [
      { id: 6001, date: '2025-08-21', amount: 32000, note: 'Částečná úhrada' },
    ],
  },
  { id: 7, title: 'Oprava střechy', duedate: '2026-01-01', amount: 33127, paid: 0, isInvoiceShown: true, paymentHistory: [] },
  {
    id: 8,
    title: 'Modernizace výtahu',
    duedate: '2026-06-01',
    amount: 45000,
    paid: 32000,
    paymentHistory: [
      { id: 8001, date: '2026-01-14', amount: 15000 },
      { id: 8002, date: '2026-02-20', amount: 17000 },
    ],
  },
  {
    id: 9,
    title: 'Oprava výtahu',
    duedate: '2025-08-03',
    amount: 50000,
    paid: 50000,
    paymentHistory: [
      { id: 9001, date: '2025-07-29', amount: 50000, note: 'Jednorázová úhrada' },
    ],
  },
  {
    id: 10,
    title: 'Revize elektroinstalace',
    duedate: '2024-01-01',
    amount: 50000,
    paid: 50000,
    paymentHistory: [
      { id: 10001, date: '2023-12-15', amount: 25000 },
      { id: 10002, date: '2023-12-28', amount: 25000 },
    ],
  },
  {
    id: 11,
    title: 'Nové vchodové dveře',
    duedate: '2025-08-03',
    amount: 50000,
    paid: 50000,
    isInvoiceShown: true,
    paymentHistory: [
      { id: 11001, date: '2025-07-25', amount: 50000 },
    ],
  },
  {
    id: 12,
    title: 'Instalace mučící komory',
    duedate: 'lkdahgiurn',
    amount: 15301,
    paid: 50000,
    paymentHistory: [
      { id: 12001, date: '2025-08-11', amount: 15301, note: 'Přeplatek vrácen mimo systém' },
    ],
  },
  {
    id: 13,
    title: 'Odklid mrtvol',
    duedate: '2024-01-01',
    amount: 14873,
    paid: 140000,
    paymentHistory: [
      { id: 13001, date: '2023-10-11', amount: 14873 },
    ],
  },
  {
    id: 14,
    title: '192-03-147 dopl.BD',
    duedate: '2025-05-11',
    amount: 45000,
    paid: 45000,
    paymentHistory: [
      { id: 14001, date: '2025-05-08', amount: 15000 },
      { id: 14002, date: '2025-05-10', amount: 30000 },
    ],
  },
])

const defaultAccountNumber = '670100-1234567890 / 6210'

export const usePaymentsStore = defineStore('payments', () => {

  const dueDaysThreshold = ref(7)
  const today = ref(new Date('2025-08-01')) // DEV: hard-coded today date for dev purposes
  const selectedPaymentId = ref<number | null>(null)

  const payments = computed(() =>
    paymentsData.value.map((p) => {
      const paymentHistory = p.paymentHistory ?? []
      const paidFromHistory = paymentHistory.reduce((sum, h) => sum + h.amount, 0)
      const paid = paymentHistory.length > 0 ? paidFromHistory : p.paid
      
      // Computed properties
      const isPaid = paid >= p.amount
      const daysBetweenTodayAndDueDate = Math.ceil(
        (new Date(p.duedate).getTime() - today.value.getTime()) / (24 * 60 * 60 * 1000)
      )
      const status =
        isPaid ? 'paid'
          : daysBetweenTodayAndDueDate < 0 ? 'overdue'
            : daysBetweenTodayAndDueDate <= dueDaysThreshold.value ? 'due'
              : 'upcoming'

      return {
        ...p,
        paid,
        paymentHistory,
        isPaid,
        remaining: p.amount - paid,
        isPartiallyPaid: paid > 0 && paid < p.amount,
        percentPaid: p.amount === 0 ? 0 : Math.min(100, Math.round((paid / p.amount) * 100)),
        daysBetweenTodayAndDueDate,
        status,
        accountNumber: defaultAccountNumber,
        varSymbol: `74646${String(p.id).padStart(2, '0')}`,
        message: '192-03-147 KD1'
      }
    })
  )

  const selectedPayment = computed(() =>
    payments.value.find((p) => p.id === selectedPaymentId.value) ?? null
  )


  function setDueDaysThreshold(newValue: number) {
    dueDaysThreshold.value = newValue
  }

  function selectPaymentById(paymentId: number) {
    selectedPaymentId.value = paymentId
  }

  function clearSelectedPayment() {
    selectedPaymentId.value = null
  }

  const paidPayments = computed(() => payments.value.filter(p => p.status === 'paid'))
  const overduePayments = computed(() => payments.value.filter(p => p.status === 'overdue'))
  const upcomingPayments = computed(() => payments.value.filter(p => { return p.status === 'due' || p.status === 'upcoming' }))
  const upcomingNotDuePayments = computed(() => payments.value.filter(p => p.status === 'upcoming'))
  const duePayments = computed(() => payments.value.filter(p => p.status === 'due'))
  const partiallyPaidPayments = computed(() => payments.value.filter(p => p.isPartiallyPaid))

  return {
    dueDaysThreshold,
    today,
    payments,
    selectedPaymentId,
    selectedPayment,
    setDueDaysThreshold,
    selectPaymentById,
    clearSelectedPayment,
    paidPayments,
    overduePayments,
    upcomingPayments,
    upcomingNotDuePayments,
    duePayments,
    partiallyPaidPayments
  }

})