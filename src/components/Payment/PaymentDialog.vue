<script setup lang="ts">
  import { useLocaleStore } from '@/stores/locale'
  const localeStore = useLocaleStore()

  import PaymentDialogItem from '@/components/Payment/PaymentDialogItem.vue';
  import CopyToClipboardButton from '@/components/CopyToClipboardButton.vue';

  const props = defineProps<{
    amount: number
    accountNumber: string
    varSymbol: string | number
    message: string | number
  }>()



</script>

<template>
  <!-- WIP -->
  <!-- TODO: Create proper design (with proper code) -->
  <!-- TODO: Click to copy text buttons -->
  <!-- TODO: Breakdown for partially paid (like on payments page) -->
  <!-- * Povinné údaje: částka, variabilní symbol, číslo účtu  -->
  <!-- * Nepovinné/případné údaje: qr kód, podrobnější popis -->
  <div class="modal fade" id="temp-payment-modal">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-sm modal-fullscreen-sm-down">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Zaplatit platbu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">

          <div class="space-y-3">
            <div>
              <img src="/qr-temp.svg" alt="QR kód se nepodařilo načíst" width="200" class="d-block mx-auto" title="Zaplaťte načtením QR kódu ve své bankovní mobilní aplikaci" />
            </div>

            <div class="text-center">
              <div class="d-flex align-items-center justify-content-center gap-1">
                <strong class="h1 my-0">
                  {{
                    ((locale = localeStore.locale) => {
                      return new Intl.NumberFormat(localeStore.locale, {
                        style: 'currency',
                        currency: 'CZK',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(amount);
                    })()
                  }}
                </strong>
                <CopyToClipboardButton :data="amount" />
              </div>
              <div class="text-secondary">Částka k uhrazení</div>
            </div>

            <div class="list-group list-group-flush">
              <PaymentDialogItem name="Číslo účtu" value="670100-1234567890 / 6210"></PaymentDialogItem>
              <PaymentDialogItem name="Variabilní symbol" value="7464685"></PaymentDialogItem>
              <PaymentDialogItem name="Zpráva pro příjemce" value="165-10-007 KD1"></PaymentDialogItem>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <div class="text-secondary text-center flex-fill">
            <small>Odeslané platby se v systému mohou projevit až po 3 pracovních dnech.</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>