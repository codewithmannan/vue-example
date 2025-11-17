<template>
  <img src="/img/loader_1.gif" :style="{ width, height }" />
</template>

<script setup>
defineProps({
  width: {
    type: String,
    default: '300px',
  },
  height: {
    type: String,
    default: '300px',
  },
})
</script>
