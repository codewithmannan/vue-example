import { ref, computed } from 'vue'

const cart = ref([])

export function useCart() {
  const addToCart = (product) => {
    const isExist = cart.value.find((item) => item.id === product.id)

    if (isExist) {
      isExist.quantity += 1
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }

    saveInLocalStorage()
  }

  const saveInLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }

  const loadFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      cart.value = JSON.parse(savedCart)
    }
  }

  const cartCount = () => {
    return cart.value.reduce((count, item) => count + item.quantity, 0)
  }

  const cartItems = () => {
    return cart.value
  }

  const removeItem = (productId) => {
    const isConfirm = confirm('Are you sure you want to remove this item from the cart?')
    if (isConfirm) {
      cart.value = cart.value.filter((item) => item.id !== productId)
      saveInLocalStorage()
    }
  }

  const totalPrice = computed(() => {
    return cartItems().reduce((sum, item) => {
      return sum + item.price * item.quantity
    }, 0)
  })

  const increment = (productId) => {
    const item = cart.value.find((item) => item.id === productId)
    if (item) {
      item.quantity += 1
      saveInLocalStorage()
    }
  }

  const decrement = (productId) => {
    const item = cart.value.find((item) => item.id === productId)
    if (item && item.quantity > 1) {
      item.quantity -= 1
      saveInLocalStorage()
    }
  }

  return {
    addToCart,
    cartCount,
    cartItems,
    loadFromLocalStorage,
    removeItem,
    totalPrice,
    increment,
    decrement,
  }
}
