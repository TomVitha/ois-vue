<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
</script>

<template>

  <PageTemplate title="Žádosti">

    <template #actions>
      <div class="btn-list">
        <RouterLink to="/zadost-nova" type="button" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-1">
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
          Nová žádost
        </RouterLink>
      </div>
    </template>

    <!-- * No requests alert -->
    <!-- <div class="empty">
      <p class="empty-title">Žádné podané žádosti</p>
      <p class="empty-subtitle text-secondary">
        Zde uvidíte přehled vašich aktivních a uzavřených žádostí.
      </p>
      <div class="empty-action">
        <RouterLink to="/zadosti-nova" class="btn btn-primary btn-4">
          Vytvořit novou žádost
        </RouterLink>
      </div>
    </div> -->

    <!-- * List of requests -->
    <div class="row row-deck row-cards">

      <!-- WIP: Active requests -->
      <div class="col-12" hidden>
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                Změna osobních údajů
              </div>
              <div class="col">
                <span class="badge">192-01-123</span>
              </div>
              <div class="col">
                <span class="badge bg-info-lt">
                  Otevřená
                </span>
                <span class="status status-info">
                  Otevřená
                </span>
              </div>
              <div class="col-auto">
                <!-- TODO: Otevře dialog s tou žádostí vyplněné právě těmi údaji jako jsme ji zaslali (jen samozřejmě read-only) -->
                <RouterLink to="#zadost-detail">
                  Zobrazit
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="table-responsive ">
            <table class="table table-selectable card-table table-vcenter text-nowrap datatable table-mobile-sm">
              <thead>
                <tr>
                  <th>Název</th>
                  <th>Zasláno</th>
                  <th>Stav</th>
                  <th>Jednotka</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Název">Změna osobních údajů</td>
                  <td data-label="Zasláno">2023-01-01</td>
                  <td data-label="Stav">
                    <span class="status status-info">Otevřená</span>
                  </td>
                  <td data-label="Jednotka">192-03-147</td>
                  <td class="w-1" data-label="">
                    <RouterLink to="#zadost-detail">
                      Zobrazit
                    </RouterLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- WIP - Alt request design -->
      <!-- <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Změna osobních údajů</h4>
          </div>
        </div>
      </div> -->
    </div>

  </PageTemplate>


</template>

<style scoped></style>