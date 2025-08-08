<template>
  <div>
    <input v-model="inputValue" type="text" />
  </div>
  <div v-if="inputValue == 'mannan'">
    <p>Bingo! Enter value is: {{ inputValue }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let inputValue = ref('')
</script>
