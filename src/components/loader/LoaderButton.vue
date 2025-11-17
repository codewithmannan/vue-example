<template>
  <button class="login-btn" :disabled="loading" @click.prevent="handleClick">
    <span v-if="!loading">{{ label }}</span>
    <svg v-else class="spinner" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
    </svg>
  </button>
</template>

<script setup>
const emit = defineEmits(['click'])

defineProps({
  label: {
    type: String,
    default: 'Submit',
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

function handleClick() {
  emit('click')
}
</script>

<style scoped>
.login-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(106, 17, 203, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.login-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(106, 17, 203, 0.4);
}

.login-btn:disabled {
  opacity: 0.8;
  cursor: not-allowed;
}

/* Spinner */
.spinner {
  width: 26px;
  height: 26px;
  animation: rotate 1.5s linear infinite;
}

.path {
  stroke: #fff;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
