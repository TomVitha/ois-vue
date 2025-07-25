<script setup>

</script>

<template>
  <div class="page page-center">
    <div class="container-tight py-4">
      <div class="empty">
        <div class="empty-img">
          <img src="https://res.public.onecdn.static.microsoft/assets/mail/illustrations/noMailSelected/v2/light.svg" alt="" class="hide-theme-dark" width="200">
          <img src="https://res.public.onecdn.static.microsoft/assets/mail/illustrations/noMailSelected/v2/dark.svg" alt="" class="hide-theme-light" width="200">
        </div>
        <p class="empty-title">Schránka</p>
        <p class="empty-subtitle text-secondary">Vyberte položku, kterou si chcete přečíst</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  :where(.theme-dark, [data-bs-theme="dark"]) .tblr-illustrations-not-found-a {
    fill: #1a2030;
  }

  :where(.theme-dark, [data-bs-theme="dark"]) .tblr-illustrations-not-found-b {
    fill: black;
    opacity: 0.07;
  }

  :where(.theme-dark, [data-bs-theme="dark"]) .tblr-illustrations-not-found-c {
    fill: #454c5e;
  }

  :where(.theme-dark, [data-bs-theme="dark"]) .tblr-illustrations-not-found-d {
    fill: #232b41;
  }

  @media (prefers-color-scheme: dark) {
    .tblr-illustrations-not-found-a {
      fill: #1a2030;
    }

    .tblr-illustrations-not-found-b {
      fill: black;
      opacity: 0.07;
    }

    .tblr-illustrations-not-found-c {
      fill: #454c5e;
    }

    .tblr-illustrations-not-found-d {
      fill: #232b41;
    }
  }
</style>