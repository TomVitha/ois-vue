<script setup lang="ts">
  import { computed } from 'vue'

  import { useLocaleStore } from '@/stores/locale'
  import { usePaymentsStore } from '@/stores/payments'

  const localeStore = useLocaleStore()
  const paymentsStore = usePaymentsStore()

  import PaymentDialogItem from '@/components/Payment/PaymentDialogItem.vue';
  import CopyToClipboardButton from '@/components/CopyToClipboardButton.vue';

  const selectedPayment = computed(() => paymentsStore.selectedPayment)

  const amountToShow = computed(() => {
    return selectedPayment.value?.amount ?? 0
  })

  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat(localeStore.locale, {
      style: 'currency',
      currency: 'CZK',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  function formatDate(value: string): string {
    const date = new Date(value)
    if (isNaN(date.getTime())) return value

    return date.toLocaleDateString(localeStore.locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }
</script>

<template>
  <div class="modal fade" id="payment-modal">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md modal-fullscreen-sm-down">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Detail platby</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">

          <div class="space-y-4">
            <template v-if="selectedPayment">
              <div>
                <template v-if="!selectedPayment.isPaid">
                  <!-- TODO: QR Actions - share, download -->
                  <img
                    src="/qr-temp.svg"
                    alt="QR kód se nepodařilo načíst"
                    width="150"
                    class="d-block mx-auto"
                    title="Zaplaťte načtením QR kódu ve své bankovní mobilní aplikaci" />
                </template>
                <template v-else>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="d-block mx-auto bg-success-lt rounded-circle p-3 my-2 text-success"
                    height="70"
                    aria-label="Platba byla uhrazena">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <div class="text-center text-success">
                    Platba uhrazena
                  </div>
                </template>
              </div>

              <div class="text-center">
                <div class="subheader">Částka platby</div>
                <div class="d-flex align-items-center justify-content-center gap-1">
                  <strong class="h1 my-0">{{ formatCurrency(amountToShow) }}</strong>
                  <CopyToClipboardButton :data="amountToShow" />
                </div>

                <div v-if="selectedPayment.isPartiallyPaid" class="mt-3 text-start">
                  <div class="row">
                    <div class="col">
                      <div class="text-secondary">Zaplaceno</div>
                      <div class="fw-semibold text-success">{{ formatCurrency(selectedPayment.paid) }}</div>
                    </div>
                    <div class="col text-end">
                      <div class="text-secondary">Zbývá</div>
                      <div class="fw-semibold text-warning">{{ formatCurrency(selectedPayment.remaining) }}</div>
                    </div>
                    <div class="col-12">
                      <div class="progress progress-sm mt-1" role="progressbar" :aria-valuenow="selectedPayment.percentPaid" aria-valuemin="0" aria-valuemax="100" :aria-label="`Zaplaceno ${selectedPayment.percentPaid}%`">
                        <div
                          class="progress-bar bg-success"
                          :style="`width: ${selectedPayment.percentPaid}%`"
                          :title="`${selectedPayment.percentPaid}% zaplaceno`">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <!-- <div class="list-group list-group-flush"> -->
                  <div class="datagrid">
                    <PaymentDialogItem name="Číslo účtu" :value="selectedPayment.accountNumber"></PaymentDialogItem>
                    <PaymentDialogItem name="Variabilní symbol" :value="selectedPayment.varSymbol"></PaymentDialogItem>
                    <PaymentDialogItem name="Zpráva pro příjemce" :value="selectedPayment.message"></PaymentDialogItem>
                  </div>
                </div>
              </div>

              <template v-if="selectedPayment.paymentHistory.length > 0">
                <div>
                  <div class="subheader mb-2">Historie úhrad</div>
                  <div class="card">
                    <div class="list-group list-group-flush rounded">
                      <div
                        v-for="item in selectedPayment.paymentHistory"
                        :key="item.id"
                        class="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <div class="text-secondary">{{ formatDate(item.date) }}</div>
                          <!-- Poznámka - nejčastěji že k úhradě byla využita poukázka -->
                          <div v-if="item.note" class="small text-secondary">{{ item.note }}</div>
                        </div>
                        <div class="text-nowrap">{{ formatCurrency(item.amount) }}</div>
                        <!-- TODO: Odkaz na dokument (pouze pro ty co mají IČO) -->
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </template>

            <template v-else>
              <div class="text-secondary text-center py-4">
                Vyberte platbu pro zobrazení detailu.
              </div>
            </template>
            <p class="text-center text-secondary mt-auto fs-5 mb-0">Odeslané platby se v systému mohou projevit až po 3&nbsp;pracovních dnech.</p>
            <!-- TODO: Odkaz na žádost o odklad platby -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .modal {
    --tblr-modal-bg: var(--tblr-bg-surface-tertiary);
  }

  @media (min-width: 576px) {
    .modal-content {
      max-height: 850px;
    }
  }
</style>