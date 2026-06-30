<script setup lang="ts">
  import type { LastSubmissionResult } from '@/requests/types'

  const props = defineProps<{
    result: LastSubmissionResult | null
  }>()
</script>

<template>
  <div class="modal fade" id="request-submit-status-modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
      <div class="modal-content">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

        <div class="modal-body">
          <div class="text-center divide-y">
            
            <!-- * Success state -->
            <template v-if="props.result?.state === 'success'">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="d-block mx-auto bg-success-lt rounded-circle p-3 my-2 text-success"
                  height="64"
                  aria-label="Platba byla uhrazena">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <h2 class="mb-2">Žádost zaslána</h2>
                <div class="text-muted">
                  Vaší žádost se budeme snažit vyřídit co nejrychleji. O stavu Vás budeme informovat.
                </div>
              </div>
              <div class="space-y-3">
                <div class="d-flex justify-content-between">
                  <div class="text-muted">Typ:</div>
                  <div>{{ props.result.templateName }}</div>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="text-muted">Produkt:</div>
                  <div>{{ props.result.propertyName }}</div>
                </div>
              </div>
            </template>

            <!-- * Fail state -->
            <template v-else>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="d-block mx-auto bg-danger-lt rounded-circle p-3 my-2 text-danger">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
                <h2 class="mb-2">Žádost se nepodařilo vytvořit</h2>
                <div class="text-muted">
                  Zkuste to prosím znovu později.
                </div>
              </div>
            </template>

          </div>
        </div>

        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Pokračovat</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
