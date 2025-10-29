import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RecipieView from '../views/SecretRecipieView.vue'
import RecipieDetailsView from '../views/RecipieDetailsView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/recipe',
      name: 'recipe',
      component: RecipieView,
    },
    {
      path: '/recipie-details/:id/:secret?',
      name: 'recipie-details',
      component: RecipieDetailsView,
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound,
    },
  ],
})

export default router
