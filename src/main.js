import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Global directive
app.directive('highlight', {
  mounted: (el, binding) => {
    if (binding.value === 'isGreen') {
      el.style.background = 'green'
    } else if (binding.value === 'isRed') {
      el.style.background = 'red'
    } else {
      el.style.background = 'yellow'
    }
  },
})

// app.use(createPinia())
app.use(router)

app.mount('#app')
