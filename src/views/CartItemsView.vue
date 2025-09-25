<template>
  <div class="cart-container">
    <h1 class="cart-title">🛒 Your Cart</h1>

    <!-- Empty cart -->
    <div v-if="!cartItems().length" class="empty-cart">
      <p>Your cart is empty 😢</p>
    </div>

    <!-- Cart Items -->
    <div v-else class="cart-items">
      <div v-for="item in cartItems()" :key="item.id" class="cart-card">
        <img :src="item.image" alt="product" class="cart-img" />

        <div class="cart-info">
          <h2 class="cart-item-title">{{ item.title }}</h2>
          <p class="cart-item-price">💲 {{ item.price.toFixed(2) }}</p>
          <p class="cart-item-rating">
            ⭐ {{ item.rating.rate }} ({{ item.rating.count }} reviews)
          </p>
        </div>
      </div>
    </div>

    <!-- Cart Total -->
    <div v-if="cartItems().length" class="cart-total">
      <h3>Total: 💲 {{ totalPrice.toFixed(2) }}</h3>
      <button class="checkout-btn">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCart } from '@/composable/useCart'

const { cartItems, totalPrice } = useCart()

// calculate total price
</script>
