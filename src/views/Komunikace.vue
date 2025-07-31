<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import matter from 'gray-matter'
  import { marked } from 'marked'

  // import MessageMarkdown from '@/components/MessageMarkdown.vue'
  import MessengerListItem from '@/components/MessengerListItem.vue'
  // import MessageTemplate from '@/components/MessageTemplate.vue'

  // import hugeRTE from 'hugerte'
  // import hugerteIframe from '@/components/HugeRTE.vue'

  const messages = ref<{ id: string, meta: any, content: string }[]>([])
  import messagesMeta from '../messages/meta.json'

  // Import markdown messages and their metadata
  onMounted(async () => {
    const modules = import.meta.glob('../messages/*.md', { query: '?raw', import: 'default' })
    const entries = Object.entries(modules)
    const loaded = await Promise.all(
      entries.map(async ([path, loader]) => {
        const raw = await loader()
        const parsed = matter(raw)
        const id = path.split('/').pop()?.replace('.md', '') ?? path  // Extract filename from path and use as ID
        return { id, content: parsed.content }
      })
    )
    messages.value = messagesMeta.map(meta => {
      const contentObj = loaded.find(l => l.id === meta.id)
      return {
        id: meta.id,
        meta: meta,
        content: contentObj?.content ?? ''
      }
    })
    // debug log messages
    console.debug("Loaded messages:", messages.value)
  })


  const selectedMessageId = ref<string | null>(null)
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

  function discardDraft(event?: Event) {

    if (confirm("Opravdu chcete zahodit rozpracovanou zprávu?")) {
      console.debug("DISCARDED")
    } else {
      console.debug("canceled")
    }
  }

  import MessengerAttachment from '@/components/MessengerAttachment.vue'

  const selectedOption = ref('')

  // TODO: Generalize -> TO COMPONENT!
  import TomSelect from 'tom-select'

  onMounted(() => {
    new TomSelect("#select-beast", {
      create: false,
      // render: {
      //   no_results: function(data, escape) {
      //     return `<div class="no-results">Žádné výsledky nenalezeny.</div>`;
      //   },
      //   option_create: function(data, escape) {
      //     return `<div class="create">Přidat <strong>${escape(data.input)}</strong>&hellip;</div>`;
      //   }
      // },
    });
  })



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
                      <!-- <form method="post">
                        <textarea id="hugerte-mytextarea">Hello, <b>Tabler</b>!</textarea>
                      </form> -->
                      <!-- <hugerteIframe></hugerteIframe> -->
                      <div class="space-y-3 h-100">
                        <div class="input-group">
                          <span class="input-group-text">Od: </span><input type="text" class="form-control" autocomplete="off" value="Adam Novák" readonly>
                        </div>
                        <!-- <div class="input-group input-group-flat">
                          <span class="input-group-text">Komu: </span><input type="text" class="form-control" autocomplete="off">
                        </div> -->
                        <!-- WIP - tom-select -->
                        <!-- TODO: Generalize -->
                        <div class="input-group">
                          <span class="input-group-text">Komu: </span>
                          <select class="form-control" id="select-beast" placeholder="Vyberte příjemce..." autocomplete="off">
                            <option value="">Select a person...</option>
                            <option value="4">Thomas Edison</option>
                            <option value="1">Nikola</option>
                            <option value="3">Nikola Tesla</option>
                            <option value="5">Arnold Schwarzenegger</option>
                          </select>
                        </div>
                        <div class="input-group">
                          <span class="input-group-text">Předmět: </span><input type="text" class="form-control" autocomplete="off" aria-label="Předmět zprávy">
                        </div>
                        <textarea name="" id="" placeholder="Pište zprávu..." class="form-control flex-fill" data-bs-toggle="autosize" style="min-height: 200px"></textarea>
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
                        <span>Odeslat</span>
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
                <!-- TODO: Paginace zpráv, výpis kolik z kolika -->
              </div>
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
                  @click.prevent="selectedMessageId = msg.id; msg.meta.isUnread = false"
                />
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
                  <!-- TEMP Envelope image from outlook -->
                  <!-- TODO: Replace with custom image -->
                  <img src="https://res.public.onecdn.static.microsoft/assets/mail/illustrations/noMailSelected/v2/light.svg" alt="" class="hide-theme-dark" width="200">
                  <img src="https://res.public.onecdn.static.microsoft/assets/mail/illustrations/noMailSelected/v2/dark.svg" alt="" class="hide-theme-light" width="200">
                </div>
                <p class="empty-title">
                  <span v-if="messages.some(m => m.meta.isUnread)">
                  Nepřečtené zprávy ({{ messages.filter(m => m.meta.isUnread).length }})
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
            <div class="card-header">
              <div class="space-y-3 flex-fill">
                <div class="col-12 col-xl-auto d-lg-none">
                  <div class="btn-actions mx-n3 my-n2">
                    <!-- Prev message -->
                    <!-- Prev message -->
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
                <div class="col">
                  <div class="w-100">
                    <div>
                      <h2 class="d-inline m-0">{{ selectedMessage.meta.subject }}</h2>
                      <span v-if="selectedMessage.meta.badge" class="badge bg-default text-default-fg d-inline-block ms-2 mb-1">{{ selectedMessage.meta.badge }}</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <div>
                        <div class="font-weight-medium">Od: {{ selectedMessage.meta.from }}</div>
                      </div>
                      <div>
                        <span class="text-secondary fs-5">
                          {{
                            // TODO: Set locale according to global state
                            new Intl.DateTimeFormat(["cs-CZ"], {
                              weekday: 'short',
                              day: '2-digit',
                              month: '2-digit',
                              // include year only if it is different from current year
                              // year: new Date(datetime).getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined,
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            }).format(new Date(selectedMessage.meta.datetime))
                          }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Attachments -->
                <!-- FIXME: Only show container element if there are any attachments -->
                <div class="col-12" v-if="Array.isArray(selectedMessage.meta.attachments) && selectedMessage.meta.attachments.length > 0">
                  <div class="row row-gap-2">
                    <div class="col-12 col-lg-auto">
                      <MessengerAttachment v-for="attachment in selectedMessage.meta.attachments" :filename="attachment.filename" :size="attachment.size" :filetype="attachment.filetype" :url="attachment.url"></MessengerAttachment>
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