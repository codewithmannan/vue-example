<template>
  <div class="carousel-container" :style="{ maxWidth: width }">
    <div class="carousel">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(image, index) in images" :key="index" class="slide">
          <img :src="image" :alt="`Slide ${index + 1}`" class="slide-image" />
          <div class="slide-overlay"></div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button class="nav-btn prev" @click="prevSlide" aria-label="Previous slide">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="nav-btn next" @click="nextSlide" aria-label="Next slide">
        <i class="fas fa-chevron-right"></i>
      </button>

      <!-- Dots / Indicators -->
      <div class="dots-container">
        <button
          v-for="(img, index) in images"
          :key="index"
          :class="['dot', { active: index === currentIndex }]"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>

      <!-- Slide Counter -->
      <div class="slide-counter">{{ currentIndex + 1 }} / {{ images.length }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: [
      'https://www.allrecipes.com/thmb/efI-3_TiYi1tp7Cw27XAiyFwYQE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-260775-pull-apart-chicken-sliders-Hero-2x1-4858fe90db0c4504b456428a5df5389a.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFpEP7U3yPPTUc2Cwjp1K23mnMRaJmUYTRw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAU5_YSAmGsC0qLHXNBjkXlJ9AyZkGM6kqg&s',
    ],
  },
  autoSlide: {
    type: Boolean,
    default: true,
  },
  slideInterval: {
    type: Number,
    default: 4000,
  },
  height: {
    type: String,
    default: '500px',
  },
  width: {
    type: String,
    default: '100%',
  },
})

const currentIndex = ref(0)

// Navigation functions
function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
  resetAutoSlide()
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
  resetAutoSlide()
}

function goToSlide(index) {
  currentIndex.value = index
  resetAutoSlide()
}

// Auto sliding
let interval
const startAutoSlide = () => {
  if (props.autoSlide) {
    interval = setInterval(nextSlide, props.slideInterval)
  }
}

const resetAutoSlide = () => {
  if (interval) {
    clearInterval(interval)
    startAutoSlide()
  }
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: v-bind('props.width');
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.carousel {
  position: relative;
  width: 100%;
  height: v-bind('props.height');
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.carousel-inner {
  display: flex;
  transition: transform 0.6s ease-in-out;
  height: 100%;
}

.slide {
  min-width: 100%;
  height: 100%;
  position: relative;
  flex-shrink: 0;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%);
  pointer-events: none;
}

/* Navigation Buttons */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.95);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.nav-btn:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.nav-btn i {
  font-size: 1.3rem;
  color: #333;
  transition: transform 0.2s ease;
}

.nav-btn:hover i {
  transform: scale(1.1);
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

/* Dots/Indicators */
.dots-container {
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 10;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.6);
  transform: scale(1.3);
}

.dot.active {
  background: white;
  border-color: white;
  transform: scale(1.3);
}

/* Slide Counter */
.slide-counter {
  position: absolute;
  bottom: 25px;
  right: 25px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  z-index: 10;
}

/* Responsive Design */
@media (max-width: 768px) {
  .carousel {
    height: 400px;
    border-radius: 8px;
  }

  .nav-btn {
    width: 44px;
    height: 44px;
  }

  .nav-btn i {
    font-size: 1.1rem;
  }

  .prev {
    left: 15px;
  }

  .next {
    right: 15px;
  }

  .dots-container {
    bottom: 20px;
    gap: 10px;
  }

  .dot {
    width: 12px;
    height: 12px;
  }

  .slide-counter {
    bottom: 20px;
    right: 20px;
    padding: 6px 12px;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .carousel {
    height: 300px;
    border-radius: 6px;
  }

  .nav-btn {
    width: 38px;
    height: 38px;
  }

  .nav-btn i {
    font-size: 1rem;
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }

  .dots-container {
    bottom: 15px;
  }

  .dot {
    width: 10px;
    height: 10px;
  }

  .slide-counter {
    bottom: 15px;
    right: 15px;
    padding: 5px 10px;
    font-size: 0.8rem;
  }
}

/* Touch friendly for mobile */
@media (hover: none) {
  .nav-btn {
    background: rgba(255, 255, 255, 0.85);
  }

  .dot:hover {
    transform: none;
  }
}
</style>
