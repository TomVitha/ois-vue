<script setup lang="ts">
  import { computed } from 'vue'
  import Empty from '@/components/Empty.vue'
  import { useDoisOrders } from '@/stores/dois-orders'

  import { matchesMediaQuery } from '@/composables/matchesMediaQuery'
  const isDesktop = matchesMediaQuery('(min-width: 992px)')

  const props = defineProps<{
    documentId?: number
  }>()

  const doisOrdersStore = useDoisOrders()

  const selectedDocument = computed(() => {
    if (props.documentId === undefined) return undefined
    return doisOrdersStore.getDocument(props.documentId)
  })

  const filepath = computed(() => {
    return selectedDocument.value?.filepath ?? ''
  })

  type PreviewContentType = 'pdf' | 'image' | 'video' | 'text'
  type PreviewFormat = {
    extension: string
    type: PreviewContentType
  }

  const supportedPreviewFormats: Record<string, PreviewFormat> = {
    pdf: { extension: 'pdf', type: 'pdf' },
    png: { extension: 'png', type: 'image' },
    jpg: { extension: 'jpg', type: 'image' },
    jpeg: { extension: 'jpeg', type: 'image' },
    gif: { extension: 'gif', type: 'image' },
    webp: { extension: 'webp', type: 'image' },
    svg: { extension: 'svg', type: 'image' },
    mp4: { extension: 'mp4', type: 'video' },
    webm: { extension: 'webm', type: 'video' },
    ogg: { extension: 'ogg', type: 'video' },
    mov: { extension: 'mov', type: 'video' },
    txt: { extension: 'txt', type: 'text' },
  }

  function getFileExtension(filepath: string): string | null {
    const path = filepath.trim()
    if (!path) return null

    const withoutHash = path.split('#')[0] ?? ''
    const withoutQuery = withoutHash.split('?')[0] ?? ''
    const filename = withoutQuery.split('/').at(-1) ?? withoutQuery
    const filenameWithoutPath = filename.split('\\').at(-1) ?? filename

    const extension = filenameWithoutPath.split('.').at(-1)?.toLowerCase()
    if (!extension || extension === filenameWithoutPath.toLowerCase()) return null

    return extension
  }

  const selectedPreviewFormat = computed<PreviewFormat | null>(() => {
    const extension = getFileExtension(filepath.value)
    if (!extension) return null
    return supportedPreviewFormats[extension] ?? null
  })

  const previewType = computed<PreviewContentType | null>(() => {
    return selectedPreviewFormat.value?.type ?? null
  })

  const previewSrc = computed(() => {
    const rawPath = filepath.value?.trim()
    if (!rawPath) return ''

    if (/^https?:\/\//i.test(rawPath)) return rawPath

    if (typeof window === 'undefined') return rawPath

    return new URL(rawPath, window.location.origin + '/').href
  })

  const hasPreviewSource = computed(() => {
    return Boolean(previewSrc.value)
  })
</script>

<template>
  <div class="offcanvas overflow-y-auto" :class="[isDesktop ? 'offcanvas-end' : 'offcanvas-bottom']" :data-bs-scroll="isDesktop" :data-bs-backdrop="!isDesktop" :data-current-document-id="props.documentId ?? ''" tabindex="-1" id="dois-document-preview-offcanvas">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Náhled dokumentu</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <template v-if="hasPreviewSource">
        <iframe
          v-if="previewType === 'pdf' || previewType === 'text'"
          :src="previewSrc"
          frameborder="0"
          width="100%"
          height="100%"
          title="Náhled dokumentu"></iframe>

        <img
          v-else-if="previewType === 'image'"
          :src="previewSrc"
          alt="Náhled dokumentu"
          class="document-image-preview">

        <video
          v-else-if="previewType === 'video'"
          :src="previewSrc"
          class="document-video-preview"
          controls>
          Váš prohlížeč nepodporuje přehrávání videa.
        </video>

        <Empty
          v-else
          title="Náhled není dostupný"
          subtitle="Tento typ souboru nelze zobrazit v náhledu."
          :icon="false"></Empty>
      </template>

      <Empty
        v-else
        title="Náhled dokumentu není dostupný"
        subtitle="Soubor nebyl nalezen."
        :icon="false"></Empty>
    </div>
  </div>
</template>

<style scoped>
  .offcanvas {
    --tblr-offcanvas-width: 33vw;
    --tblr-offcanvas-height: 99vh;
    border-radius: var(--tblr-modal-border-radius, var(--tblr-border-radius-lg)) var(--tblr-modal-border-radius, var(--tblr-border-radius-lg)) 0 0;
  }

  .offcanvas-header {
    --tblr-offcanvas-padding-y: 1rem;
  }

  .offcanvas-body {
    --tblr-offcanvas-padding-x: 8px;
    --tblr-offcanvas-padding-y: 8px;
    overflow: hidden;
  }

  .document-image-preview,
  .document-video-preview {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }

  @media (min-width: 992px) {
    .offcanvas {
      border-radius: 0;
    }
  }
</style>