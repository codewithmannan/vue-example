<template>
  <div ref="recipeContent" class="rm-container">
    <div v-if="loader">Loading data.....</div>
    <div v-else class="inside-container">
      <div class="rm-recipe-header">
        <h1 class="rm-recipe-title">{{ selectedRecipe?.name }}</h1>
        <p class="rm-recipe-description">
          {{ selectedRecipe?.description }}
        </p>

        <div class="rm-food-rating">
          <div class="rm-stars">
            <StarRating :rating="selectedRecipe?.stats?.rating" />
          </div>
          <div class="rm-rating-text">
            {{ `${selectedRecipe?.stats?.rating}/5 (${selectedRecipe?.stats?.reviews} reviews)` }}
          </div>
        </div>
      </div>

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
              <button class="rm-btn rm-btn-primary" @click="printRecipe">Print Recipe</button>
              <button class="rm-btn rm-btn-secondary">Save for Later</button>
            </div>
          </div>

          <div v-if="selectedRecipe?.nutrition" class="rm-nutrition-info">
            <h2 class="rm-section-title">Nutrition Information</h2>
            <div class="rm-nutrition-grid">
              <div v-for="(v, k) in selectedRecipe?.nutrition" class="rm-nutrition-item">
                <div class="rm-nutrition-value">{{ v }}</div>
                <div class="rm-nutrition-label">{{ k }}</div>
              </div>
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

import StarRating from '@/components/StarRating.vue'

const route = useRoute()
const router = useRouter()
const selectedRecipe = ref({})

const recipeContent = ref(null)

const loader = ref(false)

function printRecipe() {
  const printContents = recipeContent.value.innerHTML
  const printWindow = window.open('', '', 'width=800,height=600')
  printWindow.document.write(`
    <html>
      <head>
        <title>Print Recipe</title>
        <style>
          <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
          }
          img {
            max-width: 100%;
            border-radius: 8px;
          }
          h1, h2, h3 {
            color: #333;
          }
          .rm-nutrition-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .rm-nutrition-item {
            text-align: center;
          }

          /* Hide all buttons in the print window */
          button {
            display: none !important;
          }
        </style>
      </head>
      <body>
        ${printContents}
      </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()
  printWindow.print()
  printWindow.close()
}

onMounted(async () => {
  const id = route.params.id

  if (!id) {
    router.push('/')
  }

  loader.value = true
  const response = await axios.get('../mock/recipes.json')
  const idData = response.data.find((item) => item.id == id)

  if (!idData) {
    router.push('/')
  }

  selectedRecipe.value = idData
  loader.value = false
})
</script>

<style scoped>
@media print {
  button,
  .navbar,
  .footer {
    display: none !important;
  }
  body {
    background: #fff;
  }
}
</style>
