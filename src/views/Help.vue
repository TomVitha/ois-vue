<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import AccordionGroup from '@/components/AccordionGroup.vue'
  import AccordionItem from '@/components/AccordionItem.vue'
</script>

<template>

  <PageTemplate title="Otázky a odpovědi">

    <div class="row gx-5" data-bs-spy="scroll" data-bs-target="#pills">
      <div class="col-xl-10">
        <div class="row row-cards">
          <div class="col-12">
            <h3 class="my-2">Klientský portál</h3>
            <div class="card">
              <div class="card-body p-0">
                <AccordionGroup id="klientsky-portal" class="accordion-flush">
                  <AccordionItem title="Jak si můžu změnit přístupové heslo?">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sunt minus esse ex iusto suscipit laborum veniam voluptatum numquam, mollitia ipsa adipisci temporibus non libero, aliquam id tempore, quasi deserunt.
                  </AccordionItem>
                  <AccordionItem title="Co dělat, když jsem zapomněl své přihlašovací údaje?">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sunt minus esse ex iusto suscipit laborum veniam voluptatum numquam, mollitia ipsa adipisci temporibus non libero, aliquam id tempore, quasi deserunt.
                  </AccordionItem>
                  <AccordionItem title="Jak můžu změnit osobní údaje?">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sunt minus esse ex iusto suscipit laborum veniam voluptatum numquam, mollitia ipsa adipisci temporibus non libero, aliquam id tempore, quasi deserunt.
                  </AccordionItem>
                </AccordionGroup>
              </div>
            </div>
          </div>
          <div class="col-12">
            <h3 class="my-2">Termínové sekce</h3>
            <div class="card">
              <div class="card-body p-0">
                <AccordionGroup id="terminove-sekce" class="accordion-flush">
                  <AccordionItem title="Jak se připravit na danou termínovou sekci?">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sunt minus esse ex iusto suscipit laborum veniam voluptatum numquam, mollitia ipsa adipisci temporibus non libero, aliquam id tempore, quasi deserunt.
                  </AccordionItem>
                  <AccordionItem title="Jaký je proces, co znamená termínová sekce?">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sunt minus esse ex iusto suscipit laborum veniam voluptatum numquam, mollitia ipsa adipisci temporibus non libero, aliquam id tempore, quasi deserunt.
                  </AccordionItem>
                  <AccordionItem title="Kdy nejlépe termínovou sekci začít řešit?">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sunt minus esse ex iusto suscipit laborum veniam voluptatum numquam, mollitia ipsa adipisci temporibus non libero, aliquam id tempore, quasi deserunt.
                  </AccordionItem>
                  <AccordionItem title="Co která termínová sekce obsahuje, co je jejím předmětem?">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sunt minus esse ex iusto suscipit laborum veniam voluptatum numquam, mollitia ipsa adipisci temporibus non libero, aliquam id tempore, quasi deserunt.
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