<template>
  <header class="app-header">
    <!-- Left: Cart -->
    <router-link tag="h1" to="/" class="app-title">E-commerce</router-link>

    <!-- Right: Title -->
    <router-link to="/cart" class="app-cart">
      <span class="app-cart-icon">🛒</span>
      <span class="app-cart-count">{{ cartCount() }}</span>
    </router-link>
  </header>
</template>

<script setup>
import { ref } from 'vue'

import { useCart } from '@/composable/useCart'

const { cartCount } = useCart()
</script>
