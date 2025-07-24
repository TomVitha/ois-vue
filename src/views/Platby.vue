<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
</script>

<template>

  <PageTemplate title="Platby">
    <!-- ALERTS -->
    <div class="alert alert-danger alert-dismissible" role="alert">
      <div class="alert-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon icon-2">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
          <path d="M12 8v4"></path>
          <path d="M12 16h.01"></path>
        </svg>
      </div>
      <div>
        <h4 class="alert-heading">Password does not meet requirements:</h4>
        <div class="alert-description">
          You done fucked up this time.
        </div>
      </div>
      <a class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>
    </div>
    <div class="alert alert-important alert-danger alert-dismissible" role="alert">
      <div class="alert-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon icon-2">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
          <path d="M12 8v4"></path>
          <path d="M12 16h.01"></path>
        </svg>
      </div>
      <div>
        <h4 class="alert-heading">Password does not meet requirements:</h4>
        <div class="alert-description">
          You done fucked up this time.
        </div>
      </div>
      <a class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>
    </div>
    <div class="alert alert-warning alert-dismissible w-100" role="alert">
      <div class="alert-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon icon-2">
          <path d="M12 9v4"></path>
          <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z">
          </path>
          <path d="M12 16h.01"></path>
        </svg>
      </div>
      <div>
        <h4 class="alert-heading">Some information is missing!</h4>
        <div class="alert-description">This is a custom alert box with a description. <a href="#" class="alert-action">Link</a></div>
      </div>
      <a class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>
    </div>
    <div class="alert alert-important alert-warning alert-dismissible" role="alert">
      <div class="alert-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon alert-icon icon-2">
          <path d="M12 9v4"></path>
          <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z">
          </path>
          <path d="M12 16h.01"></path>
        </svg>
      </div>
      <div>
        <h4 class="alert-heading">This is a custom alert box!</h4>
        <div class="alert-description">This is a custom alert box with a description.</div>
      </div>
      <a class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>
    </div>
    <!-- CONTENT -->
    <div class="row row-deck row-cards">
      <div class="col-12">
        <div class="card card-md">
          <div class="card-body">
            <h3 class="card-title">Davejte prachy</h3>
            <div class="row gy-2">
              <div class="col-12 col-md-4">
                <span class="text-secondary">Celá částa</span>
                <p class="fw-bolder fs-1 m-0">5 701 000 Kč</p>
              </div>
              <div class="col-12 col-md-4">
                <span class="text-secondary">Zaplaceno</span>
                <p class="fw-bolder fs-1 m-0 text-green">4 860 995 Kč</p>
              </div>
              <div class="col-12 col-md-4">
                <span class="text-secondary">Zbývá k zaplacení</span>
                <p class="fw-bolder fs-1 m-0 text-red">840 005 Kč</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card card-md">
          <div class="card-body">
            <h3 class="card-title">Finanční bilance</h3>
            <div class="row gy-2">
              <div class="col-12 col-md-4">
                <span class="subheader">Celá částka</span>
                <p class="h1 m-0">5&nbsp;780&nbsp;000&nbsp;Kč</p>
              </div>
              <div class="col-12 col-md-4">
                <span class="subheader">Zaplaceno</span>
                <p class="h1 m-0 text-green">4&nbsp;866&nbsp;391&nbsp;Kč</p>
              </div>
              <div class="col-12 col-md-4">
                <span class="subheader">Zbývá zaplatit</span>
                <p class="h1 m-0 text-red">913&nbsp;609&nbsp;Kč</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Celá částka</h3>
            <!-- <div class="subheader">Celá částka</div> -->
            <p class="h1 m-0">5&nbsp;780&nbsp;000&nbsp;Kč</p>
            <div class="text-secondary mt-2">Splácení do: 31.12.2035</div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Zaplaceno</h3>
            <p class="h1 m-0 text-green">4&nbsp;866&nbsp;391&nbsp;Kč</p>
            <div class="text-secondary mt-2">Poslední platba: 26.04.2025</div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Zbývá</h3>
            <p class="h1 m-0 text-red">913&nbsp;609&nbsp;Kč</p>
            <div class="text-secondary mt-2">Další platba: 31.02.2026</div>
          </div>
        </div>
      </div>
      <h3 class="mt-4 mb-0">Platby</h3>
      <!-- TODO: Řazení? Filtrování? -->
      <!-- TODO: Lidé chtějí odklad plateb -> 3 dots submenu with actions -->
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center row-gap-3">
              <div class="col-12 col-md">
                Odchylka
                <div class="text-secondary">případný menší text</div>
              </div>
              <div class="col-12 col-md">
                <div>26 750&nbsp;Kč</div>
                <div class="text-secondary">Částka</div>
              </div>
              <div class="col-12 col-md">
                <div>31.2.2025</div>
                <div class="text-secondary">Splatnost</div>
              </div>
              <div class="col-12 col-md">
                <div><span class="badge bg-green-lt">Zaplaceno</span></div>
              </div>
              <div class="col-auto">
                <a href="#" class="btn btn-1" aria-label="Download">
                  <span>Faktura</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center row-gap-3">
              <div class="col-12 col-md">
                Odchylka
                <div class="text-secondary">případný menší text</div>
              </div>
              <div class="col-12 col-md row">
                <div class="col text-secondary">Splatnost</div>
                <div class="col-auto">31.2.2025</div>
              </div>
              <div class="col-12 col-md">
                <div><span class="badge bg-green-lt">Zaplaceno</span></div>
              </div>
              <div class="col-auto">
                <a href="#" class="btn btn-1" aria-label="Download">
                  <span>Faktura</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                Odchylka
              </div>
              <div class="col-auto text-end">
                <div class="fs-3 fw-bold text-green">31&nbsp;980&nbsp;Kč</div>
              </div>
              <div class="col-auto">
                <a href="#" class="btn btn-1" aria-label="Download">
                  <span>Faktura</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                Odchylka
                <div class="text-secondary">Splatnost 31.2.2026</div>
              </div>
              <div class="col-auto text-end">
                <div class="fs-3 fw-bold">31&nbsp;980&nbsp;Kč</div>
                <div><span class="badge bg-green-lt">Zaplaceno</span></div>
              </div>
              <div class="col-auto">
                <a href="#" class="btn btn-1" aria-label="Download">
                  <span>Faktura</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                Odchylka
                <div class="text-secondary">Splatnost 31.2.2026</div>
              </div>
              <div class="col-auto text-end">
                <div class="fs-3 fw-bold">31&nbsp;980&nbsp;Kč</div>
                <div>
                  <span class="text-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    Zaplaceno
                    <!-- <span class="badge bg-green-lt">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-1">
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                      Zaplaceno
                    </span> -->
                  </span>
                </div>
              </div>
              <div class="col-auto d-none d-sm-block">
                <a href="#" class="btn btn-1" aria-label="Download">
                  <span>Faktura</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                Další kousek tvé duše
                <div class="text-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-calendar">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                    <path d="M16 3v4" />
                    <path d="M8 3v4" />
                    <path d="M4 11h16" />
                    <path d="M11 15h1" />
                    <path d="M12 15v3" />
                  </svg>
                  <!-- Splatnost:  -->
                  31.02.2026
                </div>
              </div>
              <div class="col-auto text-end row align-items-center row-gap-1">
                <div class="col-12 col-sm">
                  <div class="fs-3 fw-bold">31&nbsp;980&nbsp;Kč</div>
                </div>
                <div class="col">
                  <a href="#" class="btn btn-6 btn-primary fs-5 w-auto">Zaplatit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                <!-- wip -->
                <div>INV0001</div>
                <div class="text-secondary">Další kousek tvé duše</div>
                <div class="text-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-calendar">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                    <path d="M16 3v4" />
                    <path d="M8 3v4" />
                    <path d="M4 11h16" />
                    <path d="M11 15h1" />
                    <path d="M12 15v3" />
                  </svg>
                  <!-- Splatnost:  -->
                  31.02.2026
                </div>
              </div>
              <div class="col-auto text-end row align-items-center row-gap-1">
                <div class="col-12 col-sm">
                  <div class="fs-3 fw-bold">31&nbsp;980&nbsp;Kč</div>
                </div>
                <div class="col">
                  <a href="#" class="btn btn-6 btn-primary fs-5 w-auto">Zaplatit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="mb-n3 mt-5">DESIGN #1</h2>
      <h3 class="mt-4 mb-0">K zaplacení</h3>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div>Security Deposit</div>
                <div class="text-secondary">Splatnost: 31.05.2025</div>
              </div>
              <div class="col-auto">
                <span class="badge bg-red-lt">Po splatnosti</span>
              </div>
            </div>
            <hr class="my-3">
            <div class="row align-items-center">
              <div class="col">
                <div>
                  <div class="fs-3 fw-bold text-red">44&nbsp;990&nbsp;Kč</div>
                </div>
              </div>
              <div class="col-auto">
                <a href="#" class="btn btn-6 btn-primary fs-5 w-auto">Zaplatit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Responsive -->
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                <div>Security Deposit</div>
                <div class="text-secondary">Splatnost: 31.05.2025</div>
              </div>
              <div class="col-auto">
                <span class="badge bg-red-lt">Po splatnosti</span>
              </div>
              <hr class="my-3 d-sm-none">
              <div class="col col-sm-auto">
                <div>
                  <div class="fs-3 fw-bold text-red">44&nbsp;990&nbsp;Kč</div>
                </div>
              </div>
              <div class="col-auto">
                <a href="#" class="btn btn-6 btn-primary fs-5 w-auto">Zaplatit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Partial payment -->
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div>Security Deposit</div>
                <div class="text-secondary">Splatnost: 31.03.2026</div>
              </div>
              <div class="col-auto">
                <span class="badge bg-yellow-lt">Blíží se</span>
              </div>
            </div>
            <hr class="my-3">
            <div class="row">
              <div class="col text-secondary">Celková částka:</div>
              <div class="col-auto">25&nbsp;000&nbsp;Kč</div>
            </div>
            <div class="row">
              <div class="col text-secondary">Zaplaceno:</div>
              <div class="col-auto text-green">15&nbsp;000&nbsp;Kč</div>
            </div>
            <hr class="my-3">
            <div class="row align-items-center">
              <div class="col">
                <div>
                  <span class="text-secondary">Zbývá doplatit:</span>
                  <div class="fs-3 fw-bold text-yellow">10&nbsp;000&nbsp;Kč</div>
                </div>
              </div>
              <div class="col-auto">
                <a href="#" class="btn btn-6 btn-primary fs-5 w-auto">Doplatit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Partial payment - RESPONSIVE -->
      <div class="col-12">
        <div class="card">
          <div class="card-body row align-items-center">
            <div class="row col-md">
              <div class="col col-md-auto">
                <div>Security Deposit</div>
                <div class="text-secondary">Splatnost: 31.03.2026</div>
              </div>
              <div class="col-auto align-self-center">
                <span class="badge bg-yellow-lt">Blíží se</span>
              </div>
            </div>
            <hr class="my-3 d-md-none">
            <div class="row col-md-2">
              <div class="col col-md-12 text-secondary">Celková částka</div>
              <div class="col-auto">25&nbsp;000&nbsp;Kč</div>
            </div>
            <div class="row col-md-2">
              <div class="col col-md-12 text-secondary">Zaplaceno</div>
              <div class="col-auto text-green">15&nbsp;000&nbsp;Kč</div>
            </div>
            <hr class="my-3 d-md-none">
            <div class="row align-items-center col-md-3">
              <div class="col">
                <span class="text-secondary">Zbývá doplatit</span>
                <div class="fs-3 fw-bold text-yellow">10&nbsp;000&nbsp;Kč</div>
              </div>
              <div class="col-auto">
                <a href="#" class="btn btn-6 btn-primary fs-5 w-auto">Doplatit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div>Security Deposit</div>
                <div class="text-secondary">Splatnost: 31.09.2026</div>
              </div>
              <div class="col-auto">
                <span class="badge bg-blue-lt">Nadcházející</span>
              </div>
            </div>
            <hr class="my-3">
            <div class="row align-items-center">
              <div class="col">
                <div>
                  <!-- <span class="text-secondary">Částka</span> -->
                  <div class="fs-3 fw-bold">31&nbsp;980&nbsp;Kč</div>
                </div>
              </div>
              <div class="col-auto">
                <a href="#" class="btn btn-6 btn-primary fs-5 w-auto">Zaplatit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 class="mt-4 mb-0">Zaplacené</h3>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div>Security Deposit</div>
                <div class="text-secondary">Zaplaceno: June 1, 2026</div>
              </div>
              <div class="col-auto">
                <span class="text-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  Zaplaceno
                </span>
                <!-- <span class="badge bg-green-lt"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1"> -->
                <!-- <path d="M5 12l5 5l10 -10"></path> -->
                <!-- </svg>Zaplaceno</span> -->
              </div>
            </div>
            <hr class="my-3">
            <div class="row align-items-center">
              <div class="col">
                <div>
                  <div class="fs-3 fw-bold text-green">29&nbsp;999&nbsp;Kč</div>
                </div>
              </div>
              <div class="col-auto">
                <a href="#">Faktura</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="mb-n3 mt-5">DESIGN #2</h2>
      <h3 class="mt-4 mb-0">Zaplacené</h3>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div>Security Deposit</div>
                <div class="text-secondary">Splatnost: 31.06.2029</div>
              </div>
              <div class="col text-end">
                <div class="fs-3 fw-bold">29&nbsp;999&nbsp;Kč</div>
                <span class="text-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  Zaplaceno
                </span>
              </div>
            </div>
            <hr class="my-3">
            <div class="text-end">
              <a href="#" class="d-inline-block ms-auto">Faktura</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row row-gap-3 align-items-center gx-4">
              <div class="col">
                <div>Security Deposit</div>
                <div class="text-secondary">Zaplaceno: 17.06.2025</div>
              </div>
              <div class="col-auto text-end order-md-1">
                <div class="fs-3 fw-bold">25&nbsp;000&nbsp;Kč</div>
                <span class="text-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  Zaplaceno
                </span>
              </div>
              <div class="col-12 col-md-auto order-last">
                <div class="text-end">
                  <!-- <a href="#" class="d-inline-block ms-auto">Faktura</a> -->
                  <!-- <a href="#" class="btn btn-6 btn-outline-primary fs-5 w-100">Faktura</a> -->
                  <a href="#" class="btn btn-1 fs-5 w-100">Faktura</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 class="mt-4 mb-0">K zaplacení</h3>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div>Security Deposit</div>
                <div class="text-secondary">Splatnost: 31.05.2025</div>
              </div>
              <div class="col text-end">
                <div class="fs-3 fw-bold text-red">29&nbsp;999&nbsp;Kč</div>
                <span class="badge bg-red-lt">Po splatnosti</span>
              </div>
            </div>
            <hr class="my-3">
            <div class="text-end">
              <a href="#" class="btn btn-6 btn-primary fs-5 w-100">Zaplatit</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div>Security Deposit</div>
                <div class="text-secondary">Splatnost: 31.06.2026</div>
              </div>
              <div class="col text-end">
                <span class="badge bg-yellow-lt">Blíží se</span>
              </div>
            </div>
            <hr class="my-3">
            <div class="row">
              <span class="col text-secondary">Celková částka</span>
              <span class="col-auto">25&nbsp;000&nbsp;Kč</span>
            </div>
            <div class="row">
              <span class="col text-secondary">Zaplaceno</span>
              <span class="col-auto text-green">15&nbsp;000&nbsp;Kč</span>
            </div>
            <div class="row">
              <span class="col text-secondary">Zbývá doplatit</span>
              <span class="col-auto text-yellow">10&nbsp;000&nbsp;Kč</span>
            </div>
            <hr class="my-3">
            <div class="text-end">
              <a href="#" class="btn btn-6 btn-primary fs-5 w-100">Doplatit</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div class="row">
                  <div class="col">
                    <div>Security Deposit</div>
                    <div class="text-secondary">Splatnost: 31.06.2026</div>
                  </div>
                  <div class="col text-end">
                    <div class="fs-3 fw-bold text-yellow">10&nbsp;000&nbsp;Kč</div>
                    <span class="badge bg-yellow-lt">Blíží se</span>
                  </div>
                </div>
              </div>
              <hr class="my-3 d-md-none">
              <div class="col-12 col-md-2">
                <div class="row">
                  <span class="col col-md-12 text-secondary">Celková částka</span>
                  <span class="col-auto">25&nbsp;000&nbsp;Kč</span>
                </div>
              </div>
              <div class="col-12 col-md-2">
                <div class="row">
                  <span class="col col-md-12 text-secondary">Zaplaceno</span>
                  <span class="col-auto text-green">15&nbsp;000&nbsp;Kč</span>
                </div>
              </div>
              <hr class="my-3 d-md-none">
              <div class="col-12 col-md-auto align-self-center">
                <div class="text-end">
                  <a href="#" class="btn btn-6 btn-primary fs-5 w-100">Doplatit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div>Security Deposit</div>
                <div class="text-secondary">Splatnost: 31.06.2029</div>
              </div>
              <div class="col text-end">
                <div class="fs-3 fw-bold">25&nbsp;000&nbsp;Kč</div>
                <span class="badge bg-blue-lt">Nadcházející</span>
              </div>
            </div>
            <hr class="my-3">
            <div class="row">
              <div class="col">
                <div class="text-secondary">Zaplaceno</div>
                <div class="fs-3 fw-bold text-green">15&nbsp;000&nbsp;Kč</div>
              </div>
              <div class="col text-end">
                <div class="text-secondary">Zbývá</div>
                <div class="fs-3 fw-bold text-yellow">10&nbsp;000&nbsp;Kč</div>
              </div>
              <div class="col-12">
                <div class="progress progress-sm mt-2">
                  <div class="progress-bar bg-green" style="width: 60%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="60% Complete">
                    <span class="visually-hidden">60% Complete</span>
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-3">
            <div class="text-end">
              <a href="#" class="btn btn-6 btn-primary fs-5 w-100">Doplatit</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row row-gap-4 align-items-center">
              <div class="col-12 col-md">
                <div class="row">
                  <div class="col">
                    <div>Security Deposit</div>
                    <div class="text-secondary">Splatnost: 31.06.2029</div>
                  </div>
                  <div class="col text-end">
                    <div class="fs-3 fw-bold">25&nbsp;000&nbsp;Kč</div>
                    <span class="badge bg-blue-lt">Nadcházející</span>
                  </div>
                </div>
              </div>
              <!-- <hr class="my-3"> -->
              <div class="col-12 col-md-3">
                <div class="row">
                  <div class="col">
                    <div class="text-secondary">Zaplaceno</div>
                    <div class="fs-4 fw-bold text-green">15&nbsp;000&nbsp;Kč</div>
                  </div>
                  <div class="col text-end text-md-start">
                    <div class="text-secondary">Zbývá</div>
                    <div class="fs-4 fw-bold text">10&nbsp;000&nbsp;Kč</div>
                  </div>
                  <div class="col-12 d-sm-none">
                    <div class="progress progress-sm mt-2">
                      <div class="progress-bar bg-green" style="width: 60%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="60% Complete">
                        <span class="visually-hidden">60% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <hr class="my-3"> -->
              <div class="col-12 col-md-auto">
                <div class="text-end">
                  <a href="#" class="btn btn-6 btn-primary fs-5 w-100">Doplatit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row row-gap-4 align-items-center gx-4">
              <div class="col">
                <div>Security Deposit</div>
                <div class="text-secondary">Splatnost: 31.06.2029</div>
              </div>
              <div class="col-auto text-end order-md-1">
                <div class="fs-3 fw-bold">25&nbsp;000&nbsp;Kč</div>
                <span class="badge bg-blue-lt">Nadcházející</span>
              </div>
              <div class="col-12 col-md-3">
                <div class="row">
                  <div class="col">
                    <div class="text-secondary">Zaplaceno</div>
                    <div class="fs-4 fw-bold text-green">15&nbsp;000&nbsp;Kč</div>
                  </div>
                  <div class="col text-end text-md-start">
                    <div class="text-secondary">Zbývá</div>
                    <div class="fs-4 fw-bold text text-yellow">10&nbsp;000&nbsp;Kč</div>
                  </div>
                  <div class="col-12 d-md-none">
                    <div class="progress progress-sm mt-2">
                      <div class="progress-bar bg-green" style="width: 60%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="60% Complete">
                        <span class="visually-hidden">60% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-auto order-last">
                <div class="text-end">
                  <a href="#" class="btn btn-6 btn-primary fs-5 w-100">Doplatit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- TODO: Zvážit zda použít fs-5, nebo nechat defaultní velikost -->
      <h2 class="mb-n3 mt-5">Platby (final design?)</h2>
      <h3 class="mt-4 mb-0">Zaplacené</h3>
      <!-- Paid -->
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row row-gap-3 align-items-center gx-4">
              <div class="col">
                <div>Odchylka</div>
                <div class="text-secondary">Zaplaceno: 13.05.2025</div>
              </div>
              <div class="col-auto text-end order-md-1">
                <div class="fs-3 fw-bold">25&nbsp;000&nbsp;Kč</div>
                <span class="text-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  Zaplaceno
                </span>
                <!-- <span class="badge bg-green-lt">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  Zaplaceno
                </span> -->
              </div>
              <!-- <div class="col-12 col-md-auto order-last">
                <div class="text-end">
                  <a href="#" class="btn btn-1 fs-5 w-100">Faktura</a>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <h3 class="mt-4 mb-0">K zaplacení</h3>
      <!-- Unpaid, upcoming -->
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row row-gap-3 align-items-center gx-4">
              <div class="col">
                <div>Odchylka</div>
                <div class="text-secondary">Splatnost: 31.06.2025</div>
              </div>
              <div class="col-auto text-end order-md-1">
                <div class="fs-3 fw-bold">25&nbsp;000&nbsp;Kč</div>
                <span class="badge bg-blue-lt">Nadcházející</span>
              </div>
              <div class="col-12 col-md-auto order-last">
                <div class="text-end">
                  <a href="#" class="btn btn-6 btn-primary fs-5 w-100">Zaplatit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Partially paid, upcoming -->
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row row-gap-3 align-items-center gx-4">
              <div class="col">
                <div>Odchylka</div>
                <div class="text-secondary">Splatnost: 31.06.2025</div>
              </div>
              <div class="col-auto text-end order-md-1">
                <div class="fs-3 fw-bold">25&nbsp;000&nbsp;Kč</div>
                <span class="badge bg-blue-lt">Nadcházející</span>
              </div>
              <div class="col-12 col-md-3">
                <div class="row">
                  <div class="col">
                    <div class="text-secondary">Zaplaceno</div>
                    <div class="fs-4 fw-bold text-green">15&nbsp;000&nbsp;Kč</div>
                  </div>
                  <div class="col text-end text-md-start">
                    <div class="text-secondary">Zbývá</div>
                    <div class="fs-4 fw-bold text text-yellow">10&nbsp;000&nbsp;Kč</div>
                  </div>
                  <div class="col-12 d-md-none">
                    <div class="progress progress-sm mt-2">
                      <div class="progress-bar bg-green" style="width: 60%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="60% Complete">
                        <span class="visually-hidden">60% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-auto order-last">
                <div class="text-end">
                  <a href="#" class="btn btn-6 btn-primary fs-5 w-100">Doplatit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Unpaid, due -->
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row row-gap-3 align-items-center gx-4">
              <div class="col">
                <div>Odchylka</div>
                <div class="text-secondary">Splatnost: 31.06.2025</div>
              </div>
              <div class="col-auto text-end order-md-1">
                <div class="fs-3 fw-bold">25&nbsp;000&nbsp;Kč</div>
                <span class="badge bg-yellow-lt">Blíží se</span>
              </div>
              <div class="col-12 col-md-auto order-last">
                <div class="text-end">
                  <a href="#" class="btn btn-6 btn-primary fs-5 w-100">Zaplatit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Unpaid, overdue -->
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row row-gap-3 align-items-center gx-4">
              <div class="col">
                <div>Odchylka</div>
                <div class="text-secondary">Splatnost: 31.06.2025</div>
              </div>
              <div class="col-auto text-end order-md-1">
                <div class="fs-3 fw-bold text-red">25&nbsp;000&nbsp;Kč</div>
                <span class="badge bg-red-lt">Po splatnosti</span>
              </div>
              <div class="col-12 col-md-auto order-last">
                <div class="text-end">
                  <a href="#" class="btn btn-6 btn-primary fs-5 w-100">Zaplatit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Unpaid, overdue (highlighted) -->
      <div class="col-12">
        <div class="card bg-red-lt">
          <div class="card-body">
            <div class="row row-gap-3 align-items-center gx-4">
              <div class="col">
                <div>Odchylka</div>
                <div class="text-secondary">Splatnost: 31.06.2025</div>
              </div>
              <div class="col-auto text-end order-md-1">
                <div class="fs-3 fw-bold text-red">25&nbsp;000&nbsp;Kč</div>
                <span class="badge bg-red-lt">Po splatnosti</span>
              </div>
              <div class="col-12 col-md-auto order-last">
                <div class="text-end">
                  <a href="#" class="btn btn-6 btn-red fs-5 w-100">Zaplatit</a>
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