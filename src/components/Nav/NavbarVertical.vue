<script setup lang="ts">
  import NavbarNav from '@/components/Nav/NavbarNav.vue'
  import NavItem from '@/components/Nav/NavItem.vue'
  import { useMessengerStore } from '@/stores/messenger'
  const messengerStore = useMessengerStore()
</script>

<template>
  <aside class="navbar navbar-vertical navbar-expand-lg sticky-top d-print-none">
    <div class="container-fluid">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar-menu" aria-controls="sidebar-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-brand navbar-brand-autodark">
        <RouterLink to="/" aria-label="CENTRAL GROUP">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="25 50 232 86" style="enable-background:new 0 0 283.5 186.2;" xml:space="preserve" class="navbar-brand-image">
            <g id="LOGO">
              <g class="st0" style="fill: #000000">
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

        <ul class="navbar-nav p-2 pt-3 gap-1">

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
              <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
                <path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
                <path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
                <path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
              </svg> -->
            </template>
          </NavItem>

          <!-- ? Communication -->
          <!-- <NavItem label="Komunikace" to="/komunikace" :badge="messengerStore.unreadCount > 0 ? true : false">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </template>
          </NavItem> -->

          <!-- TODO: V POZDĚJŠÍ FÁZI -->
          <!-- * schůzky (kalendář) -->
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

          <!-- ? dokumenty -->
          <NavItem label="Dokumenty" to="/dokumenty">
            <template #icon>
              <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-description">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M9 17h6" />
                <path d="M9 13h6" />
              </svg> -->
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

          <!-- ? platby -->
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

          <!-- * žádosti a změny -->
          <NavItem label="Žádosti" to="/zadosti">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-flag">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z" />
                <path d="M5 21v-7" />
              </svg>
            </template>
          </NavItem>

          <!-- ? Contacts -->
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

          <!-- Separator -->
          <li class="nav-item">
            <hr class="my-1">
          </li>

          <!-- ? Maybe ? -->
          <!-- * Produkty - výpis a přehled všech vlastněných produktů -->
          <NavItem label="Produkty" to="/produkty" hidden>
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building-community">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                <path d="M13 7l0 .01" />
                <path d="M17 7l0 .01" />
                <path d="M17 11l0 .01" />
                <path d="M17 15l0 .01" />
              </svg>
              <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-buildings">
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
              </svg> -->
            </template>
          </NavItem>

          <!-- * Product #1 (Apartment) -->
          <!-- TODO: Nested URL -> Router -->
          <NavItem label="192-03-147" :children="[
            { label: 'Detail', to: '/apt' },
            { label: 'Dokumenty', to: '/dokumenty' },
            { label: 'Platby', to: '/platby' },
            // { label: 'Poukázky', to: '/poukazky' },          // Deprecated: Included in Payments
            { label: 'Klientské změny', to: '/klientske-zmeny' },
            // { label: 'Reklamace', to: '/reklamace' },        // TODO: Pozdější fáze
            { label: 'Žádosti', to: '/zadosti' },               // With active filter for this unit
            { label: 'Kontakty', to: '/kontakty' },             // ? Maybe - Like with requests, take to all contacts page with filter for this unit ?
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

          <!-- * Product #2 (Commercial space) -->
          <!-- TODO: Nested URL -> Router -->
          <NavItem label="název komerce" :children="[
            { label: 'Detail', to: '/apt' },
            { label: 'Dokumenty', to: '/dokumenty' },
            { label: 'Platby', to: '/platby' },
            // { label: 'Poukázky', to: '/poukazky' },          // Deprecated: Included in Payments
            { label: 'Klientské změny', to: '/klientske-zmeny' },
            // { label: 'Reklamace', to: '/reklamace' },        // TODO: Pozdější fáze
            { label: 'Žádosti', to: '/zadosti' },               // With active filter for this unit
            { label: 'Kontakty', to: '/kontakty' },             // ? Maybe - Like with requests, take to all contacts page with filter for this unit ?
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

          <!-- Separator -->
          <li class="nav-item">
            <hr class="my-1">
          </li>

          <!-- * vzorkovna -->
          <!-- <NavItem label="Vzorkovna" to="/vzorkovna">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-stack">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 6l-8 4l8 4l8 -4l-8 -4" />
                <path d="M4 14l8 4l8 -4" />
              </svg>
            </template>
          </NavItem> -->

          <!-- * interierove studio (central interier) -->
          <!-- <NavItem label="Interiérové studio" to="/ci">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-key">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" />
                <path d="M15 9h.01" />
              </svg>
            </template>
          </NavItem> -->

          <!-- Separator -->
          <!-- <li class="nav-item">
              <hr class="my-1">
            </li> -->


          <!-- TODO PAGE -->
          <!-- * Vzorkovna + interierove studio (central interier) -->
          <NavItem label="Vzorkovna a CI" to="/todo">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-key">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" />
                <path d="M15 9h.01" />
              </svg>
            </template>
          </NavItem>

          <!-- TODO: Implementovat v pozdější fázi -->
          <!-- * Novinky a nabídky -->
          <!-- <NavItem label="Novinky" to="/news">
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