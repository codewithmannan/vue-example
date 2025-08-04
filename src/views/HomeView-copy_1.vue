<template>
  <h1>{{ message }}</h1>
  <br></br>
  <button @click="showAlert()">Show Alert</button>
</template>

<!-- <script>
// option api
export default {
  data() {
    return {
      message: 'Hello, VueJs',
    }
  },
  methods: {
    showAlert() {
      alert("Hello");
    }
  }
}
</script> -->

<script setup>
// composition api but more simple way
let message = 'Hello, VueJs';

function showAlert() {
  alert("Hello");
}
</script>
