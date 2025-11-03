<template>
  <h1>Counter</h1>
  <div>
    <button @click="counterStore.decrement">-</button>
    <span class="count">{{ counterStore.count }}</span>
    <button @click="counterStore.increment">+</button>
  </div>
  <div>
    <ShareCountValue />
  </div>
</template>

<script setup>
import ShareCountValue from '@/components/ShareCountValue.vue'

import { useCounter } from '@/stores/counter'

const counterStore = useCounter()
</script>

<style scoped>
.count {
  padding: 10px;
}
button {
  cursor: pointer;
}
</style>
