<script setup lang="ts">
  import { useDropzone } from '@/composables/useDropzone'
  import 'dropzone/dist/dropzone.css'
  import Empty from '@/components/Empty.vue'

  // NOTE: dzOrderAttachments.value is available for manual calls
  const { dropzone: dzOrderAttachments } = useDropzone({
    selector: '#dropzone-order-attachments',
    options: {
      url: './',
    },
  })
</script>

<template>
  <div class="modal" id="order-upload-attachment-modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Nahrát přílohy</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="dropzone dz-clickable" id="dropzone-order-attachments" action="./" autocomplete="off" novalidate>
            <div class="dz-default dz-message m-0">
              <button class="dz-button" type="button">
                <Empty title="Přetáhněte soubory" subtitle="nebo kliknutím vyberte">
                  <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cloud-upload">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                      <path d="M9 15l3 -3l3 3" />
                      <path d="M12 12l0 9" />
                    </svg>
                  </template>
                </Empty>
              </button>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">Zrušit</button>
          <button type="button" class="btn btn-primary">Přidat</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>