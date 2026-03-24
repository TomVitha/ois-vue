import type { RequestTemplateDefinition } from '../types'

export const genericRequestTemplate: RequestTemplateDefinition = {
  id: 'generic-request',
  name: 'Obecná žádost',
  description: 'Použijte, když žádná z předvolených možností neodpovídá tomu, co potřebujete.',
  category: 'Obecné',
  availableForPropertyIds: ['192-03-147', '215-02-018', '301-11-024'],
}
