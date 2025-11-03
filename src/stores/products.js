import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useProducts = defineStore('products', () => {
  const products = ref([])

  async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data)
    products.value = data
  }

  return {
    products,
    getProducts,
  }
})
