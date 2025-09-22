<template>
  <h1>Life Cycle Hooks</h1>
  <p>{{ message }}</p>
  <button @click="updateMessage">Update Message</button>
</template>

<!-- <script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
    }
  },
  methods: {
    updateMessage() {
      this.message = 'Message Updated!'
    },
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
    // In option API best place to fetch data from Server

    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
}
</script> -->

<script setup>
/*
Each Vue component instance goes through a series of initialization steps when it's created -
for example, it needs to set up data observation, compile the template, mount the instance to the DOM,
and update the DOM when data changes. Along the way, it also runs functions called lifecycle hooks,
giving users the opportunity to add their own code at specific stages.
*/

import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'

const message = ref('Hello Vue!')
const updateMessage = () => {
  message.value = 'Message Updated!'
}

onBeforeMount(() => {
  console.log('beforeMount')
})

onMounted(() => {
  console.log('mounted')

  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
})

onBeforeUpdate(() => {
  console.log('beforeUpdate')
})

onUpdated(() => {
  console.log('updated')
})

onBeforeUnmount(() => {
  console.log('beforeUnmount')
})

onUnmounted(() => {
  console.log('unmounted')
})
</script>
