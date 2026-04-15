<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import ContactBlock from '@/components/ContactCard.vue'
  import ProductGroup from '@/components/ProductGroup.vue';
  import ProductGroupItem from '@/components/ProductGroupItem.vue';
</script>

<template>
  <PageTemplate title="Kontakty">

    <template #actions>
      <div class="btn-list">
        <RouterLink to="/klientske-zmeny#dodavatele">
          Kontakty na dodavatele
        </RouterLink>
      </div>
    </template>

    <div class="row row-cards row-deck">

      <div class="col-12">
        <ProductGroup>
          <ProductGroupItem title="192-03-147" subtitle="Celkem 2" id="192-03-147">
            <div class="row row-cards row-deck">
              <div class="col-sm-6 col-lg-6 col-xxl-4">
                <ContactBlock
                  name="Homo Sapiens"
                  position="Lidský zástupce společnosti"
                  phone="+420 123 456 789"
                  email="homo.sapiens@central-group.cz"
                  imgURL="https://files.idyllic.app/files/static/151605?width=256&optimizer=image" />
              </div>
              <div class="col-sm-6 col-lg-6 col-xxl-4">
                <ContactBlock
                  name="Homo Sapiens"
                  position="Lidský zástupce společnosti"
                  phone="+420 123 456 789"
                  email="homo.sapiens@central-group.cz"
                  imgURL="https://files.idyllic.app/files/static/151603?width=256&optimizer=image" />
              </div>
            </div>
          </ProductGroupItem>
          <ProductGroupItem title="Obecné" subtitle="Celkem 2" id="obecne">
            <div class="row row-cards row-deck">
              <div class="col-sm-6 col-lg-6 col-xxl-4">
                <!-- TODO: Oddělení budou mít non-human obrázky -->
                <ContactBlock
                  name="Konzultační centrum"
                  position="Lidský zástupce společnosti"
                  phone="+420 123 456 789"
                  email="homo.sapiens@central-group.cz"
                  imgURL="https://files.idyllic.app/files/static/151604?width=256&optimizer=image" />
              </div>
              <div class="col-sm-6 col-lg-6 col-xxl-4">
                <ContactBlock
                  name="uverove poradenství"
                  position="Lidská zástupkyně společnosti"
                  phone="+420 987 654 321"
                  email="	homo.sapiensova@central-group.cz"
                  imgURL="https://files.idyllic.app/files/static/152445?width=256&optimizer=image" />
              </div>
            </div>
          </ProductGroupItem>
        </ProductGroup>
      </div>

    </div>
  </PageTemplate>
</template>

<style scoped></style>