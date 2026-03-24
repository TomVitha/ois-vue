<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import DocumentItem from '@/components/DocumentItem.vue';
  // WIP
  import ProductGroup from '@/components/ProductGroup.vue';
  import ProductGroupItem from '@/components/ProductGroupItem.vue';
</script>

<template>

  <PageTemplate title="Dokumenty">
    <div class="row row-deck row-cards">

      <!-- <div class="col-12">
        TODO: Toolbar (download all)
      </div> -->

      <div class="col-12">
        <ProductGroup>
          <ProductGroupItem title="192-03-147" subtitle="5 položek" id="192-03-147">
            <div class="row row-deck row-cards">
              <div class="col-12 mt-3">
                <h3 class="mb-0">Obchodní složky</h3>
              </div>
              <div class="col-12">
                <div class="card">
                  <div class="list-group list-group-flush">
                    <DocumentItem title="192-03-147_OS2.pdf" filesize="6 kB" dateAdded="27.03.2025" />
                    <DocumentItem title="192-03-147_OS1.pdf" filesize="6 kB" dateAdded="14.01.2025" />
                  </div>
                </div>
              </div>
              <div class="col-12 mt-3">
                <h3 class="mb-0">Smlouvy a dokumenty</h3>
              </div>
              <div class="col-12">
                <div class="card">
                  <div class="list-group list-group-flush">
                    <DocumentItem title="Dodatek klientský č.2 192-03-147 8218090061 .pdf" filesize="9 kB" dateAdded="3.2.2025" />
                    <DocumentItem title="Dodatek klientský č.1 192-03-147 8218090061.pdf" filesize="9 kB" dateAdded="11.9.2024" />
                    <DocumentItem title="Smlouva o budoucí kupní smlouvě 192-03-147 B218090061.pdf" filesize="5 kB" dateAdded="11.9.2024" />
                  </div>
                </div>
              </div>
              <div class="col-12 mt-3">
                <h3 class="mb-0">Ostatní</h3>
              </div>
              <div class="col-12">
                <div class="card">
                  <div class="list-group list-group-flush">
                    <DocumentItem title="Návod na údržbu bytu obecný.pdf" filesize="3 kB" dateAdded="31.7.2025" />
                  </div>
                </div>
              </div>
            </div>
          </ProductGroupItem>
        </ProductGroup>
      </div>

      <div class="col-12">
        <ProductGroup>
          <ProductGroupItem title="194-RD-007" subtitle="5 položek" id="194-RD-007">
            <div class="row row-deck row-cards">
              <div class="col-12 mt-3">
                <h3 class="mb-0">Jedna kategorie</h3>
              </div>
              <div class="col-12">
                <div class="card">
                  <div class="list-group list-group-flush">
                    <DocumentItem title="Informace o postupu předávacího řízení (SBKS nedokončená).pdf" filesize="14 kB" dateAdded="3.2.2025" />
                    <DocumentItem title="Klientské administrativní poplatky pro BD.pdf" filesize="9 kB" dateAdded="11.9.2024" />
                  </div>
                </div>
              </div>
              <div class="col-12 mt-3">
                <h3 class="mb-0">Druhá kategorie</h3>
              </div>
              <div class="col-12">
                <div class="card">
                  <div class="list-group list-group-flush">
                    <DocumentItem title="Oznámení o demolici rodinného domu.pdf" filesize="1 kB" dateAdded="31.7.2025" />
                  </div>
                </div>
              </div>
            </div>
          </ProductGroupItem>
        </ProductGroup>
      </div>

      <!-- <div class="col-12 mt-3">
        <h3 class="mb-0">Třetí kategorie</h3>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="list-group list-group-flush">
            <DocumentItem title="Informace o postupu předávacího řízení (SBKS nedokončená).pdf" filesize="14 kB" dateAdded="3.2.2025" />
            <DocumentItem title="Klientské administrativní poplatky pro BD.pdf" filesize="9 kB" dateAdded="11.9.2024" />
          </div>
        </div>
      </div>

      <div class="col-12 mt-3">
        <h3 class="mb-0">Čtvrtá kategorie</h3>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="list-group list-group-flush">
            <DocumentItem title="Oznámení o demolici rodinného domu.pdf" filesize="1 kB" dateAdded="31.7.2025" />
          </div>
        </div>
      </div> -->

    </div>
  </PageTemplate>
</template>
