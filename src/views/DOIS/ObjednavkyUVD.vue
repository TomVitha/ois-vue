<script setup lang="ts">
  import { ref, onMounted, watch, useTemplateRef, nextTick, onUnmounted } from 'vue';
  import PageTemplate from '@/components/PageTemplate.vue'

  import TomSelect from 'tom-select'
  import DataTable from 'datatables.net-dt'
  import 'datatables.net-select'
  import 'datatables.net-select-dt'

  const dataTableWithSelect = DataTable as typeof DataTable & {
    select?: {
      classes?: {
        checkbox?: string
      }
    }
  }

  if (dataTableWithSelect.select?.classes) {
    dataTableWithSelect.select.classes.checkbox = 'form-check-input table-selectable-check' // Set custom class to match Tabler's checkbox style
  }

  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  const isWideScreen = matchesMediaQuery('(min-width: 1600px)')
  const isFluidLayout = ref(false)

  // Toggle fluid layout
  watch(isFluidLayout, (newValue) => {
    (document.querySelector('.page-body') as HTMLElement).classList.toggle('layout-fluid', newValue)
  })

  // Initialize multiple Tom-selects
  const tomSelectSelectors = ['#filter-suppliers', '#filter-items'] as const
  const tomSelectOptions = {
    allowEmptyOption: false,
    maxItems: null,
    plugins: {
      remove_button: {},
      no_active_items: {},
      input_autogrow: {},
      checkbox_options: {
        checkedClassNames: ['ts-checked'],
        uncheckedClassNames: ['ts-unchecked'],
      },
    },
    itemClass: 'tag',
  }

  onMounted(() => {
    tomSelectSelectors.forEach((selector) => {
      const element = document.querySelector(selector)
      if (!element) return

      new TomSelect(selector, tomSelectOptions)
    })
  })



  const ordersTableRef = useTemplateRef('ordersTableRef')
  let ordersTable: InstanceType<typeof DataTable> | null = null

  async function initDataTable() {

    if (!ordersTableRef.value) return

    await nextTick()

    // DataTables pro řazení (a dále případně filtrování, stránkování, vyhledávání).
    ordersTable = new DataTable(ordersTableRef.value, {
      paging: false,
      searching: false,
      info: false,
      autoWidth: false,
      orderClasses: false,
      select: {
        style: 'multi',
        selector: 'td:first-child',
      },
      columnDefs: [{
        orderable: false,
        render: DataTable.render.select(),
        targets: 0,
      }],
      order: [[1, 'asc']],       // Sloupec podle kterého se bude defaultně řadit - index sloupce (od 0); směr řazení
    })
  }

  function destroyDataTable() {
    ordersTable?.destroy()
    ordersTable = null
  }

  onMounted(() => {
    initDataTable();
  })

  onUnmounted(() => {
    destroyDataTable()
  })

</script>

