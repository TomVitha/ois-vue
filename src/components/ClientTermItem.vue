<script setup lang="ts">
  import { useLocaleStore } from '@/stores/locale'
  const localeStore = useLocaleStore()

  const props = defineProps<{
    date: string
    product: string
    title: string
    description: string
  }>()

  function formatDate(value: string): string {
    const date = new Date(value)
    if (isNaN(date.getTime())) return value

    return date.toLocaleDateString(localeStore.locale, {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    })
  }
</script>

<template>
  <RouterLink to="/kalendar" class="list-group-item d-flex align-items-center list-group-item-action">
    <div class="row flex-fill">
      <div class="col-auto text-end d-print-none">
        <div class="avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-md icon-tabler-calendar-event">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
            <path d="M16 3l0 4" />
            <path d="M8 3l0 4" />
            <path d="M4 11l16 0" />
            <path d="M8 15h2v2h-2l0 -2" />
          </svg>
        </div>
      </div>
      <div class="col">
        <div>{{ formatDate(date) }} <span class="badge bg-default text-default-fg text-nowrap">{{ product }}</span></div>
        <div class="text-secondary">{{ title }}</div>
        <div class="text-secondary small">{{ description }}</div>
      </div>
      <div class="col-auto align-self-center text-end d-print-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped></style>