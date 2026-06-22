<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import PageTemplate from '@/components/PageTemplate.vue'

  import { useDoisOrders } from '@/stores/dois-orders'
  const doisOrdersStore = useDoisOrders()

  import OrderItem from '@/components/DOIS/OrderItem.vue'
  import OrderOffcanvas from '@/components/DOIS/OrderOffcanvas.vue'

  import TomSelect from 'tom-select'

  onMounted(() => {
    new TomSelect('#filter-supplier', {
      allowEmptyOption: false,
      plugins: ['dropdown_input'],
    })
  })
</script>

<template>

  <PageTemplate title="Objednávky">

    <template #toolbar>
      <div class="row align-items-center gy-2">
        <div class="col-lg-auto">
          <div class="form-floating">
            <input class="form-control" type="date">
            <label>Datum od</label>
          </div>
        </div>
        <div class="col-lg-auto">
          <div class="form-floating">
            <input class="form-control" type="date" placeholder="fdsfsf">
            <label>Datum do</label>
          </div>
        </div>
        <!-- Tom Select -->
        <div class="col-lg-3">
          <div class="form-floating">
            <select class="form-select" autocomplete="off" id="filter-supplier">
              <option selected disabled></option>
              <option value="1">Možnost 1</option>
              <option value="2">Možnost 2</option>
              <option value="3">Možnost 3</option>
              <option value="4">Možnost 4</option>
              <option value="5">Možnost 5</option>
            </select>
            <label>Dodavatel</label>
          </div>
        </div>
        <div class="col-lg-auto">
          <div class="form-floating">
            <input class="form-control" type="text">
            <label>Číslo</label>
          </div>
        </div>
        <div class="col-lg-auto">
          <label class="form-check my-0">
            <input class="form-check-input" type="checkbox">
            <span class="form-check-label">Jen neakceptované</span>
          </label>
        </div>
        <div class="col-auto ms-auto">
          <div class="btn-list">
            <button type="button" class="btn btn-sm btn-outline-success text-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              Filtrovat
            </button>
            <button type="button" class="btn-link text-body text-nowrap">
              Zrušit filtry
            </button>
          </div>
        </div>
      </div>
    </template>

    <div class="row row-deck row-cards">
      <template v-for="order in doisOrdersStore.orders" :key="order.id">
        <div class="col-12">
          <OrderItem
            :orderId="order.id"
            :contractNumber="order.contractNumber"
            :supplier="order.supplier"
            :documents="order.documents" />
        </div>
      </template>
    </div>

    <!-- EXPERIMENTAL - order offcanvas (temp hard-coded order) -->
    <OrderOffcanvas :order-id="0"></OrderOffcanvas>


  </PageTemplate>

</template>

<style scoped></style>