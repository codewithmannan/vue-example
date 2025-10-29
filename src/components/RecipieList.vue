<template>
  <div class="recipe-card" @click="showDetails">
    <img :src="data.image" :alt="data.name" />
    <div class="recipe-content">
      <h3>{{ data.name }}</h3>
      <p>{{ data.description.substring(0, 90) }}...</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  secret: {
    type: Boolean,
    default: false,
  },
})

const router = useRouter()

function showDetails() {
  const secret = props.secret ? '/secret' : ''
  router.push(`/recipie-details/${props.data.id}${secret}`)
}
</script>
