<template>
  <div class="nf-container">
    <h1 class="nf-code">404</h1>
    <p class="nf-message">Oops! The page you're looking for doesn’t exist.</p>
    <router-link to="/" class="nf-button">Go Home</router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.nf-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at top, #f0f4ff, #dce3f5);
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
  padding: 20px;
}

.nf-code {
  font-size: 8rem;
  font-weight: 800;
  color: #007bff;
  margin: 0;
  animation: float 2s ease-in-out infinite;
}

.nf-message {
  font-size: 1.3rem;
  margin: 20px 0;
  color: #555;
}

.nf-button {
  display: inline-block;
  padding: 10px 24px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.nf-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

/* Subtle bounce animation for 404 */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
