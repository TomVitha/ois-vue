import type { RequestTemplateDefinition } from '../types'

export const updateContactInformationTemplate: RequestTemplateDefinition = {
  id: 'update-contact-information',
  name: 'Změna osobních údajů',
  description: 'Nahlaste změny vašich kontaktních údajů.',
  category: 'Osobní údaje',
  availableForPropertyIds: ['192-03-147', '215-02-018'],
}
