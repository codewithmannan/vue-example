import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '@/stores/useAuthStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: {
        title: 'Home | My Vue App ',
        isRequireAuth: true,
      },
    },
    {
      path: '/login',
      component: LoginView,
      meta: {
        title: 'Login | My Vue App ',
        isRequireAuth: false,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userAuth = useAuthStore()

  if (to.meta.isRequireAuth) {
    // Check user authenticated or not
    if (userAuth.isAuthenticated) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title || 'My Vue App'
})

export default router
