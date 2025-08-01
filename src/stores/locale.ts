import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', () => {

    // TODO: Implement allowed languages (CZ, EN) - via enums?
    const locale = ref("cs-CZ")

    return { locale }
})