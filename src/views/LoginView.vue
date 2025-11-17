<template>
  <div class="login-wrapper">
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <div class="logo">
            <i class="fas fa-user-circle"></i>
          </div>
          <h1>Welcome Back</h1>
          <p>Sign in to your account to continue</p>
        </div>
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <div class="input-with-icon">
              <i class="fas fa-envelope"></i>
              <input
                type="email"
                id="email"
                class="form-control"
                placeholder="Email Address"
                v-model="form.email"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <div class="input-with-icon">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                id="password"
                class="form-control"
                placeholder="Password"
                v-model="form.password"
                required
              />
            </div>
          </div>

          <div class="form-options">
            <div class="remember-me">
              <input type="checkbox" id="remember" v-model="form.rememberMe" />
              <label for="remember">Remember me</label>
            </div>
            <a href="#" class="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" class="login-btn" :disabled="isSubmit">
            <template v-if="isSubmit">
              <i class="fas fa-sync-alt fa-spin loader-icon"></i>
              <span>Signing In...</span>
            </template>
            <template v-else>
              <span>Sign In</span>
              <i class="fas fa-arrow-right"></i>
            </template>
          </button>

          <div class="divider">
            <span>Or continue with</span>
          </div>

          <div class="social-login">
            <button type="button" class="social-btn google">
              <i class="fab fa-google"></i>
            </button>
            <button type="button" class="social-btn facebook">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="social-btn twitter">
              <i class="fab fa-twitter"></i>
            </button>
          </div>

          <div class="signup-link">Don't have an account? <a href="#">Sign up now</a></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/useAuthStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const form = ref({
  email: '',
  password: '',
  rememberMe: false,
})

const isSubmit = ref(false)

const handleLogin = async () => {
  try {
    isSubmit.value = true
    const response = await authStore.login(form.value)
    isSubmit.value = false
    if (response?.data?.token) {
      router.push('/')
    }
  } catch (error) {
    isSubmit.value = false
    console.log(error)
    alert(error?.response?.data?.error?.message)
  }
}

onMounted(() => {
  if (authStore.isAuthenticated) {
    router.push('/')
  }
})
</script>
