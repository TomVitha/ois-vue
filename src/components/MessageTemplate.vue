<script setup lang="ts">
  defineProps<{
    from: string
    to?: string
    datetime: string
    subject: string
  }>()
</script>

<template>
  <div class="card">
    <div class="card-header gap-2">
      <div class="btn-actions">
        <RouterLink to="/komunikace" class="btn btn-action d-lg-none">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
            <path d="M15 6l-6 6l6 6"></path>
          </svg>
        </RouterLink>
      </div>
      <div class="space-y-1 w-100">
        <h2 class="m-0">{{ subject }}</h2>
        <div class="d-flex justify-content-between">
          <div>
            <div class="font-weight-medium">Od: {{ from }}</div>
            <div v-if="to" class="text-secondary">Komu: {{ to }}</div>
          </div>
          <div>
            <span class="text-secondary fs-5">{{ datetime }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="markdown">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
