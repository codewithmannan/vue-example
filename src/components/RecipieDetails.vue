<template>
  <div class="card">
    <img :src="data.img" class="card-img-top" width="300" />
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text text-description">
        {{ data.description }}
      </p>
      <div class="mt-4">
        <h6 class="mb-3">Ingredients</h6>
        <div class="d-flex flex-wrap gap-2">
          <span
            class="badge rounded-pill px-3 py-2"
            :class="item.class"
            v-for="item in data.ingredients"
          >
            {{ item.value }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>
