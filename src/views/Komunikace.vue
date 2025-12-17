<script setup lang="ts">
  import { ref, onMounted, computed, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  import { useLocaleStore } from '@/stores/locale'
  const localeStore = useLocaleStore()

  // markdown parser
  import { marked } from 'marked'
  // <select> UI control with autocomplete
  import TomSelect from 'tom-select'

  import MessageBadge from '@/components/Messenger/MessageBadge.vue'

  import messagesMeta from '../messages/meta.json'
  import MessengerListItem from '@/components/Messenger/MessengerListItem.vue'
  import MessengerAttachment from '@/components/Messenger/MessageAttachment.vue'

  import { useMessengerStore } from '@/stores/messenger'
  const messengerStore = useMessengerStore()

  const route = useRoute()
  const router = useRouter()

  const messages = ref<{ id: string, meta: any, content: string }[]>([])
  const selectedMessageId = ref<string | null>(null)
  const activeTabId = ref('inbox')

  const messageTabs = computed(() => [
    { id: 'inbox', list: messages.value.filter(m => !m.meta.to) },
    { id: 'sent', list: messages.value.filter(m => m.meta.to) }
  ])

  const currentTabMessages = computed(() =>
    messageTabs.value.find(t => t.id === activeTabId.value)?.list || []
  )


  // helper function
  function printPage() {
    window.print()
  }


  // Import markdown messages
  onMounted(async () => {
    const modules = import.meta.glob('../messages/*.md', { query: '?raw', import: 'default' })
    const entries = Object.entries(modules)
    const loaded = await Promise.all(
      entries.map(async ([path, loader]) => {
        const raw = await loader()
        const id = path.split('/').pop()?.replace('.md', '') ?? path
        return { id, content: raw }
      })
    )
    // Map messages metadata to messages
    messages.value = messagesMeta.map(meta => {
      const contentObj = loaded.find(l => l.id === meta.id)
      return {
        id: meta.id,
        meta: meta,
        content: typeof contentObj?.content === 'string' ? contentObj.content : ''
      }
    }).reverse()
    // NOTE: reverse() to reorder from newest to oldest

    // Check for message ID in URL query parameter
    if (route.query.m) {
      selectMessage(route.query.m as string)
    }

    // Initialize TomSelect
    // new TomSelect("#select-recipient", {
    //   create: false,
    // });

  })

  function selectMessage(messageId: string) {
    selectedMessageId.value = messageId
  }

  const selectedMessage = computed(() =>
    messages.value.find(msg => msg.id === selectedMessageId.value) || null
  )

  const selectedIndex = computed(() =>
    selectedMessage.value
      ? currentTabMessages.value.findIndex(msg => msg.id === selectedMessage.value?.id)
      : -1
  )

  const selectedMessageHtml = computed(() =>
    selectedMessage.value ? marked.parse(selectedMessage.value.content) : ''
  )

  // Watch for changes in selectedMessageId
  watch(selectedMessageId, (newId) => {
    if (newId) {
      router.replace({ query: { m: newId } })
      messengerStore.markAsRead(newId)

      // Sync active tab with selected message
      const msg = messages.value.find(m => m.id === newId)
      if (msg) {
        activeTabId.value = msg.meta.to ? 'sent' : 'inbox'
      }
    } else {
      router.replace({ query: {} })
    }
    msgSignatureText.value = ''
  })

  // Watch for changes in route.query
  watch(() => route.query.m, (newMsgId) => {
    if (newMsgId && newMsgId !== selectedMessageId.value) {
      selectMessage(newMsgId as string)
    } else if (!newMsgId && selectedMessageId.value) {
      selectedMessageId.value = null
    }
  })

  // TODO: Message discard logic
  function promptDiscardMessage(event?: Event) {

    // const msgModal = tabler?.Modal.getOrCreateInstance('#new-message-modal')
    // console.log(msgModal)
    // msgModal.show();
    // msgModal.hide();

    if (confirm("Opravdu chcete zahodit rozpracovanou zprávu?")) {
      // DISCARD - Close the modal and clear the message content
    } else {
      // CANCEL - The message stays open and its content remains
    }
  }

  const msgSignatureText = ref('')
  const isSignatureValid = computed(() => msgSignatureText.value.trim().length > 0)
</script>

<template>
  <div class="page-body">
    <div class="container-fluid flex-fill space-y-0">
      <div class="messenger row row-deck row-cards flex-fill">
        <!-- Messages list column -->
        <div class="col-12 col-lg-auto d-flex flex-column messenger__list" :class="{ 'd-none d-lg-flex d-print-none': selectedMessage }">
          <div class="card">
            <div class="card-header space-y-2 align-items-stretch ">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#new-message-modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                  <path d="M13.5 6.5l4 4" />
                </svg>
                Nová zpráva
              </button>
              <!-- Compose message window -->
              <div class="modal fade" id="new-message-modal" tabindex="-1">
                <div class="modal-dialog modal-xl modal-dialog-centered modal-fullscreen-lg-down modal-dialog-scrollable" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Nová zpráva</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="promptDiscardMessage()"></button>
                    </div>
                    <div class="modal-body">
                      <!-- TODO: HugeRTE instead of plain text -->
                      <!-- <form method="post">
                        <textarea id="hugerte-mytextarea">Hello, <b>Tabler</b>!</textarea>
                      </form> -->
                      <!-- <hugerteIframe></hugerteIframe> -->
                      <div class="space-y-3 h-100">
                        <div class="input-group input-group-flat">
                          <span class="input-group-text">Od: </span><input type="text" class="form-control" autocomplete="off" value="Adam Novák" readonly>
                        </div>
                        <!-- tom-select -->
                        <div class="input-group input-group-flat">
                          <span class="input-group-text">Komu: </span>
                          <select class="form-control" id="select-recipient" placeholder="Vyberte příjemce..." autocomplete="off">
                            <option value="" disabled selected>Vyberte příjemce...</option>
                            <option value="1">Darth Vader</option>
                            <option value="2">Michael Corleone</option>
                            <option value="3">Marty McFly</option>
                            <option value="4">Jack Sparrow</option>
                            <option value="5">Tony Stark</option>
                            <option value="6">The Terminator</option>
                          </select>
                        </div>
                        <div class="input-group input-group-flat">
                          <span class="input-group-text">Předmět: </span><input type="text" class="form-control" autocomplete="off" aria-label="Předmět zprávy">
                        </div>
                        <textarea name="" id="message-content" placeholder="Pište zprávu..." class="form-control flex-fill" style="min-height: 200px; field-sizing: content;"></textarea>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <div class="button-actions me-auto">
                        <!-- Discard -->
                        <button type="button" class="btn btn-icon btn-ghost btn-danger" title="Zahodit" @click.prevent="promptDiscardMessage()">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 7l16 0" />
                            <path d="M10 11l0 6" />
                            <path d="M14 11l0 6" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                          </svg>
                        </button>
                        <!-- Attachments -->
                        <button type="button" class="btn btn-action" title="Připojit přílohu" data-bs-dismiss="modal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-paperclip">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
                          </svg>
                        </button>
                      </div>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send-2">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
                          <path d="M6.5 12h14.5" />
                        </svg>
                        Odeslat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Search bar -->
              <!-- <div class="input-icon">
                <span class="input-icon-addon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M21 21l-6 -6"></path>
                  </svg>
                </span>
                <input type="text" value="" class="form-control" placeholder="Hledat ve zprávách…" aria-label="Hledat">
              </div> -->
              <nav class="nav nav-segmented nav-2 w-100 mt-2" role="tablist">
                <a href="#" class="nav-link" :class="{ active: activeTabId === 'inbox' }" role="tab" aria-selected="true" draggable="false" @click.prevent="activeTabId = 'inbox'; selectedMessageId = null">
                  Přijaté <span v-if="messengerStore.unreadCount > 0" class="text-primary">{{ messengerStore.unreadCount }}</span>
                </a>
                <a href="#" class="nav-link" :class="{ active: activeTabId === 'sent' }" role="tab" aria-selected="false" tabindex="-1" draggable="false" @click.prevent="activeTabId = 'sent'; selectedMessageId = null">
                  Odeslané
                </a>
              </nav>
            </div>
            <div class="card-header py-2">
              <!-- * Řazení (nejnovější, nejstarší), Filtrování (podle bytu, odesilatele), Vyhledávání?, Ne/přečtené, Ne/mají přílohu -->
              <!-- ? Paginace zpráv, výpis kolik z kolika ? -->
              <div class="btn-actions flex-fill justify-content-end">
                <button href="#" class="btn btn-action dropdown-toggle me-auto" title="Hledat">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M21 21l-6 -6"></path>
                  </svg>
                </button>
                <div class="dropdown">
                  <button href="#" class="btn btn-action dropdown-toggle" data-bs-toggle="dropdown" title="Značka">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-tag">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" />
                    </svg>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <button class="dropdown-item" href="#">
                      <MessageBadge text="192-03-147" />
                    </button>
                    <button class="dropdown-item" href="#">
                      <MessageBadge text="komerce 1" />
                    </button>
                  </div>
                </div>
                <div class="dropdown">
                  <button href="#" class="btn btn-action dropdown-toggle" data-bs-toggle="dropdown" title="Filtrování">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-filter">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
                    </svg>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <button class="dropdown-item" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail dropdown-item-icon">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                      </svg>
                      Všechny
                    </button>
                    <button class="dropdown-item" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye-off dropdown-item-icon">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                        <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                        <path d="M3 3l18 18" />
                      </svg>
                      Nepřečtené
                    </button>
                    <button class="dropdown-item" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-paperclip dropdown-item-icon">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
                      </svg>
                      Obsahují přílohu
                    </button>
                    <button class="dropdown-item" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-writing-sign dropdown-item-icon">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 19c3.333 -2 5 -4 5 -6c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 2.877 2.5 4c1.5 2 2.5 2.5 3.5 1c.667 -1 1.167 -1.833 1.5 -2.5c1 2.333 2.333 3.5 4 3.5h2.5" />
                        <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" />
                        <path d="M16 7h4" />
                      </svg>
                      S podpisem
                    </button>
                  </div>
                </div>
                <div class="dropdown">
                  <button href="#" class="btn btn-action dropdown-toggle" data-bs-toggle="dropdown" title="Seřadit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-up-down">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 3l0 18" />
                      <path d="M10 6l-3 -3l-3 3" />
                      <path d="M20 18l-3 3l-3 -3" />
                      <path d="M17 21l0 -18" />
                    </svg>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <button class="dropdown-item" href="#">Od nejnovějších</button>
                    <button class="dropdown-item" href="#">Od nejstarších</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Messages list -->
            <div class="card-body tab-content scrollable flex-fill p-0">
              <div v-for="tab in messageTabs" :key="tab.id" :id="tab.id" class="tab-pane nav flex-column nav-pills" :class="{ active: tab.id === activeTabId }">
                <MessengerListItem
                  v-for="msg in tab.list"
                  :key="msg.id"
                  :id="msg.id"
                  :name="tab.id === 'inbox' ? msg.meta.from : msg.meta.to"
                  :datetime="msg.meta.datetime"
                  :subject="msg.meta.subject"
                  :content="msg.content"
                  :badge="msg.meta.badge"
                  :is-unread="msg.meta.isUnread"
                  :has-attachment="Array.isArray(msg.meta.attachments) && msg.meta.attachments.length > 0"
                  @click.prevent="selectMessage(msg.id)" />
              </div>
            </div>
          </div>
        </div>
        <!-- Message body column -->
        <div class="col d-flex flex-column messenger__body" :class="{ 'd-none d-lg-flex d-print-none': !selectedMessage }">
          <!-- If no message is selected: show empty welcome -->
          <div v-if="!selectedMessage" class="page page-center" id="empty-state">
            <div class="container-tight py-4">
              <div class="empty">
                <div class="empty-img">
                  <!-- TODO: Envelope image ? -->
                </div>
                <p class="empty-title">
                  <span v-if="messages.some(m => m.meta.isUnread)">
                    Nepřečtených zpráv ({{messages.filter(m => m.meta.isUnread).length}})
                  </span>
                  <span v-else>Schránka</span>
                </p>
                <p class="empty-subtitle text-secondary" style="text-wrap: pretty">
                  <span v-if="messages.filter(m => m.meta.from).length <= 0">Nemáte žádné položky</span>
                  <span v-else>
                    Vyberte některou ze zpráv
                  </span>
                </p>
              </div>
            </div>
          </div>
          <!-- Else if a message is selected: show message content -->
          <!-- TODO? Message body into component? -->
          <div class="card scrollable" v-else id="message-view">
            <div class="card-header d-block">
              <div class="row gy-3">
                <div class="col-12 col-xl-auto d-lg-none d-print-none">
                  <div class="btn-actions mx-n3 my-n2">
                    <!-- Previous message -->
                    <button class="btn btn-link btn-action" title="Předchozí zpráva" @click="selectedMessageId = currentTabMessages[selectedIndex - 1]?.id" :disabled="selectedIndex <= 0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                        <path d="M15 6l-6 6l6 6"></path>
                      </svg>
                    </button>
                    <!-- Next message -->
                    <button class="btn btn-link btn-action" title="Další zpráva" @click="selectedMessageId = currentTabMessages[selectedIndex + 1]?.id" :disabled="selectedIndex === currentTabMessages.length - 1 || selectedIndex === -1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-end icon-2">
                        <path d="M9 6l6 6l-6 6"></path>
                      </svg>
                    </button>
                    <!--  Close message -->
                    <button class="btn btn-link btn-action ms-auto" title="Zavřít zprávu" @click="selectedMessageId = null">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-flex flex-wrap align-items-center">
                    <h2 class="m-0">{{ selectedMessage.meta.subject }}</h2>
                    <MessageBadge v-if="selectedMessage.meta.badge" :text="selectedMessage.meta.badge" />
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-flex justify-content-between flex-wrap">
                    <div>
                      <!-- to/from and date -->
                      <div class="font-weight-medium">
                        {{ selectedMessage.meta.to ? 'Komu: ' + selectedMessage.meta.to : 'Od: ' + selectedMessage.meta.from }}
                      </div>
                      <div>
                        <span class="text-secondary fs-5">
                          {{
                            new Intl.DateTimeFormat([localeStore.locale], {
                              weekday: 'short',
                              day: '2-digit',
                              month: '2-digit',
                              year: new Date(selectedMessage.meta.datetime).getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined, // include year only if it's different from current year
                              // hour: '2-digit',
                              // minute: '2-digit',
                            }).format(new Date(selectedMessage.meta.datetime))
                          }}
                        </span>
                      </div>
                    </div>
                    <div>
                      <!-- toolbar -->
                      <div class="btn-actions d-print-none">
                        <button class="btn btn-action" title="Odpovědět" data-bs-toggle="tooltip" data-bs-placement="top">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-corner-up-left">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 18v-6a3 3 0 0 0 -3 -3h-10l4 -4m0 8l-4 -4" />
                          </svg>
                        </button>
                        <button href="#" class="btn btn-action" title="Tisk" data-bs-toggle="tooltip" data-bs-placement="top" @click="printPage()">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-printer">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                            <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                            <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Attachments -->
                <div class="col-12" v-if="Array.isArray(selectedMessage.meta.attachments) && selectedMessage.meta.attachments.length > 0">
                  <div class="row row-gap-2">
                    <div v-for="attachment in selectedMessage.meta.attachments" class="col-auto">
                      <MessengerAttachment :filename="attachment.filename" :size="attachment.size" :filetype="attachment.filetype" :url="attachment.url"></MessengerAttachment>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="markdown">
                <div v-html="selectedMessageHtml"></div>
              </div>
            </div>
            <!-- ? mayabe -->
            <div v-if="selectedMessage.meta.requiresSignature" class="card-footer">
              <div class="row align-items-center gy-3">
                <div class="col-12 col-xl-auto ms-xl-auto">
                  <input type="text" class="form-control w-100" placeholder="Napište své celé jméno..." v-model="msgSignatureText">
                </div>
                <div class="col-6 col-xl-auto order-xl-first">
                  <button class="btn btn-ghost-danger w-100">Odmítnout</button>
                </div>
                <div class="col-6 col-xl-auto">
                  <button class="btn btn-primary btn-2 w-100" :disabled="!isSignatureValid">Akceptovat</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  /* NOTE the custom .messenger class */
  .messenger > [class*="col"] > .card {
    max-height: calc(100dvh - 3.5rem - var(--tblr-page-padding-y) - 0px - var(--tblr-page-padding-y));
    /* border: 1px solid red !important; */
  }

  /* NOTE: CSS-only resizing (maybe rework using JS?) */
  @media (min-width: 992px) {
    .messenger__list {
      width: 375px;
      min-width: 250px;
      max-width: min(650px, 100%);
      resize: horizontal;
      overflow: auto;
    }
  }

  .messenger .nav-pills {
    --tblr-nav-pills-border-radius: 0px;
  }
</style>