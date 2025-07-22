import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/komunikace',
      name: 'komunikace',
      component: () => import('../views/Komunikace.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue'),
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404',
    },
  ],
})

export default router
