<template>
  <div>
    <h1>Watcher Example</h1>
    <input v-model="name" type="text" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

const name = ref('Mannan')

const originalName = ref(name.value)

const isChanged = ref(false)

watch(name, (newVal, oldVal) => {
  isChanged.value = newVal !== originalName.value
})

onBeforeRouteLeave((to, from, next) => {
  if (isChanged.value) {
    if (
      confirm(
        'Your value changed, please save first otherwise your changes get lost. Do you want to leave?',
      )
    ) {
      next()
    } else {
      next(false)
    }
  } else {
    next()
  }
})
</script>
