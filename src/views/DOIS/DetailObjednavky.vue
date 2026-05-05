<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
</script>

<template>
  <PageTemplate title="Objednávka 458-2025-ÚVD" back-to="/dois/seznam-objednavek">

    <template #actions>
      <div class="btn-list">
        <RouterLink to="/dois/seznam-objednavek" type="button" class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
          Zrušit
        </RouterLink>
        <RouterLink to="/dois/seznam-objednavek" type="button" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
          Uložit
        </RouterLink>
      </div>
    </template>

    <div class="row row-cards">
      <div class="col-12">
        <div class="card card-md">
          <div class="card-header">
            <h3 class="card-title">Údaje objednávky</h3>
          </div>
          <!-- Výčet údajů (#0) -->
          <!-- <div class="card-body">
            <p>Interní číslo: 458-2025-ÚVD</p>
            <p>Číslo SoD: 192-01-086-IS-I</p>
            <p>Datum podpisu SoD: 01.05.2025</p>
            <p>Katalogové číslo: 192-01-086</p>
            <p>Dodavatel: Společnost s.r.o.</p>
            <p>Datum akceptace objednávky: 15.05.2025</p>
          </div> -->
          <!-- Výčet údajů (#1) -->
          <!-- <div class="card-body">
            <div class="row">
              <div class="col-12 col-xxl-10">
                <dl class="datagrid">
                  <div class="datagrid-item">
                    <dt class="datagrid-title">Interní číslo</dt>
                    <dd class="datagrid-content">458-2025-ÚVD</dd>
                  </div>
                  <div class="datagrid-item">
                    <dt class="datagrid-title">Číslo SoD</dt>
                    <dd class="datagrid-content">192-01-086-IS-I</dd>
                  </div>
                  <div class="datagrid-item">
                    <dt class="datagrid-title">Datum podpisu SoD</dt>
                    <dd class="datagrid-content">01.05.2025</dd>
                  </div>
                  <div class="datagrid-item">
                    <dt class="datagrid-title">Katalogové číslo</dt>
                    <dd class="datagrid-content">192-01-086</dd>
                  </div>
                  <div class="datagrid-item">
                    <dt class="datagrid-title">Dodavatel</dt>
                    <dd class="datagrid-content">Společnost s.r.o.</dd>
                  </div>
                  <div class="datagrid-item">
                    <dt class="datagrid-title">Datum akceptace objednávky</dt>
                    <dd class="datagrid-content">15.05.2025</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div> -->
          <!-- Výčet údajů (#2) -->
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-xxl-10">
                <div class="row g-3">
                  <!-- ? text-muted VS datagrid-title -->
                  <!-- ? nechat na 2 sloupce ? -->
                  <div class="col-6 col-md-4">
                    <div class="text-muted">Interní číslo</div>
                    <div>458-2025-ÚVD</div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="text-muted">Číslo SoD</div>
                    <div>192-01-086-IS-I</div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="text-muted">Datum podpisu SoD</div>
                    <div>01.05.2025</div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="text-muted">Katalogové číslo</div>
                    <div>192-01-086</div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="text-muted">Dodavatel</div>
                    <div>Společnost s.r.o.</div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="text-muted">Datum akceptace objednávky</div>
                    <div>15.05.2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card-body">
            <p>Termín splnění dle SoD: date | null</p>
            <p>Prodejce: Dropdown (multiple??)</p>
            <p>Technik ÚVD: Dropdown (multiple??)</p>
            <p>Stavební dozor: Dropdown (multiple??)</p>
            <p>Zahájení montáže: date | null</p>
            <p>Dokončení montáže: date | null</p>
            <p>Předávací protokol k montáži: date | null (co to znamená? proč je datum?)</p>
          </div> -->
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-xxl-10">
                <div class="row g-3">
                  <div class="col-md-6 col-lg-6">
                    <label class="form-label" for="order-input-date-sod">Termín splnění dle SoD</label>
                    <input type="date" class="form-control" name="order-input-date-sod" id="order-input-date-sod">
                  </div>
                  <!-- ? Multiple options ? -->
                  <div class="col-md-6 col-lg-6">
                    <label class="form-label" for="order-input-seller">Prodejce</label>
                    <select class="form-select" id="order-input-seller" autocomplete="off">
                      <option selected>Vyberte</option>
                      <option value="1">Možnost 1</option>
                      <option value="2">Možnost 2</option>
                      <option value="3">Možnost 3</option>
                      <option value="4">Možnost 4</option>
                      <option value="5">Možnost 5</option>
                    </select>
                  </div>
                  <!-- ? Multiple options ? -->
                  <div class="col-md-6 col-lg-6">
                    <label class="form-label" for="order-input-technician">Technik ÚVD</label>
                    <select class="form-select" id="order-input-technician" autocomplete="off">
                      <option selected>Vyberte</option>
                      <option value="1">Možnost 1</option>
                      <option value="2">Možnost 2</option>
                      <option value="3">Možnost 3</option>
                      <option value="4">Možnost 4</option>
                      <option value="5">Možnost 5</option>
                    </select>
                  </div>
                  <!-- ? Multiple options ? -->
                  <div class="col-md-6 col-lg-6">
                    <label class="form-label" for="order-input-oversight">Stavební dozor</label>
                    <select class="form-select" id="order-input-oversight" autocomplete="off">
                      <option selected>Vyberte</option>
                      <option value="1">Možnost 1</option>
                      <option value="2">Možnost 2</option>
                      <option value="3">Možnost 3</option>
                      <option value="4">Možnost 4</option>
                      <option value="5">Možnost 5</option>
                    </select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <label class="form-label" for="order-input-date-installation-start">Zahájení montáže</label>
                    <input type="date" class="form-control" name="order-input-date-installation-start" id="order-input-date-installation-start">
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <label class="form-label" for="order-input-date-installation-end">Dokončení montáže</label>
                    <input type="date" class="form-control" name="order-input-date-installation-end" id="order-input-date-installation-end">
                  </div>
                  <!-- ? Proč je datum ? -->
                  <div class="col-md-6 col-lg-6">
                    <label class="form-label" for="order-input-date-installation-protocol">Předávací protokol k montáži</label>
                    <input type="date" class="form-control" name="order-input-date-installation-protocol" id="order-input-date-installation-protocol">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">idk</h3>
          </div>
          <div class="card-body space-y">
            <div>
              <!-- ? musí tam být ta závorka ? -->
              <!-- <p>Poznámka dodavatele (k objednávce): [VÝPIS] text</p> -->
              <span class="form-label">Poznámka dodavatele (k objednávce)</span>
              <p class="form-control-plaintext">Tohle je ten nejhezčí byt, ve kterém jsem kdy byl.</p>
            </div>
            <div>
              <!-- <p>Poznámka technika: text</p> -->
              <label class="form-label" for="order-technician-note">Poznámka technika <span class="form-label-description">xx/yy</span></label>
              <textarea class="form-control" name="order-technician-note" id="order-technician-note" rows="1" placeholder="Poznámka technika..."></textarea>
            </div>
            <div>
              <!-- <p>Vady: text</p> -->
              <label class="form-label" for="order-flaws">Vady <span class="form-label-description">xx/yy</span></label>
              <textarea class="form-control" name="order-flaws" id="order-flaws" rows="1" placeholder="Vady..."></textarea>
            </div>
            <div>
              <!-- <p>Předávací protokol k odstranění vad: date | null</p> -->
              <label class="form-label" for="order-input-date-flaws-protocol">Předávací protokol k odstranění vad</label>
              <input type="date" class="form-control" name="order-input-date-flaws-protocol" id="order-input-date-flaws-protocol">
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Přílohy</h3>
          </div>
          <div class="card-body">
            <p>192-01-086-IS-I_Indeco_nabídka.pdf</p>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Položky</h3>
          </div>
          <div class="card-body">
            <p>skříň chodba</p>
          </div>
        </div>
      </div>
    </div>
  </PageTemplate>
</template>

<style scoped></style>