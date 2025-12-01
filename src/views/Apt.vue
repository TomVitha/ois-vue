<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
</script>

<template>

  <PageTemplate title="D 331">
    <template #actions>
      <div class="btn-list">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <path d="M13.5 6.5l4 4" />
          </svg>
          Přejmenovat
        </button>
      </div>
      <div class="modal" id="exampleModal" tabindex="-1">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
          <div class="modal-content">
            <!-- <div class="modal-header">
              <h5 class="modal-title">Přejmenovat</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div> -->
            <div class="modal-body">
              <div>
                <label class="form-label d-inline-flex" for="apt-name">Název</label>
                <input type="text" class="form-control" name="example-text-input" id="apt-name" placeholder="D 331" />
              </div>
            </div>
            <div class="modal-footer">
              <div class="btn-list">
                <button type="button" class="btn" data-bs-dismiss="modal">Zrušit</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Uložit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="row row-cards">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            půdorys? velká ilustrace? ostatní pohledy?
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body space-y-1">
            <h3 class="card-title">Základní údaje</h3>
            <div class="row">
              <div class="col">Dispozice</div>
              <div class="col-auto text-secondary">2+kk</div>
            </div>
            <div class="row">
              <div class="col">Podlaží</div>
              <div class="col-auto text-secondary">3. patro</div>
            </div>
            <div class="row">
              <div class="col">Plocha</div>
              <div class="col-auto text-secondary">174&nbsp;m²</div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-body space-y-1">
            <h3 class="card-title">Místnosti</h3>
            <div class="row">
              <div class="col">Obývací pokoj a kuchyňský kout</div>
              <div class="col-auto text-secondary">23,5&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Pokoj</div>
              <div class="col-auto text-secondary">14&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Koupelna</div>
              <div class="col-auto text-secondary">12,6&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Toaleta</div>
              <div class="col-auto text-secondary">1,6&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Předsíň</div>
              <div class="col-auto text-secondary">5,1&nbsp;m²</div>
            </div>
            <hr class="my-2">
            <div class="row">
              <div class="col">Šatna</div>
              <div class="col-auto text-secondary">4,5&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Komora</div>
              <div class="col-auto text-secondary">3,9&nbsp;m²</div>
            </div>
            <hr class="my-2">
            <div class="row">
              <div class="col">Terasa</div>
              <div class="col-auto text-secondary">15,4&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Předzahrádka</div>
              <div class="col-auto text-secondary">28&nbsp;m²</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body space-y-1">
            <h3 class="card-title">Příslušenství</h3>
            <div class="row">
              <div class="col">Terasa</div>
              <div class="col-auto text-secondary">15,4&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Sklep</div>
              <div class="col-auto">
                <a href="#">
                  PP2 / S24
                  <i class="ti ti-external-link"></i>
                </a>
              </div>
              <div class="col-auto text-secondary">23,5&nbsp;m²</div>
            </div>
            <div class="row">
              <div class="col">Parkování</div>
              <div class="col-auto">
                <a href="#">
                  PP2 / P49
                  <i class="ti ti-external-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            speciální vybavení
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            Timeline? (viz Sabča Figma návrh)
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            Kontaktní osoby (ty v tento okamžik relevantní)
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            GALERIE ?
          </div>
        </div>
      </div>
    </div>
  </PageTemplate>

</template>

<style scoped></style>