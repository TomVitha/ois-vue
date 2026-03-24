import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import type {
  ActiveRequest,
  LastSubmissionResult,
  PropertyDefinition,
  RequestTemplateDefinition,
  RequestTemplateId,
} from '@/requests/types'
import { getRequestTemplates } from '@/requests/forms/registry'

const propertyDefinitions = ref<PropertyDefinition[]>([
  { id: '192-03-147', name: '192-03-147' },
  { id: '215-02-018', name: '215-02-018' },
  { id: '301-11-024', name: '301-11-024' },
])

const requestTemplates = ref<RequestTemplateDefinition[]>(getRequestTemplates())

const activeRequests = ref<ActiveRequest[]>([])

export const useRequestsStore = defineStore('requests', () => {
  const selectedPropertyId = ref<string>(propertyDefinitions.value[0]?.id ?? '')
  const lastSubmissionResult = ref<LastSubmissionResult | null>(null)

  const properties = computed(() => propertyDefinitions.value)
  const templates = computed(() => requestTemplates.value)

  const selectedProperty = computed(() =>
    properties.value.find((property) => property.id === selectedPropertyId.value) ?? null,
  )

  const availableTemplatesForSelectedProperty = computed(() =>
    templates.value.filter((template) =>
      template.availableForPropertyIds.includes(selectedPropertyId.value),
    ),
  )

  const availableTemplatesByCategoryForSelectedProperty = computed(() => {
    const grouped = new Map<string, RequestTemplateDefinition[]>()

    for (const template of availableTemplatesForSelectedProperty.value) {
      const templatesInCategory = grouped.get(template.category) ?? []
      templatesInCategory.push(template)
      grouped.set(template.category, templatesInCategory)
    }

    return Array.from(grouped.entries()).map(([category, templatesInCategory]) => ({
      category,
      templates: templatesInCategory,
    }))
  })

  const activeRequestsByProperty = computed(() => {
    return properties.value
      .map((property) => {
        const requests = activeRequests.value.filter(
          (request) => request.propertyId === property.id,
        )

        return {
          property,
          requests,
        }
      })
      .filter((group) => group.requests.length > 0)
  })

  const openRequestsCount = computed(() =>
    activeRequests.value.filter((request) => request.status === 'open').length,
  )

  function setSelectedProperty(propertyId: string) {
    const propertyExists = properties.value.some((property) => property.id === propertyId)
    if (!propertyExists) {
      return
    }

    selectedPropertyId.value = propertyId
  }

  function getTemplateById(templateId: string): RequestTemplateDefinition | null {
    return templates.value.find((template) => template.id === templateId) ?? null
  }

  function getPropertyById(propertyId: string): PropertyDefinition | null {
    return properties.value.find((property) => property.id === propertyId) ?? null
  }

  function getTemplatesForProperty(propertyId: string) {
    return templates.value.filter((template) =>
      template.availableForPropertyIds.includes(propertyId),
    )
  }

  function isTemplateAvailableForProperty(propertyId: string, templateId: RequestTemplateId) {
    const templatesForProperty = getTemplatesForProperty(propertyId)
    return templatesForProperty.some((template) => template.id === templateId)
  }

  function createActiveRequest(payload: {
    propertyId: string
    templateId: RequestTemplateId
    values: Record<string, string>
  }) {
    const template = getTemplateById(payload.templateId)
    const property = getPropertyById(payload.propertyId)

    if (!template || !property) {
      throw new Error('Neplatná šablona nebo nemovitost.')
    }

    if (!isTemplateAvailableForProperty(property.id, template.id)) {
      throw new Error('Vybraná šablona není pro danou nemovitost dostupná.')
    }

    const newRequestId = Date.now()
    const nowIso = new Date().toISOString()

    const newRequest: ActiveRequest = {
      id: newRequestId,
      templateId: template.id,
      templateName: template.name,
      propertyId: property.id,
      propertyName: property.name,
      createdAt: nowIso,
      status: 'open',
      values: payload.values,
    }

    activeRequests.value = [newRequest, ...activeRequests.value]

    lastSubmissionResult.value = {
      requestId: newRequest.id,
      templateName: newRequest.templateName,
      propertyName: newRequest.propertyName,
      createdAt: newRequest.createdAt,
      state: 'success',
    }

    return newRequest
  }

  function consumeLastSubmissionResult() {
    lastSubmissionResult.value = null
  }

  return {
    selectedPropertyId,
    properties,
    templates,
    selectedProperty,
    availableTemplatesForSelectedProperty,
    availableTemplatesByCategoryForSelectedProperty,
    activeRequests,
    activeRequestsByProperty,
    openRequestsCount,
    lastSubmissionResult,
    setSelectedProperty,
    getTemplateById,
    getPropertyById,
    getTemplatesForProperty,
    isTemplateAvailableForProperty,
    createActiveRequest,
    consumeLastSubmissionResult,
  }
})
