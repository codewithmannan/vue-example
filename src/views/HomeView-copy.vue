<template>
  <h1>Counter</h1>
  <div>
    <button @click="count--">-</button>
    <span class="count">{{ count }}</span>
    <button @click="count++">+</button>
  </div>
  <div>
    <ShareCountValue :count="count" @update-count="getValueFromChild" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ShareCountValue from '@/components/ShareCountValue.vue'
const count = ref(0)

function getValueFromChild(value) {
  count.value == value
}
</script>

<style scoped>
.count {
  padding: 10px;
}
button {
  cursor: pointer;
}
</style>
