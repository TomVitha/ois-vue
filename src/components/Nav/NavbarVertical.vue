<script setup lang="ts">
  import NavbarNav from '@/components/Nav/NavbarNav.vue'
  import NavItem from '@/components/Nav/NavItem.vue'
</script>

<template>
  <aside class="navbar navbar-vertical navbar-expand-lg sticky-top d-print-none">
    <div class="container-fluid">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar-menu" aria-controls="sidebar-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- CG Logo with BG (desktop) -->
      <div class="navbar-brand d-none d-lg-inline-flex">
        <RouterLink to="/" aria-label="CENTRAL GROUP">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 155 129" style="enable-background:new 0 0 155 129;" xml:space="preserve" class="navbar-brand-image">
            <rect width="155" height="129" fill="#FFED00" />
            <g>
              <path d="M98.9,91.7c0,2.8-1.4,4-3.3,4s-3.3-1.1-3.3-4v-9.5h-4.6v9.6c0,4.9,3.1,7.7,7.9,7.7s7.9-2.8,7.9-7.7v-9.6h-4.6L98.9,91.7   L98.9,91.7z" />
              <polygon points="56.4,65 63.5,74 67.2,74 67.2,57.1 62.8,57.1 62.8,66.1 55.7,57.1 52,57.1 52,74 56.4,74  " />
              <polygon points="75.2,74 79.8,74 79.8,60.9 85.4,60.9 85.4,57.1 69.6,57.1 69.6,60.9 75.2,60.9  " />
              <polygon points="128.5,70.2 128.5,57.1 124,57.1 124,74 138.2,74 138.2,70.2  " />
              <path d="M59.9,91h-3.5V86h3.5c1.9,0,2.8,1,2.8,2.5S61.8,91,59.9,91 M64.1,93.8c2-1,3.1-2.8,3.1-5.3c0-3.8-2.7-6.2-7.1-6.2H52v16.8   h4.4v-4.5h3.4l2.9,4.5h4.8L64.1,93.8z" />
              <path d="M98.4,63.4c0,1.5-0.9,2.5-2.8,2.5h-3.4v-5h3.4C97.5,60.9,98.4,61.8,98.4,63.4L98.4,63.4L98.4,63.4z M99.9,68.7   c2-1,3.1-2.8,3.1-5.3c0-3.8-2.7-6.2-7.1-6.2h-8.2V74h4.4v-4.5h3.4l2.9,4.5h4.8L99.9,68.7z" />
              <path d="M113.9,91h-3.5v-5.1h3.5c1.9,0,2.8,1,2.8,2.5S115.7,91,113.9,91 M114.1,82.2H106V99h4.4v-4.4h3.7c4.3,0,7.1-2.5,7.1-6.2   S118.5,82.2,114.1,82.2" />
              <path d="M25.8,70.5c-2.3,0-4.3-2.2-4.3-5s2-5,4.3-5c1.8,0,3.1,0.7,4.1,2.1l2.8-2.7c-1.6-2-4.1-3.3-7-3.3c-4.9,0-9,4-9,8.9   s4,8.9,9,8.9c2.8,0,5.3-1.3,7-3.3l-2.8-2.7C28.9,69.8,27.6,70.5,25.8,70.5" />
              <path d="M77.5,95.2c-2.5,0-4.6-2-4.6-4.6s2-4.6,4.6-4.6s4.6,2,4.6,4.6S80,95.2,77.5,95.2 M77.5,81.7c-4.9,0-8.9,4-8.9,8.9   s4,8.9,8.9,8.9s8.9-4,8.9-8.9S82.4,81.7,77.5,81.7" />
              <path d="M45.3,95c-0.8,0.4-1.6,0.6-2.4,0.6c-2.3,0-4.4-2.2-4.4-5s2.1-5,4.4-5c1.6,0,3.1,0.7,4.2,2.1l2.9-2.7c-1.7-2-4.2-3.3-7-3.3   c-5,0-9,4-9,8.9s4,8.9,9,8.9c0.8,0,1.7-0.1,2.4-0.3c0,0,0.1,0,0.1,0c1.6-0.4,3-1.1,4-1.7V91h-4.1L45.3,95L45.3,95z" />
              <rect x="34.4" y="57.1" width="14.7" height="3.7" />
              <rect x="34.4" y="63.7" width="14.7" height="3.7" />
              <rect x="34.4" y="70.3" width="14.7" height="3.7" />
              <path d="M118.3,74h4.7l-7.3-16.8h-4.6L103.9,74h4.6l1.2-2.9h7.5L118.3,74L118.3,74z M111.2,67.4l2.3-5.7l2.3,5.7   C115.7,67.4,111.1,67.4,111.2,67.4z" />
            </g>
          </svg>
        </RouterLink>
      </div>

      <!-- CG Logo Wordmark (mobile) -->
      <div class="navbar-brand navbar-brand-autodark d-lg-none">
        <RouterLink to="/" aria-label="CENTRAL GROUP">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="25 50 232 86" style="enable-background:new 0 0 283.5 186.2;" xml:space="preserve" class="navbar-brand-image">
            <g>
              <g fill="#000000">
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
        </RouterLink>
      </div>

      <!-- Navbar for mobile -->
      <NavbarNav class="d-lg-none" />

      <div class="collapse navbar-collapse user-select-none" id="sidebar-menu">

        <ul class="navbar-nav p-2 p-lg-3 pt-3 gap-1">

          <!-- * Dashboard -->
          <NavItem label="Nástěnka" to="/">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-grid">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              </svg>
              <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-template">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 5a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -2" />
                <path d="M4 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6" />
                <path d="M14 12l6 0" />
                <path d="M14 16l6 0" />
                <path d="M14 20l6 0" />
              </svg> -->
              <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
                <path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
                <path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
                <path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
              </svg> -->
            </template>
          </NavItem>

          <!-- TODO: V POZDĚJŠÍ FÁZI -->
          <!-- * Schůzky (kalendář) -->
          <!-- <NavItem label="Schůzky" to="/schuzky">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-week">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
                <path d="M4 11h16" />
                <path d="M7 14h.013" />
                <path d="M10.01 14h.005" />
                <path d="M13.01 14h.005" />
                <path d="M16.015 14h.005" />
                <path d="M13.015 17h.005" />
                <path d="M7.01 17h.005" />
                <path d="M10.01 17h.005" />
              </svg>
            </template>
          </NavItem> -->

          <!-- TODO: Zviditelnit separátor až budou Schůzky -->
          <!-- Separator -->
          <!-- <li class="nav-item">
            <hr class="my-1">
          </li> -->

          <!-- * Platby -->
          <NavItem label="Platby" to="/platby">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-coins">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" />
                <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
                <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" />
                <path d="M3 6v10c0 .888 .772 1.45 2 2" />
                <path d="M3 11c0 .888 .772 1.45 2 2" />
              </svg>
            </template>
          </NavItem>

          <!-- * Poukázky -->
          <NavItem label="Poukázky" to="/poukazky">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-ticket">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 5l0 2" />
                <path d="M15 11l0 2" />
                <path d="M15 17l0 2" />
                <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
              </svg>
            </template>
          </NavItem>

          <!-- * Žádosti a změny -->
          <NavItem label="Žádosti" to="/zadosti">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-flag">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z" />
                <path d="M5 21v-7" />
              </svg>
            </template>
          </NavItem>

          <!-- * Dokumenty -->
          <NavItem label="Dokumenty" to="/dokumenty">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-text">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M9 9l1 0" />
                <path d="M9 13l6 0" />
                <path d="M9 17l6 0" />
              </svg>
            </template>
          </NavItem>

          <!-- * Kontakty -->
          <NavItem label="Kontakty" to="/kontakty">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-users">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
            </template>
          </NavItem>

          <li class="nav-item">
            <hr class="my-1">
          </li>

          <!-- NOTE: Produkty se budou seskupovat podle lokality spolu s nápisy lokality pouze pokud bude klient vlastnit produkt ve více různých lokalitách -->
          <li class="ps-3 pt-2">
            <div class="subheader">Tesla Hloubětín</div>
          </li>

          <!-- ? Maybe ? -->
          <!-- * Produkty - přehled všech vlastněných produktů -->
          <!-- <NavItem label="Produkty" to="/produkty">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building-community">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                <path d="M13 7l0 .01" />
                <path d="M17 7l0 .01" />
                <path d="M17 11l0 .01" />
                <path d="M17 15l0 .01" />
              </svg>
            </template>
          </NavItem> -->

          <!-- NOTE: Všiměte si, že každý typ produktu (byt, rodinný dům, komerční prostor má jinou ikonu) -->

          <!-- * Produkt #1 (Byt) -->
          <NavItem label="192-03-147" :children="[
            { label: 'Detail', to: '/apt' },
            { label: 'Dokumenty', to: '/dokumenty' },             // Vyfiltrováno na danou jednotku - všechny ProductGroup accordiony budou collapsed kromě daného produktu
            { label: 'Platby', to: '/platby' },
            { label: 'Klientské změny', to: '/klientske-zmeny' },
            // { label: 'Reklamace', to: '/reklamace' },          // TODO: Pozdější fáze
            { label: 'Žádosti', to: '/zadosti' },                 // Vyfiltrováno na danou jednotku - všechny ProductGroup accordiony budou collapsed kromě daného produktu
            { label: 'Kontakty', to: '/kontakty' },               // Vyfiltrováno na danou jednotku - všechny ProductGroup accordiony budou collapsed kromě daného produktu a Obecné
          ]">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-buildings">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15" />
                <path d="M16 8h2c1 0 2 1 2 2v11" />
                <path d="M3 21h18" />
                <path d="M10 12v0" />
                <path d="M10 16v0" />
                <path d="M10 8v0" />
                <path d="M7 12v0" />
                <path d="M7 16v0" />
                <path d="M7 8v0" />
                <path d="M17 12v0" />
                <path d="M17 16v0" />
              </svg>
            </template>
          </NavItem>

          <!-- * Produkt #2 (Komerční prostor) -->
          <NavItem label="192-666-999" :children="[
            { label: 'Detail', to: '/apt' },
            { label: 'Dokumenty', to: '/dokumenty' },
            { label: 'Platby', to: '/platby' },
            { label: 'Klientské změny', to: '/klientske-zmeny' },
            // { label: 'Reklamace', to: '/reklamace' },
            { label: 'Žádosti', to: '/zadosti' },
            { label: 'Kontakty', to: '/kontakty' },
          ]">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building-store">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                <path d="M5 21l0 -10.15" />
                <path d="M19 21l0 -10.15" />
                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
              </svg>
            </template>
          </NavItem>

          <li class="ps-3 pt-2">
            <div class="subheader">Rodinné domy Pitkovice</div>
          </li>

          <!-- * Produkt #3 (rodinný dům) -->
          <NavItem label="194-RD-007" :children="[
            { label: 'Detail', to: '/apt' },
            { label: 'Dokumenty', to: '/dokumenty' },
            { label: 'Platby', to: '/platby' },
            { label: 'Klientské změny', to: '/klientske-zmeny' },
            // { label: 'Reklamace', to: '/reklamace' },
            { label: 'Žádosti', to: '/zadosti' },
            { label: 'Kontakty', to: '/kontakty' },
          ]">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-home">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
            </template>
          </NavItem>

          <!-- Separator -->
          <li class="nav-item">
            <hr class="my-1">
          </li>


          <!-- TODO: Vytvořit stránku -->
          <!-- * Vzorkovna + interierove studio (central interier) -->
          <NavItem label="Vzorkovna a CI" to="/todo">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-key">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" />
                <path d="M15 9h.01" />
              </svg>
              <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-stack">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 6l-8 4l8 4l8 -4l-8 -4" />
                <path d="M4 14l8 4l8 -4" />
              </svg> -->
            </template>
          </NavItem>

          <!-- TODO: Implementovat v pozdější fázi -->
          <!-- * Novinky a nabídky -->
          <!-- <NavItem label="Novinky" to="/novinky">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M3.6 9h16.8"></path>
                <path d="M3.6 15h16.8"></path>
                <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                <path d="M12.5 3a17 17 0 0 1 0 18"></path>
              </svg>
            </template>
          </NavItem> -->

          <!-- * Help / FAQ -->
          <NavItem label="Otázky a odpovědi" to="/help">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 17l0 .01" />
                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
              </svg>
            </template>
          </NavItem>

        </ul>
      </div>
    </div>
  </aside>
</template>