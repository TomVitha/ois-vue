<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import matter from 'gray-matter'
  import { marked } from 'marked'

  // import MessageMarkdown from '@/components/MessageMarkdown.vue'
  import MessengerListItem from '@/components/MessengerListItem.vue'
  // import MessageTemplate from '@/components/MessageTemplate.vue'

  import hugeRTE from 'hugerte'
  import hugerteIframe from '@/components/HugeRTE.vue'

  const messages = ref<{ id: string, meta: any, content: string }[]>([])
  const selectedMessage = ref<{ id: string, meta: any, content: string } | null>(null)

  onMounted(async () => {
    // Import all markdown files as raw text
    const modules = import.meta.glob('../messages/*.md', { query: '?raw', import: 'default' })
    const entries = Object.entries(modules)
    const loaded = await Promise.all(
      entries.map(async ([path, loader]) => {
        const raw = await loader()
        const parsed = matter(raw)
        // Extract a simple id from filename
        const id = path.split('/').pop()?.replace('.md', '') ?? path
        return { id, meta: parsed.data, content: parsed.content }
      })
    )
    messages.value = loaded
  })

  const selectedIndex = computed(() =>
    selectedMessage.value
      ? messages.value.findIndex(msg => msg.id === selectedMessage.value?.id)
      : -1
  )

  const selectedMessageHtml = computed(() =>
    selectedMessage.value ? marked.parse(selectedMessage.value.content) : ''
  )

  // onMounted(() => {
  //   let hugerteOptions = {
  //     selector: '#hugerte-mytextarea',
  //     height: 300,
  //     menubar: false,
  //     statusbar: false,
  //     plugins: [
  //       'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
  //       'preview', 'anchor',
  //       'searchreplace', 'visualblocks', 'code', 'fullscreen',
  //       'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
  //     ],
  //     toolbar: 'undo redo | formatselect | ' +
  //       'bold italic backcolor | alignleft aligncenter ' +
  //       'alignright alignjustify | bullist numlist outdent indent | ' +
  //       'removeformat',
  //     content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; font-size: 14px; -webkit-font-smoothing: antialiased; }'
  //   }

  //   // if (localStorage.getItem("tablerTheme") === 'dark') {
  //   //   hugerteOptions.skin = 'oxide-dark';
  //   //   hugerteOptions.content_css = 'dark';
  //   // }

  //   hugeRTE.init(hugerteOptions);
  // })

</script>

<template>
  <div class="page-body">
    <div class="container-fluid flex-fill space-y-0">
      <div class="messenger row row-deck row-cards flex-fill">
        <!-- Messages list column -->
        <div class="col-12 col-lg-auto d-flex flex-column messenger__list" :class="{ 'd-none d-lg-flex': selectedMessage }">
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
                        <div class="input-group input-group-flat">
                          <span class="input-group-text">Od: </span><input type="text" class="form-control" autocomplete="off" value="Adam Novák" readonly>
                        </div>
                        <div class="input-group input-group-flat">
                          <span class="input-group-text">Komu: </span><input type="text" class="form-control" autocomplete="off">
                        </div>
                        <div class="input-group input-group-flat">
                          <span class="input-group-text">Předmět: </span><input type="text" class="form-control" autocomplete="off" aria-label="Předmět zprávy">
                        </div>
                        <textarea name="" id="" placeholder="Pište zprávu..." class="form-control flex-fill" data-bs-toggle="autosize" style="min-height: 200px"></textarea>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <div class="button-actions me-auto">
                        <!-- Scrap -->
                        <button type="button" class="btn btn-icon btn-ghost btn-danger" title="Zahodit" data-bs-dismiss="modal">
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
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-send-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" /><path d="M6.5 12h14.5" /></svg>
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
                <input type="text" value="" class="form-control" placeholder="Hledat…" aria-label="Hledat">
                <!-- TODO: Řazení (nejnovější, nejstarší), Filtrování (podle bytu, odesilatele), Vyhledávání?, Ne/přečtené, Ne/mají přílohu -->
              </div>
            </div>
            <!-- Messages list -->
            <div class="card-body p-0 scrollable flex-fill">
              <div class="nav flex-column nav-pills">
                <MessengerListItem v-for="msg in messages" :key="msg.id" :from="msg.meta.from" :datetime="msg.meta.datetime.toISOString()" :subject="msg.meta.subject" :content="msg.content" :badge="msg.meta.badge" @click.prevent="selectedMessage = msg"></MessengerListItem>
              </div>
            </div>
          </div>
        </div>
        <!-- Message body column -->
        <div class="col d-flex flex-column messenger__body" :class="{ 'd-none d-lg-flex': !selectedMessage }">
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
                <p class="empty-title">Schránka</p>
                <p class="empty-subtitle text-secondary" style="text-wrap: pretty">
                  <span v-if="messages.length == 0">Nemáte žádné položky</span>
                  <span v-else-if="messages.length > 0">Vyberte některou ze svých {{ messages.length }} zpráv</span>
                </p>
              </div>
            </div>
          </div>
          <!-- Else if a message is selected: show message content -->
          <div class="card scrollable" v-else id="message-view">
            <div class="card-header">
              <div class="row w-100 row-gap-3">
                <div class="col-12 col-xl-auto d-lg-none">
                  <div class="btn-actions mx-n3 my-n2">
                    <!-- Prev message -->
                    <button class="btn btn-link btn-action" title="Předchozí zpráva" @click="selectedMessage = messages[selectedIndex - 1]" :disabled="selectedIndex <= 0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                        <path d="M15 6l-6 6l6 6"></path>
                      </svg>
                    </button>
                    <!-- Next message -->
                    <button class="btn btn-link btn-action" title="Další zpráva" @click="selectedMessage = messages[selectedIndex + 1]" :disabled="selectedIndex === messages.length - 1 || selectedIndex === -1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-end icon-2">
                        <path d="M9 6l6 6l-6 6"></path>
                      </svg>
                    </button>
                    <!--  Close message -->
                    <button class="btn btn-link btn-action ms-auto" title="Zavřít zprávu" @click="selectedMessage = null">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="col">
                  <div class="space-y-2 w-100">
                    <div>
                      <h2 class="d-inline m-0">{{ selectedMessage.meta.subject }}</h2>
                      <span v-if="selectedMessage.meta.badge" class="badge bg-azure-lt d-inline-block ms-2 mb-1">{{ selectedMessage.meta.badge }}</span>
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
                            }).format(new Date(selectedMessage.meta.datetime.toISOString()))
                          }}
                        </span>
                      </div>
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