<script setup lang="ts">
  import { computed } from 'vue';
  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  import { useDoisOrders } from '@/stores/dois-orders'

  import OrderAddComment from '@/components/DOIS/OrderAddComment.vue'
  import OrderComments from '@/components/DOIS/OrderComments.vue'

  const doisOrdersStore = useDoisOrders()

  const props = defineProps<{
    orderId: number
  }>()

  const order = computed(() => {
    return doisOrdersStore.orders.find(order => order.id === props.orderId)
  })

  const orderComments = computed(() => {
    return doisOrdersStore.getOrderComments(props.orderId)
  })

  const orderStatus = computed(() => {
    return doisOrdersStore.getDocumentStatusMeta(order.value?.documents?.[0]?.[0]?.status)
  })

  const isDesktop = matchesMediaQuery('(min-width: 992px)')
</script>

<template>
  <div class="offcanvas overflow-y-auto" :class="[isDesktop ? 'offcanvas-end' : 'offcanvas-bottom']" :data-bs-scroll="isDesktop" :data-bs-backdrop="!isDesktop" tabindex="-1" id="dois-order-offcanvas" aria-labelledby="dois-order-offcanvas-label">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="dois-order-offcanvas-label">Detail objednávky</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body space-y">
      <div v-if="order" class="space-y-2">
        <div class="row">
          <div class="col">
            <span class="h2">{{ order.contractNumber }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-5 text-muted">Stav</div>
          <div class="col">
            <span :class="`badge bg-${orderStatus.colorClass}-lt text-${orderStatus.colorClass}-lt-fg`">{{ orderStatus.text }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-5 text-muted">Dodavatel</div>
          <div class="col">{{ order.supplier }}</div>
        </div>
      </div>
      <div v-else class="alert alert-warning mb-0" role="alert">
        Objednávka s ID {{ props.orderId }} nebyla nalezena.
      </div>
      <div class="d-flex flex-column align-items-center flex-fill">
        <p class="text-muted text-center my-auto">tady může být něco, třeba historie/aktivita?</p>
      </div>
      <div>
        <h3>Komentáře</h3>
        <OrderComments :comments="orderComments" />
      </div>
    </div>
    <div v-if="order" class="offcanvas-footer border-top flex-shrink-0 flex-grow-0">
      <OrderAddComment
        :orderId="props.orderId"
        :isRefDocRequired="true" />
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