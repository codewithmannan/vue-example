import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', () => {
  // store or state
  const count = ref(0)

  // Getters
  const countValue = computed(() => count.value)

  // Actions
  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  // Returns
  return {
    count,
    countValue,
    increment,
    decrement,
  }
})
