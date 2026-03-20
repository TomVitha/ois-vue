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
    date: string
    breakdown?: BreakdownItem[]
  }>()

  const date = new Date(props.date)
  if (isNaN(date.getTime())) { date.setTime(99999999999999999999999999) }   // HACK to display browser-native invalid date message

  function formatDate(date: Date): string {
    return date.toLocaleDateString(localeStore.locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }

  const remaining = computed(() => Math.max(props.value - (props.spent || 0), 0))
  const remainingPercent = computed(() => {
    if (!props.value) return 0
    const rawPercent = (remaining.value / props.value) * 100
    return Math.max(0, Math.min(rawPercent, 100))
  })
  const isFullyUsed = computed(() => remaining.value <= 0)

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat(localeStore.locale, { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }).format(amount)
</script>

<template>
  <!-- Kliknutí otevře modal dialog s breakdownem utrácení poukázky -->
  <!-- TODO: Udělat ten dialog -->
  <a
    href="#todo"
    class="card card-link"
    role="button"
    data-bs-toggle="modal"
    data-bs-target="#temp-payment-modal">
    <div class="card-body">
      <div class="row row-gap-3 gx-4">
        <div class="col">
          <div>{{ title }}</div>
          <div class="text-secondary">Obdržena: {{ formatDate(date) }}</div>
        </div>
        <div class="col-auto text-end">
          <div class="text-secondary">V hodnotě</div>
          <div class="fw-bold">{{ formatCurrency(props.value) }}</div>
        </div>
        <div v-if="!isFullyUsed" class="col-12">
          <div class="row">
            <div class="col">
              <div class="text-secondary">Zbývá</div>
              <div class="fs-4 fw-bold text-success">{{ formatCurrency(remaining) }}</div>
            </div>
            <div class="col text-end">
              <div class="text-secondary">Vyčerpáno</div>
              <div class="fs-4 fw-bold text-secondary">{{ formatCurrency(props.spent || 0) }}</div>
            </div>
            <div class="col-12">
              <div class="progress progress-sm mt-2">
                <div
                  class="progress-bar bg-success"
                  :style="`width: ${remainingPercent}%`"
                  :title="`${remainingPercent}% zbývá`"
                  role="progressbar"
                  :aria-valuenow="remainingPercent"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  <span class="visually-hidden"> {{ remainingPercent }}% zbývá</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>

  <!-- Breakdown využití poukázky -->
  <!-- TEMP: Přijde do modal dialogu -->
  <div class="card">
    <!-- Pokud byla poukázka někdy využita, zobrazit tabulku s breakdownem -->
    <div v-if="props.spent">
      <!-- Pokud poukázka ještě nebyla využita, zobrazit empty -->
      <div class="table-responsive">
        <table class="table table-selectable card-table table-vcenter text-nowrap datatable">
          <thead>
            <tr>
              <th>Dodatek</th>
              <th>Datum</th>
              <th>Hodnota</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in props.breakdown" :key="`${item.label}-${item.date}`">
              <td>{{ item.label }}</td>
              <td>
                {{
                  new Intl.DateTimeFormat([localeStore.locale], {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  }).format(new Date(item.date))
                }}
              </td>
              <td>{{ formatCurrency(item.amount) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- WIP -->
    <div v-else class="empty">
      <!-- <p class="empty-title">Nevyužito</p> -->
      <p class="empty-subtitle text-secondary">
        Tato poukázka nebyla zatím nijak využita.
      </p>
    </div>

  </div>
</template>
