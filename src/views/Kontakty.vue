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
                  imgAvatarURL="https://files.idyllic.app/files/static/151605?width=256&optimizer=image" />
              </div>
              <div class="col-sm-6 col-lg-6 col-xxl-4">
                <ContactBlock
                  name="Homo Sapiens"
                  position="Lidský zástupce společnosti"
                  phone="+420 123 456 789"
                  email="homo.sapiens@central-group.cz"
                  imgAvatarURL="https://files.idyllic.app/files/static/151603?width=256&optimizer=image" />
              </div>
            </div>
          </ProductGroupItem>
          <ProductGroupItem title="Obecné" subtitle="Celkem 2" id="obecne">
            <div class="row row-cards row-deck">
              <div class="col-sm-6 col-lg-6 col-xxl-4">
                <ContactBlock
                  name="Konzultační centrum"
                  phone="+420 123 456 789"
                  email="konzultace@central-group.cz">
                  <template #avatar>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" />
                      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                      <path d="M12 12l0 .01" />
                      <path d="M3 13a20 20 0 0 0 18 0" />
                    </svg>
                  </template>
                </ContactBlock>
              </div>
              <div class="col-sm-6 col-lg-6 col-xxl-4">
                <ContactBlock
                  name="Úvěrové poradenství"
                  phone="+420 987 654 321"
                  email="	uvery@central-group.cz">
                  <template #avatar>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-coins">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3" />
                      <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
                      <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598" />
                      <path d="M3 6v10c0 .888 .772 1.45 2 2" />
                      <path d="M3 11c0 .888 .772 1.45 2 2" />
                    </svg>
                  </template>
                </ContactBlock>
              </div>
            </div>
          </ProductGroupItem>
        </ProductGroup>
      </div>

    </div>
  </PageTemplate>
</template>

<style scoped></style>