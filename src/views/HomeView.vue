<!-- <template>
  <h1>{{ name | uppercase }}</h1>
</template>

<script>
// Filter deprecated in Vue 3, consider using computed properties or methods instead.
export default {
  data() {
    return {
      name: 'abdul mannan',
    }
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    },
  },
}
</script> -->

<template>
  <p>By computed property</p>
  <h1>{{ uppercaseName }}</h1>

  <p>By Method</p>
  <h1>{{ uppercaseNameByMethod() }}</h1>
</template>

<script setup>
import { ref, computed } from 'vue'

const name = ref('abdul mannan')

// Using a computed property instead of a filter
const uppercaseName = computed(() => name.value.toUpperCase())

// Alternatively, you could use a method
const uppercaseNameByMethod = () => {
  return name.value.toUpperCase()
}
</script>
