import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import messagesMeta from '../messages/meta.json'

export const useMessengerStore = defineStore('messenger', () => {

    const messagesData = ref(messagesMeta) 
    const allCount = computed(() => messagesData.value.length)
    const unreadCount = computed(() => messagesData.value.filter(msg => msg.isUnread).length)

    return {
        messagesData,
        allCount,
        unreadCount,
    }
})