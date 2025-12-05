<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'

  // Copied from sign in page
  import { ref } from 'vue'
  import { useThemeStore } from '@/stores/theme'
  const themeStore = useThemeStore()

  // FIXME: Password toggling is global; should be tied to its individual input
  const passwordVisible = ref(false)
  function togglePasswordVisibility() {
    passwordVisible.value = !passwordVisible.value
  }
</script>

<template>

  <PageTemplate title="Nastavení účtu">
    <div class="row g-5">
      <!-- <div class="col-xl-2 d-none d-xl-block">
        <div class="sticky-top">
          <h3>Menu</h3>
          <nav class="nav nav-vertical nav-pills" id="pills">
            <a class="nav-link active" href="#pills-home">Home</a>
            <a class="nav-link" href="#pills-profile">Profile</a>
            <a class="nav-link" href="#pills-messages">Messages</a>
            <a class="nav-link" href="#pills-settings">Settings</a>
            <a class="nav-link" href="#pills-about">About</a>
            <a class="nav-link" href="#pills-contact">Contact</a>
            <a class="nav-link" href="#pills-services">Services</a>
            <a class="nav-link" href="#pills-team">Team</a>
            <a class="nav-link" href="#pills-work">Work</a>
          </nav>
        </div>
      </div> -->


      <div class="col-xl-10" data-bs-spy="scroll" data-bs-target="#pills" data-bs-offset="0">
        <div class="row row-cards row-deck">

          <!-- Oznámení že se zpracovává žádost o změnu osobních údajů -->
          <!-- <div class="col-12">
            <div class="alert alert-info alert-dismissible w-100 m-0" role="alert">
              <div class="alert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon icon-2">
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 9h.01"></path>
                  <path d="M11 12h1v4h1"></path>
                </svg>
              </div>
              <div>
                <h4 class="alert-heading">Vaši žádost o změnu osobních údajů zpracováváme</h4>
                <div class="alert-description">
                  <ul class="alert-list">
                    <li>Rodinný stav: Ženatý -> Svobodný</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> -->

          <!-- TODO: Předělat oznámení, pokud má klient aktivní podanou žádost -->

          <div class="col-12">
            <div class="card card-md">
              <div class="card-body">
                <h3 class="card-title">Osobní údaje (6)</h3>
                <div class="datagrid">
                  <div class="datagrid-item">
                    <div class="datagrid-title">Klient</div>
                    <div>Adam Novák</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">Adresa</div>
                    <div>Skopičkova 748/9, Praha 4, 143 00</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">Rodinný stav</div>
                    <div>Ženatý</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">Email</div>
                    <div>novak@seznam.cz</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">Telefon</div>
                    <div>+420721584630</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">IČ</div>
                    <div>38171674</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">DIČ</div>
                    <div>CZ8706080086</div>
                  </div>
                </div>
                <div class="mt-4">
                  <div class="btn-list">
                    <RouterLink to="/zadost-nova" class="btn btn-1">Zažádat o změnu</RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card card-md">
              <div class="card-body">
                <h3 class="card-title">Heslo</h3>
                <p class="card-subtitle">
                  Zde můžete změnit heslo ke svému účtu.
                </p>
                <div>
                  <a href="#dialog-password-change" class="btn" data-bs-toggle="modal" data-bs-target="#dialog-password-change">
                    Změnit
                  </a>
                </div>
              </div>

              <!-- password change dialog -->
              <div class="modal fade" tabindex="-1" id="dialog-password-change">
                <div class="modal-dialog modal-dialog-centered modal-md modal-fullscreen-sm-down" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Změna hesla</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="row gy-3">
                        <div class="row-12">
                          <label class="form-label d-inline-block" for="current-password">Aktuální heslo</label>
                          <div class="input-group input-group-flat">
                            <input :type="passwordVisible ? 'text' : 'password'" id="current-password" name="current-password" autocomplete="current-password" class="form-control fs-4" placeholder="" required>
                            <span class="input-group-text">
                              <a href="#" class="link-secondary" data-bs-toggle="tooltip" aria-label="Přepnout viditelnost hesla" data-bs-original-title="Přepnout viditelnost hesla" @click.prevent="togglePasswordVisibility()">
                                <i class="fs-2 icon" :class="['ti', passwordVisible ? 'ti-eye-off' : 'ti-eye']"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                        <div class="row-12">
                          <label class="form-label d-inline-block" for="new-password-1">Nové heslo</label>
                          <div class="input-group input-group-flat">
                            <input :type="passwordVisible ? 'text' : 'password'" id="new-password-1" name="new-password-1" autocomplete="new-password" class="form-control fs-4" placeholder="" required>
                            <span class="input-group-text">
                              <a href="#" class="link-secondary" data-bs-toggle="tooltip" aria-label="Přepnout viditelnost hesla" data-bs-original-title="Přepnout viditelnost hesla" @click.prevent="togglePasswordVisibility()">
                                <i class="fs-2 icon" :class="['ti', passwordVisible ? 'ti-eye-off' : 'ti-eye']"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                        <div class="row-12">
                          <label class="form-label d-inline-block" for="new-password-2">Potvrďtě nové heslo</label>
                          <div class="input-group input-group-flat">
                            <input :type="passwordVisible ? 'text' : 'password'" id="new-password-2" name="new-password-2" autocomplete="new-password" class="form-control fs-4" placeholder="" required>
                            <span class="input-group-text">
                              <a href="#" class="link-secondary" data-bs-toggle="tooltip" aria-label="Přepnout viditelnost hesla" data-bs-original-title="Přepnout viditelnost hesla" @click.prevent="togglePasswordVisibility()">
                                <i class="fs-2 icon" :class="['ti', passwordVisible ? 'ti-eye-off' : 'ti-eye']"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                        <!-- TODO -->
                        <div class="row-12">
                          <p>Sem přijde výpis požadavků na heslo (v podobě checklistu ?)</p>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn me-auto" data-bs-dismiss="modal">Zrušit</button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Uložit</button>
                    </div>
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