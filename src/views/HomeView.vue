<template>
  <div class="py-5">
    <div class="container-fluid">
      <h1 class="text-center mb-5 display-4 fw-bold text-primary">Famous Biryani Varieties</h1>
      <div class="row g-4">
        <div class="col" v-for="item in data" :key="item.id">
          <div class="card shadow-sm w-100 h-100 border-0">
            <RecipieDetails :data="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RecipieDetails from '../components/RecipieDetails.vue'

import data from '../data/famousBiryani.json'
</script>
