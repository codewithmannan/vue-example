<template>
  <h1 v-if="fruit == 'Mango'">Mango</h1>
  <h1 v-else-if="fruit == 'Apple'">Apple</h1>
  <h1 v-else>Orange</h1>
  <br />

  <h1 v-show="fruit == 'Mango'">Strawberry</h1>
  <br />

  <div>
    <p v-for="value in fruits">{{ value }}</p>
  </div>

  <br />
  <h1>{{ user.name }}</h1>
</template>

<!-- <script>
// option api
export default {
  data() {
    return {
      fruit: 'Mango',
      fruits: ['Apple', 'Orange', 'Strawberry', 'Avocado'],
      user: {
        name: 'Shakeel',
        address: 'Sambhal',
      },
    }
  },
}
</script> -->

<script setup>
import { ref, reactive } from 'vue'
let fruit = ref('Mango')

let fruits = reactive(['Apple', 'Orange', 'Strawberry', 'Avocado'])

let user = reactive({
  name: 'Shakeel',
  address: 'Sambhal',
})
</script>
