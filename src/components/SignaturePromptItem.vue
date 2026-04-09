<script setup lang="ts">
  const props = defineProps<{
    title: string
    file: string
  }>()

</script>

<template>
  <!-- NOTE: Odkáže na danou zprávu k Komunikaci -->
  <RouterLink to="/komunikace?m=msg-2" class="list-group-item d-flex align-items-center list-group-item-action" draggable="false">
    <div class="row flex-fill">
      <div class="col-auto text-end d-print-none">
        <div class="avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-text">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <path d="M9 9l1 0" />
            <path d="M9 13l6 0" />
            <path d="M9 17l6 0" />
          </svg>
        </div>
      </div>
      <div class="col">
        <div>{{ props.title }}</div>
        <div class="text-secondary">{{ props.file }}</div>
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

<style scoped>

</style>