<script setup>
import { ref, watch, computed } from 'vue'
import { useBooksStore } from '../stores/books'
import { useCartStore } from '../stores/cart'
import { useWishlistStore } from '../stores/wishlist'
import { useRouter } from 'vue-router'

const router = useRouter()
const booksStore = useBooksStore()
const book = ref(booksStore.selectedBook || {})
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const quantity = ref(1)

watch(() => booksStore.selectedBook, (newBook) => {
  book.value = newBook || {}
}, { deep: true })

const total = computed(() => {
  return (book.value.price || 0) * quantity.value
})

const addToCart = () => {
  if (book.value && book.value.name) {
    book.value.quantity = quantity.value
    cartStore.updateCart(book.value)
    alert(`Added ${quantity.value} x ${book.value.name} to cart. Total: Ksh ${total.value}`)
    quantity.value = 1
  }
}

const addToWishlist = () => {
  if (book.value && book.value.name) {
    wishlistStore.addToWishlist(book.value)
    alert(`${book.value.name} added to wishlist!`)
  }
}

</script>

<template>
   <v-container>
    <v-row>
        <v-col md="2">
            <v-btn icon="mdi-arrow-left" color="primary" to="/books" class="ma-12"></v-btn>
        </v-col>
        <v-col md="10">
            <div class="text-display-medium mb-12 mt-12 text-center">
            {{ book.name }}
            </div>
        </v-col>
    </v-row>
    <v-row>
            <v-col md="6">
            <v-card>
                <v-img class="align-end text-white" height="620" :src="book.Image"  ></v-img>
            </v-card>
            </v-col>
            <v-col md="6">
                <v-card height="620" color="primary">
                    <v-card-item>
                        <v-card-title class="mb-4">{{ book.name }}</v-card-title>
                        <v-chip class="mb-4"> {{ book.genre }} </v-chip>
                            <v-row>
                                <v-col md="4">
                                    <v-rating :model-value="book.rating" :size="24" readonly ></v-rating>
                                </v-col>
                                <v-col md="6">
                                    <v-btn color="lime-lighten-2" variant="outlined" density="compact" readonly > In Stock</v-btn>
                                </v-col>
                            </v-row>
                        <v-card-text style="height: 300px; overflow-y: auto;"> {{ book.long_description}} </v-card-text>
                        <v-card-subtitle>Ksh {{ book.price }}</v-card-subtitle>
                        <v-card-text> 
                            <v-row>                    
                                <v-col md="4">Quantity</v-col>
                                <v-col md="6">
                                    <v-number-input v-model="quantity" control-variant="split" density="compact" :min="1" :max="10" ></v-number-input>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card-item>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-card-text>Total: Ksh {{ total }}</v-card-text>
                        <v-btn color="secondary" elevation="4" variant="elevated" @click="addToWishlist"> ❤ Wishlist </v-btn>
                        <v-btn color="green" elevation="4" variant="elevated" @click="addToCart"> Add to Cart </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
   </v-container>
</template>