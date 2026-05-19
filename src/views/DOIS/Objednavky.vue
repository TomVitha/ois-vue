<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import Empty from '@/components/Empty.vue'

  // ? maybe
  import AccordionGroup from '@/components/AccordionGroup.vue'
  import AccordionItem from '@/components/AccordionItem.vue'

  import OrderDocumentItem from '@/components/DOIS/OrderDocumentItem.vue'
</script>

<template>

  <PageTemplate title="Objednávky">

    <template #actions>
      <div class="btn-list">
        <button class="btn btn-primary">Primary</button>
        <a href="#" class="btn">Secondary</a>
      </div>
    </template>

    <div class="row row-deck row-cards">

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <div>
              <div class="card-title">194-11-049</div>
              <div>Sapeli Development</div>
            </div>
          </div>
          <div class="list-group list-group-flush">
            <OrderDocumentItem :status="1" name="194-11-049_Sapeli-KD2.pdf"></OrderDocumentItem>
          </div>
          <div class="card-body p-0">
            <div class="row">
              <div class="col">
                <div class="accordion accordion-flush" id="temp-dokumenty">
                  <div class="accordion-item">
                    <div class="accordion-header">
                      <button
                        class="accordion-button collapsed list-group-header"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#temp-dokumenty-1"
                        aria-expanded="false">
                        Počet dokumentů: 3
                        <div class="accordion-button-toggle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                            <path d="M6 9l6 6l6 -6"></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                    <!-- WIP -->
                    <div id="temp-dokumenty-1" class="accordion-collapse collapse">
                      <div class="list-group list-group-flush">
                        <OrderDocumentItem :status="1" name="6A017122_53341_01.scn"></OrderDocumentItem>
                        <OrderDocumentItem :status="2" name="189-08-287_KK_var 1_01.pdf"></OrderDocumentItem>
                        <OrderDocumentItem :status="3" name="1_1.png"></OrderDocumentItem>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </PageTemplate>

</template>

<style scoped></style>