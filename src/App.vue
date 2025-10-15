<template>
  <Header />
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Layout/Header.vue'

import { useCart } from '@/composable/useCart'

const { loadFromLocalStorage } = useCart()

onMounted(() => {
  loadFromLocalStorage()
})
</script>
