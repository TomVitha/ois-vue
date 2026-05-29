<script setup lang="ts">
  import OrderDocumentItem from '@/components/DOIS/OrderDocumentItem.vue'

  const props = defineProps<{
    orderId: number,
    contractNumber: string,
    supplier: string,
    documents: any,
  }>()

  // const orderParts = computed(() => {
  //   return Array.isArray(props.documents) ? props.documents : []
  // })

  // const mainDocument = computed(() => {
  //   return orderParts.value.length > 0 && Array.isArray(orderParts.value[0]) && orderParts.value[0].length > 0
  //     ? orderParts.value[0][0]
  //     : null
  // })

  // const supportingDocuments = computed(() => {
  //   return orderParts.value.length > 0 && Array.isArray(orderParts.value[0]) && orderParts.value[0].length > 1
  //     ? orderParts.value[0].slice(1)
  //     : []
  // })

</script>

<template>
  <div class="card">
    <div class="card-header">
      <div>
        <div class="card-title mb-0">{{ props.contractNumber }}</div>
        <div>{{ props.supplier }}</div>
      </div>
    </div>
    <div class="card-body">
      <div class="space-y">
        <!-- WIP -->
        <div v-for="orderPart in props.documents" class="card">
          <!-- * Main document = orderPart[0] -->
          <div class="list-group list-group-flush">
            <OrderDocumentItem
              :order-id="props.orderId"
              :documentId="orderPart[0].id"
              :status="orderPart[0].status"
              :filepath="orderPart[0].filepath"
              :datetime="orderPart[0].datetime"
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
    <!-- TODO: order comments -->
  </div>
</template>

<style scoped></style>