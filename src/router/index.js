import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const userLoggedIn = false

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: {
        title: 'Home | My Vue App ',
        isRequireAuth: false,
      },
    },
    {
      path: '/about',
      component: AboutView,
      meta: {
        title: 'About | My Vue App ',
        isRequireAuth: false,
      },
    },
    {
      path: '/lazy',
      component: () => import('../views/LazyLoadVies.vue'),
      meta: {
        title: 'Lazy | My Vue App ',
        isRequireAuth: true,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.isRequireAuth) {
    // Check user authenticated or not
    if (userLoggedIn) {
      next()
    } else {
      alert('You are not logged In. Redirecting to home page')
      next('/')
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title || 'My Vue App'
})

export default router
