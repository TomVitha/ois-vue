<script setup lang="ts">
  import { ref, computed } from 'vue'

  const props = defineProps<{
    name: string
    id: string
  }>()
</script>

<template>
  <div class="modal fade" tabindex="-1" :id="id">
    <div class="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-sm-down" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ name }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot>
            zde přijde obsah žádosti
          </slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn me-auto" data-bs-dismiss="modal">Zrušit</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Odeslat žádost</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>