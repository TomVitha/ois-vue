import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LayoutDefault from '../layouts/LayoutDefault.vue'
import LayoutBlank from '../layouts/LayoutBlank.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // meta: { layout: LayoutDefault },
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
      path: '/komunikace',
      component: () => import('../views/Komunikace.vue'),
    },
    {
      path: '/sign-in',
      component: () => import('../views/SignIn.vue'),
      meta: { layout: LayoutBlank },
    },
    {
      path: '/404',
      meta: { layout: LayoutBlank },
      component: () => import('../views/404.vue'),
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404',
    },
  ],
})

export default router
