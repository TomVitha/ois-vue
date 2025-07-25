<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
</script>

<template>

  <!-- <PageTemplate title="Komunikace"> -->
  <!-- <template #actions>
      <div class="btn-list">
        <a href="#" class="btn btn-1">něco</a>
        <button class="btn btn-primary">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
          Nová zpráva
        </button>
      </div>
    </template> -->
  <div class="card flex-fill messenger border-top-0 border-start-0 border-end-0 rounded-0">
    <div class="row g-0 flex-fill">
      <div class="col-12 col-lg-auto d-flex flex-column border-end messenger__list">
        <div class="card-header space-y-2 align-items-stretch ">
          <!-- Compose button -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#new-message-modal">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
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
          <div class="nav flex-column nav-pills" role="tablist">
            <a href="#chat-1" class="nav-link text-start mw-100 ps-4 pe-1 py-3" data-bs-toggle="pill" role="tab" aria-selected="true">
              <div class="row align-items-center flex-fill mw-100">
                <div class="col text-body">
                  <div class="d-flex align-items-center justify-content-between">
                    <span class="text-truncate">Srnec Vladimír Ing.</span>
                    <div class="d-flex align-items-center gap-2 fs-5">
                      <i class="ti ti-paperclip"></i>
                      <span class="text-secondary">11:45</span>
                    </div>
                  </div>
                  <div class="fs-5 text-truncate w-100">Návrh smlouvy o dílo</div>
                  <div class="d-flex align-items-center justify-content-between gap-2">
                    <span class="text-secondary fs-5 text-truncate">Dobrý den, dovolujeme si vás informovat o této důležité záležitosti. Prosím vemte ji na vědomí</span>
                    <i class="ti ti-star text-secondary fs-3"></i>
                  </div>
                </div>
              </div>
            </a>
            <a href="#chat-2" class="nav-link text-start mw-100 px-4 py-3" id="chat-2-tab" data-bs-toggle="pill" role="tab" aria-selected="false" tabindex="-1">
              <div class="row align-items-center flex-fill mw-100">
                <div class="col text-body">
                  <div>Jeffie Lewzey</div>
                  <div class="text-secondary text-truncate w-100">I'm on it too 👊</div>
                </div>
              </div>
            </a>
            <a href="#chat-3" class="nav-link text-start mw-100 px-4 py-3" id="chat-3-tab" data-bs-toggle="pill" role="tab" aria-selected="false" tabindex="-1">
              <div class="row align-items-center flex-fill mw-100">
                <div class="col text-body">
                  <div>Mallory Hulme</div>
                  <div class="text-secondary text-truncate w-100">
                    I see you've refactored the <code>calculateStatistics</code> function. The code is much cleaner
                    now.
                  </div>
                </div>
              </div>
            </a>
            <a href="#chat-4" class="nav-link text-start mw-100 px-4 py-3" id="chat-4-tab" data-bs-toggle="pill" role="tab" aria-selected="false" tabindex="-1">
              <div class="row align-items-center flex-fill mw-100">
                <div class="col text-body">
                  <div>Dunn Slane</div>
                  <div class="text-secondary text-truncate w-100">Yes, I thought it was getting a bit cluttered.
                  </div>
                </div>
              </div>
            </a>
            <a href="#chat-5" class="nav-link text-start mw-100 px-4 py-3" id="chat-5-tab" data-bs-toggle="pill" role="tab" aria-selected="false" tabindex="-1">
              <div class="row align-items-center flex-fill mw-100">
                <div class="col text-body">
                  <div>Emmy Levet</div>
                  <div class="text-secondary text-truncate w-100">
                    The commit message is descriptive, too. Good job on mentioning the issue number it fixes.
                  </div>
                </div>
              </div>
            </a>
            <a href="#chat-6" class="nav-link text-start mw-100 px-4 py-3" id="chat-6-tab" data-bs-toggle="pill" role="tab" aria-selected="false" tabindex="-1">
              <div class="row align-items-center flex-fill mw-100">
                <div class="col text-body">
                  <div>Maryjo Lebarree</div>
                  <div class="text-secondary text-truncate w-100">
                    I noticed you added some new dependencies in the <code>package.json</code>. Did you also update
                    the <code>README</code> with the
                    setup instructions?
                  </div>
                </div>
              </div>
            </a>
            <a href="#chat-7" class="nav-link text-start mw-100 px-4 py-3" id="chat-7-tab" data-bs-toggle="pill" role="tab" aria-selected="false" tabindex="-1">
              <div class="row align-items-center flex-fill mw-100">
                <div class="col text-body">
                  <div>Egan Poetz</div>
                  <div class="text-secondary text-truncate w-100">Oops, I forgot. I'll add that right away.</div>
                </div>
                <div class="col-auto">🌴</div>
              </div>
            </a>
            <a href="#chat-8" class="nav-link text-start mw-100 px-4 py-3" id="chat-8-tab" data-bs-toggle="pill" role="tab" aria-selected="false" tabindex="-1">
              <div class="row align-items-center flex-fill mw-100">
                <div class="col text-body">
                  <div>Kellie Skingley</div>
                  <div class="text-secondary text-truncate w-100">
                    I see a couple of edge cases we might not be handling in the <code>calculateStatistic</code>
                    function. Should I open an issue for
                    that?
                  </div>
                </div>
              </div>
            </a>
            <a href="#chat-9" class="nav-link text-start mw-100 px-4 py-3" id="chat-9-tab" data-bs-toggle="pill" role="tab" aria-selected="false" tabindex="-1">
              <div class="row align-items-center flex-fill mw-100">
                <div class="col text-body">
                  <div>Christabel Charlwood</div>
                  <div class="text-secondary text-truncate w-100">Yes, Bob. Please do. We should not forget to
                    handle those.</div>
                </div>
              </div>
            </a>
            <a href="#chat-10" class="nav-link text-start mw-100 px-4 py-3" id="chat-10-tab" data-bs-toggle="pill" role="tab" aria-selected="false" tabindex="-1">
              <div class="row align-items-center flex-fill mw-100">

                <div class="col text-body">
                  <div>Haskel Shelper</div>
                  <div class="text-secondary text-truncate w-100">
                    Alright, once the <code>README</code> is updated, I'll merge this commit into the main branch.
                    Nice work, Paweł.
                  </div>
                </div>
              </div>
            </a>
            <a href="#chat-11" class="nav-link text-start mw-100 px-4 py-3" id="chat-11-tab" data-bs-toggle="pill" role="tab" aria-selected="false" tabindex="-1">
              <div class="row align-items-center flex-fill mw-100">

                <div class="col text-body">
                  <div>Haskel Shelper</div>
                  <div class="text-secondary text-truncate w-100">
                    Alright, once the <code>README</code> is updated, I'll merge this commit into the main branch.
                    Nice work, Paweł.
                  </div>
                </div>
              </div>
            </a>
            <a href="#chat-12" class="nav-link text-start mw-100 px-4 py-3" id="chat-12-tab" data-bs-toggle="pill" role="tab" aria-selected="false" tabindex="-1">
              <div class="row align-items-center flex-fill mw-100">

                <div class="col text-body">
                  <div>Haskel Shelper</div>
                  <div class="text-secondary text-truncate w-100">
                    Alright, once the <code>README</code> is updated, I'll merge this commit into the main branch.
                    Nice work, Paweł.
                  </div>
                </div>
              </div>
            </a>
            <a href="#chat-13" class="nav-link text-start mw-100 px-4 py-3" id="chat-13-tab" data-bs-toggle="pill" role="tab" aria-selected="false" tabindex="-1">
              <div class="row align-items-center flex-fill mw-100">

                <div class="col text-body">
                  <div>Haskel Shelper</div>
                  <div class="text-secondary text-truncate w-100">
                    Alright, once the <code>README</code> is updated, I'll merge this commit into the main branch.
                    Nice work, Paweł.
                  </div>
                </div>
              </div>
            </a>
            <a href="#chat-14" class="nav-link text-start mw-100 px-4 py-3" id="chat-14-tab" data-bs-toggle="pill" role="tab" aria-selected="false" tabindex="-1">
              <div class="row align-items-center flex-fill mw-100">

                <div class="col text-body">
                  <div>Haskel Shelper</div>
                  <div class="text-secondary text-truncate w-100">
                    Alright, once the <code>README</code> is updated, I'll merge this commit into the main branch.
                    Nice work, Paweł.
                  </div>
                </div>
              </div>
            </a>
            <a href="#chat-15" class="nav-link text-start mw-100 px-4 py-3" id="chat-15-tab" data-bs-toggle="pill" role="tab" aria-selected="false" tabindex="-1">
              <div class="row align-items-center flex-fill mw-100">

                <div class="col text-body">
                  <div>Haskel Shelper</div>
                  <div class="text-secondary text-truncate w-100">
                    Alright, once the <code>README</code> is updated, I'll merge this commit into the main branch.
                    Nice work, Paweł.
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="col d-flex flex-column messenger__body">
        <div class="card-body scrollable tab-content">
          <div class="tab-pane" id="chat-1">
            <div class="chat">
              <h2 class="mb-4">Návrh smlouvy o dílo</h2>
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <!-- <span class="avatar avatar-2 me-3" style="background-image: url(./static/avatars/052f.jpg)"> </span> -->
                  <div>
                    <div class="font-weight-medium">Od: Srnec Vladimír Ing.</div>
                    <div class="text-secondary">Komu: Novák Adam</div>
                  </div>
                </div>
                <div>
                  <span class="text-secondary fs-5">Po 09.06.2025 13:41</span>
                </div>
              </div>
              <div class="markdown mt-5">
                <p>Dobrý den,</p>
                <p>dovolujeme si vás informovat o této důležité záležitosti. Prosím vemte ji na vědomí.</p>
                <p>S přáním hezkého dne <br>Vladimír Srnec</p>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="chat-2">
            <h1>TEEEEEEEEEEST</h1>
          </div>
        </div>
        <div class="card-footer">
          <div class="input-group input-group-flat">
            <input type="text" class="form-control" autocomplete="off" placeholder="Type message">
            <span class="input-group-text">
              <a href="#" class="link-secondary" data-bs-toggle="tooltip" aria-label="Clear search" data-bs-original-title="Clear search">
                <!-- Download SVG icon from http://tabler.io/icons/icon/mood-smile -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                  <path d="M9 10l.01 0"></path>
                  <path d="M15 10l.01 0"></path>
                  <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
                </svg>
              </a>
              <a href="#" class="link-secondary ms-2" data-bs-toggle="tooltip" aria-label="Add notification" data-bs-original-title="Add notification">
                <!-- Download SVG icon from http://tabler.io/icons/icon/paperclip -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                  <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5">
                  </path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </PageTemplate> -->

</template>

<style scoped></style>