<script setup lang="ts">
  import OrderDocumentItem from '@/components/DOIS/OrderDocumentItem.vue'

  const props = defineProps<{
    orderId: number,
    contractNumber: string,
    supplier: string,
    mainDocument: any,
    documents: any,
    orderComments?: any[],
  }>()

  console.log("props", props)
</script>

<template>
  <div class="card">
    <div class="card-header">
      <div>
        <div class="card-title">{{ props.contractNumber }}</div>
        <div>{{ props.supplier }}</div>
      </div>
    </div>
    <!-- WIP -->
    <!-- * Main (order) document -->
    <div class="list-group list-group-flush">
      <OrderDocumentItem :order-id="props.orderId" :documentId="props.mainDocument.id" :status="props.mainDocument.status" :filename="props.mainDocument.filename" :datetime="props.mainDocument.datetime" :documentComments="props.mainDocument.comments" :is-main-document="true" />
    </div>
    <!-- * Supplier documents -->
    <template v-if="props.documents">
      <div class="card-body p-0">
        <div class="row">
          <div class="col">
            <div class="accordion accordion-flush" id="temp-dokumenty">
              <!-- loop for each doc category -->
              <div v-for="documentGroup in props.documents" class="accordion-item">
                <div class="accordion-header">
                  <button
                    class="accordion-button collapsed list-group-header"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#docgroup-${props.orderId}-${props.documents.indexOf(documentGroup)}`"
                    aria-expanded="false">
                    Počet dokumentů: {{ documentGroup.length }}
                    <div class="accordion-button-toggle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                        <path d="M6 9l6 6l6 -6"></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <div :id="`docgroup-${props.orderId}-${props.documents.indexOf(documentGroup)}`" class="accordion-collapse collapse">
                  <div class="list-group list-group-flush">
                    <template v-for="document in documentGroup" :key="document.id">
                      <OrderDocumentItem :orderId="props.orderId" :documentId="document.id" :status="document.status" :filename="document.filename" :datetime="document.datetime" :is-main-document="false" :documentComments="document.comments" />
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped></style>