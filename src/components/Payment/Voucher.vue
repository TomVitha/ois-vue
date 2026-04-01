<script setup lang="ts">
  import { computed } from 'vue'

  import { useFormatting } from '@/composables/formatting'
  import { useVouchersStore } from '@/stores/vouchers'

  const { formatDate, formatCurrency } = useFormatting()
  const vouchersStore = useVouchersStore()

  interface BreakdownItem {
    label: string
    date: string
    amount: number
  }

  const props = defineProps<{
    id: number
    title: string
    value: number
    spent?: number
    dateReceived: string
    dateExpiration: string
    breakdown?: BreakdownItem[]
  }>()

  const remaining = computed(() => Math.max(props.value - (props.spent || 0), 0))
  const percentageUsed = computed(() => {
    if (!props.value) return 0
    const ratio = (props.spent || 0) / props.value
    const percentage = ratio * 100
    const clamped = Math.max(0, Math.min(percentage, 100))
    const rounded = clamped.toFixed(2)
    return rounded
  })
  const isFullyUsed = computed(() => remaining.value <= 0)

  function openVoucherDialog() {
    vouchersStore.selectVoucherById(props.id)
  }
</script>

<template>
  <a
    href="#voucher-modal"
    class="card card-md card-link"
    role="button"
    data-bs-toggle="modal"
    data-bs-target="#voucher-modal"
    @click="openVoucherDialog">
    <div class="card-body">
      <div class="row gy-2">

        <div class="col-12">
          <!-- TODO: Použij h1 pokud budou umístěny samostatně, použij h2 pokud budou spolu s Platbami -->
          <div class="subheader mb-1">{{ title }}</div>
          <div class="h1 mb-0">{{ formatCurrency(props.value) }}</div>
        </div>

        <div class="col-12">
          <!-- <div class="text-secondary">Přijato: {{ formatDate(props.dateReceived) }}</div> -->
          <div class="text-secondary">Splatnost: {{ formatDate(props.dateExpiration) }}</div>
        </div>

        <div v-if="!isFullyUsed" class="col-12">
          <div class="row">
            <div class="col">
              <!-- <div class="text-secondary">Vyčerpáno</div> -->
              <div class="text-success" title="Vyčerpáno">{{ formatCurrency(props.spent || 0) }}</div>
            </div>
            <div class="col text-end">
              <!-- <div class="text-secondary">Zbývá</div> -->
              <div class="text-secondary" title="Zbývá">{{ formatCurrency(remaining) }}</div>
            </div>
            <div class="col-12">
              <div class="progress progress-sm mt-2">
                <div
                  class="progress-bar bg-success"
                  :style="`width: ${percentageUsed}%`"
                  :title="`${percentageUsed}% zbývá`"
                  role="progressbar"
                  :aria-valuenow="percentageUsed"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  <span class="visually-hidden"> {{ percentageUsed }}% zbývá</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
