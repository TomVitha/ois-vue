import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import LayoutDefault from '../layouts/LayoutDefault.vue'
import LayoutBlank from '../layouts/LayoutBlank.vue'

const router = createRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // meta: { layout: LayoutDefault }, // Unnecessary to specify LayoutDefault as we default to it in App.vue
      component: Home,
    },
    {
      path: '/account',
      component: () => import('../views/Account.vue'),
    },
    {
      path: '/apt',
      component: () => import('../views/Apt.vue'),
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
      path: '/kontakty',
      component: () => import('../views/Kontakty.vue'),
    },
    {
      path: '/news',
      component: () => import('../views/News.vue'),
    },
    {
      path: '/platby',
      component: () => import('../views/Platby.vue'),
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
      path: '/404',
      // meta: { layout: LayoutBlank },
      component: () => import('../views/404.vue'),
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../views/404.vue'),
    },
    {
      path: '/komunikace',
      component: () => import('../views/Komunikace.vue'),
    },
    // Old/Alt designs preserved
    {
      path: '/dokumenty-alt',
      component: () => import('../views/Dokumenty-alt.vue'),
    },
    {
      path: '/platby-alt',
      component: () => import('../views/Platby-alt.vue'),
    },
  ],
})

export default router
