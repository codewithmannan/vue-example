<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/watch">Watcher</router-link>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
