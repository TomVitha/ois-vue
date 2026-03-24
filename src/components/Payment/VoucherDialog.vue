<script setup lang="ts">
  import { useLocaleStore } from '@/stores/locale'
  import { useVouchersStore } from '@/stores/vouchers'

  const localeStore = useLocaleStore()
  const vouchersStore = useVouchersStore()

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
  <div class="modal fade" id="voucher-modal">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-sm modal-fullscreen-sm-down">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Detail poukázky</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">
          <template v-if="vouchersStore.selectedVoucher">
            <div class="space-y-4">

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="d-block mx-auto bg-purple-lt rounded-circle p-3 my-2 text-purple"
                  height="70">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 15l6 -6" />
                  <path d="M9 9.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
                  <path d="M14 14.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
                  <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                </svg>
              </div>

              <div class="text-center">
                <div class="subheader">V hodnotě</div>
                <strong class="h1 my-0">{{ formatCurrency(vouchersStore.selectedVoucher.value) }}</strong>
              </div>

              <div>
                <h3 class="m-0">{{ vouchersStore.selectedVoucher.title }}</h3>
                <div class="text-secondary">Obdržena: {{ formatDate(vouchersStore.selectedVoucher.date) }}</div>
              </div>

              <div v-if="!vouchersStore.selectedVoucher.isFullyUsed">
                <div class="row">
                  <div class="col">
                    <div class="text-secondary">Zbývá</div>
                    <div class="fw-semibold text-success">{{ formatCurrency(vouchersStore.selectedVoucher.remaining) }}</div>
                  </div>
                  <div class="col text-end">
                    <div class="text-secondary">Vyčerpáno</div>
                    <div class="fw-semibold">{{ formatCurrency(vouchersStore.selectedVoucher.spent) }}</div>
                  </div>
                  <div class="col-12">
                    <div class="progress progress-sm mt-1" role="progressbar" :aria-valuenow="vouchersStore.selectedVoucher.remainingPercent" aria-valuemin="0" aria-valuemax="100" :aria-label="`Zbývá ${Math.round(vouchersStore.selectedVoucher.remainingPercent)}%`">
                      <div
                        class="progress-bar bg-success"
                        :style="`width: ${vouchersStore.selectedVoucher.remainingPercent}%`"
                        :title="`${Math.round(vouchersStore.selectedVoucher.remainingPercent)}% zbývá`">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="vouchersStore.selectedVoucher.breakdown.length > 0">
                <div class="subheader mb-2">Historie čerpání</div>
                <div class="card">
                  <div class="list-group list-group-flush rounded">
                    <div
                      v-for="item in vouchersStore.selectedVoucher.breakdown"
                      :key="item.id"
                      class="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <div>{{ item.label }}</div>
                        <div class="text-secondary">{{ formatDate(item.date) }}</div>
                      </div>
                      <div class="text-nowrap">{{ formatCurrency(item.amount) }}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </template>

          <div v-else class="text-secondary text-center py-4">
            Vyberte poukázku pro zobrazení detailu.
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
</style>