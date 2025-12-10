<script setup lang="ts">
  import PageTemplate from '@/components/PageTemplate.vue'
  import NewRequestDialog from '@/components/NewRequestDialog.vue';
  import NewRequest from '@/components/NewRequest.vue';
</script>

<template>

  <PageTemplate title="Nová žádost">

    <template #actions>
      <div class="btn-list">
        <RouterLink to="/zadosti">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 14l-4 -4l4 -4" />
            <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
          </svg>
          Zpět
        </RouterLink>
      </div>
    </template>

    <div class="row row-deck row-cards">

      <!-- Obecná -->
      <div class="col-md-4">
        <NewRequest id="obecna" name="Obecná žádost" description="Když žádná z předem zvolených možností není to co potřebujete.">
          <p>až bude obsah tak bude tady</p>
        </NewRequest>
      </div>

      <!-- Změna osobních údajů -->
      <div class="col-md-4">
        <NewRequest id="zmena-osobnich-udaju" name="Změna osobních údajů" description="Přestěhovali jste se, nebo si změnili telefonní číslo? Změnilo se vám pohlaví, nebo jste zemřeli? Zde nám dejte vědět o změně svých osobních údajů.">
          <div class="row align-items-center gy-3">
            <div class="col-md-4">
              <span class="form-label">Údaj</span>
              <select name="lang" class="form-select">
                <option value="1">Rodinný stav</option>
                <option value="2">Jméno</option>
                <option value="3">Adresa</option>
              </select>
            </div>
            <div class="col-md-4">
              <span class="form-label">Současná hodnota</span>
              <input type="text" class="form-control" name="example-text-input" placeholder="Input placeholder" value="Ženatý" disabled>
            </div>
            <div class="col-md-4">
              <span class="form-label">Nová hodnota</span>
              <input type="text" class="form-control" name="example-text-input" placeholder="Input placeholder" value="Svobodný">
            </div>
          </div>
        </NewRequest>
      </div>

      <!-- Změna osobních údajů (alt) -->
      <div class="col-md-4">
        <NewRequest
          id="zmena-osobnich-udaju-2"
          name="Změna osobních údajů (2)"
          description="Jestli se něco ohledně vás změnilo, tak si to nechte pro sebe... ale ne, nám o tom dejte vědět.">
          <div class="row g-3">
            <div class="col-md-4">
              <div class="form-label">Jméno</div><input type="text" class="form-control" autocomplete="name" required value="Adam Novák">
            </div>
            <div class="col-md-4">
              <div class="form-label">Adresa</div><input type="text" class="form-control" required value="Skopičkova 748/9, Praha 4, 143 00">
            </div>
            <div class="col-md-4">
              <div class="form-label">Email</div><input type="email" class="form-control" required value="novak@seznam.cz">
            </div>
            <div class="col-md-4">
              <div class="form-label">Telefon</div><input type="tel" class="form-control" autocomplete="tel" required value="+420721584630">
            </div>
            <div class="col-md-4">
              <div class="form-label">IČ</div><input type="text" class="form-control" required value="38171674">
            </div>
            <div class="col-md-4">
              <div class="form-label">DIČ</div><input type="text" class="form-control" required value="CZ8706080086">
            </div>
            <div class="col-md-4">
              <div class="form-label">DIČ</div><input type="text" class="form-control" required value="CZ8706080086">
            </div>
            <div class="col-md-4">
              <div class="form-label">DIČ</div><input type="text" class="form-control" required value="CZ8706080086">
            </div>
            <div class="col-md-4">
              <div class="form-label">DIČ</div><input type="text" class="form-control" required value="CZ8706080086">
            </div>
          </div>
        </NewRequest>
      </div>

      <!-- odklad platby -->
      <div class="col-md-4">
        <NewRequest
          id="odklad-platby"
          name="Odklad platby"
          description="Nestíháte posílat prašule? Nevadí, u nás můžete zaplatit později.">
          <!-- TODO: Tělo žádosti -->
        </NewRequest>
      </div>

      <!-- Změna financování -->
      <div class="col-md-4">
        <NewRequest
          id="zmena-financovani"
          name="Změna financování"
          description="Pokud potřebujete změnit způsob financování.">
          <!-- TODO: Tělo žádosti -->
        </NewRequest>
      </div>

      <!-- Změna spolumajitelů -->
      <div class="col-md-4">
        <NewRequest
          id="zmena-spolumajitelu"
          name="Změna spolumajitelů"
          description="Zemřela vám babička, nebo návštěva na jednu noc se rozhodna zůstat?">
          <!-- TODO: Tělo žádosti -->
        </NewRequest>
      </div>


    </div>
  </PageTemplate>


</template>

<style scoped></style>