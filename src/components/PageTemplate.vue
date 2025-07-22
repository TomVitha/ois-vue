<script setup lang="ts">
  defineProps<{
    pretitle?: string,  // Optional
    title: string
  }>()
</script>

<template>
  <!-- BEGIN PAGE HEADER -->
  <div class="page-header">
    <div class="container-xl">
      <div class="row g-2 align-items-center">
        <div class="col">
          <hgroup>
            <p v-if="pretitle" class="page-pretitle m-0">{{ pretitle }}</p>
            <h1 class="page-title">{{ title }}</h1>
          </hgroup>
          <!-- Page title actions -->
        </div>
        <div class="col-auto ms-auto d-print-none">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </div>
  <!-- END PAGE HEADER -->
  <!-- BEGIN PAGE BODY -->
  <div class="page-body">
    <div class="container-xl">
      <slot></slot>
    </div>
  </div>
  <!-- END PAGE BODY -->
</template>

<style scoped></style>