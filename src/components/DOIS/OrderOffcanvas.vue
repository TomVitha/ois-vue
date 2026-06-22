<script setup lang="ts">
  import { computed } from 'vue';
  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  import { useDoisOrders } from '@/stores/dois-orders'

  import OrderAddComment from '@/components/DOIS/OrderAddComment.vue'
  import OrderComments from '@/components/DOIS/OrderComments.vue'
  import type { SubmittedCommentPayload } from '@/components/DOIS/OrderAddComment.vue'

  const doisOrdersStore = useDoisOrders()

  // TEMP HACK
  const props = defineProps<{
    orderId: number
  }>()

  // TEMP - HARD-CODED ORDER ID
  const orderComments = computed(() => {
    return doisOrdersStore.getOrderComments(props.orderId)
  })

  const isDesktop = matchesMediaQuery('(min-width: 992px)')
</script>

<!-- !! ÚDAJE TEMP HARD-CODED !! -->
<template>
  <div class="offcanvas overflow-y-auto" :class="[isDesktop ? 'offcanvas-end' : 'offcanvas-bottom']" :data-bs-scroll="isDesktop" :data-bs-backdrop="!isDesktop" tabindex="-1" id="dois-order-offcanvas" aria-labelledby="dois-order-offcanvas-label">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="dois-order-offcanvas-label">Detail objednávky</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      <!-- TESTING -->
      <!-- <button type="button" class="btn btn-action ms-auto" data-bs-dismiss="offcanvas" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-bar-to-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 12l-10 0" /><path d="M14 12l-4 4" /><path d="M14 12l-4 -4" /><path d="M20 4l0 16" /></svg>
        </button> -->
    </div>
    <div class="offcanvas-body space-y">
      <div class="space-y-2">
        <div class="row">
          <div class="col">
            <span class="h2">194-11-049</span>
          </div>
        </div>
        <div class="row">
          <div class="col-5 text-muted">Stav</div>
          <div class="col">
            <span class="badge bg-info-lt text-info-lt-fg">Nové</span>
          </div>
        </div>
        <div class="row">
          <div class="col-5 text-muted">Dodavatel</div>
          <div class="col">Sapeli Development</div>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center flex-fill">
        <p class="text-muted text-center my-auto">tady může být něco, třeba historie/aktivita?</p>
      </div>
      <div>
        <h3>Komentáře</h3>
        <OrderComments :comments="orderComments" />
      </div>
    </div>
    <div class="offcanvas-footer border-top flex-shrink-0 flex-grow-0">
      <OrderAddComment
        :orderId="props.orderId" />
    </div>
  </div>
</template>

<style scoped>
  .offcanvas {
    --tblr-offcanvas-width: 485px;
    --tblr-offcanvas-height: 99vh;
    border-radius: var(--tblr-modal-border-radius, var(--tblr-border-radius-lg)) var(--tblr-modal-border-radius, var(--tblr-border-radius-lg)) 0 0;
  }

  .offcanvas-header {
    --tblr-offcanvas-padding-y: 1rem;
  }

  @media (min-width: 992px) {
    .offcanvas {
      border-radius: 0;
    }
  }
</style>