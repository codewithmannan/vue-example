import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

// Request

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.status == 401 || error?.response?.data == 'Unauthorized') {
      // Redirect to login because token is invalid or expired
      // Before redirect clear store and localstorage token
      localStorage.removeItem('token')
      window.location.href = '/login'
    }

    return Promise.reject(error)
  },
)

export default api
