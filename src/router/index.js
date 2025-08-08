import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import VModel from '../views/VModel.vue'
import Example from '../views/ExampleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/v-model',
      component: VModel,
    },
    {
      path: '/example',
      component: Example,
    },
  ],
})

export default router
