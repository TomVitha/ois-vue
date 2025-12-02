<script setup lang="ts">
  import { ref, computed } from 'vue'

  const props = defineProps<{
    name: string
    position?: string
    phone?: string
    email?: string
    imgURL?: string
  }>()

  const basedImgURL = computed(() =>
    props.imgURL && (!props.imgURL.startsWith('/') || props.imgURL.startsWith('http'))
      ? props.imgURL
      : `${import.meta.env.BASE_URL}${props.imgURL}`
  )

</script>

<template>
  <!-- <div class="card">
    <div class="row row-0">
      <div v-if="imgURL" class="col-4  align-self-start">
        <img :src="basedImgURL" :alt="name" class="w-100 h-100 object-cover card-img-start" width="140" />
      </div>
      <div class="col">
        <div class="card-body h-full space-y-2">
          <div>
            <div class="card-title my-0">{{ name }}</div>
            <div v-if="position" class="text-secondary">{{ position }}</div>
          </div>
          <div v-if="phone">
            <div class="text-secondary">Telefon:</div>
            <div>
              <a :href="`tel:${phone}`" class="text-reset">{{ phone }}</a>
            </div>
          </div>
          <div v-if="email">
            <div class="text-secondary">Email:</div>
            <div>
              <a :href="`mailto:${email}`" class="text-reset">{{ email }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <!-- <div class="card" hidden>
    <div class="card-body">
      <div class="row align-items-center gx-4">
        <div v-if="imgURL" class="col-4 col-sm-auto align-self-start">
          <img :src="basedImgURL" alt="Fotografie" width="170" class="rounded">
        </div>
        <div class="col">
          <div class="row gy-2">
            <div>
              <div class="card-title my-0">{{ name }}</div>
              <div v-if="position" class="text-secondary">{{ position }}</div>
            </div>
            <div v-if="phone">
              <div class="text-secondary">Telefon:</div>
              <div>
                <a :href="`tel:${phone}`" class="text-reset">{{ phone }}</a>
              </div>
            </div>
            <div v-if="email">
              <div class="text-secondary">Email:</div>
              <div>
                <a :href="`mailto:${email}`" class="text-reset">{{ email }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div class="card">
    <div class="card-body p-4 text-center">
      <img v-if="imgURL" class="avatar avatar-xl mb-3" :src="basedImgURL"> </img>
      <span v-else class="avatar avatar-xl mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
      </span>
      <h3 class="m-0">
        {{ name }}
      </h3>
      <div class="text-secondary">{{ position }}</div>
      <div class="mt-2"><span class="badge bg-purple-lt">Oddělení</span></div>
      <div class="space-y-0 mt-3">
        <a :href="`tel:${phone}`" class="text-reset">{{ phone }}</a>
        <a :href="`mailto:${email}`" class="text-reset">{{ email }}</a>
      </div>
    </div>
    <div class="d-flex">
      <RouterLink to="/komunikace" class="card-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon me-2 text-muted icon-tabler icons-tabler-outline icon-tabler-mail">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
          <path d="M3 7l9 6l9 -6" />
        </svg>
        Zpráva
      </RouterLink>
      <RouterLink to="#" class="card-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon me-2 text-muted icon-tabler icons-tabler-outline icon-tabler-calendar-time">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
          <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M15 3v4" />
          <path d="M7 3v4" />
          <path d="M3 11h16" />
          <path d="M18 16.496v1.504l1 1" />
        </svg>
        Schůzka
      </RouterLink>
    </div>
  </div>

</template>

<style scoped></style>