import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)                                            // ref() become state properties
  const doubleCount = computed(() => count.value * 2)             // computed() become getters
  function increment() {                                          // function() become actions
    count.value++
  }

  return { count, doubleCount, increment }
})