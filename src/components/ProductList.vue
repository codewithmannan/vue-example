<template>
  <div class="product-card">
    <img :src="data.image" alt="Product Image" class="product-img" />
    <div class="product-body">
      <h2 class="product-title">{{ data.title }}</h2>
      <p class="product-desc">{{ data.description }}</p>
      <p class="product-price">💲 {{ data.price }}</p>
      <p class="product-rating">⭐ {{ data.rating.rate }} ({{ data.rating.count }} reviews)</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>
