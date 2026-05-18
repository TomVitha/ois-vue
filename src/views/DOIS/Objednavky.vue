<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import Empty from '@/components/Empty.vue'
</script>

<template>

  <PageTemplate title="Objednávky ??">
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

            <!-- * Platby -->
            <div class="col-12">
              <div class="card">
                <!-- <div class="card-header">
                  <h3 class="card-title me-auto">Objednávky</h3>
                </div> -->
                <table class="table table-vcenter table-selectable card-table">
                  <thead>
                    <tr>
                      <th class="w-1">Stav</th>
                      <th>Číslo smlouvy</th>
                      <th>Dodavatel</th>
                      <th>Datum a čas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span class="status status-success">Nová</span>
                      </td>
                      <td>197-08-040</td>
                      <td>HANÁK NÁBYTEK,a.s.</td>
                      <td>23.04.2026 13:53</td>
                    </tr>
                  </tbody>
                </table>
                <!-- * Empty state - Zobrazí se pokud nejsou žádné platby -->
                <!-- <Empty title="idk" subtitle="idk" /> -->
              </div>
            </div>

            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <span class="status status-success">Nová</span>
                    </div>
                    <div class="col">
                      	197-08-040
                    </div>
                    <div class="col">
                      	HANÁK NÁBYTEK,a.s.
                    </div>
                    <div class="col">
                      	23.04.2026 13:53
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