<template>
  <PageTemplate title="Objednávky ÚVD">

    <!-- NOTE: Je tenhle filtr zločin proti lidskosti? Ano. Ale, takhle to chtěli, tak to tak mají. -->
    <template #toolbar>

      <!-- FILTERS -->
      <div class="row align-items-center gy-2">

        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="text">
            <label>Interní číslo objednávky</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="text">
            <label>Katalogové číslo</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="text">
            <label>Číslo SoD</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="date">
            <label>Podpis SoD</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <select class="form-select" autocomplete="off">
              <option selected>všichni</option>
              <option value="1">Možnost 1</option>
              <option value="2">Možnost 2</option>
              <option value="3">Možnost 3</option>
              <option value="4">Možnost 4</option>
              <option value="5">Možnost 5</option>
            </select>
            <label>Stav objednávky</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <select class="form-select" autocomplete="off">
              <option selected>všichni</option>
              <option value="1">Možnost 1</option>
              <option value="2">Možnost 2</option>
              <option value="3">Možnost 3</option>
              <option value="4">Možnost 4</option>
              <option value="5">Možnost 5</option>
            </select>
            <label>Technik ÚVD</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <select class="form-select" autocomplete="off">
              <option selected>všichni</option>
              <option value="1">Možnost 1</option>
              <option value="2">Možnost 2</option>
              <option value="3">Možnost 3</option>
              <option value="4">Možnost 4</option>
              <option value="5">Možnost 5</option>
            </select>
            <label>Stavební dozor</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <select class="form-select" autocomplete="off">
              <option selected>všichni</option>
              <option value="1">Možnost 1</option>
              <option value="2">Možnost 2</option>
              <option value="3">Možnost 3</option>
              <option value="4">Možnost 4</option>
              <option value="5">Možnost 5</option>
            </select>
            <label>Prodejce</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="date">
            <label>Akceptace objednávky</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="date">
            <label>Zahájení montáže</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="date">
            <label>Dokončení montáže</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="date">
            <label>Termín splnění</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <input class="form-control" type="date">
            <label>Připravenost stavba od</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <select class="form-select" autocomplete="off">
              <option selected>všichni</option>
              <option value="1">Možnost 1</option>
              <option value="2">Možnost 2</option>
              <option value="3">Možnost 3</option>
              <option value="4">Možnost 4</option>
              <option value="5">Možnost 5</option>
            </select>
            <label>Předávací protokol montáž</label>
          </div>
        </div>
        <div class="col-sm-4 col-xxl-2">
          <div class="form-floating">
            <select class="form-select" autocomplete="off">
              <option selected>všichni</option>
              <option value="1">Možnost 1</option>
              <option value="2">Možnost 2</option>
              <option value="3">Možnost 3</option>
              <option value="4">Možnost 4</option>
              <option value="5">Možnost 5</option>
            </select>
            <label>Předávací protokol vady</label>
          </div>
        </div>
        <!-- WIP -->
        <div class="col-12">
          <div class="row align-items-center gy-2">
            <div class="col-auto">
              <div class="form-floating">
                <select class="form-select" name="filter-suppliers" id="filter-suppliers" multiple>
                  <option value="Sapeli">Sapeli</option>
                  <option value="Hanák">Hanák</option>
                  <option value="Next">Next</option>
                  <option value="Barkotex">Barkotex</option>
                  <option value="Ptáček">Ptáček</option>
                  <option value="ProCeram">ProCeram</option>
                  <option value="Profi Lighting">Profi Lighting</option>
                  <option value="Vekra">Vekra</option>
                  <option value="KONE">KONE</option>
                  <option value="Loxone">Loxone</option>
                  <option value="ABB">ABB</option>
                  <option value="Baumit">Baumit</option>
                  <option value="Wienerberger">Wienerberger</option>
                  <option value="Vapis">Vapis</option>
                  <option value="Xella">Xella</option>
                </select>
                <label>Dodavatel</label>
              </div>
            </div>
            <div class="col-auto">
              <div class="form-floating">
                <select class="form-select" name="filter-items" id="filter-items" multiple>
                  <option value="Židle">Židle</option>
                  <option value="Stůl">Stůl</option>
                  <option value="Zrcadlo">Zrcadlo</option>
                  <option value="Gauč">Gauč</option>
                  <option value="Nočník">Nočník</option>
                  <option value="Koberec">Koberec</option>
                  <option value="Žaluzie">Žaluzie</option>
                </select>
                <label>Položky</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="btn-list justify-content-end">
            <button type="button" class="btn btn-sm btn-outline-success text-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              Filtrovat
            </button>
            <button type="button" class="btn-link text-body text-nowrap">
              Zrušit filtry
            </button>
          </div>
        </div>
      </div>
    </template>

    <template #actions>
      <div class="btn-list">
        <div class="btn-actions">

          <button
            v-if="isWideScreen"
            @click="isFluidLayout = !isFluidLayout"
            class="btn btn-action"
            data-bs-toggle="tooltip"
            :title="!isFluidLayout ? 'Rozšířené zobrazení' : 'Normální zobrazení'">
            <svg v-if="!isFluidLayout" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-viewport-wide">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 12h-7l3 -3" />
              <path d="M6 15l-3 -3" />
              <path d="M14 12h7l-3 -3" />
              <path d="M18 15l3 -3" />
              <path d="M3 6v-1a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v1" />
              <path d="M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-1" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-viewport-narrow">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12h7l-3 -3" />
              <path d="M7 15l3 -3" />
              <path d="M21 12h-7l3 -3" />
              <path d="M17 15l-3 -3" />
              <path d="M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" />
              <path d="M9 18v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-1" />
            </svg>
          </button>
        </div>
        <div class="dropdown">
          <button class="btn dropdown-toggle" data-bs-toggle="dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-download">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 11l5 5l5 -5" />
              <path d="M12 4l0 12" />
            </svg>
            Exportovat
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">XLSX</a>
          </div>
        </div>
        <RouterLink to="/dois/nova-objednavka" type="button" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-1">
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
          Vytvořit
        </RouterLink>
      </div>
    </template>

    <div class="row row-cards">
      <div class="col-12">
        <div class="card overflow-hidden">
          <div class="table-responsive">
            <table ref="ordersTableRef" class="table table-vcenter table-selectable table-nowrap card-table datatable">
              <thead>
                <tr>
                  <th class="w-1"></th>
                  <th>Interní číslo</th>
                  <th>Číslo SoD</th>
                  <th>Stav</th>
                  <th>Technik ÚVD</th>
                  <th>Dodavatel</th>
                  <th>Připravenost stavba</th>
                  <th>Položka</th>
                  <th>Termín splnění</th>
                  <th>Akceptace dodavatelem</th>
                </tr>
              </thead>
              <!-- NOTE: Aby Stav neřadil abecedně podle názvu, ale podle pořadí ve kterém se objednávka vyvíjí, má stav nastavený date-sort, který koresponduje s ID stavu -->
              <tbody class="table-tbody">
                <tr>
                  <td></td>
                  <td>
                    <RouterLink to="/dois/objednavka/458-2025-ÚVD" class="text-reset" tabindex="-1">458-2025-ÚVD</RouterLink>
                  </td>
                  <td>192-01-086-IS-I</td>
                  <td data-sort="1"><span class="status status-info">Nová</span></td>
                  <td>Petr Lamata</td>
                  <td>Indeco</td>
                  <td>30.01.2026</td>
                  <td>Skříň - chodba</td>
                  <td>12.01.2026</td>
                  <td>20.01.2026</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <RouterLink to="/dois/objednavka/431-2025-ÚVD" class="text-reset" tabindex="-1">431-2025-ÚVD</RouterLink>
                  </td>
                  <td>201-03-145-IS-II</td>
                  <td data-sort="2"><span class="status status-indigo">Odesláno</span></td>
                  <td>Tomáš Král</td>
                  <td>Sapeli</td>
                  <td>14.02.2026</td>
                  <td>Interiérové dveře - patro</td>
                  <td>05.03.2026</td>
                  <td>08.03.2026</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <RouterLink to="/dois/objednavka/463-2025-ÚVD" class="text-reset" tabindex="-1">463-2025-ÚVD</RouterLink>
                  </td>
                  <td>118-22-009-IS-I</td>
                  <td data-sort="3"><span class="status status-purple">Akceptováno</span></td>
                  <td>Lucie Malá</td>
                  <td>Hanák</td>
                  <td>03.12.2025</td>
                  <td>Kuchyňská sestava</td>
                  <td>21.12.2025</td>
                  <td>22.12.2025</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <RouterLink to="/dois/objednavka/470-2026-ÚVD" class="text-reset" tabindex="-1">470-2026-ÚVD</RouterLink>
                  </td>
                  <td>307-11-552-IS-III</td>
                  <td data-sort="4"><span class="status status-cyan">Montáž</span></td>
                  <td>Jan Vacek</td>
                  <td>Vekra</td>
                  <td>25.04.2026</td>
                  <td>Okna - jižní fasáda</td>
                  <td>10.05.2026</td>
                  <td>13.05.2026</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <RouterLink to="/dois/objednavka/472-2026-ÚVD" class="text-reset" tabindex="-1">472-2026-ÚVD</RouterLink>
                  </td>
                  <td>522-14-601-IS-I</td>
                  <td data-sort="5"><span class="status status-warning">Závada</span></td>
                  <td>Anna Dvořáková</td>
                  <td>KONE</td>
                  <td>18.05.2026</td>
                  <td>Výtahová kabina</td>
                  <td>02.06.2026</td>
                  <td>06.06.2026</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <RouterLink to="/dois/objednavka/473-2026-ÚVD" class="text-reset" tabindex="-1">473-2026-ÚVD</RouterLink>
                  </td>
                  <td>633-09-412-IS-II</td>
                  <td data-sort="6"><span class="status status-lime">Závada odstraněna</span></td>
                  <td>David Šimek</td>
                  <td>Ptáček</td>
                  <td>11.06.2026</td>
                  <td>Koupelnová skříňka</td>
                  <td>26.06.2026</td>
                  <td>29.06.2026</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <RouterLink to="/dois/objednavka/459-2026-ÚVD" class="text-reset" tabindex="-1">459-2026-ÚVD</RouterLink>
                  </td>
                  <td>415-07-233-IS-II</td>
                  <td data-sort="7"><span class="status status-success">Vyřízeno</span></td>
                  <td>Marek Ježek</td>
                  <td>ABB</td>
                  <td>09.03.2026</td>
                  <td>Elektroinstalace - 2NP</td>
                  <td>31.03.2026</td>
                  <td>04.04.2026</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <RouterLink to="/dois/objednavka/457-2026-ÚVD" class="text-reset" tabindex="-1">457-2026-ÚVD</RouterLink>
                  </td>
                  <td>709-16-038-IS-III</td>
                  <td data-sort="8"><span class="status status-danger">Storno</span></td>
                  <td>Kristýna Bartošová</td>
                  <td>ProCeram</td>
                  <td>04.07.2026</td>
                  <td>Obklad koupelny</td>
                  <td>19.07.2026</td>
                  <td>21.07.2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </PageTemplate>
</template>

<style scoped></style>