<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import AccordionGroup from '@/components/AccordionGroup.vue'
  import AccordionItem from '@/components/AccordionItem.vue'
</script>

<template>

  <PageTemplate title="Otázky a odpovědi">

    <div class="row">
      <div class="col-xl-10">
        <div class="row row-deck row-cards">
          <div class="col-12">
            <h3 class="m-0 mt-3">Nadpis sekce</h3>
          </div>
          <div class="col-12">
            <div class="card">
              <!-- <div class="card-header">
                <h3 class="card-title">Nadpis sekce</h3>
              </div> -->
              <div class="card-body p-0">
                <AccordionGroup id="sekce-jedna" class="accordion-flush">
                  <AccordionItem title="What makes Tabler different from other UI frameworks?">
                    Tabler offers a modern, responsive design with a clean aesthetic, built on Bootstrap for ease of use and flexibility.
                  </AccordionItem>
                  <AccordionItem title="How can I customize Tabler components to fit my design needs?">
                    You can customize Tabler components using CSS variables, SCSS, and utility classes to match your design preferences.
                  </AccordionItem>
                  <AccordionItem title="Is Tabler optimized for performance and fast loading times?">
                    Yes, Tabler is lightweight, optimized for modern browsers, and follows best practices for fast loading and efficiency.
                  </AccordionItem>
                  <AccordionItem title="How accessible are Tabler components?">
                    Tabler components follow WAI-ARIA standards and support keyboard navigation, screen readers, and accessibility best practices.
                  </AccordionItem>
                </AccordionGroup>
              </div>
            </div>
          </div>
          <div class="col-12">
            <h3 class="m-0 mt-3">Nadpis sekce</h3>
          </div>
          <div class="col-12">
            <div class="card">
              <!-- <div class="card-header">
                <h3 class="card-title">Nadpis sekce</h3>
              </div> -->
              <div class="card-body p-0">
                <AccordionGroup id="sekce-jedna" class="accordion-flush">
                  <AccordionItem title="What makes Tabler different from other UI frameworks?">
                    Tabler offers a modern, responsive design with a clean aesthetic, built on Bootstrap for ease of use and flexibility.
                  </AccordionItem>
                  <AccordionItem title="How can I customize Tabler components to fit my design needs?">
                    You can customize Tabler components using CSS variables, SCSS, and utility classes to match your design preferences.
                  </AccordionItem>
                  <AccordionItem title="Is Tabler optimized for performance and fast loading times?">
                    Yes, Tabler is lightweight, optimized for modern browsers, and follows best practices for fast loading and efficiency.
                  </AccordionItem>
                  <AccordionItem title="How accessible are Tabler components?">
                    Tabler components follow WAI-ARIA standards and support keyboard navigation, screen readers, and accessibility best practices.
                  </AccordionItem>
                </AccordionGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- 
      = FUNGOVÁNÍ KLIENTSKÉHO PORTÁLU (technikálie)
      - Jak si mohu změnit heslo?
      - Jak můžu změnit osobní údaje?
      - Zapomněl(a) jsem příhlašovací údaje
    

      Pro správné fungování klientského portálu je vyžadována minimální verze prohlížečů Chrome X, Firefox Y a Safari Z.
      Pokud jste na verzi iOS/iPad OS starší než 16.2, pak se vám stránka klientského portálu nemusí zobrazovat správně. Doporučujeme proto následující kroky:
      1)	Aktualizujte zařízení na nejnovější verzi operačního systému.
      2)	Pokud upozornění přetrvává, otevřete Nastavení > (Aplikace) > Safari > Pokročilé (úplně vespod) > Experimentální funkce / Příznaky funkcí - a ujistěte se, že máte zapnuté následující položky:
      -	:has() pseudo-class
      -	CSS color-mix()

    -->

  </PageTemplate>

</template>

<style scoped></style>