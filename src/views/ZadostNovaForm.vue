<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  import PageTemplate from '@/components/PageTemplate.vue'
  import Empty from '@/components/Empty.vue'

  import { getRequestFormComponent } from '@/requests/forms/registry'
  import type { RequestFormExpose } from '@/requests/forms/types'
  import { useRequestsStore } from '@/stores/requests'

  const route = useRoute()
  const router = useRouter()
  const requestsStore = useRequestsStore()

  const propertyId = computed(() => String(route.params.propertyId ?? ''))
  const templateId = computed(() => Number(route.params.templateId ?? 0))

  const property = computed(() => requestsStore.getPropertyById(propertyId.value))
  const template = computed(() => requestsStore.getTemplateById(templateId.value))
  const formComponent = computed(() => {
    if (!template.value) {
      return null
    }

    return getRequestFormComponent(template.value.id)
  })

  const canRenderForm = computed(() => {
    if (!property.value || !template.value || !formComponent.value) {
      return false
    }

    return requestsStore.isTemplateAvailableForProperty(
      property.value.id,
      template.value.id,
    )
  })

  const formRef = ref<RequestFormExpose | null>(null)

  function handleSubmit() {
    if (!property.value || !template.value || !formRef.value) {
      return
    }

    if (!formRef.value.validate()) {
      return
    }

    requestsStore.createActiveRequest({
      propertyId: property.value.id,
      templateId: template.value.id,
      values: formRef.value.getValues(),
    })

    router.push('/zadosti')
  }

  function goBackToSelection() {
    router.push('/zadosti/nova')
  }
</script>

<template>
  <PageTemplate
    :title="template ? template.title : 'Nová žádost'"
    :pretitle="property ? property.name : undefined"
    back-to="/zadosti/nova">
    <div class="row">

      <!-- * Empty state -->
      <template v-if="!canRenderForm || !template || !property">
        <div class="col-12">
          <Empty title="Žádost nenalezena" subtitle="Tato žádost není dostupná." :icon="false">
            <template #actions>
              <div class="btn-list">
                <RouterLink class="btn btn-primary" to="/zadosti/nova">Zpět na výběr žádosti</RouterLink>
              </div>
            </template>
          </Empty>
        </div>
      </template>

      <!-- * Tělo formuláře žádosti -->
      <template v-else>
        <div class="col-xl-10">
          <form @submit.prevent="handleSubmit">
            <div class="card">
              <!-- <div class="card-header">
                <h3 class="card-title">{{ template.title }}</h3>
              </div> -->
              <div class="card-body">
                <!-- <p v-if="template.description" class="text-secondary">{{ template.description }}</p> -->
                <component
                  :is="formComponent"
                  ref="formRef" />
              </div>
              <div class="card-footer">
                <div class="btn-list justify-content-end">
                  <button type="button" class="btn" @click="goBackToSelection">Zrušit</button>
                  <button type="submit" class="btn btn-primary">Odeslat žádost</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </template>

    </div>
  </PageTemplate>
</template>

<style scoped></style>
