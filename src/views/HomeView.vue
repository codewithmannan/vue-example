<template>
  <div class="container">
    <h1 class="text-center mb-4">Famous Biryani Varieties</h1>
    <div class="row">
      <div class="col">
        <RecipieDetails :data="hyderabadiBiryaniData" />
      </div>
      <div class="col">
        <RecipieDetails :data="mordabadiBiryani" />
      </div>
      <div class="col">
        <RecipieDetails :data="victoriaBiryani" />
      </div>
    </div>
  </div>
</template>

<!-- <script>
// option api
export default {
  components: {

  },
}
</script> -->

<script setup>
import RecipieDetails from '../components/RecipieDetails.vue'

const hyderabadiBiryaniData = {
  img: '/images/h.jpg',
  title: 'Hydrabadi Biryani',
  description:
    'Hyderabadi Biryani is a world-famous aromatic rice dish from Hyderabad, India, known for its irresistible blend of fragrant basmati rice, tender marinated meat, and a medley of exotic spices. Slow-cooked using the traditional dum method, the flavors of saffron, caramelized onions, and fresh herbs infuse every grain of rice. This royal delicacy offers a perfect balance of spiciness, richness, and fragrance, making it a timeless favorite for festive occasions and everyday indulgence.',
  ingredients: [
    { value: 'Basmati Rice', class: 'bg-primary' },
    { value: 'Chicken or Mutton', class: 'bg-success' },
    { value: 'Fried Onions', class: 'bg-warning text-dark' },
    { value: 'Yogurt', class: 'bg-danger' },
    { value: 'Green Chilies', class: 'bg-info' },
    { value: 'Ginger-Garlic Paste', class: 'bg-light text-dark' },
    { value: 'Coriander Powder', class: 'bg-dark text-light' },
    { value: 'Cumin Seeds', class: 'bg-primary' },
    { value: 'Saffron', class: 'bg-success' },
    { value: 'Ghee', class: 'bg-warning text-dark' },
  ],
}

const mordabadiBiryani = {
  img: '/images/m.jpg',
  title: 'Mordabadi Biryani',
  description:
    'Mordabadi Biryani is a lesser-known but equally delightful variation of the traditional biryani, originating from the Mordabad region. It features a unique blend of spices and herbs, often incorporating local ingredients that give it a distinct flavor profile. The dish is characterized by its rich aroma and tender meat, making it a favorite among those who appreciate regional culinary diversity.',
  ingredients: [
    { value: 'Basmati Rice', class: 'bg-primary' },
    { value: 'Chicken', class: 'bg-success' },
    { value: 'Fried Onions', class: 'bg-warning text-dark' },
    { value: 'Yogurt', class: 'bg-danger' },
    { value: 'Green Chilies', class: 'bg-info' },
    { value: 'Ginger-Garlic Paste', class: 'bg-light text-dark' },
    { value: 'Coriander Powder', class: 'bg-dark text-light' },
    { value: 'Cumin Seeds', class: 'bg-primary' },
    { value: 'Saffron', class: 'bg-success' },
    { value: 'Ghee', class: 'bg-warning text-dark' },
  ],
}

const victoriaBiryani = {
  img: '/images/v.jpg',
  title: 'Victoria Biryani',
  description:
    'Victoria Biryani is a flavorful and aromatic rice dish inspired by royal kitchens, known for its rich blend of spices and tender meat. This biryani stands out with its unique preparation style and the use of select ingredients that create a luxurious taste experience. It is often served at grand celebrations and is cherished for its exquisite aroma and taste.',
  ingredients: [
    { value: 'Basmati Rice', class: 'bg-primary' },
    { value: 'Chicken or Mutton', class: 'bg-success' },
    { value: 'Fried Onions', class: 'bg-warning text-dark' },
    { value: 'Yogurt', class: 'bg-danger' },
    { value: 'Green Chilies', class: 'bg-info' },
    { value: 'Ginger-Garlic Paste', class: 'bg-light text-dark' },
    { value: 'Coriander Powder', class: 'bg-dark text-light' },
    { value: 'Cumin Seeds', class: 'bg-primary' },
    { value: 'Saffron', class: 'bg-success' },
    { value: 'Ghee', class: 'bg-warning text-dark' },
    { value: 'Whole Spices', class: 'bg-secondary text-light' },
  ],
}
</script>
