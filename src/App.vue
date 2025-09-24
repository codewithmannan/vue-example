<template>
  <Header />
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Layout/Header.vue'
</script>
