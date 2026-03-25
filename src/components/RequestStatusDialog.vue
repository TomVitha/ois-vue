<script setup lang="ts">
  import type { LastSubmissionResult } from '@/requests/types'

  defineProps<{
    result: LastSubmissionResult | null
  }>()
</script>

<template>
  <div class="modal fade" id="request-submit-status-modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <!-- <div class="modal-header">
          <h5 class="modal-title">Žádost</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div> -->

        <div class="modal-body">
          <div class="text-center py-2">
            <!-- * Success state -->
            <template v-if="result">
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
              <h2 class="mb-2">Žádost zaslána</h2>
              <p class="text-secondary mb-1">{{ result.templateName }}</p>
              <p class="text-secondary mb-0">Produkt: {{ result.propertyName }}</p>
            </template>
            <!-- * Fail state -->
            <template v-else>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="70"
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
              <h3 class="mb-2">Žádost se nepodařilo vytvořit</h3>
              <p class="text-secondary mb-1">Zkuste to prosím znovu později.</p>
            </template>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary w-100" data-bs-dismiss="modal">Pokračovat</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
