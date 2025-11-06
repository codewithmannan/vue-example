<template>
  <header class="main-header">
    <div class="container">
      <router-link to="/" class="brand">My App</router-link>

      <!-- Nav Links -->
      <nav class="nav-links">
        <router-link to="/" class="nav-link"> Home </router-link>
        <router-link
          v-if="authStore.isAuthenticated"
          to="#"
          class="nav-link"
          @click.prevent="logoutUser"
        >
          {{ fullName }} (Logout)
        </router-link>
        <router-link v-else to="/login" class="nav-link"> Login </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/useAuthStore'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

async function logoutUser() {
  try {
    await authStore.logout()
    router.push('/login')
  } catch (error) {
    console.log('error')
  }
}

const fullName = computed(() => {
  return authStore.userProfile.firstName + ' ' + authStore.userProfile.lastName
})
</script>

<style scoped>
.main-header {
  background: linear-gradient(90deg, #007bff, #0056b3);
  color: white;
  padding: 0.75rem 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 1.25rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.nav-link:hover {
  opacity: 0.8;
}

.nav-links .router-link-exact-active {
  border-bottom: 2px solid #fff;
  padding-bottom: 2px;
  opacity: 0.8;
}
</style>
