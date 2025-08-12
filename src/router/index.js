import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ComputedView from '../views/Computed.vue'
import TestView from '../views/TestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/computed',
      component: ComputedView,
    },
    {
      path: '/test',
      component: TestView,
    },
  ],
})

export default router
