<template>
  <MainLayout />
  <div class="app-container">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import MainLayout from './layout/MainLayout.vue'
</script>
