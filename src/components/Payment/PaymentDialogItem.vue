<script setup lang="ts">
  import CopyToClipboardButton from '@/components/CopyToClipboardButton.vue';

  const props = defineProps<{
    name: string
    value: string | number
  }>()

</script>

<template>
  <!-- <div class="list-group-item">
    <div class="row">
      <div class="col">
        <div class="text-secondary">{{ name }}</div>
        <div>{{ value }}</div>
      </div>
      <div class="col-auto">
        <CopyToClipboardButton :data="value" />
      </div>
    </div>
  </div> -->
  <div class="datagrid-item">
    <div class="row">
      <div class="col">
        <div class="datagrid-title">{{ name }}</div>
        <div class="datagrid-content">{{ value }}</div>
      </div>
      <div class="col-auto">
        <CopyToClipboardButton :data="value" />
      </div>
    </div>
  </div>
</template>

<style scoped>

  /* .list-group-item {
    min-height: 2.5rem;
  } */
  .list-group-item {
    /* --tblr-list-group-item-padding-x: 0rem; */
    /* --tblr-list-group-item-padding-y: 0.75rem; */
  }
</style>