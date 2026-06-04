<script setup lang="ts">
  import { computed, ref } from 'vue'

  import OrderDocumentComment from '@/components/DOIS/OrderDocumentComment.vue'

  import { useFormatting } from '@/composables/formatting'
  const { formatDate } = useFormatting()

  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  const isDesktop = matchesMediaQuery('(min-width: 992px)')

  import { useDoisOrders } from '@/stores/dois-orders'
  import type { Comment as DoisComment } from '@/stores/dois-orders'
  const doisOrdersStore = useDoisOrders()

  type StatusCode = 0 | 1 | 2 | 3

  const props = defineProps<{
    orderId: number
    documentId: number
    isMainDocument: boolean
    status: StatusCode
    filepath: string
    datetime: string
  }>()

  const filename = computed(() => {
    return props.filepath.split(/[/\\]/).at(-1) || props.filepath
  })

  function acceptDocument() {
    doisOrdersStore.setDocumentStatus(props.orderId, props.documentId, 2)
  }

  function declineDocument() {
    doisOrdersStore.setDocumentStatus(props.orderId, props.documentId, 3)
  }

  const comments = computed<DoisComment[]>(() => {
    return doisOrdersStore.getDocumentComments(props.documentId)
  })

  const isAddCommentVisible = ref(false)

  function toggleAddComment() {
    isAddCommentVisible.value = !isAddCommentVisible.value
  }

  const areCommentsVisible = computed(() => {
    return comments.value.length > 0 || isAddCommentVisible.value
  })

  const newCommentText = ref('')

  const canSubmitComment = computed(() => {
    return newCommentText.value.trim().length > 0
  })

  function submitDocumentComment() {
    const createdComment = doisOrdersStore.addDocumentComment(props.orderId, props.documentId, newCommentText.value)
    if (!createdComment) return
    newCommentText.value = ''
    isAddCommentVisible.value = false
  }

  const statusMap: Record<StatusCode, { text: string; colorClass: string }> = {
    0: { text: 'Neznámé', colorClass: 'secondary' },
    1: { text: 'Nové', colorClass: 'info' },
    2: { text: 'Přijato', colorClass: 'success' },
    3: { text: 'Odmítnuto', colorClass: 'danger' },
  }

  const canStatusBeSet = computed(() => {
    // // * Hlavní dokument nelze měnit
    // if (props.isMainDocument) return false
    // // * Status lze měnit pouze pokud je aktuální status "Nové"
    // return props.status === 1

    // TEMP - hard-coded true
    return true
  })

</script>

<template>
  <div class="list-group-item">
    <div class="row align-items-center">
      <div class="col-auto col-lg-2 col-xxl-1">
        <span :class="isDesktop ? [`status`, `status-${statusMap[props.status].colorClass}`] : [`badge`, `bg-${statusMap[props.status].colorClass}-lt`]">
          {{ statusMap[props.status].text }}
        </span>
      </div>
      <div class="col order-first order-lg-0">
        <div class="row">
          <div class="col-12 col-lg-5">
            <a :href="props.filepath" class="text-reset">{{ filename }}</a>
          </div>
          <div class="col order-first order-lg-0">
            <div class="text-muted">{{ formatDate(props.datetime, 'long-datetime') }}</div>
          </div>
        </div>
      </div>
      <!-- TODO: Zpřístupnit Potvrdit a Odmítnout pouze pokud je dokument od dodavatele !! -->
      <div class="col-auto">
        <!-- TODO: Disable dropdown when no actions are available -->
        <div class="btn-actions">
          <!-- * Komentáře -->
          <button
            class="btn btn-action"
            :class="{ 'active': isAddCommentVisible }"
            data-bs-toggle="tooltip"
            title="Komentáře"
            :aria-expanded="isAddCommentVisible"
            @click="toggleAddComment">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
            </svg>
            <span v-if="comments.length" class="badge badge-notification">{{ comments.length }}</span>
          </button>
          <!-- * Dropdown actions -->
          <div class="dropdown">
            <!-- * [...] -->
            <!-- TODO: :disabled="canStatusBeSet" -->
            <button class="btn btn-icon btn-action dropdown-toggle" data-bs-toggle="dropdown" draggable="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              <!-- * Přijmout -->
              <button v-if="canStatusBeSet" @click="acceptDocument" class="dropdown-item text-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                Přijmout
              </button>
              <!-- * Odmítnout -->
              <button v-if="canStatusBeSet" @click="declineDocument" class="dropdown-item text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
                Odmítnout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- * Comments -->
  <div v-if="areCommentsVisible" class="list-group-item active space-y">
    <div class="divide-y" v-if="comments.length">
      <template v-for="comment in comments" :key="comment.id">
        <OrderDocumentComment 
        :commentId="comment.id" 
        :username="comment.username" 
        :datetime="comment.datetime" 
        :text="comment.text" />
      </template>
    </div>
    <div v-if="isAddCommentVisible">
      <div class="row g-2 align-items-end">
        <div class="col">
          <textarea
            v-model="newCommentText"
            :name="`comment-${props.documentId}`"
            :id="`comment-${props.documentId}`"
            class="form-control"
            placeholder="Napište poznámku..."
            @keydown.ctrl.enter="submitDocumentComment"
            style="resize: none; field-sizing: content;"
            ></textarea>
        </div>
        <div class="col-auto">
          <!-- * Add comment to document -->
          <button
            class="btn btn-primary"
            :class="{ 'btn-icon': !isDesktop }"
            :disabled="!canSubmitComment"
            @click="submitDocumentComment">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 14l11 -11" />
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
            <span v-if="isDesktop">Odeslat</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .list-group-item.active {
    /* background-color: var(--tblr-bg-surface-tertiary); */
    background-color: transparent;
  }
  .list-group-item.active {
    /* TODO: Couple color with status - var(--tblr-info) / var(--tblr-alert) / var(--tblr-danger) */
    /* border-left-color: ; */
  }
</style>