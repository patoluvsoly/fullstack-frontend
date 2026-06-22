<script setup>
import { provideSelection } from 'vuetify/lib/components/VDataTable/composables/select.mjs';

import {ref} from 'vue'
import { useBooksStore } from '../stores/books'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { useWishlistStore } from '../stores/wishlist'

const router = useRouter()
const booksStore = useBooksStore()
const books= booksStore.books
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()

function view(book){
   booksStore.updateSelectedBook(book) // keep track of the selected item
    router.push('/view_books')
}
//cart
const quantity = ref(1)
function buy(book){
    book.quantity = quantity.value
    cartStore.updateCart(book)
}
//wishlist
function addWishlist(book){
    wishlistStore.addToWishlist(book)
    alert(`${book.name} added to wishlist!`)
}

</script>


<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <div class="text-display-medium mb-12 mt-12 text-center">
                Browse Books
                </div>
            </v-col>
        </v-row> 
        <v-row>
            <v-col v-for="book in books ">
                <v-card class="h-100 d-flex flex-column width=250px">
                    <v-img :src="book.Image" height="200px" class="mt-4" ></v-img>
                    <v-card-title>{{ book.name }}</v-card-title>
                    <v-card-subtitle>{{ book.price }}</v-card-subtitle>
                    <v-card-text>{{ book.description }}</v-card-text>  <!--description tab-->
                    <v-card-text>By:{{ book.author }}</v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" variant="elevated" @click="buy(book)">Add to Cart</v-btn>
                        <v-btn color="secondary" variant="elevated" @click="addWishlist(book)">❤ Wishlist</v-btn>
                        <v-btn color="primary" variant="elevated" @click="view(book)">View Book</v-btn>
                    </v-card-actions>
                </v-card>
                        
            </v-col>
            
        </v-row>
    </v-container>
    
</template>


