<template>
  <div class="products-container">
    <ProductList v-for="item in products" :key="item.id" :data="item" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import ProductList from './ProductList.vue'

import axios from 'axios'

const products = ref([])

const API_URL = import.meta.env.VITE_API_URL

onMounted(() => {
  // fetch('https://fakestoreapi.com/products', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     products.value = data
  //   })
  //   .catch((error) => {
  //     console.error('Error fetching products:', error)
  //   })

  axios
    .get(`${API_URL}/products`)
    .then((response) => {
      products.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching products:', error)
    })
})
</script>
