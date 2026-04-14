export type RequestTemplateId = number

export type RequestTemplateDefinition = {
  id: RequestTemplateId
  name: string
  title: string
  description: string
  category: string
  availableForPropertyIds: string[]
}

export type PropertyDefinition = {
  id: string
  name: string
}

export type ActiveRequestStatus = 'open'

export type ActiveRequest = {
  id: number
  templateId: RequestTemplateId
  templateName: string
  propertyId: string
  propertyName: string
  createdAt: string
  status: ActiveRequestStatus
  values: Record<string, string>
}

export type LastSubmissionResult = {
  requestId: number
  templateName: string
  propertyName: string
  createdAt: string
  state: 'success'
}
