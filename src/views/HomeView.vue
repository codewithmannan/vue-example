<template>
  <div class="slider">
    <ImageCarousel />
  </div>

  <div class="home">
    <h1 class="heading">Popular Recipes</h1>
    <div class="recipe-grid">
      <RecipieList v-for="singleRecipe in recipeData" :data="singleRecipe" :key="singleRecipe.id" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import ImageCarousel from '../components/ImageCarousel.vue'
import RecipieList from '../components/RecipieList.vue'

const recipeData = ref([])

onMounted(async () => {
  const response = await axios.get('../mock/recipes.json')
  recipeData.value = response.data
})
</script>
