<script setup lang="ts">
  const props = defineProps<{
    from: string
    datetime: string
    subject: string
    content: string
    // hasAttachments?: boolean
    badge?: string
  }>()
</script>

<template>
  <button class="nav-link text-start mw-100 px-4 py-3 user-select-none border-bottom" data-bs-toggle="pill" role="tab" @click.prevent>
    <div class="align-items-center flex-fill mw-100 text-body">
      <div class="d-flex align-items-center gap-2">
        <span class="text-truncate">{{ from }}</span>
        <span v-if="badge" class="badge bg-azure-lt">Byt D 331</span>
        <div class="d-flex align-items-center gap-2 fs-5 ms-auto">
          <i class="ti ti-paperclip"></i>
          <span class="text-secondary">{{ new Date(datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</span>
        </div>
      </div>
      <div class="fs-5 text-truncate w-100">{{ subject }}</div>
      <div class="d-flex align-items-center justify-content-between gap-2">
        <span class="text-secondary fs-5 text-truncate">{{ content?.slice(0, 100) || 'Obsah zprávy...' }}</span>
        <!-- <i class="ti ti-star text-secondary fs-3"></i> -->
      </div>
    </div>
  </button>
</template>

<style scoped></style>