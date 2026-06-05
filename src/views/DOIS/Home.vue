<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import Empty from '@/components/Empty.vue'
</script>

<template>

  <PageTemplate pretitle="Dodavatelský portál" title="Dashboard">

    <div class="row row-deck row-cards">

      <!-- Úvodní text -->
      <!-- <div class="col-12">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure ipsum consectetur molestias vitae rerum, modi, ab quisquam odit hic quis! Sapiente cum quisquam cumque pariatur reiciendis omnis necessitatibus illum.
        </p>
      </div> -->

      <div class="col-md-4">
        <RouterLink to="/dois/objednavky" class="card card-md card-link">
          <Empty title="Objednávky">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-check">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
                <path d="M9 14l2 2l4 -4" />
              </svg>
            </template>
          </Empty>
        </RouterLink>
      </div>
      <div class="col-md-4">
        <RouterLink to="/dois/objednavky-uvd" class="card card-md card-link">
          <Empty title="Objednávky ÚVD">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-list">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
                <path d="M9 12l.01 0" />
                <path d="M13 12l2 0" />
                <path d="M9 16l.01 0" />
                <path d="M13 16l2 0" />
              </svg>
            </template>
          </Empty>
        </RouterLink>
      </div>
      <div class="col-md-4">
        <RouterLink to="/dois/obchodni-pripady" class="card card-md card-link">
          <Empty title="Obchodní případy">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" />
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                <path d="M12 12l0 .01" />
                <path d="M3 13a20 20 0 0 0 18 0" />
              </svg>
            </template>
          </Empty>
        </RouterLink>
      </div>
      <div class="col-md-4">
        <a href="https://dodatky.central-group.cz/NQImqe8IUdPA" target="_blank" class="card card-md card-link">
          <Empty title="FTP">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-network">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0" />
                <path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6" />
                <path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6" />
                <path d="M6 9h12" />
                <path d="M3 20h7" />
                <path d="M14 20h7" />
                <path d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M12 15v3" />
              </svg>
            </template>
          </Empty>
        </a>
      </div>
      <div class="col-md-4">
        <RouterLink to="/dois/nahrani-souboru" class="card card-md card-link">
          <Empty title="Nahrání souborů">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cloud-upload">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                <path d="M9 15l3 -3l3 3" />
                <path d="M12 12l0 9" />
              </svg>
            </template>
          </Empty>
        </RouterLink>
      </div>

    </div>

  </PageTemplate>

</template>

<style scoped></style>