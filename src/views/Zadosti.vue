<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
</script>

<template>

  <PageTemplate title="Žádosti">

    <template #actions>
      <div class="btn-list">
        <RouterLink to="/zadost-nova" type="button" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-1">
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
          Nová žádost
        </RouterLink>
      </div>
    </template>

    <!-- * No requests -->
    <div class="row row-deck row-cards">
      <div class="row-12">
        <div class="card card-md">
          <div class="card-body">
            <div class="text-center">
              <div class="my-5">
                <h2 class="h1">Žádné aktivní žádosti</h2>
                <p class="fs-h3 text-secondary">
                  Zde uvidíte detaily a stav všech žádostí, které jste podali.
                </p>
              </div>
              <!-- <div class="text-center text-secondary mt-3">
                Can't see the email? Please check the spam folder.<br>
                Wrong email? Please <a href="#">re-enter your address</a>.
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TODO: List of all active requests -->

  </PageTemplate>


</template>

<style scoped></style>