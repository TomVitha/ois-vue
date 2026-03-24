export type RequestFormValues = Record<string, string>

export type RequestFormExpose = {
  getValues: () => RequestFormValues
  validate: () => boolean
}
