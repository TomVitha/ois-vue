<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import Empty from '@/components/Empty.vue'

  import { useDoisOrders } from '@/stores/dois-orders'
  const doisOrdersStore = useDoisOrders()


  import OrderItem from '@/components/DOIS/OrderItem.vue'
</script>

<template>

  <PageTemplate title="Objednávky">

    <template #actions>
      <div class="btn-list">
        <button class="btn btn-primary">Primary</button>
        <a href="#" class="btn">Secondary</a>
      </div>
    </template>

    <div class="row row-deck row-cards">

      <template v-for="order in doisOrdersStore.orders" :key="order.id">
        <div class="col-12">
          <OrderItem 
          :orderId="order.id"  
          :contractNumber="order.contractNumber"
          :supplier="order.supplier"
          :mainDocument="order.documents[0]"
          :documents="order.documents[1]"
          :orderComments="order.comments"
          />
        </div>
      </template>

    </div>

  </PageTemplate>

</template>

<style scoped></style>