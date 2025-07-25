<script setup lang="ts">
  defineProps<{
    from: string
    to?: string
    datetime: string
    subject?: string
  }>()
</script>

<template>
  <div class="chat card-body">
    <RouterLink to="/komunikace">Zavřít</RouterLink>
    <h2 class="mb-4">{{ subject }}</h2>
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <div>
          <div class="font-weight-medium">Od: {{ from }}</div>
          <!-- <div class="text-secondary">Komu: {{ to }}</div> -->
        </div>
      </div>
      <div>
        <span class="text-secondary fs-5">{{ datetime }}</span>
      </div>
    </div>
    <div class="markdown mt-5">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
