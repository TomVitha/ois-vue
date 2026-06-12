<script setup lang="ts">
  import { computed, ref } from 'vue'
  import PageTemplate from '@/components/PageTemplate.vue'
  import Empty from '@/components/Empty.vue'
  import { useDropzone } from '@/composables/useDropzone'
  import 'dropzone/dist/dropzone.css'
  import Alert from '@/components/Alert.vue'

  const isDzEmpty = ref<boolean>(true)
  const isGdprCompliant = ref<boolean | null>(null)
  const isNonCompliantUpload = ref<boolean | null>(null)
  // NOTE: Podímky pro nahrání: V dropzone je nahraný aspoň 1 soubor a pokud klient neudělil souhlas tak je třeba vzít na vědomí
  const allowFileUpload = computed(() => {
    return !isDzEmpty.value && (isGdprCompliant.value || isNonCompliantUpload.value) ? true : false
  })

  // NOTE: dzFileupload.value is available for manual calls
  const { dropzone: dzFileupload } = useDropzone({
    selector: '#dropzone-file-upload',
    // NOTE: Pro možné možnosti se můžete podívat do node_modules/dropzone/src/options.js
    options: {
      url: './',
      // ! "Use function() syntax here so `this` is the Dropzone instance"
      init: function (this: any) {

        // Když je přidán soubor do DZ (spouští se pro každý jednotlivý soubor)
        this.on('addedfile', (file: any) => {
          console.debug('File added to the dropzone', file)

          if (isDzEmpty.value) {
            isDzEmpty.value = false
  
            // NOTE: Po nahrání souboru se AUTOMATICKY provede kontrola GDRP klienta. Tedy to samé, jako když jste doposud klikni na tlačítko "Kontrola klienta na GDRP"
            // DEV - Pro účely vývoje/testování se stav GDRP nastaví náhodně. V produkci se samozřejmě
            isGdprCompliant.value = Math.random() < 0.5
  
            // Pokud GDPR souhlas není, uživatel odsouhlasí že to bere na vědomí
            isNonCompliantUpload.value = isGdprCompliant.value === false ? false : null
          }
        })

        // Když je v DZ 0 souborů
        this.on('reset', () => {
          console.debug('No files in the dropzone.')
          isDzEmpty.value = true
          isGdprCompliant.value = null
          isNonCompliantUpload.value = null
        })
      },
    },
  })

  const clearDropzoneFiles = () => {
    dzFileupload.value?.removeAllFiles(true)
  }


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
            <div class="row gy-3">
              <!-- TODO: Messages - success/failure -->
              <div class="col-12">
                <div class="row">
                  <div class="col-12 col-md-6 col-xl-4">
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
              <!-- WIP -->
              <div class="col-6">
                <p class="text-muted m-0">Klient se zjišťuje z katalogového čísla, ze začátku názvu souboru.</p>
              </div>
              <div class="col-12">
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
              <div class="col-12">
                <label class="form-check my-0">
                  <input class="form-check-input" type="checkbox">
                  <span class="form-check-label">Nahrát jako poptávku</span>
                </label>
              </div>

              <!-- WIP -->
              <div class="col-12 gy-5" v-if="isGdprCompliant !== null">
                <!-- Udělil souhlas -->
                <Alert class="mb-0" v-if="isGdprCompliant == true" type="success">Klient udělil souhlas s GDPR.</Alert>
                <!-- Neudělil souhlas -->
                <Alert class="mb-0" v-else-if="isGdprCompliant == false" type="warning">Klient neudělil souhlas s GDPR.</Alert>
                <!-- Nešlo ověřit -->
                <Alert class="mb-0" v-else type="warning">Udělení souhlasu klienta s GDPR se nepodařilo ověřit.</Alert>
              </div>

              <div class="col-12" v-if="isGdprCompliant == false">
                <label class="form-check my-0">
                  <input class="form-check-input" type="checkbox" v-model="isNonCompliantUpload">
                  <span class="form-check-label">Beru na vědomí, přesto umožnit nahrání</span>
                </label>
              </div>


            </div>
          </div>
          <div class="card-footer">
            <div class="col-12">
              <div class="row align-items-baseline">
                <div class="col"></div>
                <div class="col-auto">
                  <div class="btn-list">
                    <button type="button" class="btn" @click="clearDropzoneFiles" :disabled="isDzEmpty">Zrušit</button>
                    <button type="submit" class="btn btn-primary" :disabled="!allowFileUpload">Nahrát</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </PageTemplate>

</template>

<style scoped></style>