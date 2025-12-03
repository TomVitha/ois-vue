<script setup lang="ts">
  import { ref, computed } from 'vue'
  import NewRequestDialog from '@/components/NewRequestDialog.vue';

  const props = defineProps<{
    name: string
    id: string
    description?: string
  }>()
</script>

<template>
  <RouterLink :to="'#' + id" class="card card-md text-center" data-bs-toggle="modal" :data-bs-target="'#' + id">
    <div class="card-body">
      <h3 class="card-title">{{ name }}</h3>
      <p v-if="description" class="text-secondary">{{ description }}</p>
    </div>
  </RouterLink>
  <NewRequestDialog :name="name" :id="id">
    <slot></slot>
  </NewRequestDialog>
</template>

<style scoped></style>