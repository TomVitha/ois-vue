<script setup lang="ts">
  import { ref, computed } from 'vue'

  const props = defineProps<{
    name: string
    position?: string
    phone?: string
    email?: string
    imgURL?: string
  }>()

  const resolvedURL = computed(() =>
  props.imgURL && (!props.imgURL.startsWith('/') || props.imgURL.startsWith('http'))
    ? props.imgURL
    : `${import.meta.env.BASE_URL}${props.imgURL}`
  )

</script>

<template>
  <!-- <div class="card">
    <div class="row row-0">
      <div v-if="imgURL" class="col-4  align-self-start">
        <img :src="imgURL" :alt="name" class="w-100 h-100 object-cover card-img-start" width="140" />
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
  <div class="card">
    <div class="card-body">
      <div class="row align-items-center gx-4">
        <div v-if="imgURL" class="col-4 col-sm-auto align-self-start">
          <img :src="resolvedURL" alt="Fotografie" width="170" class="rounded">
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
  </div>
</template>

<style scoped></style>