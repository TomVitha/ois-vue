<script setup lang="ts">
  import { useFormatting } from '@/composables/formatting'
  import { useVouchersStore } from '@/stores/vouchers'

  const { formatDate, formatCurrency } = useFormatting()
  const vouchersStore = useVouchersStore()
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
            <div class="space-y-3">

              <div class="text-center">
                <h3 class="m-0">{{ vouchersStore.selectedVoucher.title }}</h3>
              </div>

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
                  <path d="M15 5l0 2" />
                  <path d="M15 11l0 2" />
                  <path d="M15 17l0 2" />
                  <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
                </svg>
              </div>

              <div class="text-center">
                <div class="subheader">V hodnotě</div>
                <strong class="h1 my-0">{{ formatCurrency(vouchersStore.selectedVoucher.value) }}</strong>
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
                    <div class="progress progress-sm mt-1" role="progressbar" :aria-valuenow="vouchersStore.selectedVoucher.percentageSpent" aria-valuemin="0" aria-valuemax="100" :aria-label="`Zbývá ${Math.round(vouchersStore.selectedVoucher.percentageSpent)}%`">
                      <div
                        class="progress-bar bg-success"
                        :style="`width: ${vouchersStore.selectedVoucher.percentageSpent}%`"
                        :title="`${Math.round(vouchersStore.selectedVoucher.percentageSpent)}% zbývá`">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row gy-2">
                <div class="col-12">
                  <div class="text-secondary">Obdržena:</div>
                  <div>{{ formatDate(vouchersStore.selectedVoucher.dateReceived) }}</div>
                </div>
                <div class="col-12">
                  <div class="text-secondary">Splatnost:</div>
                  <div>{{ formatDate(vouchersStore.selectedVoucher.dateExpiration) }}</div>
                </div>
              </div>

              <div v-if="vouchersStore.selectedVoucher.breakdown.length > 0">
                <div class="subheader mb-2">Historie čerpání</div>
                <div class="card">
                  <div class="list-group list-group-flush rounded">
                    <div
                      v-for="item in vouchersStore.selectedVoucher.breakdown"
                      :key="item.id"
                      class="list-group-item d-flex align-items-center">
                      <div class="me-auto">
                        <div>{{ item.label }}</div>
                        <div class="text-secondary">{{ formatDate(item.date) }}</div>
                      </div>
                      <div class="text-nowrap">-{{ formatCurrency(item.amount) }}</div>
                      <!-- DEPRECATED -->
                      <!-- NOTE: S každým čerpáním je spjatý dokument (který se také zobrazuje na stránce Dokumenty), tenhle odkaz ten dokument přímo otevírá -->
                      <!-- <a
                        class="btn btn-action"
                        href="#"
                        target="_blank"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Dokument čerpání">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-text">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                          <path d="M9 9l1 0"></path>
                          <path d="M9 13l6 0"></path>
                          <path d="M9 17l6 0"></path>
                        </svg>
                      </a> -->
                    </div>
                  </div>
                </div>
              </div>

              <!-- TODO: Jak ji má klient čerpat ?? Co pro to musí udělat? A za co? -->
              <!-- TODO: Možnost ji rovnou nějak použít - asi bude potřebovat implementovat CI/nadstandardy/klientské změny -->
              <!-- Zatím jen holý výpis, potřeba nějakých akcí -->
              <!-- Nějak dát vědět kde/jak můžeš poukázku získat? -->

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