<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import NewsItem from '@/components/NewsItem.vue'
</script>

<template>

  <PageTemplate title="Novinky">
    <div class="row row-cards">
      <div class="col-12">
        <NewsItem 
          title="Navštivte náš ukázkový byt v projektu Mikroviladomy Sherwood" 
          date="04. 07. 2025" 
          body="Od 31.2.2025 až do tepelné smrti vesmíru máte možnosti přijít a vidět ten náš skvost na vlastní oči."
          imgURL="https://live-production.wcms.abc-cdn.net.au/07c84fef27767547de4d2bf4a8f29787?impolicy=wcms_crop_resize&cropH=701&cropW=1246&xPos=201&yPos=72&width=862&height=485" 
          category="promo" 
          :is-unread="true"
        />
      </div>
      <div class="col-12">
        <NewsItem 
          title="Vítejte v rodině Central Group" 
          date="03. 11. 2024" 
          body="Jsme rádi, že jste se rozhodli nám dát všechny své peníze co máte, a k tomu i ty co nemáte."
          category="welcome"
        />
      </div>
    </div>
  </PageTemplate>

</template>