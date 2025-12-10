<script setup lang="ts">
  import { computed } from 'vue'

  import { useLocaleStore } from '@/stores/locale'
  const localeStore = useLocaleStore()

  interface BreakdownItem {
    label: string
    date: string
    amount: number
  }

  const props = defineProps<{
    title: string
    value: number
    spent?: number
    breakdown?: BreakdownItem[]
  }>()

  const remaining = computed(() => Math.max(props.value - (props.spent || 0), 0))
  const utilizationPercent = computed(() => {
    if (!props.value) return 0
    const rawPercent = ((props.spent || 0) / props.value) * 100
    return Math.max(0, Math.min(rawPercent, 100))
  })
  const isFullyUsed = computed(() => remaining.value <= 0)

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat(localeStore.locale, { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }).format(amount)
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{ props.title }}</h4>
      <div>
        <div class="text-secondary">V hodnotě</div>
        <div class="fs-3 fw-bold">{{ formatCurrency(props.value) }}</div>
      </div>
      <div v-if="props.spent && !isFullyUsed" class="row row-gap-2 mt-3">
        <div class="col-6">
          <div class="text-secondary">Využito</div>
          <div class="fw-bold text-success">{{ formatCurrency(props.spent) }}</div>
        </div>
        <div class="col-6 text-end">
          <div class="text-secondary">Zbývá</div>
          <div class="fw-bold">{{ formatCurrency(remaining) }}</div>
        </div>
        <div class="col-12">
          <div class="progress">
            <div class="progress-bar bg-success" :style="{ width: `${utilizationPercent}%` }"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="props.spent && !isFullyUsed" class="card-body p-0">
      <div class="table-responsive">
        <table class="table table-selectable card-table table-vcenter text-nowrap datatable">
          <thead>
            <tr>
              <th class="text-start">Dodatek</th>
              <th class="text-center">Datum</th>
              <th class="text-end">Hodnota</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in props.breakdown" :key="`${item.label}-${item.date}`">
              <td class="text-start">{{ item.label }}</td>
              <td class="text-center">
                {{
                  new Intl.DateTimeFormat([localeStore.locale], {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  }).format(new Date(item.date))
                }}
              </td>
              <td class="text-end">{{ formatCurrency(item.amount) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
