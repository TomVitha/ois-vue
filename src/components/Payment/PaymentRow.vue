<script setup lang="ts">
  import { ref, computed } from 'vue';

  import { useLocaleStore } from '@/stores/locale'
  const localeStore = useLocaleStore()

  const props = defineProps<{
    title: string,
    duedate: string,
    amount: number,
    paid: number,
    isInvoiceShown?: boolean,

    // onPay?: () => void,
    // onDownload?: () => void,
  }>()

  const dueDate = new Date(props.duedate);
  // HACK to display browser's native "invalid date" text
  if (isNaN(dueDate.getTime())) {
    dueDate.setTime(99999999999999999999999999);
  }

  const dueDaysThreshold = 7; // days before due date to consider as upcoming
  const remainingAmount = computed(() => props.amount - props.paid);

  const isPaid = computed(() => props.paid >= props.amount ? true : false)
  const isPartiallyPaid = computed(() => (props.paid > 0 && props.paid < props.amount) ? true : false)
  const percentagePaid = computed(() => {
    if (props.amount === 0) return 0; // Avoids dividing by 0
    return Math.min(100, (props.paid / props.amount) * 100);
  });

  type PaymentStatus = 'unknown' | 'upcoming' | 'due' | 'overdue' | 'paid';
  const status = computed<PaymentStatus>(() => {

    // const today = new Date();
    const today = new Date('2025-08-01');     // DEV: hard-coded today date for dev purposes
    const dueDate = new Date(props.duedate);
    // Normalize to midnight to avoid partial day issues
    today.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);
    const diffDays = Math.ceil((dueDate.getTime() - today.getTime()) / (24 * 60 * 60 * 1000));

    // All paid
    if (isPaid.value)
      return 'paid';

    if (diffDays < 0)
      return 'overdue';
    else if (diffDays <= dueDaysThreshold)
      return 'due';
    else if (diffDays > dueDaysThreshold)
      return 'upcoming';

    return 'unknown';

  });

  const statusText = computed(() => {
    const map: Record<PaymentStatus, Record<string, string>> = {
      unknown: { cs: 'Neznámý', en: 'Unknown' },
      upcoming: { cs: 'Nadcházející', en: 'Upcoming' },
      due: { cs: 'Blíží se', en: 'Due' },
      overdue: { cs: 'Po splatnosti', en: 'Overdue' },
      paid: { cs: 'Zaplaceno', en: 'Paid' },
    };
    const locale = localeStore.locale.startsWith('cs') ? 'cs' : 'en';
    return map[status.value][locale];
  });

  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat(localeStore.locale, {
      style: 'currency',
      currency: 'CZK',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }

  function formatDate(date: Date): string {
    return date.toLocaleDateString(localeStore.locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }

</script>

<template>
  <tr>
    <td data-label="Stav">
      <span hidden :class="{
        'text-success': status === 'paid',
        'text-danger': status === 'overdue',
        'text-warning': status === 'due',
        'text-info': status === 'upcoming',
      }">
        <!-- paid (check) -->
        <svg v-if="status === 'paid'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
        <!-- overdue (exclamation-circle) -->
        <svg v-else-if="status === 'overdue'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-exclamation-circle">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1" />
        </svg>
        <!-- due (clock) -->
        <svg v-else-if="status === 'due'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M12 7v5l3 3" />
        </svg>
        <!-- upcoming (info-circle) -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M12 9h.01" />
          <path d="M11 12h1v4h1" />
        </svg>
        {{ statusText }}
      </span>
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
    <td data-label="Splatnost">{{ formatDate(dueDate) }}</td>
    <td data-label="Popis">{{ title }}</td>
    <td class="text-success text-sm-end" data-label="Částka">{{ formatCurrency(props.amount) }}</td>
    <td class="text-sm-end" data-label="Zaplaceno">{{ formatCurrency(props.paid) }}</td>
    <td class="text-sm-end" data-label="Zbývá">{{ formatCurrency(remainingAmount) }}</td>
    <td>
      <div class="dropdown">
        <button class="btn btn-icon btn-action dropdown-toggle" data-bs-toggle="dropdown" draggable="false" data-bs-boundary="viewport">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </button>
        <!-- DEV Preview invoice -->
        <div class="dropdown-menu dropdown-menu-end">
          <button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#temp-payment-modal">
            {{ isPartiallyPaid ? 'Doplatit' : 'Zaplatit' }}
          </button>
          <RouterLink to="/zadost-nova" class="dropdown-item">Požádat o odklad</RouterLink>
        </div>
      </div>
    </td>
  </tr>
</template>

<style scoped></style>