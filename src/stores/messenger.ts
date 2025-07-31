import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import messagesMeta from '../messages/meta.json'

export const useMessengerStore = defineStore('messenger', () => {

    const messagesData = ref(messagesMeta) 

    const allCount = computed(() => messagesData.value.length)
    const unreadCount = computed(() => messagesData.value.filter(msg => msg.isUnread).length)

    function markAsRead(id: string) {
        const msg = messagesData.value.find(m => m.id === id)
        if (msg) msg.isUnread = false
    }
    function markAsUnread(id: string) {
        const msg = messagesData.value.find(m => m.id === id)
        if (msg) msg.isUnread = true
    }

    return {
        messagesData,
        allCount,
        unreadCount,
        markAsRead,
        markAsUnread,
    }
})