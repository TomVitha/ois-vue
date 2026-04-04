import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

type Locale = 'cs-CZ' | 'en-US'

export const useLocaleStore = defineStore('locale', () => {

    const locale = ref<Locale>('cs-CZ')

    return { locale }
})