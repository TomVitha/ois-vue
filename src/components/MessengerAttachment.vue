<script setup lang="ts">
  import { defineProps } from 'vue'

  const props = defineProps<{
    filename: string,
    size?: string,
    filetype?: string,
    url?: string,
  }>()
</script>

<template>
  <div class="card card-sm">
    <a :href="url" class="card-body p-2 d-flex align-items-center gap-2 text-decoration-none">
      <div v-if="filetype">
        <div class="avatar">
          <i class="ti ti-paperclip"></i>
        </div>
      </div>
      <div class="">
        <div class="font-weight-medium fs-5">{{ filename }}</div>
        <div v-if="size" class="text-secondary fs-6">{{ size }}</div>
      </div>
    </a>
  </div>
  <!-- <div class="input-group flex-nowrap">
    <a :href="url" class="btn flex-fill text-start justify-content-start">
      <div v-if="filetype">
        <div class="avatar">
          <i class="ti ti-paperclip"></i></div>
      </div>
      <div class="flex-fill text-truncate">
        <div class="font-weight-medium text-truncate fs-5">{{ filename }}</div>
      </div>
      <div class="icon-end">
        <div v-if="size" class="text-secondary fs-6">{{ size }}</div>
      </div>
    </a>
  </div> -->
  <!-- <div class="input-group w-100 flex-nowrap">
    <a href="https://google.com" class="btn text-start flex-fill">
      <div class="w-100">
        <div class="font-weight-medium text-truncate fs-5">{{ filename }}</div>
        <div v-if="size" class="text-secondary fs-6">{{ size }}</div>
      </div>
    </a>
    <button data-bs-toggle="dropdown" type="button" class="btn dropdown-toggle dropdown-toggle-split"></button>
    <div class="dropdown-menu dropdown-menu-end">
      <a class="dropdown-item" :href="url">Otevřít</a>
      <a class="dropdown-item" :href="url">Stáhnout</a>
    </div>
  </div> -->
</template>

<style scoped></style>