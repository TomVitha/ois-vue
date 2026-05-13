import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// ?
import DoisHome from '../views/DOIS/Home.vue'
// import LayoutDefault from '../layouts/LayoutDefault.vue'
import LayoutBlank from '../layouts/LayoutBlank.vue'
// TEMP
import LayoutDOIS from '../layouts/LayoutDOIS.vue'

const router = createRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // meta: { layout: LayoutDefault }, // Není nutné všude v routeru specifikovat LayoutDefault, protože je výchozí v App.vue
      component: Home,
    },
    {
      path: '/account',
      component: () => import('../views/Settings.vue'),
    },
    {
      // NOTE: Path bude korespondovat se skutečným kódem produktu!
      path: '/produkt/:productId',
      component: () => import('../views/Produkt.vue'),
    },
    {
      path: '/dokumenty',
      component: () => import('../views/Dokumenty.vue'),
    },
    {
      path: '/help',
      component: () => import('../views/Help.vue'),
    },
    {
      path: '/komunikace',
      component: () => import('../views/Komunikace.vue'),
    },
    {
      path: '/kontakty',
      component: () => import('../views/Kontakty.vue'),
    },
    {
      path: '/vzorkovna',
      component: () => import('../views/Vzorkovna.vue'),
    },
    {
      path: '/novinky',
      component: () => import('../views/News.vue'),
    },
    {
      path: '/platby',
      component: () => import('../views/Platby.vue'),
    },
    {
      path: '/poukazky',
      component: () => import('../views/Poukazky.vue'),
    },
    // Klientské změny / Termínové sekce
    {
      path: '/klientske-zmeny',
      component: () => import('../views/KlientskeZmeny.vue'),
    },
    {
      path: '/sign-in',
      component: () => import('../views/SignIn.vue'),
      meta: { layout: LayoutBlank },
    },
    {
      path: '/zadosti',
      component: () => import('../views/Zadosti.vue'),
    },
    {
      path: '/zadosti/nova',
      component: () => import('../views/ZadostNova.vue'),
    },
    {
      path: '/zadosti/nova/:propertyId/:templateId',
      component: () => import('../views/ZadostNovaForm.vue'),
    },
    // DOIS
    {
      path: '/dois/',
      component: DoisHome,
      meta: { layout: LayoutDOIS },
    },
    {
      path: '/dois/seznam-objednavek',
      component: () => import('../views/DOIS/SeznamObjednavek.vue'),
      meta: { layout: LayoutDOIS },
    },
    {
      path: '/dois/objednavka/:orderId',
      component: () => import('../views/DOIS/DetailObjednavky.vue'),
      meta: { layout: LayoutDOIS },
    },
    {
      path: '/dois/nahrani-souboru',
      component: () => import('../views/DOIS/NahraniSouboru.vue'),
      meta: { layout: LayoutDOIS },
    },
    // Else
    {
      path: '/404',
      // meta: { layout: LayoutBlank },
      component: () => import('../views/404.vue'),
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../views/404.vue'),
    }
  ],
})

export default router
