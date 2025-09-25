import { ref, computed } from 'vue'

const cart = ref([])

export function useCart() {
  const addToCart = (product) => {
    cart.value.push(product)
    console.log('Current cart:', cart.value)
  }

  const cartCount = () => {
    return cart.value.length
  }

  const cartItems = () => {
    return cart.value
  }

  const totalPrice = computed(() => {
    return cartItems().reduce((sum, item) => sum + item.price, 0)
  })

  return {
    addToCart,
    cartCount,
    cartItems,
    totalPrice,
  }
}
