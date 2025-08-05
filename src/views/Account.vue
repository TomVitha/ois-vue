<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
</script>

<template>

  <PageTemplate title="Nastavení účtu">
    <div class="row g-5">
      <div class="col-xl-2 d-none d-xl-block">
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
      </div>
      <!-- Following element likely causes horizontal overflow -->
      <div class="col" data-bs-spy="scroll" data-bs-target="#pills" data-bs-offset="0">
        <div class="row row-cards row-deck">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <div class="card-title">Osobní údaje (1)</div>
                <div class="space-y-2">
                  <div class="row">
                    <div class="col-6 text-secondary">Jméno</div>
                    <div class="col-6 text-end">Adam Novák</div>
                  </div>
                  <div class="row">
                    <div class="col-6 text-secondary">Adresa</div>
                    <div class="col-6 text-end">Lomená 87 Ondřejov Turkovice 251 65</div>
                  </div>
                  <div class="row">
                    <div class="col-6 text-secondary">Email</div>
                    <div class="col-6 text-end">adam.novak69@seznam.cz</div>
                  </div>
                  <div class="row">
                    <div class="col-6 text-secondary">Telefon</div>
                    <div class="col-6 text-end">721895743</div>
                  </div>
                  <div class="row">
                    <div class="col-6 text-secondary">IČO</div>
                    <div class="col-6 text-end">87174634</div>
                  </div>
                  <div class="row">
                    <div class="col-6 text-secondary">DIČ</div>
                    <div class="col-6 text-end">CZ8706080086</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <div class="card-title">Osobní údaje (2)</div>
                <div class="space-y-2">
                  <div class="row">
                    <div class="col-auto text-secondary">Jméno</div>
                    <div class="col-auto ms-auto text-end">Adam Novák</div>
                  </div>
                  <div class="row">
                    <div class="col-auto text-secondary">Adresa</div>
                    <div class="col-auto ms-auto text-end">Lomená 87 Ondřejov Turkovice 251 65</div>
                  </div>
                  <div class="row">
                    <div class="col-auto text-secondary">Email</div>
                    <div class="col-auto ms-auto text-end">adam.novak69@seznam.cz</div>
                  </div>
                  <div class="row">
                    <div class="col-auto text-secondary">Telefon</div>
                    <div class="col-auto ms-auto text-end">721895743</div>
                  </div>
                  <div class="row">
                    <div class="col-auto text-secondary">IČO</div>
                    <div class="col-auto ms-auto text-end">87174634</div>
                  </div>
                  <div class="row">
                    <div class="col-auto text-secondary">DIČ</div>
                    <div class="col-auto ms-auto text-end">CZ8706080086</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <div class="card-title">Osobní údaje (3)</div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-auto text-secondary">Jméno</div>
                  <div class="col-auto ms-auto text-end">Adam Novák</div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-auto text-secondary">Adresa</div>
                  <div class="col-auto ms-auto text-end">Lomená 87 Ondřejov Turkovice 251 65</div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-auto text-secondary">Email</div>
                  <div class="col-auto ms-auto text-end">adam.novak69@seznam.cz</div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-auto text-secondary">Telefon</div>
                  <div class="col-auto ms-auto text-end">721895743</div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-auto text-secondary">IČO</div>
                  <div class="col-auto ms-auto text-end">87174634</div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-auto text-secondary">DIČ</div>
                  <div class="col-auto ms-auto text-end">CZ8706080086</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body space-y-1">
                <div class="row">
                  <div class="col">
                    <h3 class="card-title">Osobní údaje (4) !!</h3>
                  </div>
                  <div class="col-auto">
                    <a href="#">Upravit</a>
                    <!-- <a href="#" class="avatar avatar-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path><path d="M13.5 6.5l4 4"></path></svg>
                      </a> -->
                  </div>
                </div>
                <div class="row">
                  <div class="col text-secondary">Jméno:</div>
                  <div class="col-auto">Adam Novák</div>
                </div>
                <hr class="my-2">
                <div class="row">
                  <div class="col text-secondary">Adresa:</div>
                  <div class="col-auto">Lomená 87 Ondřejov Turkovice 251 65</div>
                </div>
                <hr class="my-2">
                <div class="row">
                  <div class="col text-secondary">Email:</div>
                  <div class="col-auto">adam.novak69@seznam.cz</div>
                </div>
                <hr class="my-2">
                <div class="row">
                  <div class="col text-secondary">Telefon:</div>
                  <div class="col-auto">721895743</div>
                </div>
                <hr class="my-2">
                <div class="row">
                  <div class="col text-secondary">IČO:</div>
                  <div class="col-auto">87174634</div>
                </div>
                <hr class="my-2">
                <div class="row">
                  <div class="col text-secondary">DIČ:</div>
                  <div class="col-auto">CZ8706080086</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Osobní údaje</h3>
                <div class="card-actions">
                  <a href="#">
                    Upravit
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon ms-1 icon-2">
                      <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                      <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                      <path d="M16 5l3 3"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="card-body">
                <dl class="row">
                  <dt class="col-5">Jméno:</dt>
                  <dd class="col-7">Adam Novák</dd>
                  <dt class="col-5">Adresa:</dt>
                  <dd class="col-7">Lomená 87 Ondřejov Turkovice 251 65</dd>
                  <dt class="col-5">Email:</dt>
                  <dd class="col-7">adam.novak69@seznam.cz</dd>
                  <dt class="col-5">Telefon:</dt>
                  <dd class="col-7">721895743</dd>
                  <dt class="col-5">IČO:</dt>
                  <dd class="col-7">87174634</dd>
                  <dt class="col-5">DIČ:</dt>
                  <dd class="col-7">CZ8706080086</dd>
                </dl>
              </div>
            </div>
          </div>
          <!-- Klient si sám nemůže změnit/přepsat údaje - musí si o změny zažádat -->
          <div class="col-12">
            <div class="alert alert-info alert-dismissible w-100 m-0" role="alert">
              <div class="alert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon icon-2">
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 9h.01"></path>
                  <path d="M11 12h1v4h1"></path>
                </svg>
              </div>
              <!-- <div>
                  <h4 class="alert-heading">Žádost o změnu osobních údajů</h4>
                  <div class="alert-description">
                    Vaše žádost se zpracovává a projeví se v následujících dnech.
                    <ul class="alert-list">
                      <li>Rodinný stav: Ženatý -> Svobodný</li>
                    </ul>
                  </div>
                </div> -->
              <div>
                <h4 class="alert-heading">Vaši žádost o změnu osobních údajů zpracováváme</h4>
                <div class="alert-description">
                  <ul class="alert-list">
                    <li>Rodinný stav: Ženatý -> Svobodný</li>
                  </ul>
                </div>
              </div>
              <!-- <a class="btn-close" data-bs-dismiss="alert" aria-label="close"></a> -->
            </div>
          </div>
          <div class="col-12">
            <div class="card card-md">
              <div class="card-body">
                <h3 class="card-title">Osobní údaje (5)</h3>
                <!-- <div class="card-subtitle">Vaše super velmi citlivé osobní údaje, se kterými zacházíme nejvíce šetrně a nijak neprodáváme.</div> -->
                <div class="row g-2">
                  <div class="col-md-4 col-sm-6">
                    <div class="text-secondary">Jméno</div>
                    <div>Adam Novák</div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                    <div class="text-secondary">Adresa</div>
                    <div>Skopičkova 748/9, Praha 4, 143 00</div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                    <div class="text-secondary">Email</div>
                    <div>novak@seznam.cz</div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                    <div class="text-secondary">Telefon</div>
                    <div>+420721584630</div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                    <div class="text-secondary">IČ</div>
                    <div>38171674</div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                    <div class="text-secondary">DIČ</div>
                    <div>CZ8706080086</div>
                  </div>
                </div>
              </div>
              <div class="card-footer bg-transparent mt-auto">
                <div class="btn-list justify-content-end">
                  <a href="#" class="btn btn-1">Zažádat o změnu</a>
                  <a href="#" class="btn btn-1">Zrušit</a>
                  <a href="#" class="btn btn-primary btn-2">Odeslat žádost</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <p>O změnu údajů si můžete zažádat na stránce <RouterLink to="/zadosti">Žádosti a žmeny</RouterLink>.</p>
          </div>
          <div class="col-12">
            <div class="card card-md">
              <!-- <form action=""> -->
              <div class="card-body">
                <h3 class="card-title">Osobní údaje klienta (6)</h3>
                <div class="card-subtitle">Vaše velmi citlivé osobní údaje, se kterými zacházíme nejvíce šetrně a nijak neprodáváme.</div>
                <div class="row g-3">
                  <div class="col-md">
                    <div class="form-label">Jméno</div>
                    <input type="text" class="form-control" value="Adam Novák" autocomplete="name" required>
                  </div>
                  <div class="col-md">
                    <div class="form-label">Adresa</div>
                    <input type="text" class="form-control" value="Skopičkova 748/9, Praha 4, 143 00" required>
                  </div>
                  <div class="col-md">
                    <div class="form-label">Email</div>
                    <input type="email" class="form-control" value="novak@seznam.cz" required>
                  </div>
                </div>
                <div class="row g-3 mt-0">
                  <div class="col-md">
                    <div class="form-label">Telefon</div>
                    <input type="tel" class="form-control" value="+420721584630" autocomplete="tel" required>
                  </div>
                  <div class="col-md">
                    <div class="form-label">IČ</div>
                    <input type="text" class="form-control" value="38171674" required>
                  </div>
                  <div class="col-md">
                    <div class="form-label">DIČ</div>
                    <input type="text" class="form-control" value="CZ8706080086" required>
                  </div>
                </div>
              </div>
              <div class="card-footer bg-transparent mt-auto">
                <div class="btn-list justify-content-end">
                  <button class="btn btn-1">Upravit</button>
                  <!-- <a href="#" class="btn btn-1"> Cancel </a>
                        <a href="#" class="btn btn-primary btn-2"> Submit </a> -->
                </div>
              </div>
              <!-- </form> -->
            </div>
          </div>
          <div class="col-12">
            <div class="card card-md">
              <div class="card-body">
                <h3 class="card-title">Osobní údaje klienta (7)</h3>
                <div class="space-y">
                  <div class="row">
                    <label class="col-12 col-md-4 col-form-label text-md-end">Celé jméno</label>
                    <div class="col">
                      <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Křestní jméno a přijímení" value="Adam Novák" disabled>
                    </div>
                  </div>
                  <div class="row">
                    <label class="col-12 col-md-4 col-form-label text-md-end">Adresa</label>
                    <div class="col">
                      <input type="text" class="form-control" value="Skopičkova 748/9, Praha 4, 143 00" disabled>
                    </div>
                  </div>
                  <div class="row">
                    <label class="col-12 col-md-4 col-form-label text-md-end">Email</label>
                    <div class="col">
                      <input type="email" class="form-control" value="novak@seznam.cz" disabled>
                    </div>
                  </div>
                  <div class="row">
                    <label class="col-12 col-md-4 col-form-label text-md-end">Telefon</label>
                    <div class="col">
                      <input type="phone" class="form-control" placeholder="Telefonní číslo (vč. předvolby)" value="+420721584630" disabled>
                    </div>
                  </div>
                  <div class="row">
                    <label class="col-12 col-md-4 col-form-label text-md-end">IČ</label>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="IČ" value="87174634" disabled>
                    </div>
                  </div>
                  <div class="row">
                    <label class="col-12 col-md-4 col-form-label text-md-end">DIČ</label>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="DIČ" value="CZ8706080086" disabled>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card card-md">
              <div class="card-body">
                <h3 class="card-title">Osobní údaje klienta (8)</h3>
                <div class="row gy-3">
                  <div class="col-lg-4">
                    <div>Name</div>
                    <div class="text-secondary">Some smaller text under the title</div>
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" value="Adam Novák" autocomplete="name" required>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card card-md">
              <div class="card-body">
                <h3 class="card-title">Email</h3>
                <p class="card-subtitle">This contact will be shown to others publicly, so choose it carefully.</p>
                <div>
                  <div class="row g-2">
                    <div class="col-auto">
                      <input type="text" class="form-control w-auto" value="paweluna@howstuffworks.com">
                    </div>
                    <div class="col-auto">
                      <a href="#" class="btn btn-1"> Change </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">Password</h3>
                <p class="card-subtitle">You can set a permanent password if you don't want to use temporary login codes.
                </p>
                <div>
                  <a href="#" class="btn btn-1"> Set new password </a>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">Public profile</h3>
                <p class="card-subtitle">Making your profile public means that anyone on the Dashkit network will be able
                  to find you.</p>
                <div>
                  <label class="form-check form-switch form-switch-lg">
                    <input class="form-check-input" type="checkbox">
                    <span class="form-check-label form-check-label-on">You're currently visible</span>
                    <span class="form-check-label form-check-label-off">You're currently invisible</span>
                  </label>
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