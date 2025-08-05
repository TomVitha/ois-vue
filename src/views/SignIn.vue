<script setup lang="ts">
  import { ref } from 'vue'
  import { useThemeStore } from '@/stores/theme'
  const themeStore = useThemeStore()

  const passwordVisible = ref(false)
  function togglePasswordVisibility() {
    passwordVisible.value = !passwordVisible.value
  }
</script>

<template>
  <div class="page flex-fill wrapper" style="--bg: url('https://www.central-group.cz/Uloziste/34/3409d948-9b74-4d6e-a077-6d2dcd7c7c2f.jpg')">
    <main class="container container-tight flex-fill d-flex flex-column justify-content-center py-4">
      <div class="card card-md">
        <div class="card-body text-center">
          <h2 class="h2 mb-3">Klientský portál <br>rezidenčních projektů</h2>
          <!-- BEGIN NAVBAR LOGO -->
          <div class="navbar-brand navbar-brand-autodark">
            <a href="https://www.central-group.cz/" aria-label="Central Group">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="25 50 232 86" xml:space="preserve" class="navbar-brand-image" style="enable-background:new 0 0 283.5 186.2; height: 38px;">
                <g id="LOGO">
                  <g style="fill: #000000">
                    <path d="M180.9,118c0,5.2-2.5,7.3-6,7.3c-3.5,0-6.1-2.1-6.1-7.3v-17.3h-8.4v17.6c0,9.1,5.7,14.1,14.4,14.1s14.4-5.1,14.4-14.1v-17.6h-8.4V118z" />
                    <polygon points="103.2,69.1 116.1,85.5 122.9,85.5 122.9,54.8 114.8,54.8 114.8,71.2 101.9,54.8 95.1,54.8 95.1,85.5 103.2,85.5" />
                    <polygon points="137.6,85.5 145.9,85.5 145.9,61.7 156.3,61.7 156.3,54.8 127.2,54.8 127.2,61.7 137.6,61.7" />
                    <polygon points="235,78.7 235,54.8 226.7,54.8 226.7,85.5 252.7,85.5 252.7,78.7" />
                    <path d="M109.5,116.7h-6.3v-9.2h6.3c3.4,0,5.1,1.8,5.1,4.6C114.7,115,112.9,116.7,109.5,116.7 M117.3,121.8c3.6-1.8,5.7-5.2,5.7-9.7c0-7-5-11.4-13-11.4H95.1v30.8h8.1v-8.2h6.2l5.3,8.2h8.9L117.3,121.8z" />
                    <path d="M180,66.3c0,2.8-1.7,4.6-5.1,4.6h-6.3v-0.2v-7.4v-1.6h6.3c3.4,0,5.1,1.7,5.1,4.5V66.3L180,66.3z M182.7,75.9c3.6-1.8,5.7-5.2,5.7-9.7c0-7-5-11.4-13-11.4h-14.9v30.8h8.1v-8.2h6.2l5.3,8.2h8.9L182.7,75.9z" />
                    <path d="M208.2,116.7h-6.3v-9.3h6.3c3.4,0,5.1,1.8,5.1,4.6C213.4,114.8,211.6,116.7,208.2,116.7 M208.7,100.7h-14.9v30.7h8l0-8.1h6.8c7.9,0,12.9-4.5,12.9-11.4C221.7,105,216.7,100.7,208.7,100.7" />
                    <path d="M47.2,79.2c-4.2,0-7.9-4.1-7.9-9.1c0-5,3.7-9.1,7.9-9.1c3.4,0,5.6,1.2,7.5,3.8l5.2-4.9c-3-3.7-7.6-6.1-12.7-6.1c-9,0-16.4,7.3-16.4,16.3s7.4,16.3,16.4,16.3c5.1,0,9.7-2.4,12.7-6.1l-5.2-4.9C52.9,77.9,50.5,79.2,47.2,79.2" />
                    <path d="M141.8,124.4c-4.6,0-8.3-3.7-8.3-8.3s3.7-8.3,8.3-8.3s8.3,3.7,8.3,8.3S146.4,124.4,141.8,124.4 M141.7,99.7c-9,0-16.3,7.3-16.3,16.3s7.3,16.3,16.3,16.3S158,125,158,116S150.7,99.7,141.7,99.7" />
                    <path d="M82.8,124c-1.4,0.7-2.9,1.1-4.5,1.1c-4.3,0-8-4.1-8-9.1c0-5,3.8-9.1,8-9.1c2.9,0,5.7,1.2,7.6,3.8l5.2-4.9c-3-3.7-7.7-6.1-12.9-6.1c-9.1,0-16.5,7.3-16.5,16.3c0,9,7.4,16.3,16.5,16.3c1.5,0,3-0.2,4.5-0.5c0.1,0,0.2,0,0.3-0.1c2.9-0.7,5.6-1.9,7.3-3.1v-11.9h-7.6V124z" />
                    <rect x="63" y="54.8" width="26.9" height="6.7" />
                    <rect x="63" y="66.8" width="26.9" height="6.7" />
                    <rect x="63" y="78.8" width="26.9" height="6.7" />
                    <path d="M216.4,85.5h8.7l-13.3-30.8h-8.4L190,85.5h8.5l2.1-5.3h13.7L216.4,85.5z M203.3,73.6l4.1-10.3l4.1,10.3H203.3z" />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <!-- END NAVBAR LOGO -->
        </div>
        <div class="card-body">
          <form action="./" method="post" novalidate>
            <div class="space-y">
              <h3 class="d-none d-md-block">Přihlašovací údaje</h3>
              <div>
                <label class="form-label d-inline-block" for="username">Uživatelské jméno</label>
                <div class="input-icon">
                  <input type="text" id="username" name="username" autocomplete="username" class="form-control fs-4" placeholder="Zadejte své přihlašovací jméno" required>
                </div>
              </div>
              <div>
                <div>
                  <label class="form-label d-inline-block" for="password">
                    Heslo
                  </label>
                  <span class="form-label-description">
                    <RouterLink to=".">Zapomenuté heslo?</RouterLink>
                  </span>
                </div>
                <div class="input-group input-group-flat">
                  <input :type="passwordVisible ? 'text' : 'password'" id="password" name="password" autocomplete="current-password" class="form-control fs-4" placeholder="Zadejte své heslo" required>
                  <span class="input-group-text">
                    <a href="#" class="link-secondary" data-bs-toggle="tooltip" aria-label="Přepnout viditelnost hesla" data-bs-original-title="Přepnout viditelnost hesla" @click.prevent="togglePasswordVisibility()">
                      <i class="fs-2 icon" :class="['ti', passwordVisible ? 'ti-eye-off' : 'ti-eye']"></i>
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <label class="form-check d-inline-block">
                  <input type="checkbox" class="form-check-input">
                  <span class="form-check-label">Zapamatovat si mě</span>
                </label>
              </div>
              <div class="form-footer my-0">
                <button type="submit" class="btn btn-primary w-100">Přihlásit se</button>
              </div>
            </div>
          </form>
          <div class="hr-text">Nebo</div>
          <div class="row row-gap-2">
            <!-- BankID Alt design -->
            <!-- <div class="col-12">
            <a href="#" class="btn btn-x btn-4 w-100">
              Přihlásit se přes
              <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 130 26" fill="none" class="ms-2">
                <path d="M111.214 4.83414H117.118C121.77 4.83414 124.096 8.70147 124.096 12.5329C124.096 16.4003 121.77 20.2317 117.118 20.2317H111.214V18.4413H113.718V6.62455H111.214V4.83414ZM107.814 25.0659H117.297C125.778 25.0659 130 18.7994 130 12.5329C130 6.26646 125.778 0 117.297 0H107.814V25.0659ZM98.153 4.83414H103.521V0H98.153V4.83414ZM98.153 6.62455H103.521V25.0659H98.153V6.62455ZM75.8246 25.0659V18.9068H77.6137L82.9813 25.0659H88.313V23.2755L81.5499 15.6841L88.1341 8.41496V6.62455H83.017L77.6137 12.7836V15.2544H75.8246V0H70.457V25.0659H75.8246ZM60.9743 25.0659H66.3419V13.8936C66.3419 9.27433 62.9782 6.26647 59.221 6.26647C57.6465 6.26647 56.0004 6.80363 54.5333 7.94944V10.0264H52.7442V6.62455H48.0923V25.0659H53.4598V14.8605C53.4598 12.2823 55.428 10.9215 57.3603 10.9215C59.1852 10.9215 60.9743 12.1391 60.9743 14.6814V25.0659ZM33.8508 10.85C36.2484 10.85 38.2522 12.7836 38.2522 15.8273C38.2522 18.871 36.2484 20.8047 33.8508 20.8047C31.4534 20.8047 29.3064 18.871 29.3064 15.8273C29.3064 12.7836 31.4534 10.85 33.8508 10.85ZM23.7599 15.8273C23.7599 21.7715 28.0181 25.424 32.2406 25.424C33.9224 25.424 35.6042 24.851 36.9998 23.5619V21.6641H38.789V25.0659H43.7987V6.62455H38.789V10.0264H36.9998V8.12852C35.6042 6.83941 33.9224 6.26647 32.2406 6.26647C28.0181 6.26647 23.7599 9.91893 23.7599 15.8273ZM5.54638 4.47606H12.059C14.0629 4.47606 15.1006 5.90838 15.1006 7.34071C15.1006 8.77304 14.0629 10.2054 12.059 10.2054H7.33563V14.8605H12.5242C14.5281 14.8605 15.5658 16.2928 15.5658 17.7252C15.5658 19.1575 14.5281 20.5898 12.5242 20.5898H5.54638V4.47606ZM19.001 13.2491H16.0668V11.4587H18.6432C20.1103 10.2412 20.8618 8.48661 20.8618 6.6962C20.8618 3.36603 18.2496 0 12.8105 0H0V25.0659H13.3115C18.7863 25.0659 21.4344 21.5924 21.4344 18.1907C21.4344 16.2928 20.6113 14.4666 19.001 13.2491Z" fill="currentcolor"/>
              </svg>
            </a>
          </div> -->
            <div class="col-12">
              <a href="#" class="btn btn-x btn-4 w-100" title="Přihlásit se přes Bank iD">
                <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 130 26" fill="none">
                  <path d="M111.214 4.83414H117.118C121.77 4.83414 124.096 8.70147 124.096 12.5329C124.096 16.4003 121.77 20.2317 117.118 20.2317H111.214V18.4413H113.718V6.62455H111.214V4.83414ZM107.814 25.0659H117.297C125.778 25.0659 130 18.7994 130 12.5329C130 6.26646 125.778 0 117.297 0H107.814V25.0659ZM98.153 4.83414H103.521V0H98.153V4.83414ZM98.153 6.62455H103.521V25.0659H98.153V6.62455ZM75.8246 25.0659V18.9068H77.6137L82.9813 25.0659H88.313V23.2755L81.5499 15.6841L88.1341 8.41496V6.62455H83.017L77.6137 12.7836V15.2544H75.8246V0H70.457V25.0659H75.8246ZM60.9743 25.0659H66.3419V13.8936C66.3419 9.27433 62.9782 6.26647 59.221 6.26647C57.6465 6.26647 56.0004 6.80363 54.5333 7.94944V10.0264H52.7442V6.62455H48.0923V25.0659H53.4598V14.8605C53.4598 12.2823 55.428 10.9215 57.3603 10.9215C59.1852 10.9215 60.9743 12.1391 60.9743 14.6814V25.0659ZM33.8508 10.85C36.2484 10.85 38.2522 12.7836 38.2522 15.8273C38.2522 18.871 36.2484 20.8047 33.8508 20.8047C31.4534 20.8047 29.3064 18.871 29.3064 15.8273C29.3064 12.7836 31.4534 10.85 33.8508 10.85ZM23.7599 15.8273C23.7599 21.7715 28.0181 25.424 32.2406 25.424C33.9224 25.424 35.6042 24.851 36.9998 23.5619V21.6641H38.789V25.0659H43.7987V6.62455H38.789V10.0264H36.9998V8.12852C35.6042 6.83941 33.9224 6.26647 32.2406 6.26647C28.0181 6.26647 23.7599 9.91893 23.7599 15.8273ZM5.54638 4.47606H12.059C14.0629 4.47606 15.1006 5.90838 15.1006 7.34071C15.1006 8.77304 14.0629 10.2054 12.059 10.2054H7.33563V14.8605H12.5242C14.5281 14.8605 15.5658 16.2928 15.5658 17.7252C15.5658 19.1575 14.5281 20.5898 12.5242 20.5898H5.54638V4.47606ZM19.001 13.2491H16.0668V11.4587H18.6432C20.1103 10.2412 20.8618 8.48661 20.8618 6.6962C20.8618 3.36603 18.2496 0 12.8105 0H0V25.0659H13.3115C18.7863 25.0659 21.4344 21.5924 21.4344 18.1907C21.4344 16.2928 20.6113 14.4666 19.001 13.2491Z" fill="currentcolor" />
                </svg>
                <span class="fw-light mx-2">|</span>
                Přihlásit se
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="text-center text-white mt-3">Neobdrželi jste přihlašovací údaje? <a href="./sign-up.html">Kontaktujte nás</a></div> -->
      <div class="row">
        <div class="ms-auto mt-2 col-auto d-flex align-items-center">
          <div class="me-2">
            <a href="?theme=dark" class="btn btn-6 btn-white w-100 btn-icon hide-theme-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Enable dark mode" data-bs-original-title="Enable dark mode" @click.prevent="themeStore.applyTheme('dark')">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
              </svg>
            </a>
            <a href="?theme=light" class="btn btn-6 btn-white w-100 btn-icon hide-theme-light" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Enable light mode" data-bs-original-title="Enable light mode" @click.prevent="themeStore.applyTheme('light')">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7">
                </path>
              </svg>
            </a>
          </div>
          <select name="lang" class="form-select">
            <option value="cs">CS</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </main>
    <footer class="pb-3 pb-md-4 pt-6 mt-n6 bg-gradient bg-gradient-to-t" style="--tblr-gradient-from: rgba(0, 0, 0, 0.4); --tblr-gradient-to: transparent;">
      <div class="container">
        <div class="text-center text-white small d-flex flex-column gap-2 align-items-center">
          <span>Zde přijde případný text nějaké právní kličky, kterou si budeme krýt zadek, aby všechno šlo za vámi.</span>
          <span class="d-inline-flex align-items-center gap-3">
            Vytvořeno pomocí
            <a href="https://tabler.io/" aria-label="Tabler" class="d-inline-block" style="color: inherit">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 232 68" fill="currentcolor">
                <path d="M64.6 16.2C63 9.9 58.1 5 51.8 3.4 40 1.5 28 1.5 16.2 3.4 9.9 5 5 9.9 3.4 16.2 1.5 28 1.5 40 3.4 51.8 5 58.1 9.9 63 16.2 64.6c11.8 1.9 23.8 1.9 35.6 0C58.1 63 63 58.1 64.6 51.8c1.9-11.8 1.9-23.8 0-35.6zM33.3 36.3c-2.8 4.4-6.6 8.2-11.1 11-1.5.9-3.3.9-4.8.1s-2.4-2.3-2.5-4c0-1.7.9-3.3 2.4-4.1 2.3-1.4 4.4-3.2 6.1-5.3-1.8-2.1-3.8-3.8-6.1-5.3-2.3-1.3-3-4.2-1.7-6.4s4.3-2.9 6.5-1.6c4.5 2.8 8.2 6.5 11.1 10.9 1 1.4 1 3.3.1 4.7zM49.2 46H37.8c-2.1 0-3.8-1-3.8-3s1.7-3 3.8-3h11.4c2.1 0 3.8 1 3.8 3s-1.7 3-3.8 3z">
                </path>
                <path d="M105.8 46.1c.4 0 .9.2 1.2.6s.6 1 .6 1.7c0 .9-.5 1.6-1.4 2.2s-2 .9-3.2.9c-2 0-3.7-.4-5-1.3s-2-2.6-2-5.4V31.6h-2.2c-.8 0-1.4-.3-1.9-.8s-.9-1.1-.9-1.9c0-.7.3-1.4.8-1.8s1.2-.7 1.9-.7h2.2v-3.1c0-.8.3-1.5.8-2.1s1.3-.8 2.1-.8 1.5.3 2 .8.8 1.3.8 2.1v3.1h3.4c.8 0 1.4.3 1.9.8s.8 1.2.8 1.9-.3 1.4-.8 1.8-1.2.7-1.9.7h-3.4v13c0 .7.2 1.2.5 1.5s.8.5 1.4.5c.3 0 .6-.1 1.1-.2.5-.2.8-.3 1.2-.3zm28-20.7c.8 0 1.5.3 2.1.8.5.5.8 1.2.8 2.1v20.3c0 .8-.3 1.5-.8 2.1-.5.6-1.2.8-2.1.8s-1.5-.3-2-.8-.8-1.2-.8-2.1c-.8.9-1.9 1.7-3.2 2.4-1.3.7-2.8 1-4.3 1-2.2 0-4.2-.6-6-1.7-1.8-1.1-3.2-2.7-4.2-4.7s-1.6-4.3-1.6-6.9c0-2.6.5-4.9 1.5-6.9s2.4-3.6 4.2-4.8c1.8-1.1 3.7-1.7 5.9-1.7 1.5 0 3 .3 4.3.8 1.3.6 2.5 1.3 3.4 2.1 0-.8.3-1.5.8-2.1.5-.5 1.2-.7 2-.7zm-9.7 21.3c2.1 0 3.8-.8 5.1-2.3s2-3.4 2-5.7-.7-4.2-2-5.8c-1.3-1.5-3-2.3-5.1-2.3-2 0-3.7.8-5 2.3-1.3 1.5-2 3.5-2 5.8s.6 4.2 1.9 5.7 3 2.3 5.1 2.3zm32.1-21.3c2.2 0 4.2.6 6 1.7 1.8 1.1 3.2 2.7 4.2 4.7s1.6 4.3 1.6 6.9-.5 4.9-1.5 6.9-2.4 3.6-4.2 4.8c-1.8 1.1-3.7 1.7-5.9 1.7-1.5 0-3-.3-4.3-.9s-2.5-1.4-3.4-2.3v.3c0 .8-.3 1.5-.8 2.1-.5.6-1.2.8-2.1.8s-1.5-.3-2.1-.8c-.5-.5-.8-1.2-.8-2.1V18.9c0-.8.3-1.5.8-2.1.5-.6 1.2-.8 2.1-.8s1.5.3 2.1.8c.5.6.8 1.3.8 2.1v10c.8-1 1.8-1.8 3.2-2.5 1.3-.7 2.8-1 4.3-1zm-.7 21.3c2 0 3.7-.8 5-2.3s2-3.5 2-5.8-.6-4.2-1.9-5.7-3-2.3-5.1-2.3-3.8.8-5.1 2.3-2 3.4-2 5.7.7 4.2 2 5.8c1.3 1.6 3 2.3 5.1 2.3zm23.6 1.9c0 .8-.3 1.5-.8 2.1s-1.3.8-2.1.8-1.5-.3-2-.8-.8-1.3-.8-2.1V18.9c0-.8.3-1.5.8-2.1s1.3-.8 2.1-.8 1.5.3 2 .8.8 1.3.8 2.1v29.7zm29.3-10.5c0 .8-.3 1.4-.9 1.9-.6.5-1.2.7-2 .7h-15.8c.4 1.9 1.3 3.4 2.6 4.4 1.4 1.1 2.9 1.6 4.7 1.6 1.3 0 2.3-.1 3.1-.4.7-.2 1.3-.5 1.8-.8.4-.3.7-.5.9-.6.6-.3 1.1-.4 1.6-.4.7 0 1.2.2 1.7.7s.7 1 .7 1.7c0 .9-.4 1.6-1.3 2.4-.9.7-2.1 1.4-3.6 1.9s-3 .8-4.6.8c-2.7 0-5-.6-7-1.7s-3.5-2.7-4.6-4.6-1.6-4.2-1.6-6.6c0-2.8.6-5.2 1.7-7.2s2.7-3.7 4.6-4.8 3.9-1.7 6-1.7 4.1.6 6 1.7 3.4 2.7 4.5 4.7c.9 1.9 1.5 4.1 1.5 6.3zm-12.2-7.5c-3.7 0-5.9 1.7-6.6 5.2h12.6v-.3c-.1-1.3-.8-2.5-2-3.5s-2.5-1.4-4-1.4zm30.3-5.2c1 0 1.8.3 2.4.8.7.5 1 1.2 1 1.9 0 1-.3 1.7-.8 2.2-.5.5-1.1.8-1.8.7-.5 0-1-.1-1.6-.3-.2-.1-.4-.1-.6-.2-.4-.1-.7-.1-1.1-.1-.8 0-1.6.3-2.4.8s-1.4 1.3-1.9 2.3-.7 2.3-.7 3.7v11.4c0 .8-.3 1.5-.8 2.1-.5.6-1.2.8-2.1.8s-1.5-.3-2.1-.8c-.5-.6-.8-1.3-.8-2.1V28.8c0-.8.3-1.5.8-2.1.5-.6 1.2-.8 2.1-.8s1.5.3 2.1.8c.5.6.8 1.3.8 2.1v.6c.7-1.3 1.8-2.3 3.2-3 1.3-.7 2.8-1 4.3-1z" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
  :root:not([data-bs-theme="dark"]) .page {
    background: var(--bg) center / cover;
  }
</style>