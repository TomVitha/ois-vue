<script setup lang="ts">
  import { computed } from 'vue'

  import PageTemplate from '@/components/PageTemplate.vue'
  import Empty from '@/components/Empty.vue'
  import { useRequestsStore } from '@/stores/requests'

  const requestsStore = useRequestsStore()

  const groupedTemplates = computed(
    () => requestsStore.availableTemplatesByCategoryForSelectedProperty,
  )

  function handlePropertyChange(event: Event) {
    const target = event.target as HTMLSelectElement
    requestsStore.setSelectedProperty(target.value)
  }
</script>

<template>
  <PageTemplate title="Nová žádost" back-to="/zadosti">
    <template #toolbar>
      <div class="row g-2 align-items-end">
        <div class="col-12 col-md-6 col-xl-4">
          <label class="form-label" for="request-property-select">Produkt</label>
          <select
            id="request-property-select"
            class="form-select"
            :value="requestsStore.selectedPropertyId"
            @change="handlePropertyChange">
            <option
              v-for="property in requestsStore.properties"
              :key="property.id"
              :value="property.id">
              {{ property.name }}
            </option>
          </select>
        </div>
      </div>
    </template>

    <div class="row row-deck row-cards">
      <!-- * Empty state -->
      <template v-if="groupedTemplates.length === 0">
        <Empty title="Žádné dostupné žádosti" subtitle="Pro vybraný produkt nejsou dostupné žádné žádosti." />
      </template>
      <!-- * Kategorie požadavků a požadavky  -->
      <template v-else>
        <template v-for="group in groupedTemplates" :key="group.category">
          <div class="col-12">
            <h3>{{ group.category }}</h3>
            <!-- <div class="text-secondary">{{ `${group.templates.length} položky` }}</div> -->
          </div>
          <div class="col-12">
            <div class="row row-cards">
              <div
                v-for="requestTemplate in group.templates"
                :key="requestTemplate.id"
                class="col-12 col-md-6 col-xl-4">
                <RouterLink
                  :to="`/zadost-nova/${requestsStore.selectedPropertyId}/${requestTemplate.id}`"
                  class="card card-md card-link text-center w-100 h-100">
                  <div class="card-body">
                    <h3 class="card-title mb-2">{{ requestTemplate.name }}</h3>
                    <p class="text-secondary mb-0">{{ requestTemplate.description }}</p>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>
  </PageTemplate>
</template>

<style scoped></style>