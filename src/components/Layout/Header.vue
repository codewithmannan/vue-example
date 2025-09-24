<template>
  <header class="app-header">
    <!-- Left: Cart -->
    <h1 class="app-title">E-commerce</h1>

    <!-- Right: Title -->
    <div class="app-cart">
      <span class="app-cart-icon">🛒</span>
      <span class="app-cart-count">{{ cartCount }}</span>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// default cart count
const cartCount = ref(0)
</script>
