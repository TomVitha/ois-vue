import { useLocaleStore } from '@/stores/locale'

export function useFormatting() {
  const localeStore = useLocaleStore()

  function formatDate(d: string | Date): string {
    const date = typeof d === 'string' ? new Date(d) : d
    // HACK to display browser-native invalid date message
    if (isNaN(date.getTime())) { date.setTime(99999999999999999999999999) }
    return date.toLocaleDateString(localeStore.locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }

  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat(localeStore.locale, {
      style: 'currency',
      currency: 'CZK',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return {
    formatDate,
    formatCurrency,
  }
}