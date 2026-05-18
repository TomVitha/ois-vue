<script setup lang="ts">
  import { computed } from 'vue'
  import PageTemplate from '@/components/PageTemplate.vue'
  import Payments from '@/components/Payment/Payments.vue'
  import DocumentItem from '@/components/DocumentItem.vue'
  import Empty from '@/components/Empty.vue'

  import { usePaymentsStore } from '@/stores/payments'
  import { useDocumentsStore } from '@/stores/documents'

  const paymentsStore = usePaymentsStore()
  const documentsStore = useDocumentsStore()

  // ! HARD-CODED PRODUCT ID
  const productId = '192-03-147'

  const productDocuments = computed(() => {
    return [...documentsStore.documents]
      .filter((document) => document.productId === productId)
      .sort((a, b) => {
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      })
  })

  const categorizedDocuments = computed(() => {
    return documentsStore.categories
      .map((category) => {
        const categoryDocuments = productDocuments.value.filter((document) => document.categoryId === category.id)

        return {
          category,
          documents: categoryDocuments,
        }
      })
      .filter((entry) => entry.documents.length > 0)
  })
</script>

<template>
  <PageTemplate title="Obchodní případ 118680" back-to="/dois/obchodni-pripady">
    <ul class="nav nav-underline border-bottom flex-nowrap scroll-x mb-3" data-bs-toggle="tabs" role="tablist">
      <li class="nav-item" role="presentation">
        <a href="#tab-1" class="nav-link active" data-bs-toggle="tab" aria-selected="true" role="tab" draggable="false">Klient a produkt</a>
      </li>
      <li class="nav-item" role="presentation">
        <a href="#tab-2" class="nav-link" data-bs-toggle="tab" aria-selected="false" role="tab" draggable="false">Platby</a>
      </li>
      <li class="nav-item" role="presentation">
        <a href="#tab-3" class="nav-link" data-bs-toggle="tab" aria-selected="false" role="tab" draggable="false">Dokumenty</a>
      </li>
      <li class="nav-item" role="presentation">
        <a href="#tab-4" class="nav-link" data-bs-toggle="tab" aria-selected="false" role="tab" draggable="false">Termínové sekce</a>
      </li>
    </ul>


    <div class="tab-content">

      <!-- Klient a produkt -->
      <div class="tab-pane active show" id="tab-1" role="tabpanel">
        <div class="row row-deck row-cards">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <!-- TODO -->
                 <!-- 
                  'Klient' -- je abstraktní taková uber entita
                      Nazev:Veselý Josef Dr. Ing. Ph.D. MBA a Věra
                      Email:vesely@taxway.cz
                      Telefon:+420724747457, 602234725
                  'Osoba' - Reálně je "Osoby" -- vypisuje všechny jednotlivé osoby/lidi
                      Jméno:Dr. Ing. Veselý Josef Ph.D MBA
                      Email:vesely@taxway.cz
                      Telefon:+420724747457

                      Jméno:Veselá Věra
                      Telefon:+420602234725
                  'Produkt' -- evidentně ne všechny údaje musí být vypsány
                      Číslo smlouvy:128-07-156
                      Typ:
                      Adresa:
                      Dům:
                      Číslo bytu:
                      Dispozice:
                 -->
                infooo
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Platby -->
      <div class="tab-pane" id="tab-2" role="tabpanel">
        <div class="row row-deck row-cards">
          <div class="col-12">
            <div class="card">
              <!-- Example data only -->
              <Payments :payments="paymentsStore.payments" />
            </div>
          </div>
        </div>
      </div>

      <!-- Dokumenty -->
      <div class="tab-pane" id="tab-3" role="tabpanel">
        <div class="row row-deck row-cards">
          <template v-if="categorizedDocuments.length > 0">
            <template v-for="item in categorizedDocuments" :key="item.category.id">
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
          </template>

          <div v-else class="col-12">
            <Empty title="Žádné dokumenty" :subtitle="`Nejsou žádné dokumenty.`" />
          </div>
        </div>
      </div>

      <!-- Termínové sekce -->
      <div class="tab-pane" id="tab-4" role="tabpanel">
        <div class="row row-deck row-cards">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <!-- TODO -->
                termínové sekceee
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>




  </PageTemplate>
</template>

<style scoped></style>