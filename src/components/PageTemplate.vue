<script setup lang="ts">
  // import Footer from '@/components/Footer.vue';
  import { useSlots } from 'vue';

  const slots = useSlots();

  defineProps<{
    title: string
    pretitle?: string,
    extra?: string
  }>()
</script>

<template>
  <!-- BEGIN PAGE HEADER -->
  <div class="page-header">
    <div class="container-xl">
      <div class="row align-items-center">
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
      <!-- Toolbar -->
      <div v-if="slots.toolbar" class="row">
        <div class="border-bottom py-3">
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