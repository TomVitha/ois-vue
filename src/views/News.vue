<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import NewsItem from '@/components/NewsItem.vue'
</script>

<template>

  <PageTemplate title="Novinky a nabídky">
    <div class="row row-cards">
      <div class="col-12">
        <a href="https://google.com" class="card">
          <!-- Photo -->
          <!-- ? maybe keep or remove ? now hidden on desktop -->
          <!-- <div class="img-responsive img-responsive-16x9 card-img-top d-lg-none" style="background-image: url('https://picsum.photos/1200/720')"></div> -->
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                <small class="text-secondary">
                  <span class="badge badge-dot bg-primary d-inline-block me-1"></span>
                  04.07.2025
                </small>
                <h3 class="card-title mb-0">Navštivte náš ukázkový byt v projektu Mikroviladomy Sherwood</h3>
              </div>
              <div class="col-auto">
                <div class="avatar bg-yellow-lt text-yellow-lt-fg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-bulb">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                    <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                    <path d="M9.7 17l4.6 0" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="mt-1">
              <span>
                Od 31.2.2025 až do tepelné smrti vesmíru máte možnosti přijít a vidět ten náš skvost na vlastní oči.
              </span>
            </div>
          </div>
        </a>
      </div>
      <div class="col-12">
        <a href="https://google.com" class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                <small class="text-secondary">
                  <span class="badge badge-dot bg-primary d-inline-block me-1"></span>
                  23.06.2025
                </small>
                <h3 class="card-title mb-0">Slevy na blátové obklady v Central Interier</h3>
              </div>
              <div class="col-auto">
                <div class="avatar bg-blue-lt text-blue-lt-fg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M12 9h.01" />
                    <path d="M11 12h1v4h1" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="mt-1">
              <span>
                Nikdo nám je nechce kupovat, tak na ně dáváme 1% slevu, kterou lze uplatnit při splnění prostých 37 kriterií.
              </span>
            </div>
          </div>
        </a>
      </div>
      <div class="col-12">
        <a href="https://google.com" class="card">
          <div class="card-body row align-items-center row-gap-1">
            <div class="col-lg-auto">
              <div class="row">
                <div class="col">
                  <small class="text-secondary">
                    <!-- <span class="badge badge-dot bg-primary d-inline-block me-1"></span> -->
                    03.11.2024
                  </small>
                  <h3 class="card-title mb-0">Vítejte v rodině Central Group</h3>
                </div>
                <div class="col-auto order-lg-first">
                  <div class="avatar bg-green-lt text-green-lt-fg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-confetti">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 5a1 1 0 0 1 1 -1a1 1 0 0 1 1.993 -.117l.007 .117a1 1 0 0 1 .117 1.993l-.117 .007a1 1 0 1 1 -2 0a1 1 0 0 1 -1 -1m7.53 -1.243a1 1 0 1 1 1.94 .486l-.5 2a1 1 0 1 1 -1.94 -.486zm6.47 1.243a1 1 0 0 1 1 -1a1 1 0 0 1 1.993 -.117l.007 .117a1 1 0 0 1 .117 1.993l-.117 .007a1 1 0 0 1 -2 0a1 1 0 0 1 -1 -1m-8.81 4.293l6.517 6.518a1 1 0 0 1 -.29 1.617l-9.573 4.387a2 2 0 0 1 -2.661 -2.652l4.39 -9.58a1 1 0 0 1 1.616 -.29m7.517 -1a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1 -1.414 -1.414l1 -1a1 1 0 0 1 1.414 0m4.05 3.237a1 1 0 0 1 .486 1.94l-2 .5a1 1 0 0 1 -.486 -1.94zm-2.756 7.47a1 1 0 0 1 1 -1a1 1 0 0 1 1.993 -.117l.007 .117a1 1 0 0 1 .117 1.993l-.117 .007a1 1 0 0 1 -2 0a1 1 0 0 1 -1 -1"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg">
              <span>
                Jsme rádi, že jste se rozhodli nám dát všechny své peníze co máte, a k tomu i ty co nemáte.
              </span>
            </div>
          </div>
        </a>
      </div>
      <div class="col-12">
        <NewsItem 
          title="Nadpis komponentu" 
          date="31.02.2069" 
          body="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imgURL="https://picsum.photos/1200/720" 
          category="promo" 
          :is-unread="true"
        />
      </div>
    </div>
  </PageTemplate>

</template>