import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', () => {

    const locale = ref("cs-CZ")

    return { locale }
})