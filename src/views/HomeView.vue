<template>
  <button v-on:click="decrement()">--</button>
  {{ counter }}
  <button @click="increment()">++</button>
</template>

<!-- <script>
// option api
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
  },
}
</script> -->

<script setup>
import { ref } from 'vue'
let counter = ref(0)

function increment() {
  counter.value++
}
function decrement() {
  counter.value--
}
</script>
