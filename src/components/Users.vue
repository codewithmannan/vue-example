<template>
  <h1>This is child User Component</h1>
  <div>
    <p v-highlight="'isGreen'">This is user name paragraph</p>
  </div>
  <div>
    <h3 v-log="'yellow'">This is vNode Example in directive</h3>
  </div>
  <div>
    <h4 v-condition:bg.red.italic>This is args, modifier in directive</h4>
  </div>
  <div>
    <h4 :style="applyColor('bg', 'green', 'italic')">By Function same work!</h4>
  </div>
</template>

<script setup>
const vLog = {
  mounted(el, binding, vnode) {
    console.log('el - ', el)
    console.log('binding - ', binding)
    console.log('vnode - ', vnode)
  },
}

const vCondition = {
  mounted(el, binding) {
    console.log('\n\n')
    console.log('el - ', el)
    console.log('binding - ', binding)

    if (binding.arg === 'bg') {
      el.style.background = 'red'
    }

    if (binding.modifiers.italic) {
      el.style.fontStyle = 'italic'
    }

    if (binding.arg === 'color') {
      el.style.color = 'red'
    }

    if (binding.modifiers.bold) {
      el.style.fontStyle = 'bold'
    }
  },
}

const applyColor = (identifier, color, font) => {
  if (identifier === 'bg') {
    return {
      background: color,
      fontStyle: font,
    }
  } else if (identifier === 'color') {
    return {
      color: color,
      fontStyle: font,
    }
  }
}
</script>
