<script setup lang="ts">
  import { computed } from 'vue'
  import PageTemplate from '@/components/PageTemplate.vue'
  import DocumentItem from '@/components/DocumentItem.vue'
  import ProductGroup from '@/components/ProductGroup.vue'
  import ProductGroupItem from '@/components/ProductGroupItem.vue'
  import Empty from '@/components/Empty.vue'
  import { useDocumentsStore } from '@/stores/documents'

  const documentsStore = useDocumentsStore()

  const sortedDocuments = computed(() => {
    return [...documentsStore.documents].sort((a, b) => {
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    })
  })

  const productGroups = computed(() => {
    const productIds = Array.from(new Set(sortedDocuments.value.map((document) => document.productId)))

    return productIds.map((productId) => {
      const productDocuments = sortedDocuments.value.filter((document) => document.productId === productId)

      const categories = documentsStore.categories
        .map((category) => {
          const categoryDocuments = productDocuments.filter((document) => document.categoryId === category.id)

          return {
            category,
            documents: categoryDocuments,
          }
        })
        .filter((entry) => entry.documents.length > 0)

      return {
        productId,
        totalCount: productDocuments.length,
        categories,
      }
    })
  })
</script>

<template>

  <PageTemplate title="Dokumenty">
    <div class="row row-deck row-cards">

      <!-- * Empty state - Zobrazí se pokud nejsou žádné dokumenty -->
      <!-- <div class="col-12">
        <Empty title="Žádné dokumenty" subtitle="Nemáte žádné dokumenty." />
      </div> -->

      <!-- * Výpis Dokumentů -->
      <!-- NOTE: Pokud bude mít klient více než 1 produkt, budou všechny kategorie by default collapsed. Pokud bude mít právě 1 produkt, bude kategorie by default otevřená -->
      <div class="col-12">
        <ProductGroup>
          <ProductGroupItem
            v-for="group in productGroups"
            :key="group.productId"
            :title="group.productId"
            :subtitle="`Celkem ${group.totalCount}`"
            :id="group.productId"
            :isOpen="productGroups.length === 1">
            <div class="row row-deck row-cards">
              <template v-for="item in group.categories" :key="`${group.productId}-${item.category.id}`">
                <div class="col-12 mt-3">
                  <h3 class="mb-0">{{ item.category.name }}</h3>
                </div>
                <div class="col-12">
                  <div class="card">
                    <div class="list-group list-group-flush">
                      <DocumentItem
                        v-for="document in item.documents"
                        :key="document.id"
                        :title="document.name"
                        :filesize="document.fileSize"
                        :dateAdded="document.dateAdded"
                        :dateValid="document.dateValid"
                        :fileUrl="document.fileUrl" />
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </ProductGroupItem>
        </ProductGroup>
      </div>

    </div>
  </PageTemplate>
</template>
