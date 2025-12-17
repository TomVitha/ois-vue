<script setup lang="ts">
  import { computed } from 'vue';

  import { useLocaleStore } from '@/stores/locale'
  const localeStore = useLocaleStore()

  const props = defineProps<{
    title: string
    status: number
    dateCreated: string
    concern?: string[] | 'generic'
  }>()

  // Object that maps status code to text and CSS class
  const statusMap: Record<number, { text: string; class: string }> = {
    0: { text: 'Neznámý', class: 'status-secondary' },
    1: { text: 'Otevřená', class: 'status-info' },          // active
    2: { text: 'Ve zpracování', class: 'status-warning' },  // active
    3: { text: 'Dokončena', class: 'status-success' },      // closed
    4: { text: 'Zamítnuta', class: 'status-danger' },       // closed
  };
</script>

<template>
  <tr>
    <td data-label="Název">{{ title }}</td>
    <td data-label="Stav">
      <span :class="['status', statusMap[status]?.class || statusMap[0].class]">{{ statusMap[status]?.text || statusMap[0].text }}</span>
    </td>
    <td data-label="Zasláno">
      {{
        new Intl.DateTimeFormat([localeStore.locale], {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }).format(new Date(dateCreated))
      }}
    </td>
    <td data-label="Jednotka">
      <template v-if="Array.isArray(concern)">
        <span
          v-for="(el, index) in concern"
          :key="index"
          class="badge me-1">
          {{ el }}
        </span>
      </template>
      <template v-else-if="concern === 'generic'">
        <span class="text-secondary">Obecná žádost</span>
      </template>
      <template v-else>
        <span class="text-secondary">-</span>
      </template>
    </td>
    <td data-label="">
      <RouterLink to="#zadost-detail">
        Zobrazit
      </RouterLink>
    </td>
  </tr>
</template>

<style scoped></style>