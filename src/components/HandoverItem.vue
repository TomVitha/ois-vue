<script setup lang="ts">
  const props = defineProps<{
    title: string
    description: string
    status: 'done' | 'incomplete' | 'unavailable'
    dependencies?: string[]
  }>()
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="row g-3">
        <div class="col-auto">
          <svg v-if="props.status === 'done'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon text-success icon-tabler icons-tabler-filled icon-tabler-circle-check">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
          </svg>
          <svg v-if="props.status === 'incomplete'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler text-secondary icons-tabler-outline icon-tabler-circle">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          </svg>
          <svg v-if="props.status === 'unavailable'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
            <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
            <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
            <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
            <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
            <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
            <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
            <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
          </svg>
        </div>
        <div class="col">
          <strong>{{ props.title }}</strong>
          <div class="text-secondary">{{ props.description }}</div>
          <div class="fs-5" v-if="props.dependencies?.length">Vyžaduje dokončit: {{ props.dependencies?.join(', ') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  /* .icon-sm {
    --tblr-icon-size: 1rem;
    stroke-width: 1;
  }

  .icon-md {
    --tblr-icon-size: 2.5rem;
    stroke-width: 1;
  }

  .icon-lg {
    --tblr-icon-size: 3.5rem;
    stroke-width: 1;
  } */

  .icon {
    --tblr-icon-size: 2rem;
    stroke-width: 1;
    --tblr-icon-size: 2.5rem;
    stroke-width: 1;
  }
</style>