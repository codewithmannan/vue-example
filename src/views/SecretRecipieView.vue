<template>
  <div class="home">
    <h1 class="heading">Secret Recipes</h1>
    <div class="recipe-grid">
      <RecipieList
        v-for="singleRecipe in recipeData"
        :data="singleRecipe"
        :key="singleRecipe.id"
        :secret="true"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import RecipieList from '../components/RecipieList.vue'

const recipeData = ref([])

onMounted(async () => {
  const response = await axios.get('../mock/secretRecipes.json')
  recipeData.value = response.data
})
</script>
