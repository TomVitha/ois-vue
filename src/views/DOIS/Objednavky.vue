<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'

  import { useDoisOrders } from '@/stores/dois-orders'
  const doisOrdersStore = useDoisOrders()


  import OrderItem from '@/components/DOIS/OrderItem.vue'
</script>

<template>

  <PageTemplate title="Objednávky">

    <div class="row row-deck row-cards">

      <template v-for="order in doisOrdersStore.orders" :key="order.id">
        <div class="col-12">
          <OrderItem 
          :orderId="order.id"  
          :contractNumber="order.contractNumber"
          :supplier="order.supplier"
          :documents="order.documents"
          />
        </div>
      </template>

    </div>

  </PageTemplate>

</template>

<style scoped></style>