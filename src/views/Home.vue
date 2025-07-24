<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
</script>

<template>

  <PageTemplate title="Přehled">
    <!-- <template #actions>
      <button class="btn btn-primary">Nová akce</button>
    </template> -->
    <div class="row row-deck row-cards">
      <div class="col-12">
        <div class="card card-md">
          <div class="card-body">
            <div class="d-flex align-items-baseline">
              <h3 class="card-title">Finanční bilance</h3>
              <div class="ms-auto lh-1">
                <div class="dropdown">
                  <a class="dropdown-toggle text-secondary" id="financial-balance-units-dropdown" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Vyberte zda zobrazit finanční bilanci za všechny byty dohromady, nebo jednotlivě">Dohromady</a>
                  <div class="dropdown-menu dropdown-menu-end" aria-labelledby="financial-balance-units-dropdown">
                    <a class="dropdown-item active" href="#" aria-current="true">Dohromady</a>
                    <a class="dropdown-item" href="#">Jednotlivě</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row gy-2">
              <div class="col-12 col-md-4">
                <span class="subheader">Celá částka</span>
                <p class="h1 m-0">35&nbsp;780&nbsp;000&nbsp;Kč</p>
              </div>
              <div class="col-12 col-md-4">
                <span class="subheader">Zaplaceno</span>
                <p class="h1 m-0 text-green">24&nbsp;866&nbsp;391&nbsp;Kč</p>
              </div>
              <div class="col-12 col-md-4">
                <span class="subheader">Zbývá zaplatit</span>
                <p class="h1 m-0 text-red">10&nbsp;913&nbsp;609&nbsp;Kč</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card card-md">
          <div class="card-body">
            <div class="d-flex align-items-baseline">
              <h2>Finanční bilance</h2>
              <div class="ms-auto lh-1">
                <div class="dropdown">
                  <a class="dropdown-toggle text-secondary" id="financial-balance-units-dropdown" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Vyberte zda zobrazit finanční bilanci za všechny byty dohromady, nebo jednotlivě">Jednotlivě</a>
                  <div class="dropdown-menu dropdown-menu-end" aria-labelledby="financial-balance-units-dropdown">
                    <a class="dropdown-item" href="#" aria-current="true">Dohromady</a>
                    <a class="dropdown-item active" href="#">Jednotlivě</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 class="card-title"><a href="/apt">Byt C 310</a></h3>
            </div>
            <div class="row gy-2">
              <div class="col-12 col-md-4">
                <span class="subheader">Celá částka</span>
                <p class="h1 m-0">5 701 000 Kč</p>
              </div>
              <div class="col-12 col-md-4">
                <span class="subheader">Zaplaceno</span>
                <p class="h1 m-0 text-green">4 866 391 Kč</p>
              </div>
              <div class="col-12 col-md-4">
                <span class="subheader">Zbývá zaplatit</span>
                <p class="h1 m-0 text-red">913 609 Kč</p>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="d-flex align-items-baseline">
              <h3 class="card-title"><a href="/apt">Byt A 017</a></h3>
            </div>
            <div class="row gy-2">
              <div class="col-12 col-md-4">
                <span class="subheader">Celá částka</span>
                <p class="h1 m-0">6 350 000 Kč</p>
              </div>
              <div class="col-12 col-md-4">
                <span class="subheader">Zaplaceno</span>
                <p class="h1 m-0 text-green">1 743 000 Kč</p>
              </div>
              <div class="col-12 col-md-4">
                <span class="subheader">Zbývá zaplatit</span>
                <p class="h1 m-0 text-red">4 607 000 Kč</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card overflow-hidden">
          <div id="carousel-1" class="carousel slide" data-bs-ride="carousel">
            <!-- <div class="carousel-indicators carousel-indicators-dot">
              <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" class="active"></button>
              <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"></button>
              <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="3"></button>
              <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="4"></button>
            </div> -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="card-body bg-green-lt text-center">
                  <div class="text-body space-y-2 align-items-center">
                    <img src="https://tabler.io/_next/image?url=%2Fillustrations%2Fdark%2Fclock-and-cat.png&w=800&q=75" alt="" srcset="" width="150">
                    <div class="card-title m-0">Add a property</div>
                    <div>Add your first property to get started using TenantCloud</div>
                    <a href="#" class="text-green">Get started</a>
                    <small class="text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-stopwatch">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0z" />
                        <path d="M14.5 10.5l-2.5 2.5" />
                        <path d="M17 8l1 -1" />
                        <path d="M14 3h-4" />
                      </svg>
                      Est. 2 min set up
                    </small>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" alt="" src="https://fakeimg.ryd.tools/1600x800?text=Step%201" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" alt="" src="https://fakeimg.ryd.tools/1600x800?text=Step%202" />
              </div>
            </div>
            <a class="carousel-control-prev" data-bs-target="#carousel-1" role="button" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" data-bs-target="#carousel-1" role="button" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            blížící se platby (např v pristich 7 dnech) - výrazně co jsi nezaplatil nebo co máš zaplaceno
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            dokumenty k podepsání (které ješte nepodepsal)
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            zprávy - proklik na inbox
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            platby po splatnosti
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            blížící se termínovky - termín výběrů
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            kontrola (potvrzení) osobních údajů (jednou za čas)
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            Základní kontaktní osoby
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            Propagace
          </div>
        </div>
      </div>
    </div>
  </PageTemplate>

</template>

<style scoped></style>