<template>
  <div class="rm-container">
    <header class="rm-recipe-header">
      <h1 class="rm-recipe-title">{{ selectedRecipe.name }}</h1>
      <p class="rm-recipe-description">
        {{ selectedRecipe.description }}
      </p>

      <div class="rm-food-rating">
        <div class="rm-stars">★★★★☆</div>
        <div class="rm-rating-text">4.2/5 (128 reviews)</div>
      </div>
    </header>

    <div class="rm-recipe-content">
      <div class="rm-recipe-image">
        <img :src="selectedRecipe.image" :alt="selectedRecipe.name" />
      </div>

      <div class="rm-recipe-details">
        <div class="rm-ingredients-card">
          <h2 class="rm-section-title">Ingredients</h2>
          <ul class="rm-ingredients-list">
            <li
              v-for="ingredient in selectedRecipe.ingredients"
              :key="ingredient.item"
              class="rm-ingredient-item"
            >
              <span class="rm-ingredient-name">{{ ingredient.item }}</span>
              <span class="rm-ingredient-quantity">{{ ingredient.quantity }}</span>
            </li>
          </ul>

          <div class="rm-recipe-actions">
            <button class="rm-btn rm-btn-primary">Print Recipe</button>
            <button class="rm-btn rm-btn-secondary">Save for Later</button>
          </div>
        </div>

        <div class="rm-nutrition-info">
          <h2 class="rm-section-title">Nutrition Information</h2>
          <div class="rm-nutrition-grid">
            <div class="rm-nutrition-item">
              <div class="rm-nutrition-value">320</div>
              <div class="rm-nutrition-label">Calories</div>
            </div>
            <div class="rm-nutrition-item">
              <div class="rm-nutrition-value">22g</div>
              <div class="rm-nutrition-label">Protein</div>
            </div>
            <div class="rm-nutrition-item">
              <div class="rm-nutrition-value">25g</div>
              <div class="rm-nutrition-label">Carbs</div>
            </div>
            <div class="rm-nutrition-item">
              <div class="rm-nutrition-value">18g</div>
              <div class="rm-nutrition-label">Fat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const selectedRecipe = ref({})

onMounted(async () => {
  const id = route.params.id

  if (!id) {
    router.push('/')
  }

  const response = await axios.get('../mock/recipes.json')
  const idData = response.data.find((item) => item.id == id)

  if (!idData) {
    router.push('/')
  }

  selectedRecipe.value = idData
})
</script>
