<script setup lang="ts">
  import { ref, computed, provide, readonly } from 'vue'
  import OrderDocumentItem from '@/components/DOIS/OrderDocumentItem.vue'
  import OrderComments from '@/components/DOIS/OrderComments.vue'
  import OrderAddComment from '@/components/DOIS/OrderAddComment.vue'
  import type { SubmittedCommentPayload } from '@/components/DOIS/OrderAddComment.vue'
  import { useDoisOrders } from '@/stores/dois-orders'
  const doisOrdersStore = useDoisOrders()

  const orderComments = computed(() => {
    return doisOrdersStore.getOrderComments(props.orderId)
  })

  const props = defineProps<{
    orderId: number,
    contractNumber: string,
    supplier: string,
    documents: any,
  }>()

  // NOTE: Komentáře k objednávkám  budou defaultně viditelné
  const areCommentsVisible = ref(true)

  function toggleComments() {
    areCommentsVisible.value = !areCommentsVisible.value
  }

  function onCommentSubmitted(payload: SubmittedCommentPayload) {
    console.debug('New comment submitted:', payload)
  }

  const isAttachingDocs = ref(false)

  provide('isAttachingDocs', readonly(isAttachingDocs))

  function startAttachingDocs() { isAttachingDocs.value = true }

  function submitAttachingDocs() { isAttachingDocs.value = false }

  function onSubmitAttachingDocs() {
    console.log('Documents attached successfully.')
    submitAttachingDocs()
  }

  function cancelAttachingDocs() { isAttachingDocs.value = false }

</script>

<template>
  <div class="card">
    <div class="card-header">
      <div>
        <div class="card-title mb-0">{{ props.contractNumber }}</div>
        <div>{{ props.supplier }}</div>
      </div>
      <div class="ms-auto">
        <div v-if="isAttachingDocs" class="btn-list">
          <!-- Submit -->
          <button
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#order-attach-docs-confirm">
            Přiložit vybrané
          </button>
          <!-- Cancel -->
          <button class="btn" @click="cancelAttachingDocs">Zrušit</button>
        </div>
        <div v-if="!isAttachingDocs" class="btn-actions">
          <!-- WIP - ALT comments (offcanvas side panel) -->
          <button
            class="btn btn-action"
            data-bs-toggle="offcanvas"
            data-bs-target="#dois-order-offcanvas"
            title="Otevřít komentáře">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 9h8" />
              <path d="M8 13h6" />
              <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" />
            </svg>
            <!-- TEMP vypnuto ať se netluče s prvním tlačítem -->
            <!-- <span v-if="orderComments.length" class="badge badge-notification">{{ orderComments.length }}</span> -->
          </button>
          <!-- * Komentáře -->
          <button
            class="btn btn-action"
            :class="{ 'active': areCommentsVisible }"
            data-bs-toggle="tooltip"
            title="Komentáře"
            draggable="false"
            @click="toggleComments">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
            </svg>
            <span v-if="orderComments.length" class="badge badge-notification">{{ orderComments.length }}</span>
          </button>
          <!-- * Dropdown actions -->
          <div class="dropdown">
            <button class="btn btn-action dropdown-toggle" data-bs-toggle="dropdown" draggable="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              <button @click="startAttachingDocs" class="dropdown-item">
                Přiložit dokumenty k objednávce
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="space-y">
        <div v-for="orderPart in props.documents" class="card">
          <!-- * Main document = orderPart[0] -->
          <div class="list-group list-group-flush">
            <OrderDocumentItem
              :order-id="props.orderId"
              :documentId="orderPart[0].id"
              :status="orderPart[0].status"
              :filepath="orderPart[0].filepath"
              :datetime="orderPart[0].datetime"
              :uploader-id="orderPart[0].uploaderId"
              :is-main-document="true" />
          </div>
          <!-- * Supporting documents = orderPart[1] -->
          <template v-if="orderPart[1]">
            <div class="row">
              <div class="col">
                <div class="accordion accordion-flush" id="temp-dokumenty">
                  <!-- loop for each doc category -->
                  <div v-for="(docGroup, docGroupIndex) in orderPart[1]" class="accordion-item">
                    <div class="accordion-header">
                      <button
                        class="accordion-button collapsed list-group-header"
                        type="button"
                        data-bs-toggle="collapse"
                        :data-bs-target="`#docgroup-${props.orderId}-${props.documents.indexOf(orderPart)}-${orderPart[1].indexOf(docGroup)}`"
                        aria-expanded="false">
                        Počet dokumentů: {{ docGroup.length }}
                        <div class="accordion-button-toggle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                            <path d="M6 9l6 6l6 -6"></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                    <!-- * Supporting documents -->
                    <div :id="`docgroup-${props.orderId}-${props.documents.indexOf(orderPart)}-${orderPart[1].indexOf(docGroup)}`" class="accordion-collapse collapse">
                      <div class="list-group list-group-flush">
                        <template v-for="(doc, docIndex) in docGroup" :key="doc.id">
                          <OrderDocumentItem
                            :orderId="props.orderId"
                            :documentId="doc.id"
                            :status="doc.status"
                            :filepath="doc.filepath"
                            :datetime="doc.datetime"
                            :uploader-id="doc.uploaderId"
                            :is-main-document="false" />
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="card-body" v-if="areCommentsVisible && orderComments.length > 0">
      <h3 class="mb-3">Komentáře</h3>
      <div class="space-y">

        <OrderComments :comments="orderComments" />

        <OrderAddComment
          target="order"
          :targetId="props.orderId"
          @submitted="onCommentSubmitted" />

      </div>
    </div>
  </div>

  <!-- * Stornovat objednávku? -->
  <!-- TEMP place -> into component -->
  <div class="modal" id="order-attach-docs-confirm" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-md modal-dialog-centered" role="document">
      <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div class="modal-body py-4">
          <!-- <h3>Stornovat objednávku</h3> -->
          <div class="row gy-3">
            <div class="col-12">
              <span>Vyberte smlouvu o dílo, ke které chcete přílohy připojit:</span>
            </div>
            <div class="row-12">
              <select class="form-select" id="order-select-sod" autocomplete="off">
                <option selected disabled>Vyberte</option>
                <option value="1">152-01-023-ID-I</option>
                <option value="2">152-01-023-ID-II</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="w-100">
            <div class="row">
              <div class="col">
                <button
                  class="btn w-100"
                  data-bs-dismiss="modal">Storno</button>
              </div>
              <div class="col">
                <button
                  class="btn btn-primary w-100"
                  data-bs-dismiss="modal"
                  @click="onSubmitAttachingDocs">
                  Připojit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  /* ? maybe ? */
  .chat-item {
    width: fit-content;
    /* max-width: 500px; */
  }

</style>