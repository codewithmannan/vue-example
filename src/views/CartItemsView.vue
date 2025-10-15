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
          <p class="cart-item-Tprice">Total: {{ (item.price * item.quantity).toFixed(2) }}</p>
          <p class="cart-item-rating">
            ⭐ {{ item.rating.rate }} ({{ item.rating.count }} reviews)
          </p>
        </div>

        <!-- Quantity Controls -->
        <div class="cart-quantity">
          <button
            :disabled="item.quantity == 1"
            @click="decrement(item.id)"
            class="qty-btn"
            :class="item.quantity == 1 ? 'disabled' : ''"
          >
            −
          </button>
          <span class="qty-value">{{ item.quantity }}</span>
          <button @click="increment(item.id)" class="qty-btn">+</button>
        </div>

        <div class="cart-item-remove" @click="removeItem(item.id)">
          <i class="fa fa-trash"></i> Remove
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

const { cartItems, removeItem, totalPrice, decrement, increment } = useCart()

// calculate total price
</script>
