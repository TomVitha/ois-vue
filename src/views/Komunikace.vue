<script setup lang="ts">
  import { ref, onMounted, computed, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  // markdown parser
  import { marked } from 'marked'
  // <select> UI control with autocomplete
  import TomSelect from 'tom-select'

  import MessageBadge from '@/components/MessageBadge.vue'

  import messagesMeta from '../messages/meta.json'
  import MessengerListItem from '@/components/MessengerListItem.vue'
  import MessengerAttachment from '@/components/MessengerAttachment.vue'

  import { useMessengerStore } from '@/stores/messenger'
  const messengerStore = useMessengerStore()

  const route = useRoute()
  const router = useRouter()

  const messages = ref<{ id: string, meta: any, content: string }[]>([])
  const selectedMessageId = ref<string | null>(null)


  // HACK
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
    new TomSelect("#select-recipient", {
      create: false,
    });
  })

  function selectMessage(messageId: string) {
    selectedMessageId.value = messageId
  }

  const selectedMessage = computed(() =>
    messages.value.find(msg => msg.id === selectedMessageId.value) || null
  )

  const selectedIndex = computed(() =>
    selectedMessage.value
      ? messages.value.findIndex(msg => msg.id === selectedMessage.value?.id)
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
    } else {
      router.replace({ query: {} })
    }
  })

  // Watch for changes in route.query
  watch(() => route.query.m, (newMsgId) => {
    if (newMsgId && newMsgId !== selectedMessageId.value) {
      selectMessage(newMsgId as string)
    } else if (!newMsgId && selectedMessageId.value) {
      selectedMessageId.value = null
    }
  })

  // TODO
  function discardDraft(event?: Event) {
    if (confirm("Opravdu chcete zahodit rozpracovanou zprávu?")) {
      console.debug("DISCARDED")
    } else {
      console.debug("canceled")
    }
  }
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
              <div class="modal" id="new-message-modal" tabindex="-1">
                <div class="modal-dialog modal-xl modal-dialog-centered modal-fullscreen-lg-down modal-dialog-scrollable" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Nová zpráva</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                        <!-- <div class="input-group input-group-flat">
                          <span class="input-group-text">Komu: </span><input type="text" class="form-control" autocomplete="off">
                        </div> -->
                        <!-- WIP - tom-select -->
                        <!-- TODO: Generalize -->
                        <div class="input-group input-group-flat">
                          <span class="input-group-text">Komu: </span>
                          <select class="form-control" id="select-recipient" placeholder="Vyberte příjemce..." autocomplete="off">
                            <option value="">Vyberte příjemce...</option>
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
                        <button type="button" class="btn btn-icon btn-ghost btn-danger" title="Zahodit" @click.prevent="discardDraft()">
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
              <div class="input-icon">
                <span class="input-icon-addon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M21 21l-6 -6"></path>
                  </svg>
                </span>
                <input type="text" value="" class="form-control" placeholder="Hledat ve zprávách…" aria-label="Hledat">
                <!-- TODO: Řazení (nejnovější, nejstarší), Filtrování (podle bytu, odesilatele), Vyhledávání?, Ne/přečtené, Ne/mají přílohu -->
                <!-- TODO? Paginace zpráv, výpis kolik z kolika -->
              </div>
              <!-- ? Maybe: Inbox / Sent ? -->
              <nav class="nav nav-segmented nav-2 w-100 mt-2" role="tablist">
                <button class="nav-link active" role="tab" data-bs-toggle="tab" aria-selected="true" aria-current="page">Přijaté</button>
                <button class="nav-link" role="tab" data-bs-toggle="tab" aria-selected="false" tabindex="-1">Odeslané</button>
              </nav>
            </div>
            <!-- Messages list -->
            <div class="card-body p-0 scrollable flex-fill">
              <div class="nav flex-column nav-pills">
                <MessengerListItem
                  v-for="msg in messages"
                  :key="msg.id"
                  :from="msg.meta.from"
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
                  <!-- PLACEHOLDER: Image from Outlook -->
                  <!-- TODO: Replace with custom image -->
                  <img src="https://res.public.onecdn.static.microsoft/assets/mail/illustrations/noMailSelected/v2/light.svg" alt="" class="hide-theme-dark" width="200">
                  <img src="https://res.public.onecdn.static.microsoft/assets/mail/illustrations/noMailSelected/v2/dark.svg" alt="" class="hide-theme-light" width="200">
                </div>
                <p class="empty-title">
                  <span v-if="messages.some(m => m.meta.isUnread)">
                    Nepřečtené zprávy ({{messages.filter(m => m.meta.isUnread).length}})
                  </span>
                  <span v-else>Schránka</span>
                </p>
                <p class="empty-subtitle text-secondary" style="text-wrap: pretty">
                  <span v-if="messages.length == 0">Nemáte žádné položky</span>
                  <span v-else-if="messages.length > 0">Vyberte některou ze svých {{ messages.length }} zpráv</span>
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
                    <button class="btn btn-link btn-action" title="Předchozí zpráva" @click="selectedMessageId = messages[selectedIndex - 1]?.id" :disabled="selectedIndex <= 0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                        <path d="M15 6l-6 6l6 6"></path>
                      </svg>
                    </button>
                    <!-- Next message -->
                    <button class="btn btn-link btn-action" title="Další zpráva" @click="selectedMessageId = messages[selectedIndex + 1]?.id" :disabled="selectedIndex === messages.length - 1 || selectedIndex === -1">
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
                    <MessageBadge :text="selectedMessage.meta.badge" />
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-flex justify-content-between flex-wrap">
                    <div>
                      <!-- from and date -->
                      <div class="font-weight-medium">Od: {{ selectedMessage.meta.from }}</div>
                      <div>
                        <span class="text-secondary fs-5">
                          {{
                            // TODO: Set locale according to global state
                            new Intl.DateTimeFormat(["cs-CZ"], {
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
            <!-- TODO: Reply button -->
            <!-- TODO: Print button -->
            <!-- TODO: Star/Important button ? -->
            <div class="card-body">
              <div class="markdown">
                <div v-html="selectedMessageHtml"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  :where(.theme-dark, [data-bs-theme="dark"]) .tblr-illustrations-not-found-a {
    fill: #1a2030;
  }

  :where(.theme-dark, [data-bs-theme="dark"]) .tblr-illustrations-not-found-b {
    fill: black;
    opacity: 0.07;
  }

  :where(.theme-dark, [data-bs-theme="dark"]) .tblr-illustrations-not-found-c {
    fill: #454c5e;
  }

  :where(.theme-dark, [data-bs-theme="dark"]) .tblr-illustrations-not-found-d {
    fill: #232b41;
  }

  @media (prefers-color-scheme: dark) {
    .tblr-illustrations-not-found-a {
      fill: #1a2030;
    }

    .tblr-illustrations-not-found-b {
      fill: black;
      opacity: 0.07;
    }

    .tblr-illustrations-not-found-c {
      fill: #454c5e;
    }

    .tblr-illustrations-not-found-d {
      fill: #232b41;
    }
  }
</style>