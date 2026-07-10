<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router'
  import PageTemplate from '@/components/PageTemplate.vue'
  import { matchesMediaQuery } from '@/composables/matchesMediaQuery';
  import TomSelect from 'tom-select'

  // const route = useRoute()
  // const isDesktop = matchesMediaQuery('(min-width: 992px)')

  // Initialize multiple Tom-selects
  const tomSelectSelectors = ['#item-add-category', '#item-edit-category'] as const
  const tomSelectOptions = {
    allowEmptyOption: false,
    plugins: ['dropdown_input'],
  }

  onMounted(() => {
    tomSelectSelectors.forEach((selector) => {
      const element = document.querySelector(selector)

      if (element) {
        new TomSelect(selector, tomSelectOptions)
      }
    })
  })
</script>

<template>
  <PageTemplate title="Číselníky">

    <template #toolbar>
      <!-- * Záložky -->
      <ul class="nav nav-underline mb-n3 flex-nowrap scroll-x" data-bs-toggle="tabs" role="tablist">
        <li class="nav-item" role="presentation">
          <a href="#tab-categories" class="nav-link active" data-bs-toggle="tab" aria-selected="false" role="tab" draggable="false">Kategorie</a>
        </li>
        <li class="nav-item" role="presentation">
          <a href="#tab-items" class="nav-link" data-bs-toggle="tab" aria-selected="true" role="tab" draggable="false">Položky</a>
        </li>
      </ul>
    </template>

    <div class="tab-content">

      <!-- * Záložka: Kategorie -->
      <div class="tab-pane active show" id="tab-categories" role="tabpanel">
        <div class="row row-cards">
          <div class="col-12">
            <div class="d-flex">
              <div>
                <div class="input-icon flex-shrink-0">
                  <span class="input-icon-addon">
                    <slot name="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                      </svg>
                    </slot>
                  </span>
                  <input
                    type="search"
                    class="form-control form-control-sm"
                    placeholder="Hledejte..."
                    autocomplete="off">
                </div>
              </div>
              <div class="btn-list ms-auto">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#ciselnik-category-add-new"
                  class="btn btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                    <path d="M12 5l0 14"></path>
                    <path d="M5 12l14 0"></path>
                  </svg>
                  Přidat
                </button>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Kategorie</h3>
              </div>
              <!-- NOTE: Nemůžeme použít .table-responsive, protože skrytý overflow by nám kazilo dropdowny -->
              <div>
                <table class="table table-selectable card-table table-vcenter text-nowrap">
                  <thead>
                    <tr>
                      <th class="w-1">ID</th>
                      <th>Název</th>
                      <th class="w-1"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>69</td>
                      <td>Nábytek</td>
                      <td>
                        <div class="h0">
                          <div class="dropdown">
                            <button class="btn btn-icon btn-action dropdown-toggle" data-bs-toggle="dropdown" draggable="false">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              </svg>
                            </button>
                            <div class="dropdown-menu dropdown-menu-end">
                              <button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#ciselnik-category-edit">Upravit</button>
                              <button class="dropdown-item text-danger" data-bs-toggle="modal" data-bs-target="#ciselnik-category-delete">Smazat</button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- * Záložka: Položky -->
      <div class="tab-pane" id="tab-items" role="tabpanel">
        <div class="row row-cards">
          <div class="col-12">
            <div class="d-flex">
              <div>
                <div class="input-icon flex-shrink-0">
                  <span class="input-icon-addon">
                    <slot name="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                      </svg>
                    </slot>
                  </span>
                  <input
                    type="search"
                    class="form-control form-control-sm"
                    placeholder="Hledejte..."
                    autocomplete="off">
                </div>
              </div>
              <div class="btn-list ms-auto">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#ciselnik-item-add-new"
                  class="btn btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                    <path d="M12 5l0 14"></path>
                    <path d="M5 12l14 0"></path>
                  </svg>
                  Přidat
                </button>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Položky</h3>
              </div>
              <!-- NOTE: Nemůžeme použít .table-responsive, protože skrytý overflow by nám kazilo dropdowny -->
              <div>
                <table class="table table-selectable card-table table-vcenter text-nowrap">
                  <thead>
                    <tr>
                      <th class="w-1">ID</th>
                      <th>Název</th>
                      <th>Kategorie</th>
                      <th class="w-1"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>420</td>
                      <td>Židle</td>
                      <td>Nábytek</td>
                      <td>
                        <div class="h0">
                          <div class="dropdown">
                            <button class="btn btn-icon btn-action dropdown-toggle" data-bs-toggle="dropdown" draggable="false">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              </svg>
                            </button>
                            <div class="dropdown-menu dropdown-menu-end">
                              <button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#ciselnik-item-edit">Upravit</button>
                              <button class="dropdown-item text-danger" data-bs-toggle="modal" data-bs-target="#ciselnik-item-delete">Smazat</button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- MODALS -->

    <!-- NOTE: Asi není nutné aby modals pro Nové a Upravit byly samostatné modaly/komponenty; tady jsou jen zduplikovány, protože není implementovaná logika dynamických údajů -->

    <!-- Kategorie - Přidat novou -->
    <div class="modal" id="ciselnik-category-add-new" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Přidat kategorii</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row g-3">
              <div class="col">
                <label class="form-label">ID</label>
                <input type="text" class="form-control" readonly disabled value="70">
              </div>
              <div class="col-9">
                <label class="form-label">Název</label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">Zrušit</button>
            <button type="button" class="btn btn-primary">Přidat</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Kategorie - Upravit -->
    <div class="modal" id="ciselnik-category-edit" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Upravit kategorii</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row g-3">
              <div class="col">
                <label class="form-label">ID</label>
                <input type="text" class="form-control" readonly disabled value="69">
              </div>
              <div class="col-9">
                <label class="form-label">Název</label>
                <input type="text" class="form-control" value="Nábytek">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">Zrušit</button>
            <button type="button" class="btn btn-primary">Upravit</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Položka - Smazat -->
    <div class="modal" id="ciselnik-category-delete" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="modal-status bg-danger"></div>
          <div class="modal-body text-center py-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon mb-2 text-danger icon-lg">
              <path d="M12 9v4"></path>
              <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"></path>
              <path d="M12 16h.01"></path>
            </svg>
            <h3>Kategorii nelze smazat</h3>
            <div class="text-secondary">V této kategorii se nachází <strong>3729 položek</strong>. Pak by do žádné kategorie nepatřili, to jim přece nemůžete udělat, nejprve jim přiřaďte jinou.</div>
          </div>
          <div class="modal-footer">
            <button class="btn" data-bs-dismiss="modal">Storno</button>
            <button class="btn btn-danger" data-bs-dismiss="modal" disabled>Smazat</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Položky - Přidat novou -->
    <div class="modal" id="ciselnik-item-add-new" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Přidat položku</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row g-3">
              <div class="col">
                <label class="form-label">ID</label>
                <input type="text" class="form-control" id="item-add-id" readonly disabled value="421">
              </div>
              <div class="col-9">
                <label class="form-label">Název</label>
                <input type="text" class="form-control" id="item-add-name">
              </div>
              <div class="col-12">
                <label class="form-label">Kategorie</label>
                <select class="form-select" autocomplete="off" id="item-add-category" required>
                  <option selected disabled>vyberte</option>
                  <option value="1">Možnost 1</option>
                  <option value="2">Možnost 2</option>
                  <option value="3">Možnost 3</option>
                  <option value="4">Možnost 4</option>
                  <option value="5">Možnost 5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">Zrušit</button>
            <button type="button" class="btn btn-primary">Přidat</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Položky - Upravit -->
    <div class="modal" id="ciselnik-item-edit" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Upravit položku</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row g-3">
              <div class="col">
                <label class="form-label">ID</label>
                <input type="text" class="form-control" id="item-add-id" readonly disabled value="420">
              </div>
              <div class="col-9">
                <label class="form-label">Název</label>
                <input type="text" class="form-control" id="item-add-name" value="Židle">
              </div>
              <div class="col-12">
                <label class="form-label">Kategorie</label>
                <select class="form-select" autocomplete="off" id="item-edit-category" required>
                  <option selected disabled>vyberte</option>
                  <option value="1">Možnost 1</option>
                  <option value="2">Možnost 2</option>
                  <option value="3">Možnost 3</option>
                  <option value="4">Možnost 4</option>
                  <option value="5">Možnost 5</option>
                  <option value="69" selected>Nábytek</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">Zrušit</button>
            <button type="button" class="btn btn-primary">Upravit</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Položka - Smazat -->
    <div class="modal" id="ciselnik-item-delete" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="modal-status bg-danger"></div>
          <div class="modal-body text-center py-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon mb-2 text-danger icon-lg">
              <path d="M12 9v4"></path>
              <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"></path>
              <path d="M12 16h.01"></path>
            </svg>
            <h3>Smazat položku</h3>
            <div class="text-secondary">Zde přijde vysvětlení následků tohoto kroku.</div>
          </div>
          <div class="modal-footer">
            <button class="btn" data-bs-dismiss="modal">Storno</button>
            <button class="btn btn-danger" data-bs-dismiss="modal">Smazat</button>
          </div>
        </div>
      </div>
    </div>

  </PageTemplate>
</template>

<style scoped></style>