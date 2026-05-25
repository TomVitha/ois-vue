<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import Empty from '@/components/Empty.vue'
</script>

<template>

  <PageTemplate pretitle="Dodavatelský portál" title="Dashboard">
    <template #actions>
      <div class="btn-list">
        <button class="btn btn-primary">Primary</button>
        <a href="#" class="btn">Secondary</a>
      </div>
    </template>

    <div class="row row-cards">
      <!-- <div class="col-xxl-3">
        <div class="card">
          <div class="card-body">
            <div class="space-y-1 justify-content-center text-center">
              <h3>Adam Novák</h3>
              <div>+420721584630</div>
              <div>novak@seznam.cz</div>
              <div>Pryskyřicova 304/11, Praha 0, 100 00</div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="col">

        <div class="col-12">
          <div class="row row-deck row-cards">

            <!-- Úvodní text -->
            <div class="col-12">
              <p>
                Kdo ví co tu bude ¯\_(ツ)_/¯
              </p>
            </div>

            <!-- * Empty state - Zobrazí se pokud nejsou žádné platby -->
            <!-- <div class="col-12">
              <div class="card">
                <Empty title="Nic" subtitle="Zatím tu nic není." />
              </div>
            </div> -->

            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  přehledy?
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  grafy?
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