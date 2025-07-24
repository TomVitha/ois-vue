<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
</script>

<template>

  <PageTemplate title="Žádosti a změny">
    <template #actions>
      <div class="btn-list">
        <button type="button" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-1">
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
          Nová žádost (?)
        </button>
      </div>
    </template>
    <div class="row row-deck row-cards">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Generic žádost</h3>
            <p class="text-secondary">Když žádná z předem zvolených možností není to co potřebujete.</p>
          </div>
        </div>
      </div>

      <!-- Změna osobních údajů -->
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Změna osobních údajů</h3>
            <p class="text-secondary">Vdala jste se? Přestěhovali jste se, nebo si změnili telefonní číslo? Tak si to nechte pro sebe, nás to nezajímá.</p>
            <a href="#" class="btn" data-bs-toggle="modal" data-bs-target="#zadost-osobni-udaje">Otevřít</a>
            <!-- DIALOG -->
            <div class="modal" id="zadost-osobni-udaje" tabindex="-1">
              <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Změna osobních údajů</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row align-items-center">
                      <div class="col"><span class="form-label">Údaj</span></div>
                      <div class="col"><span class="form-label">Současný</span></div>
                      <div class="col"><span class="form-label">Nový</span></div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col">
                        <div class="dropdown">
                          <a href="#" class="btn dropdown-toggle justify-content-between w-100" data-bs-toggle="dropdown">Rodinný stav</a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                            <a class="dropdown-item" href="#">Third action</a>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <input type="text" class="form-control" name="example-text-input" placeholder="Input placeholder" value="Ženatý" readonly>
                      </div>
                      <div class="col">
                        <input type="text" class="form-control" name="example-text-input" placeholder="Input placeholder" value="Svobodný">
                      </div>
                    </div>

                    <a href="#" class="d-inline-block mt-3">Další údaj</a>
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
      </div>

      <!-- Změna osobních údajů 2-->
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Změna osobních údajů 2</h3>
            <p class="text-secondary">Jestli se něco ohledně vás změnilo, tak nám to řekněte. Jestli nám to neřeknete tak vám uřízneme... tedy, tak vám ten byt nedáme.</p>
            <a href="#" class="btn" data-bs-toggle="modal" data-bs-target="#zadost-osobni-udaje-2">Otevřít</a>
            <!-- DIALOG -->
            <div class="modal" id="zadost-osobni-udaje-2" tabindex="-1">
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
      </div>

    </div>
  </PageTemplate>


</template>

<style scoped></style>