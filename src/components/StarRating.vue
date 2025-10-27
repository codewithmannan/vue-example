<template>
  <div class="ak-star-rating" :aria-label="`Rating ${rating} out of ${max}`" role="img">
    <span v-for="n in max" :key="n" class="ak-star-wrap" :style="{ fontSize: size }">
      <!-- base gray star -->
      <i class="fa fa-star ak-star-base" aria-hidden="true"></i>

      <!-- yellow fill -->
      <span class="ak-star-fill" :style="{ width: getFillPercent(n) + '%' }">
        <i class="fa fa-star" aria-hidden="true"></i>
      </span>
    </span>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  rating: { required: true },
  max: { type: Number, default: 5 },
  size: { type: String, default: '20px' },
  color: { type: String, default: '#FFD055' },
})

const { rating, max, color } = toRefs(props)

function getFillPercent(index) {
  if (rating.value >= index) return 100
  if (rating.value <= index - 1) return 0
  return Math.round((rating.value - (index - 1)) * 100)
}
</script>

<style scoped>
/* --- AK prefixed styles to prevent global conflicts --- */

.ak-star-rating {
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
}

.ak-star-wrap {
  position: relative;
  display: inline-block;
  line-height: 1;
}

.ak-star-base {
  color: #ddd;
  display: block;
}

.ak-star-fill {
  position: absolute;
  inset: 0;
  overflow: hidden;
  display: block;
  pointer-events: none;
}

.ak-star-fill > .fa-star {
  color: var(--ak-star-color, #ffd055);
  display: block;
}

.fa-star {
  width: 1em;
  height: 1em;
  display: inline-block;
  text-align: center;
}
</style>
