<script setup lang="ts">
  import { ref, computed } from 'vue';

  import { useLocaleStore } from '@/stores/locale'
  const localeStore = useLocaleStore()

  const props = defineProps<{
    title: string,
    duedate: string,
    amount: number,
    paid: number,
    // status: 'upcoming' | 'due' | 'overdue' | 'paid' | 'unknown', // status will be calculated based on duedate and current date
    isInvoiceShown?: boolean,


    // onPay?: () => void,
    // onDownload?: () => void,
  }>()

  const dueDate = new Date(props.duedate);
  // HACK: Validate passed date - Browser will display "invalid Date"
  if (isNaN(dueDate.getTime())) {
    dueDate.setTime(99999999999999999999999999);
  }

  const dueDaysThreshold = 7; // days before due date to consider as upcoming
  const remainingAmount = computed(() => props.amount - props.paid);

  const isPaid = computed(() => props.paid >= props.amount ? true : false)
  const isPartiallyPaid = computed(() => (props.paid > 0 && props.paid < props.amount) ? true : false)
  const percentagePaid = computed(() => {
    if (props.amount === 0) return 0;
    return Math.min(100, (props.paid / props.amount) * 100);
  });

  type PaymentStatus = 'unknown' | 'upcoming' | 'due' | 'overdue' | 'paid';
  const status = computed<PaymentStatus>(() => {

    // const today = new Date();
    // TEMP - hard-coded today for testing
    const today = new Date('2025-08-01');

    const dueDate = new Date(props.duedate);
    // Normalize to midnight to avoid partial day issues
    today.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);

    const msPerDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.ceil((dueDate.getTime() - today.getTime()) / msPerDay);


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
  <div class="card" :class="{ 'bg-danger-lt': status === 'overdue' }">
    <div class="card-body">
      <div class="row row-gap-3 align-items-center gx-4">
        <div class="col">
          <div>{{ title }}</div>
          <div class="text-secondary">Splatnost: {{ formatDate(dueDate) }}</div>
        </div>
        <div class="col-auto text-end order-md-1">
          <div class="fs-3 fw-bold">{{ formatCurrency(props.amount) }}</div>
          <span v-if="status == 'paid'" class="text-success"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
              <path d="M5 12l5 5l10 -10"></path>
            </svg>{{ statusText }}</span>
          <span v-else class="badge" :class="{
            'bg-info-lt': status === 'upcoming',
            'bg-yellow-lt': status === 'due',
            'bg-danger-lt': status === 'overdue'
          }">
            {{ statusText }}
          </span>
        </div>
        <div class="col-12 col-md-3" v-if="isPartiallyPaid">
          <div class="row">
            <div class="col">
              <div class="text-secondary">Zaplaceno</div>
              <div class="fs-4 fw-bold text-success">{{ formatCurrency(props.paid) }}</div>
            </div>
            <div class="col text-end text-md-start">
              <div class="text-secondary">Zbývá</div>
              <div class="fs-4 fw-bold text text-yellow">{{ formatCurrency(remainingAmount) }}</div>
            </div>
            <div class="col-12 d-md-none">
              <div class="progress progress-sm mt-2" :class="{ 'bg-danger-lt': status === 'overdue' }">
                <div class="progress-bar bg-success" :style="`width: ${percentagePaid}%`" :title="`${percentagePaid}% zaplaceno`" role="progressbar" :aria-valuenow="percentagePaid" aria-valuemin="0" aria-valuemax="100">
                  <span class="visually-hidden"> {{ percentagePaid }}% zaplaceno</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!isPaid || isInvoiceShown" class="col-12 col-md-auto order-last">
          <div class="btn-group w-100 w-md-auto text-end">
            <a v-if="isPaid && isInvoiceShown" href="#faktura" class="btn w-100">Faktura</a>
            <a 
              v-else 
              href="" 
              class="btn w-100" 
              :class="status === 'overdue' ? 'btn-danger' : 'btn-primary'"
              data-bs-toggle="modal" 
              data-bs-target="#temp-payment-modal"
            >
              {{ isPartiallyPaid ? 'Doplatit' : 'Zaplatit' }}
            </a>
            <button 
              class="btn dropdown-toggle dropdown-toggle-split" 
              :class="isPaid && isInvoiceShown ? '' : status === 'overdue' ? 'btn-danger' : 'btn-primary'"
              data-bs-toggle="dropdown" 
              draggable="false"
            >
              <span class="visually-hidden">&darr;</span>
            </button>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Third action</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped></style>