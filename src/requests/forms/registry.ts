import type { Component } from 'vue'
import type { RequestTemplateDefinition, RequestTemplateId } from '@/requests/types'

type RequestFormModule = {
  default?: Component
  requestTemplateMeta?: RequestTemplateDefinition
}

const formModules = import.meta.glob('./*.vue', {
  eager: true,
}) as Record<string, RequestFormModule>

const templates: RequestTemplateDefinition[] = []
const requestFormComponentByTemplateId = new Map<RequestTemplateId, Component>()

for (const [path, moduleExports] of Object.entries(formModules)) {
  const formComponent = moduleExports.default
  const templateMeta = moduleExports.requestTemplateMeta

  if (!formComponent || !templateMeta) {
    throw new Error(`Form module ${path} is missing default export or requestTemplateMeta export.`)
  }

  if (requestFormComponentByTemplateId.has(templateMeta.id)) {
    throw new Error(`Duplicate request template id detected: ${templateMeta.id}`)
  }

  requestFormComponentByTemplateId.set(templateMeta.id, formComponent)
  templates.push(templateMeta)
}

export function getRequestTemplates(): RequestTemplateDefinition[] {
  return templates.map((template) => ({ ...template }))
}

export function getRequestFormComponent(templateId: RequestTemplateId): Component | null {
  return requestFormComponentByTemplateId.get(templateId) ?? null
}
