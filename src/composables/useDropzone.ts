import { ref, onMounted, onBeforeUnmount } from 'vue'
// @ts-expect-error Dropzone 6 beta has no bundled TS types
import Dropzone from 'dropzone'

// Keep options loose because Dropzone v6 beta does not ship TS types yet.
type DropzoneOptions = Record<string, unknown>

// Minimal API for creating a dropzone on a target element.
type UseDropzoneParams = {
  selector: string
  options?: DropzoneOptions
}
/**
 * Composable for integrating Dropzone.js into Vue components. Automatically initializes and destroys the dropzone instance based on the component lifecycle.
 * @param params - Configuration parameters for the dropzone.
 * @returns An object containing the dropzone instance and lifecycle methods.
 */
export function useDropzone(params: UseDropzoneParams) {
  const { selector, options = {} } = params
  // Stores the active Dropzone instance for this component lifecycle.
  const instance = ref<any | null>(null)

  function init() {
    // Find the target element
    const el = document.querySelector(selector) as HTMLElement | null
    if (!el) return null

    // Reuse existing instance if already attached to this element.
    const existing = (el as any).dropzone
    if (existing) {
      instance.value = existing
      return existing
    }

    // Create and store a new Dropzone instance.
    instance.value = new Dropzone(el, options as any)
    return instance.value
  }

  function destroy() {
    // Important on route leave: removes listeners and hidden file input.
    instance.value?.destroy()
    instance.value = null
  }

  // Automatically init/teardown with the Vue component lifecycle.
  onMounted(init)
  onBeforeUnmount(destroy)

  return {
    dropzone: instance,
    initDropzone: init,
    destroyDropzone: destroy,
  }
}