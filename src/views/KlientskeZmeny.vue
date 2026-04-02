<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import AccordionGroup from '@/components/AccordionGroup.vue'
  import AccordionItem from '@/components/AccordionItem.vue'
</script>

<template>

  <PageTemplate title="Klientské změny">

    <div class="row gx-5" data-bs-spy="scroll" data-bs-target="#pills">
      <!-- TODO: Někde nějak bude že pokud si chceš actually udělat změnu, musíš nás kontaktovat a budeš muset k nám fyzicky přijít -->

      <div class="col-xl-10">
        <div class="row row-cards">
          <div class="col-12">
            <h3 class="my-2">Termínové sekce</h3>
            <div class="card card-md">
              <div class="card-body">
                <div class="mb-3">
                  <h1 class="mb-0">1. termínová sekce</h1>
                  <div class="d-flex align-items-center gap-3">
                    <div class="text-secondary">Probíhá do: 16.9.2022</div>
                    <span class="badge bg-danger-lt text-danger">Po termínu</span>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus hic quis vero blanditiis praesentium architecto sint recusandae debitis, assumenda eos error dolorum dignissimos atque, eveniet saepe ab neque commodi deleniti!
                </p>
              </div>
              <div class="card-body">
                <div class="mb-3">
                  <h1 class="mb-0">2. termínová sekce</h1>
                  <div class="d-flex align-items-center gap-3">
                    <div class="text-secondary">Probíhá do: 12.12.2022</div>
                    <span class="badge bg-danger-lt text-danger">Po termínu</span>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus hic quis vero blanditiis praesentium architecto sint recusandae debitis, assumenda eos error dolorum dignissimos atque, eveniet saepe ab neque commodi deleniti!
                </p>
              </div>
              <div class="card-body">
                <div class="mb-3">
                  <h1 class="mb-0">3. termínová sekce</h1>
                  <div class="d-flex align-items-center gap-3">
                    <div class="text-secondary">Probíhá do: 14.7.2023</div>
                    <span class="badge bg-warning-lt text-warning">Brzy končí</span>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus hic quis vero blanditiis praesentium architecto sint recusandae debitis, assumenda eos error dolorum dignissimos atque, eveniet saepe ab neque commodi deleniti!
                </p>
              </div>
              <div class="card-body">
                <div class="mb-3">
                  <h1 class="mb-0">4. termínová sekce</h1>
                  <div class="d-flex align-items-center gap-3">
                    <div class="text-secondary">Probíhá do: 30.8.2023</div>
                    <span class="badge bg-info-lt text-info">Probíhá</span>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus hic quis vero blanditiis praesentium architecto sint recusandae debitis, assumenda eos error dolorum dignissimos atque, eveniet saepe ab neque commodi deleniti!
                </p>
              </div>
            </div>

            <!-- TODO: Kontakty na dodavatele -->

          </div>
        </div>
      </div>
    </div>

    <!-- TODO: pod klient. termínama odkaz na vzorkovnu a int studio -->

  </PageTemplate>

</template>

<style scoped></style>