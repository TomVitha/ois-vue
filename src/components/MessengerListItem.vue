<script setup lang="ts">
  const props = defineProps<{
    from: string
    datetime: string
    subject: string
    content: string
    hasAttachment?: boolean
    badge?: string
    isUnread?: boolean
  }>()

  import MessageBadge from '@/components/MessageBadge.vue'

  import {useLocaleStore} from '@/stores/locale'
  const localeStore = useLocaleStore()
</script>

<template>
  <button class="nav-link text-start mw-100 px-4 py-3 user-select-none border-bottom" data-bs-toggle="pill" role="tab" @click.prevent>
    <div class="align-items-center flex-fill mw-100 text-body">
      <div class="d-flex align-items-center gap-1">
        <MessageBadge v-if="badge" :text="badge" />
        <span class="text-truncate" :class="{ 'fw-bold': isUnread }">{{ from }}</span>
        <div class="d-flex align-items-center gap-2 fs-5 ms-auto">
          <i v-if="hasAttachment" class="ti ti-paperclip"></i>
            <span class="text-secondary text-nowrap" :class="{ 'fw-bold': isUnread }">
            {{
              ((locale = localeStore.locale) => {
              const date = new Date(datetime)
              const now = new Date()
              const isToday = date.toDateString() === now.toDateString()
              if (isToday) {
                return date.toLocaleTimeString([locale], { hour: '2-digit', minute: '2-digit' })
              }
              const isCurrentYear = date.getFullYear() === now.getFullYear()
              if (isCurrentYear) {
                return date.toLocaleDateString([locale], { month: '2-digit', day: '2-digit' })
              }
              return date.toLocaleDateString([locale], { year: '2-digit', month: '2-digit', day: '2-digit' })
              })()
            }}
            </span>
        </div>
      </div>
      <div class="text-truncate w-100" :class="{ 'fw-bold': isUnread }">{{ subject }}</div>
      <div class="d-flex align-items-center justify-content-between gap-2">
        <span class="text-secondary  text-truncate">{{ content?.slice(0, 100) || '' }}</span>
        <!-- TODO? Add to favorite (star) -->
        <!-- <i class="ti ti-star text-secondary fs-3"></i> -->
      </div>
    </div>
  </button>
</template>

<style scoped>

</style>