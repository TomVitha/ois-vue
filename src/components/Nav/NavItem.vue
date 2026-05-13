<script setup lang="ts">
  import { computed } from 'vue'
  import { RouterLink } from 'vue-router'

  const props = defineProps<{
    label: string
    to?: string
    children?:
    {
      label: string;
      to: string
    }[]
    badge?: boolean
  }>()

  const isExternalLink = computed(() => !!props.to?.startsWith('http'))

</script>

<template>

  <li class="nav-item" :class="{ dropdown: children }">
    <component
      :is="(children || isExternalLink) ? 'a' : RouterLink"
      :to="(children || isExternalLink) ? null : to"
      :href="to"
      :target="isExternalLink ? '_blank' : null"
      class="nav-link"
      v-bind="children ? {
        'class': 'dropdown-toggle',
        'data-bs-toggle': 'dropdown',
        'data-bs-auto-close': 'outside',
        'role': 'button',
        'aria-expanded': 'false'
      } : {}"
      draggable="false">
      <span class="nav-link-icon d-inline-block">
        <slot name="icon"></slot>
      </span>
      <span class="nav-link-title text-truncate">
        {{ label }}
        <svg v-if="isExternalLink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-sm icon-tabler icons-tabler-outline icon-tabler-external-link">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
          <path d="M11 13l9 -9" />
          <path d="M15 4h5v5" />
        </svg>
      </span>
      <div v-if="badge" class="badges-list flex-fill justify-content-end">
        <span class="badge-dot bg-red ms-auto"></span>
      </div>
    </component>

    <!-- Dropdown Menu -->
    <div v-if="children" class="dropdown-menu">
      <RouterLink
        v-for="(child, index) in children"
        :key="index"
        :to="child.to"
        class="dropdown-item"
        draggable="false">
        {{ child.label }}
      </RouterLink>
    </div>

  </li>
</template>