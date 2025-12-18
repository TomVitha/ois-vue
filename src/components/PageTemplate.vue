<script setup lang="ts">
  // import Footer from '@/components/Footer.vue';
  import { useSlots } from 'vue';

  const slots = useSlots();

  defineProps<{
    title: string
    pretitle?: string,
    extra?: string
    backTo?: string
    description?: string
  }>()
</script>

<template>
  <!-- BEGIN PAGE HEADER -->
  <div class="page-header">
    <div class="container-xl">
      <div class="row align-items-center">
        <!-- back button -->
        <div v-if="backTo" class="col-auto pe-0">
          <RouterLink :to="backTo" class="btn btn-action">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15 6l-6 6l6 6"></path>
            </svg>
          </RouterLink>
        </div>
        <div class="col-auto">
          <hgroup>
            <p v-if="pretitle" class="page-pretitle m-0">{{ pretitle }}</p>
            <h1 class="page-title">{{ title }}</h1>
          </hgroup>
        </div>
        <div v-if="slots.extra" class="col-auto mx-2">
          <slot name="extra"></slot>
        </div>
        <!-- Page title actions -->
        <div class="col-auto ms-auto d-print-none">
          <slot name="actions"></slot>
        </div>
      </div>
      <!-- Description -->
      <div v-if="description" class="row my-3">
        <p class="m-0">{{ description }}</p>
      </div>
      <!-- Toolbar -->
      <div v-if="slots.toolbar" class="row mt-3">
        <div class="border-bottom pb-3">
          <slot name="toolbar"></slot>
        </div>
      </div>
    </div>
  </div>
  <!-- END PAGE HEADER -->
  <!-- BEGIN PAGE BODY -->
  <div class="page-body">
    <div class="container-xl flex-fill overflow-x-hidden">
      <slot></slot>
    </div>
  </div>
  <!-- END PAGE BODY -->
  <!-- BEGIN FOOTER -->
  <!-- <Footer /> -->
  <!-- END FOOTER -->
</template>

<style scoped></style>