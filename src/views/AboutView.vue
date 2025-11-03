<template>
  <h1>Updated counter value</h1>
  <div>This value display by props count: {{ counterStore.count }}</div>

  <div>
    <h4>I want to change count value from child component</h4>
    <button @click="counterStore.increment">Inc</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCounter } from '@/stores/counter'
import { useProducts } from '@/stores/products'
const counterStore = useCounter()
const productStore = useProducts()

onMounted(() => {
  productStore.getProducts()
})
</script>
