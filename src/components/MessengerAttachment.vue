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
    <a :href="url" class="card-body p-2 d-flex align-items-center gap-2 text-decoration-none" download>
      <div v-if="filetype">
        <div class="avatar">
          <i class="ti ti-paperclip"></i>
        </div>
      </div>
      <div class="">
        <div class="font-weight-medium">{{ filename }}</div>
        <div v-if="size" class="text-secondary fs-5">{{ size }}</div>
      </div>
    </a>
  </div>
</template>

<style scoped></style>