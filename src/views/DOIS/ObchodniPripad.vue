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
  <PageTemplate title="Obchodní případ B132071631" back-to="/dois/obchodni-pripady">
    <ul class="nav nav-underline border-bottom flex-nowrap scroll-x mb-3" data-bs-toggle="tabs" role="tablist">
      <li class="nav-item" role="presentation">
        <a href="#tab-1" class="nav-link text-nowrap active" data-bs-toggle="tab" aria-selected="true" role="tab" draggable="false">
          <span class="nav-link-icon d-none d-lg-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-home-2">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M10 12h4v4h-4l0 -4" />
            </svg>
          </span>
          Klient a produkt
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a href="#tab-2" class="nav-link text-nowrap" data-bs-toggle="tab" aria-selected="false" role="tab" draggable="false">
          <span class="nav-link-icon d-none d-lg-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-coins">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3" />
              <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
              <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598" />
              <path d="M3 6v10c0 .888 .772 1.45 2 2" />
              <path d="M3 11c0 .888 .772 1.45 2 2" />
            </svg>
          </span>
          Platby
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a href="#tab-3" class="nav-link text-nowrap" data-bs-toggle="tab" aria-selected="false" role="tab" draggable="false">
          <span class="nav-link-icon d-none d-lg-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-text">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
              <path d="M9 9l1 0" />
              <path d="M9 13l6 0" />
              <path d="M9 17l6 0" />
            </svg>
          </span>
          Dokumenty
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a href="#tab-4" class="nav-link text-nowrap" data-bs-toggle="tab" aria-selected="false" role="tab" draggable="false">
          <span class="nav-link-icon d-none d-lg-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-event">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
              <path d="M16 3l0 4" />
              <path d="M8 3l0 4" />
              <path d="M4 11l16 0" />
              <path d="M8 15h2v2h-2l0 -2" />
            </svg>
          </span>
          Termínové sekce
        </a>
      </li>
    </ul>


    <div class="tab-content">

      <!-- Klient a produkt -->
      <div class="tab-pane active show" id="tab-1" role="tabpanel">

        <div class="row row-cards">
          <div class="col-lg-6">
            <div class="row row-deck row-cards">
              <!-- WIP -->
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <div class="card-title">Klient</div>
                  </div>
                  <div class="card-body">
                    <div class="space-y">
                      <div class="row">
                        <div class="col-4 text-muted">Číslo SoD</div>
                        <div class="col">192-01-086-IS-I</div>
                      </div>
                      <div class="row">
                        <div class="col-4 text-muted">Email</div>
                        <div class="col">josef.vesely@outlook.com</div>
                      </div>
                      <div class="row">
                        <div class="col-4 text-muted">Telefon</div>
                        <div class="col">+420724673167</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <div class="card-title">Osoba</div>
                  </div>
                  <div class="card-body">
                    <div class="space-y">
                      <div class="row">
                        <div class="col-4 text-muted">Jméno</div>
                        <div class="col">Veselý Josef</div>
                      </div>
                      <div class="row">
                        <div class="col-4 text-muted">Email</div>
                        <div class="col">josef.vesely@outlook.com</div>
                      </div>
                      <div class="row">
                        <div class="col-4 text-muted">Telefon</div>
                        <div class="col">+420724673167</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="space-y">
                      <div class="row">
                        <div class="col-4 text-muted">Jméno</div>
                        <div class="col">Veselá Beáta</div>
                      </div>
                      <div class="row">
                        <div class="col-4 text-muted">Email</div>
                        <div class="col">beatavesela@yahoo.com</div>
                      </div>
                      <div class="row">
                        <div class="col-4 text-muted">Telefon</div>
                        <div class="col">+420778711795</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row row-deck row-cards">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <div class="card-title">
                      Produkt
                      <span class="badge bg-success-lt text-success-lt-fg ms-1">Zkolaudováno</span>
                    </div>
                  </div>
                  <!-- NOTE: Tyhle údaje se často nevypisují... možná by nebylo od věci, kdyby se vypisovaly ?? -->
                  <div class="card-body">
                    <div class="space-y">
                      <div class="row">
                        <div class="col-4 text-muted">Číslo smlouvy</div>
                        <div class="col">132-07-163</div>
                      </div>
                      <div class="row">
                        <div class="col-4 text-muted">Typ</div>
                        <div class="col"></div>
                      </div>
                      <div class="row">
                        <div class="col-4 text-muted">Adresa</div>
                        <div class="col"></div>
                      </div>
                      <div class="row">
                        <div class="col-4 text-muted">Dům</div>
                        <div class="col"></div>
                      </div>
                      <div class="row">
                        <div class="col-4 text-muted">Číslo produktu</div>
                        <div class="col"></div>
                      </div>
                      <div class="row">
                        <div class="col-4 text-muted">Dispozice</div>
                        <div class="col"></div>
                      </div>
                    </div>
                  </div>
                </div>
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
              <!-- ! Example data only -->
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
            <div class="card card-md">
              <div class="card-body">
                <div class="mb-3">
                  <h3 class="mb-0">1. termínová sekce</h3>
                  <div class="d-flex align-items-center gap-3">
                    <div class="text-secondary">Do: 16.9.2022</div>
                    <span class="badge bg-danger-lt text-danger">Po termínu</span>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus hic quis vero blanditiis praesentium architecto sint recusandae debitis, assumenda eos error dolorum dignissimos atque, eveniet saepe ab neque commodi deleniti!
                </p>
              </div>
              <div class="card-body">
                <div class="mb-3">
                  <h3 class="mb-0">2. termínová sekce</h3>
                  <div class="d-flex align-items-center gap-3">
                    <div class="text-secondary">Do: 12.12.2022</div>
                    <span class="badge bg-danger-lt text-danger">Po termínu</span>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus hic quis vero blanditiis praesentium architecto sint recusandae debitis, assumenda eos error dolorum dignissimos atque, eveniet saepe ab neque commodi deleniti!
                </p>
              </div>
              <div class="card-body">
                <div class="mb-3">
                  <h3 class="mb-0">3. termínová sekce</h3>
                  <div class="d-flex align-items-center gap-3">
                    <div class="text-secondary">Do: 14.7.2023</div>
                    <span class="badge bg-warning-lt text-warning">Brzy končí</span>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus hic quis vero blanditiis praesentium architecto sint recusandae debitis, assumenda eos error dolorum dignissimos atque, eveniet saepe ab neque commodi deleniti!
                </p>
              </div>
              <div class="card-body">
                <div class="mb-3">
                  <h3 class="mb-0">4. termínová sekce</h3>
                  <div class="d-flex align-items-center gap-3">
                    <div class="text-secondary">Do: 30.8.2023</div>
                    <!-- <span class="badge bg-info-lt text-info">Probíhá</span> -->
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus hic quis vero blanditiis praesentium architecto sint recusandae debitis, assumenda eos error dolorum dignissimos atque, eveniet saepe ab neque commodi deleniti!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>




  </PageTemplate>
</template>

<style scoped></style>