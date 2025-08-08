<template>
  <div>
    <h3>Two way data binding</h3>
    <input v-model="fullName" type="text" />
    <br />
    {{ fullName }}

    <br />
    <h3>One way data binding</h3>
    <input v-bind:value="address" type="text" />
    <!-- <input :value="address" type="text" /> -->
    <br />
    {{ address }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
const fullName = ref('Abdul')
const address = ref('Sambhal')
</script>
