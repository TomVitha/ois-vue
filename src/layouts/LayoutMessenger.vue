<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import matter from 'gray-matter'
  import { marked } from 'marked'

  import NavbarVertical from '../components/NavbarVertical.vue'
  import Navbar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'

  import MessageMarkdown from '@/components/MessageMarkdown.vue'

  import MessengerListItem from '@/components/MessengerListItem.vue'


  // TEMP/DEV - to test many messages and page overflow
  // onMounted(() => {
  //   const el = document.querySelector('.nav-link[href="/msg-2"]')
  //   console.log(el)
  //   if (el && el.parentNode) {
  //     for (let i = 0; i < 15; i++) {
  //       el.parentNode.appendChild(el.cloneNode(true))
  //     }
  //   }
  // })

  // const msgs = import.meta.glob('@/messages/*.md')
  // console.log(msgs)


  const messages = ref<{ id: string, meta: any, content: string }[]>([])

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


</script>

<!-- ! TEĎ JSEM SI TO ROZBIL, SNAŽÍM SE ZPROVOZNIT NAČÍTÁNÍ ZPRÁV Z MARKDOWN -->

<template>
  <NavbarVertical />
  <Navbar />
  <div class="page-wrapper">
    <div class="page-body">
      <div class="container-fluid flex-fill space-y-0">
        <div class="messenger row row-deck row-cards flex-fill">
          <!-- TEMP HIDDEN -->
          <!-- Messages list column -->
          <div class="col-12 col-lg-auto d-flex flex-column messenger__list">
            <div class="card">
              <div class="card-header space-y-2 align-items-stretch ">
                <!-- Compose button -->
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
                  <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi
                        beatae delectus
                        deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio
                        perspiciatis, quia quis
                        reprehenderit sit tempora totam unde.
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
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
                </div>
              </div>
              <div class="card-body p-0 scrollable flex-fill">
                <div class="nav flex-column nav-pills">
                  <RouterLink to="/msg-1" class="nav-link text-start mw-100 px-4 py-3" aria-selected="false">
                    <div class="row align-items-center flex-fill mw-100">
                      <div class="col text-body">
                        <div class="d-flex align-items-center justify-content-between">
                          <span class="text-truncate">Odesilatel 1</span>
                          <div class="d-flex align-items-center gap-2 fs-5">
                            <i class="ti ti-paperclip"></i>
                            <span class="text-secondary">11:45</span>
                          </div>
                        </div>
                        <div class="fs-5 text-truncate w-100">Title (msg-1)</div>
                        <div class="d-flex align-items-center justify-content-between gap-2">
                          <span class="text-secondary fs-5 text-truncate">obsah zprávy</span>
                          <i class="ti ti-star text-secondary fs-3"></i>
                        </div>
                      </div>
                    </div>
                  </RouterLink>
                  <RouterLink to="/msg-2" class="nav-link text-start mw-100 px-4 py-3" aria-selected="false">
                    <div class="row align-items-center flex-fill mw-100">
                      <div class="col text-body">
                        <div class="d-flex align-items-center justify-content-between">
                          <span class="text-truncate">Odesilatel 2</span>
                          <div class="d-flex align-items-center gap-2 fs-5">
                            <i class="ti ti-paperclip"></i>
                            <span class="text-secondary">11:45</span>
                          </div>
                        </div>
                        <div class="fs-5 text-truncate w-100">Title (msg-2)</div>
                        <div class="d-flex align-items-center justify-content-between gap-2">
                          <span class="text-secondary fs-5 text-truncate">obsah zprávy</span>
                          <i class="ti ti-star text-secondary fs-3"></i>
                        </div>
                      </div>
                    </div>
                  </RouterLink>
                  <span>----------------------------------</span>
                  <MessengerListItem
                    v-for="msg in messages"
                    :key="msg.id"
                    :from="msg.meta.from"
                    :to="msg.meta.to"
                    :datetime="msg.meta.datetime"
                    :subject="msg.meta.subject"
                    :content="msg.content"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Message body column -->
          <div class="col d-flex flex-column messenger__body">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>