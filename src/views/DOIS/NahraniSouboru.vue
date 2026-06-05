<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import Empty from '@/components/Empty.vue'
  import { useDropzone } from '@/composables/useDropzone'
  import 'dropzone/dist/dropzone.css'

  // NOTE: dzFileupload.value is available for manual calls
  const { dropzone: dzFileupload } = useDropzone({
    selector: '#dropzone-file-upload',
    options: {
      url: './',
    },
  })

</script>

<template>

  <PageTemplate title="Nahrání souborů">

    <div class="row row-deck row-cards">
      <!-- * Platby -->
      <div class="col-12">
        <div class="card">
          <!-- <div class="card-header">
            <h3 class="card-title me-auto">Nahrání souborů</h3>
          </div> -->
          <div class="card-body">
            <!-- TODO: Messages - success/failure -->
            <div class="row">
              <div class="col-12 col-md-6 col-xl-4">
                <div class="mb-3">
                  <div class="form-label">Dodavatel</div>
                  <select class="form-select">
                    <option selected disabled>vyberte</option>
                    <option value="1">Společnost s.r.o</option>
                    <option value="2">Firma a.s.</option>
                    <option value="3">Organizace s.c.a.m.</option>
                  </select>
                </div>
              </div>
            </div>

            <form class="dropzone dz-clickable" id="dropzone-file-upload" action="./" autocomplete="off" novalidate>
              <div class="dz-default dz-message m-0">
                <button class="dz-button" type="button">
                  <Empty title="Přetáhněte soubory" subtitle="nebo kliknutím vyberte">
                    <template #icon>
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-upload">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                        <path d="M7 9l5 -5l5 5" />
                        <path d="M12 4l0 12" />
                      </svg> -->
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
          <!-- ? Jak to funguje s tím GDRP ??? -->
          <div class="card-footer">
            <div class="row align-items-baseline">
              <div class="col">
                <label class="form-check my-0">
                  <input class="form-check-input" type="checkbox">
                  <span class="form-check-label">Nahrát jako poptávku</span>
                </label>
              </div>
              <div class="col-auto">
                <div class="btn-list">
                  <!-- <button type="button" class="btn">Zrušit</button> -->
                  <!-- NOTE: Button bude disabled dokud nebude vybrán dodavatel a nebude v dropzone nějaký soubor -->
                  <button type="submit" class="btn btn-primary" disabled>Nahrát</button>
                </div>
              </div>
            </div>
            <!-- <div class="btn-list justify-content-end">
              <button type="button" class="btn">Zrušit</button>
              <button type="submit" class="btn btn-primary">Nahrát</button>
            </div> -->
          </div>
          <!-- TODO: Error messages -->
        </div>
      </div>
    </div>

  </PageTemplate>

</template>

<style scoped></style>