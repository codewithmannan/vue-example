<template>
  <div class="card p-4 text-center">
    <EmitChild @name="handChildData" ref="handleChildMethod" />
    <p class="mb-4">{{ getFullNameFromChild }}</p>
    <button @click="callChildMethod">Run Child Method</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import EmitChild from '@/components/EmitChild.vue'

const getFullNameFromChild = ref()

function handChildData(data) {
  getFullNameFromChild.value = data.name
}

// Expose the function to be called from the child component
const handleChildMethod = ref(null)

function callChildMethod() {
  handleChildMethod.value.consoleParentData('Hello from parent')
}
</script>
