<template>
  <div
    class="container d-flex flex-column align-items-center justify-content-center"
    style="min-height: 100vh"
  >
    <div class="card p-4 shadow" style="min-width: 320px; max-width: 400px">
      <h1 class="mb-4 text-center">{{ fullName }}</h1>
      <button class="btn btn-primary mx-auto d-block" style="width: 150px" @click="changeName()">
        Change Name
      </button>
    </div>
  </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    }
  },
  methods: {
    changeName() {
      this.user.firstName = 'Shakeel'
      this.user.lastName = 'Ahamed'
    },
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    },
  },
}
</script> -->

<script setup>
import { reactive, computed } from 'vue'

const user = reactive({
  firstName: 'John',
  lastName: 'Doe',
})

function changeName() {
  user.firstName = 'Shakeel'
  user.lastName = 'Ahamed'
}

const fullName = computed(() => {
  return `${user.firstName} ${user.lastName}`
})
</script>
