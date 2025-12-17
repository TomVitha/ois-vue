<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import RequestRow from '@/components/RequestRow.vue'
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

    <template #extra>
      <div class="text-secondary">1 otevřená</div>
    </template>

    <!-- * When there are no requests -->
    <!-- <div class="empty">
      <p class="empty-title">Žádné podané žádosti</p>
      <p class="empty-subtitle text-secondary">
        Zde uvidíte přehled vašich aktivních a uzavřených žádostí.
      </p>
    </div> -->

    <!-- * List of requests -->
    <div class="row row-deck row-cards">

      <!-- WIP: Active requests -->
      <div class="col-12">
        <div class="card">
          <div class="table-responsive ">
            <table class="table table-selectable card-table table-vcenter text-nowrap datatable table-mobile-md">
              <thead>
                <tr>
                  <th class="w-50">Název</th>
                  <th>Stav</th>
                  <th>Zasláno</th>
                  <th>Záležitost</th>
                  <th class="w-0"></th>
                </tr>
              </thead>
              <tbody>
                <RequestRow title="Změna osobních údajů" :status="1" date-created="2025-07-04" concern="generic" />
                <RequestRow title="Odklad platby - 192-03-147 SOD" :status="4" date-created="2025-04-21" :concern="['192-03-147']" />
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>

  </PageTemplate>


</template>

<style scoped>
  @media (min-width: 768px) {
    tbody tr {
      /* height on <tr> acts like min-height */
      height: 4rem;
    }
  }

</style>