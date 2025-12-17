<script setup lang="ts">
  import { ref, onBeforeUnmount } from 'vue';
  import { useClipboard } from '@/composables/useClipboard';
  const { copyToClipboard } = useClipboard();

  const props = defineProps<{
    data: string | number
  }>()

  const status = ref<'idle' | 'success' | 'error'>('idle');
  let resetTimer: ReturnType<typeof setTimeout> | null = null;

  function scheduleReset() {
    if (resetTimer) {
      clearTimeout(resetTimer);
    }
    resetTimer = setTimeout(() => {
      status.value = 'idle';
      resetTimer = null;
    }, 2000);
  }

  async function handleClick() {
    const ok = await copyToClipboard(props.data);
    status.value = ok ? 'success' : 'error';
    scheduleReset();
  }

  onBeforeUnmount(() => {
    if (resetTimer) {
      clearTimeout(resetTimer);
    }
  });
</script>

<template>
  <button class="btn btn-action" data-bs-toggle="tooltip" data-bs-placement="top" title="Kopírovat" @click.prevent="handleClick">
    <!-- clipboard icon -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-copy" :class="{ 'd-none': status !== 'idle' }">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
      <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
    </svg>
    <!-- check -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check text-success" :class="{ 'd-none': status !== 'success' }">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
    <!-- x -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x text-danger" :class="{ 'd-none': status !== 'error' }">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  </button>
</template>

<style scoped></style>