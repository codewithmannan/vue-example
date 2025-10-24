<template>
  <h1>{{ message }}</h1>
  <div>
    <p
      v-for="user in users"
      v-highlight="getConditionalColor(user.userName)"
    >
      {{ user.userName }}
    </p>
  </div>
  <div>
    <input type="text" v-focus />
  </div>
  <br></br>
  <Users />
</template>

<script setup>
import Users from '../components/Users.vue'

const message = 'Hello, Vue'

const users = [
  {
    userId: 1,
    userName: 'Abdul Mannan',
  },
  {
    userId: 2,
    userName: 'Shakeel Ahamed',
  },
]

const getConditionalColor = (name) => {
  return name === 'Abdul Mannan' ? 'isGreen' : 'isRed' 
}

// custom local directive
const vFocus = {
  mounted: (el) => el.focus(),
}


// const myDirective = {
//   // called before bound element's attributes
//   // or event listeners are applied
//   created(el, binding, vnode) {
//     // see below for details on arguments
//   },
//   // called right before the element is inserted into the DOM.
//   beforeMount(el, binding, vnode) {},
//   // called when the bound element's parent component
//   // and all its children are mounted.
//   mounted(el, binding, vnode) {},
//   // called before the parent component is updated
//   beforeUpdate(el, binding, vnode, prevVnode) {},
//   // called after the parent component and
//   // all of its children have updated
//   updated(el, binding, vnode, prevVnode) {},
//   // called before the parent component is unmounted
//   beforeUnmount(el, binding, vnode) {},
//   // called when the parent component is unmounted
//   unmounted(el, binding, vnode) {}
// }

</script>
