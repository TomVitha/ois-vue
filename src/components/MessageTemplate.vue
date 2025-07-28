<script setup lang="ts">
  defineProps<{
    subject: string
    from: string
    to?: string
    datetime: string
  }>()
</script>

<!-- !! DEPRECATED AND UNUSED -->

<template>
  <div class="card">
    <div class="card-header gap-2">
      <div class="btn-actions">
        <!--  CLOSE MESSAGE -->
        <RouterLink to="/komunikace" class="btn btn-action d-lg-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
            <path d="M15 6l-6 6l6 6"></path>
          </svg>
        </RouterLink>
      </div>
      <div class="space-y-1 w-100">
        <h2 class="m-0">{{ subject }}</h2>
        <div class="d-flex justify-content-between">
          <div>
            <div class="font-weight-medium">Od: {{ from }}</div>
            <div v-if="to" class="text-secondary">Komu: {{ to }}</div>
          </div>
          <div>
            <span class="text-secondary fs-5">
              {{
                // new Date(datetime).toLocaleString([], { }) // old
                // TODO: Set locale according to global state
                new Intl.DateTimeFormat(["cs-CZ"], {
                  weekday: 'short',
                  day: '2-digit',
                  month: '2-digit',
                  // include year only in it is different from current year
                  // year: new Date(datetime).getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined,
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                }).format(new Date(datetime))
              }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="markdown">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
