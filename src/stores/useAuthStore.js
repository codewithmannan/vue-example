// imports
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

// Global Constant
const API_URL = import.meta.env.VITE_API_URL

export const useAuthStore = defineStore('authStore', () => {
  // store or state
  const user = ref({
    token: null,
    profile: null,
  })

  // getter
  const isAuthenticated = computed(() => !!user.value.token)
  const userProfile = computed(() => user.value.profile)

  // Actions

  async function init() {
    const token = localStorage.getItem('token')
    if (token) {
      user.value.token = token
      const profileData = await getProfileData(token)
      user.value.profile = profileData
    }
  }

  async function login(userData) {
    const { email, password } = userData
    const res = await axios.post(`${API_URL}/v1/api/login`, { email, password })
    if (res?.data?.token) {
      const profileData = await getProfileData(res.data.token)
      user.value.token = res.data.token
      user.value.profile = profileData

      // Set token in local storage for token persistence
      saveTokenInLocalStorage(res.data.token)
    }

    return res
  }

  async function getProfileData(token) {
    const res = await axios.get(`${API_URL}/v1/api/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return res.data
  }

  function saveTokenInLocalStorage(token) {
    localStorage.setItem('token', token)
  }

  async function logout() {
    user.value = {
      token: null,
      profile: null,
    }

    localStorage.removeItem('token')
  }

  // Returns
  return {
    // store
    user,

    // getters
    isAuthenticated,
    userProfile,

    // actions
    init,
    login,
    logout,
  }
})
