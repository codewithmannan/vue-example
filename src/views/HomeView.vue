<template>
  <HelloWorld>
    <template #heading>
      <h1>This is under the component</h1>
    </template>

    <template #paragraph>
      <p>This is under the component</p>
    </template>
  </HelloWorld>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>
