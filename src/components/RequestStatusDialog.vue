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
        <div class="modal-header">
          <h5 class="modal-title">Stav žádosti</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <template v-if="result">
            <div class="text-center py-2">
              <div class="avatar avatar-xl bg-green-lt mb-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
              <h3 class="mb-2">Žádost byla úspěšně odeslána</h3>
              <p class="text-secondary mb-1">{{ result.templateName }}</p>
              <p class="text-secondary mb-0">Nemovitost: {{ result.propertyName }}</p>
            </div>
          </template>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary w-100" data-bs-dismiss="modal">Rozumím</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
