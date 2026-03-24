import type { Component } from 'vue'
import type { RequestTemplateId } from '@/requests/types'

const formModules = import.meta.glob('./*.vue', {
  eager: true,
  import: 'default',
}) as Record<string, Component>

const requestFormComponentByTemplateId = Object.entries(formModules).reduce(
  (accumulator, [path, component]) => {
    const matches = path.match(/\.\/([^/]+)\.vue$/)
    if (!matches) {
      return accumulator
    }

    const templateId = matches[1] as RequestTemplateId
    accumulator[templateId] = component
    return accumulator
  },
  {} as Partial<Record<RequestTemplateId, Component>>,
)

export function getRequestFormComponent(templateId: RequestTemplateId): Component | null {
  return requestFormComponentByTemplateId[templateId] ?? null
}
