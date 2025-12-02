<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
</script>

<template>

  <PageTemplate title="Nová žádost">

    <template #actions>
      <div class="btn-list">
        <RouterLink to="/zadosti">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 14l-4 -4l4 -4" />
            <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
          </svg>
          Zpět
        </RouterLink>
      </div>
    </template>

    <!-- TODO: Whole .card clickable to open form (get rid of Open buttons) -->

    <div class="row row-deck row-cards">

      <div class="col-md-4">
        <RouterLink to="" class="card card-md text-center">
          <div class="card-body">
            <h3 class="card-title">Obecná žádost</h3>
            <p class="text-secondary">Když žádná z předem zvolených možností není to co potřebujete.</p>
          </div>
        </RouterLink>
      </div>

      <!-- Změna osobních údajů -->
      <div class="col-md-4">
        <RouterLink to="#" class="card card-md text-center" data-bs-toggle="modal" data-bs-target="#zadost-osobni-udaje">
          <div class="card-body">
            <h3 class="card-title">Změna osobních údajů</h3>
            <p class="text-secondary">Přestěhovali jste se, nebo si změnili telefonní číslo? Změnilo se vám pohlaví, nebo jste zemřeli? Zde nám dejte vědět o změně svých osobních údajů.</p>
          </div>
        </RouterLink>
        <!-- DIALOG -->
        <div class="modal fade" id="zadost-osobni-udaje" tabindex="-1">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Změna osobních údajů</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row align-items-center gy-3">
                  <div class="col-md-4">
                    <span class="form-label">Údaj</span>
                    <select name="lang" class="form-select">
                      <option value="1">Rodinný stav</option>
                      <option value="2">Jméno</option>
                      <option value="3">Adresa</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <span class="form-label">Současná hodnota</span>
                    <input type="text" class="form-control" name="example-text-input" placeholder="Input placeholder" value="Ženatý" disabled>
                  </div>
                  <div class="col-md-4">
                    <span class="form-label">Nová hodnota</span>
                    <input type="text" class="form-control" name="example-text-input" placeholder="Input placeholder" value="Svobodný">
                  </div>
                </div>

                <!-- <a href="#" class="d-inline-block mt-3">Další údaj</a> -->
              </div>
              <div class="modal-footer">
                <button type="button" class="btn me-auto" data-bs-dismiss="modal">Zrušit</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Odeslat žádost</button>
              </div>
            </div>
          </div>
        </div>
        <!-- DIALOG END -->
      </div>

      <!-- Změna osobních údajů 2-->
      <div class="col-md-4">
        <RouterLink to="#" class="card card-md text-center" data-bs-toggle="modal" data-bs-target="#zadost-osobni-udaje-2">
          <div class="card-body">
            <h3 class="card-title">Změna osobních údajů 2</h3>
            <p class="text-secondary">Jestli se něco ohledně vás změnilo, tak nám o tom dejte vědět.</p>
          </div>
        </RouterLink>
        <!-- DIALOG -->
        <div class="modal fade" id="zadost-osobni-udaje-2" tabindex="-1">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Změna osobních údajů 2</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row g-3">
                  <div class="col-md-4">
                    <div class="form-label">Jméno</div><input type="text" class="form-control" autocomplete="name" required value="Adam Novák">
                  </div>
                  <div class="col-md-4">
                    <div class="form-label">Adresa</div><input type="text" class="form-control" required value="Skopičkova 748/9, Praha 4, 143 00">
                  </div>
                  <div class="col-md-4">
                    <div class="form-label">Email</div><input type="email" class="form-control" required value="novak@seznam.cz">
                  </div>
                  <div class="col-md-4">
                    <div class="form-label">Telefon</div><input type="tel" class="form-control" autocomplete="tel" required value="+420721584630">
                  </div>
                  <div class="col-md-4">
                    <div class="form-label">IČ</div><input type="text" class="form-control" required value="38171674">
                  </div>
                  <div class="col-md-4">
                    <div class="form-label">DIČ</div><input type="text" class="form-control" required value="CZ8706080086">
                  </div>
                  <div class="col-md-4">
                    <div class="form-label">DIČ</div><input type="text" class="form-control" required value="CZ8706080086">
                  </div>
                  <div class="col-md-4">
                    <div class="form-label">DIČ</div><input type="text" class="form-control" required value="CZ8706080086">
                  </div>
                  <div class="col-md-4">
                    <div class="form-label">DIČ</div><input type="text" class="form-control" required value="CZ8706080086">
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn me-auto" data-bs-dismiss="modal">Zrušit</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Odeslat žádost</button>
              </div>
            </div>
          </div>
        </div>
        <!-- DIALOG END -->
      </div>

    </div>
  </PageTemplate>


</template>

<style scoped></style>