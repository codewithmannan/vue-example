<template>
  <div class="products-container">
    <div v-for="item in products" :key="item.id" class="product-card">
      <img :src="item.image" alt="Product Image" class="product-img" />
      <div class="product-body">
        <h2 class="product-title">{{ item.title }}</h2>
        <p class="product-desc">{{ item.description }}</p>
        <p class="product-price">💲 {{ item.price }}</p>
        <p class="product-rating">⭐ {{ item.rating.rate }} ({{ item.rating.count }} reviews)</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const products = ref([])

onMounted(() => {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      products.value = data
    })
})
</script>

<style scoped>
.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.product-img {
  width: 100%;
  height: 220px;
  object-fit: contain;
  background: #f9f9f9;
}

.product-body {
  padding: 15px;
}

.product-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.product-desc {
  font-size: 0.9rem;
  color: #555;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #e63946;
  margin-top: 10px;
}

.product-rating {
  font-size: 0.9rem;
  color: #f39c12;
}
</style>
