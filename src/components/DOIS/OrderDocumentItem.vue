<script setup lang="ts">
  import { ref, computed, inject } from 'vue'

  import OrderComment from '@/components/DOIS/OrderComment.vue'
  import type { SubmittedCommentPayload } from '@/components/DOIS/OrderAddComment.vue'
  import OrderAddComment from '@/components/DOIS/OrderAddComment.vue'

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

  // STARÁ LOGIKA - KOMENTÁŘE JSOU VŽDY VIDITELNÉ (POKUD EXISTUJÍ), TLAČÍTKO PŘEPÍNÁ VIDITELNOST POLE PRO NOVÝ KOMENTÁŘ

  // const isAddCommentVisible = ref(false)

  // // zviditelní textové pole nového komentáře
  // function toggleAddComment() {
  //   isAddCommentVisible.value = !isAddCommentVisible.value
  // }

  // const areCommentsVisible = computed(() => {
  //   return comments.value.length > 0 || isAddCommentVisible.value
  // })




  // NOVÁ LOGIKA - KOMENTÁŘE JSOU DEFAULTNĚ SKRYTÉ, TLAČÍTKO KOMENTÁŘ ZOBRAZUJE VŠECHNY KOMENTÁŘE SPOLU S POLEM PRO NOVÝ KOMENTÁŘ
  const areCommentsVisible = ref(false)

  function toggleComments() {
    areCommentsVisible.value = !areCommentsVisible.value
  }

  const isAddCommentVisible = computed(() => {
    return areCommentsVisible.value
  })

  const isAttachingDocs = inject('isAttachingDocs', ref(false))

  function onCommentSubmitted(payload: SubmittedCommentPayload) {
    console.debug('New comment submitted:', payload)
  }

  const statusMap: Record<StatusCode, { text: string; colorClass: string }> = {
    0: { text: 'Neznámé', colorClass: 'secondary' },
    1: { text: 'Nové', colorClass: 'info' },
    2: { text: 'Přijato', colorClass: 'success' },
    3: { text: 'Odmítnuto', colorClass: 'danger' },
  }

  const canStatusBeSet = computed(() => {
    // * Hlavnímu dokumentu se stav takto nenastavuje
    if (props.isMainDocument) return false

    // * Status lze měnit pouze pokud již není přijato nebo odmítnuto
    return (props.status !== 2 && props.status !== 3)
  })

</script>

<template>
  <!-- ? bg-body-tertiary - maybe ? -->
  <div class="list-group-item" :class="{ '': !isMainDocument }">
    <div class="row align-items-center">
      <div v-if="isAttachingDocs" class="col-auto">
        <input class="form-check-input align-middle" type="checkbox">
      </div>
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
        <div class="btn-actions">
          <!-- * Přijmout -->
          <button
            v-if="canStatusBeSet"
            class="btn btn-action text-success"
            data-bs-toggle="tooltip"
            title="Přijmout"
            @click="acceptDocument">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
          </button>
          <!-- * Odmítnout -->
          <button
            v-if="canStatusBeSet"
            class="btn btn-action text-danger"
            data-bs-toggle="tooltip"
            title="Odmítnout"
            @click="declineDocument">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
          <!-- * Komentáře -->
          <button
            class="btn btn-action"
            :class="{ 'active': isAddCommentVisible }"
            data-bs-toggle="tooltip"
            title="Komentáře"
            :aria-expanded="isAddCommentVisible"
            @click="toggleComments">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
            </svg>
            <span v-if="comments.length" class="badge badge-notification">{{ comments.length }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- * Comments -->
  <div v-if="areCommentsVisible" class="list-group-item active space-y">
    <div class="space-y" v-if="comments.length">
      <template v-for="comment in comments" :key="comment.id">
        <OrderComment
          :commentId="comment.id"
          :userId="comment.userId"
          :datetime="comment.datetime"
          :text="comment.text" />
      </template>
    </div>
    <OrderAddComment
      v-if="isAddCommentVisible"
      target="document"
      :targetId="props.documentId"
      :orderId="props.orderId"
      @submitted="onCommentSubmitted" />
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