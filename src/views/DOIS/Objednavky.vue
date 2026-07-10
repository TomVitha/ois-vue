<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import PageTemplate from '@/components/PageTemplate.vue'

  import { useDoisOrders } from '@/stores/dois-orders'
  const doisOrdersStore = useDoisOrders()

  import OrderItem from '@/components/DOIS/OrderItem.vue'
  import OrderOffcanvas from '@/components/DOIS/OrderOffcanvas.vue'

  import TomSelect from 'tom-select'
  import Alert from '@/components/Alert.vue';

  // Initialize multiple Tom-selects
  const tomSelectSelectors = ['#filter-suppliers'] as const
  const tomSelectOptions = {
    allowEmptyOption: false,
    maxItems: null, // 'null' allows an unlimited number of items
    plugins: {
      // dropdown_input: {},
      remove_button: {},
      no_active_items: {},
      input_autogrow: {},
      checkbox_options: {
        checkedClassNames: ['ts-checked'],
        uncheckedClassNames: ['ts-unchecked'],
      },
    },
    itemClass: 'tag', // Override default "item" class; now matches Tabler
  }

  onMounted(() => {
    tomSelectSelectors.forEach((selector) => {
      const element = document.querySelector(selector)

      if (element) {
        new TomSelect(selector, tomSelectOptions)
      }
    })
  })

  const selectedOrderId = ref(doisOrdersStore.orders[0]?.id ?? -1)

  function onOpenOrderOffcanvas(orderId: number) {
    selectedOrderId.value = orderId
  }
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
        <div class="col-lg-auto">
          <div class="form-floating">
            <input class="form-control" type="text">
            <label>Číslo</label>
          </div>
        </div>
        <div class="col-auto">
          <div class="form-floating">
            <select class="form-select" name="filter-suppliers" id="filter-suppliers" multiple>
              <option value="Sapeli">Sapeli</option>
              <option value="Hanák">Hanák</option>
              <option value="Next">Next</option>
              <option value="Barkotex">Barkotex</option>
              <option value="Ptáček">Ptáček</option>
              <option value="ProCeram">ProCeram</option>
              <option value="Profi Lighting">Profi Lighting</option>
              <option value="Vekra">Vekra</option>
              <option value="KONE">KONE</option>
              <option value="Loxone">Loxone</option>
              <option value="ABB">ABB</option>
              <option value="Baumit">Baumit</option>
              <option value="Wienerberger">Wienerberger</option>
              <option value="Vapis">Vapis</option>
              <option value="Xella">Xella</option>
            </select>
            <label>Dodavatel</label>
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

    <Alert type="warning">
      S platností od 1.&nbsp;1.&nbsp;2025 dochází u&nbsp;společností v&nbsp;rámci koncernu CENTRAL GROUP ke změně DIČ v&nbsp;návaznosti na nově založenou skupinu DPH. Více informací <a href="https://www.central-group.cz/storage/dokumenty/oznameni-o-zalozeni-skupiny-dph-v-ramci-koncernu-CENTRAL-GROUP.pdf">ZDE</a>.
    </Alert>

    <div class="row row-deck row-cards">
      <template v-for="order in doisOrdersStore.orders" :key="order.id">
        <div class="col-12">
          <OrderItem
            :orderId="order.id"
            :contractNumber="order.contractNumber"
            :supplier="order.supplier"
            :documents="order.documents"
            @open-dois-order-offcanvas="onOpenOrderOffcanvas" />
        </div>
      </template>
    </div>

    <OrderOffcanvas :order-id="selectedOrderId" />

  </PageTemplate>

</template>

<style scoped></style>