<script setup lang="ts">
  import { useFormatting } from '@/composables/formatting'

  const props = defineProps<{
    title: string
    date: string
    note?: string
    status: 'passed' | 'upcoming'
    category: 'construction' | 'changes' | 'handover' | 'payments' | 'documents'
  }>()

  const { formatDate } = useFormatting()

</script>

<template>
  <div class="step-item" :class="{ 'inactive': props.status === 'passed' }">
    <div class="row">
      <div class="col-auto">
        <span class="avatar">
          <!-- Výstavba - crane -->
          <svg v-if="props.category === 'construction'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-crane">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 21h6" />
            <path d="M9 21v-18l-6 6h18" />
            <path d="M9 3l10 6" />
            <path d="M17 9v4a2 2 0 1 1 -2 2" />
          </svg>
          <!-- Klientské termíny - paint -->
          <svg v-if="props.category === 'changes'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-paint">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -2" />
            <path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2" />
            <path d="M10 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4" />
          </svg>
          <!-- Předání - key -->
          <svg v-if="props.category === 'handover'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-key">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0" />
            <path d="M15 9h.01" />
          </svg>
          <!-- Dokumenty -->
          <svg v-if="props.category === 'documents'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-text">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <path d="M9 9l1 0" />
            <path d="M9 13l6 0" />
            <path d="M9 17l6 0" />
          </svg>
          <!-- Platba -->
          <svg v-if="props.category === 'payments'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-coins">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" />
            <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
            <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" />
            <path d="M3 6v10c0 .888 .772 1.45 2 2" />
            <path d="M3 11c0 .888 .772 1.45 2 2" />
          </svg>
        </span>
      </div>
      <div class="col">
        <div class="text-reset">{{ formatDate(props.date) }}</div>
        <div class="fw-semibold">{{ props.title }}</div>
        <div class="text-secondary" v-if="props.note">{{ props.note }}</div>
      </div>
      <!-- ? Ke klientským termínům přidat odkaz na Žádosti a změny, ať si může provést změny -->
    </div>
  </div>
</template>

<style scoped>

  /* * Custom class .inactive */
  .step-item.inactive {
    color: var(--tblr-disabled-color);
  }

  .step-item.inactive:after, .step-item.inactive:before {
    background: var(--tblr-steps-inactive-color);
  }
</style>