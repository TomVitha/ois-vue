<script setup lang="ts">
  import { computed } from 'vue'

  import PageTemplate from '@/components/PageTemplate.vue'
  import ProductGroup from '@/components/ProductGroup.vue'
  import Voucher from '@/components/Payment/Voucher.vue'
  import VoucherDialog from '@/components/Payment/VoucherDialog.vue'
  import ProductGroupItem from '@/components/ProductGroupItem.vue'
  import Empty from '@/components/Empty.vue'

  import { useVouchersStore } from '@/stores/vouchers'
  const vouchersStore = useVouchersStore()


</script>

<template>

  <PageTemplate title="Poukázky">
    <div class="row row-deck row-cards">

      <!-- * Empty state - Zobrazí se pokud nejsou žádné poukázky -->
      <!-- <div class="col-12">
        <Empty title="Žádné poukázky" subtitle="Poukázky možné je získat například jako odměnu za věrnost, či při nákupu nějakého z našich produktů." />
      </div> -->

      <!-- * Poukázky -->
      <div class="col-12">
        <ProductGroup>
          <ProductGroupItem
            title="192-03-147"
            subtitle="Celkem 2"
            id="xyz">
            <div class="row row-deck row-cards">
              <!-- <div class="col-12 mt-3">
                <h3 class="mb-0">name</h3>
              </div> -->
              <div v-for="voucher in vouchersStore.vouchers" :key="voucher.id" class="col-lg-6 col-xl-4">
                <Voucher
                  :id="voucher.id"
                  :title="voucher.title"
                  :value="voucher.value"
                  :spent="voucher.spent"
                  :date-received="voucher.dateReceived"
                  :date-expiration="voucher.dateExpiration"
                  :breakdown="voucher.breakdown" />
              </div>
            </div>
          </ProductGroupItem>
        </ProductGroup>
      </div>
    </div>

    <VoucherDialog />

  </PageTemplate>
</template>
