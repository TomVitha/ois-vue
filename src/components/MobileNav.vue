<script setup lang="ts">
  import { useMessengerStore } from '@/stores/messenger'
  const messengerStore = useMessengerStore()
</script>

<template>
  <!-- temp bg -->
  <div class="sticky-bottom d-lg-none" style="background-color: orange;">
    <!-- <ul class="navbar-nav">
      <li class="nav-item active flex-fill">
        <a class="nav-link" href="./">
          <span class="nav-link-icon d-md-none d-lg-inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
              <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
            </svg></span>
          <span class="nav-link-title"> Home </span>
        </a>
      </li>
      <li class="nav-item active flex-fill">
        <a class="nav-link" href="./">
          <span class="nav-link-icon d-md-none d-lg-inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
              <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
            </svg></span>
          <span class="nav-link-title"> Home </span>
        </a>
      </li>
    </ul> -->
    <div class="navbar border-top">
      <div class="container-xl">
        <div class="row flex-column flex-md-row flex-fill align-items-center">
          <div class="col">
            <!-- BEGIN NAVBAR MENU -->
            <ul class="navbar-nav flex-row">
              <li class="nav-item flex-fill">
                <RouterLink class="nav-link flex-column" to="/" draggable="false">
                  <span class="nav-link-icon m-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-grid">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                      <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                      <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                      <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                    </svg>
                  </span>
                  <span class="fs-6">Nástěnka</span>
                </RouterLink>
              </li>
              <li class="nav-item flex-fill">
                <RouterLink class="nav-link flex-column" to="/komunikace" draggable="false">
                  <span class="nav-link-icon m-0">
                    <span v-if="messengerStore.unreadCount > 0" class="badge badge-sm bg-red text-red-fg">{{ messengerStore.unreadCount }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                      <path d="M3 7l9 6l9 -6"></path>
                    </svg>
                  </span>

                  <span class="fs-6">Komunikace</span>
                </RouterLink>
              </li>
              <li class="nav-item flex-fill">
                <RouterLink class="nav-link flex-column" to="/account" draggable="false">
                  <span class="nav-link-icon m-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                  </span>
                  <span class="fs-6">Účet</span>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>