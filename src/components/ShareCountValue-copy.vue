<template>
  <h1>Updated counter value</h1>
  <div>This value display by props count: {{ count }}</div>

  <div>
    <h4>I want to change count value from child component</h4>
    <button @click="updateParentCount">Inc</button>
  </div>
</template>

<script setup>
const props = defineProps(['count'])
const emit = defineEmits(['update-count'])

function updateParentCount() {
  emit('update-count', props.count++)
}
</script>
