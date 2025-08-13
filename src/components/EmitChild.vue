<template>
  <h1>Displaying below name via emit child to parent</h1>
</template>

<script setup>
import { defineEmits, defineExpose } from 'vue'

// This component emits a name to its parent component
const emit = defineEmits(['name'])

emit('name', 'Shakeel Ahamed')

// This function can be called by the parent component to log a message
function consoleParentData(msg) {
  alert(msg)
}

defineExpose({
  consoleParentData,
})
</script>
