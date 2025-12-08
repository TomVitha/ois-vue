import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const paymentsData = ref([
  { id: 0, title: 'Výmalba společných prostor', duedate: '2024-01-01', amount: 12000, paid: 0 },
  // { id: 1, title: 'Výstavba kolárny', duedate: '2024-01-01', amount: 36771, paid: 7547 },
  { id: 2, title: '192-03-147 SOD', duedate: '2025-06-03', amount: 336600, paid: 245000 },
  { id: 3, title: 'Oprava střechy', duedate: '2025-08-02', amount: 22000, paid: 0, isInvoiceShown: true },
  { id: 4, title: '192-03-147 Odchylka', duedate: '2025-08-03', amount: 45000, paid: 32000 },
  { id: 5, title: 'Rekonstrukce fasády', duedate: '2025-08-03', amount: 50000, paid: 0 },
  { id: 6, title: '192-03-147 dopLPZ', duedate: '2025-10-29', amount: 45000, paid: 32000 },
  { id: 7, title: 'Oprava střechy', duedate: '2026-01-01', amount: 33127, paid: 0, isInvoiceShown: true },
  { id: 8, title: 'Modernizace výtahu', duedate: '2026-06-01', amount: 45000, paid: 32000 },
  { id: 9, title: 'Oprava výtahu', duedate: '2025-08-03', amount: 50000, paid: 50000 },
  { id: 10, title: 'Revize elektroinstalace', duedate: '2024-01-01', amount: 50000, paid: 50000 },
  { id: 11, title: 'Nové vchodové dveře', duedate: '2025-08-03', amount: 50000, paid: 50000, isInvoiceShown: true },
  { id: 12, title: 'Instalace mučící komory', duedate: 'lkdahgiurn', amount: 15301, paid: 50000 },
  { id: 13, title: 'Odklid mrtvol', duedate: '2024-01-01', amount: 14873, paid: 140000 },
  { id: 14, title: '192-03-147 dopl.BD', duedate: '2025-05-11', amount: 45000, paid: 45000 },
])

export const usePaymentsStore = defineStore('payments', () => {

  const dueDaysThreshold = ref(7)
  const today = ref(new Date('2025-08-01')) // DEV: hard-coded today date for dev purposes

  const payments = computed(() =>
    paymentsData.value.map((p) => {
      
      // Computed properties
      const isPaid = p.paid >= p.amount
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
        isPaid,
        remaining: p.amount - p.paid,
        isPartiallyPaid: p.paid > 0 && p.paid < p.amount,
        percentPaid: Math.min(100, Math.round((p.paid / p.amount) * 100)),
        daysBetweenTodayAndDueDate,
        status
      }
    })
  )


  function setDueDaysThreshold(newValue: number) {
    dueDaysThreshold.value = newValue
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
    setDueDaysThreshold,
    paidPayments,
    overduePayments,
    upcomingPayments,
    upcomingNotDuePayments,
    duePayments,
    partiallyPaidPayments
  }

})