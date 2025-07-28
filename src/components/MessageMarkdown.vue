<script setup lang="ts">
import { ref, onMounted } from 'vue'
import matter from 'gray-matter'
import { marked } from 'marked'

const props = defineProps<{ path: string }>()
const html = ref('')
const meta = ref({})

onMounted(async () => {
  const file = await import(`../messages/${props.path}?raw`)
  const parsed = matter(file.default)
  html.value = marked(parsed.content)
  meta.value = parsed.data
})
</script>

<!-- !!! NO LONGER USED - INCORPORATED INTO KOMUNIKACE.vue VIEW -->

<template>
  <div>
    <h2>{{ meta.subject }}</h2>
    <div><strong>From:</strong> {{ meta.from }}</div>
    <div><strong>Date:</strong> {{ meta.datetime }}</div>
    <!-- <div v-html="html"></div> -->
     <slot></slot>
  </div>
</template>