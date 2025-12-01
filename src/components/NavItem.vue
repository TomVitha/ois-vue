<script setup lang="ts">
  import { RouterLink } from 'vue-router'

  // export interface NavItemChild {
  //   label: string
  //   to: string
  // }

  defineProps<{
    label: string
    to?: string
    children?: { label: string; to: string }[]
    badge?: boolean
  }>()
</script>

<template>

  <li class="nav-item" :class="{ dropdown: children }">
    <component
      :is="children ? 'a' : RouterLink"
      :to="!children ? to : null"
      class="nav-link kkkk"
      v-bind="children ? {
        'class': 'dropdown-toggle',
        'data-bs-toggle': 'dropdown',
        'data-bs-auto-close': 'outside',
        'role': 'button',
        'aria-expanded': 'false'
      } : {}">
      <span class="nav-link-icon d-inline-block">
        <slot name="icon"></slot>
      </span>
      <span class="nav-link-title text-truncate">{{ label }}</span>
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
        class="dropdown-item">
        {{ child.label }}
      </RouterLink>
    </div>

  </li>
</template>