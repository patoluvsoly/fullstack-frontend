import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist',  {
   state: () => {
        const wishlist = []

        return{
            wishlist
        }
   },
   actions:{
       addToWishlist(payload) {
           // Check if item already exists in wishlist
           const exists = this.wishlist.some(item => item.name === payload.name)
           if (!exists) {
               this.wishlist.push(payload)
           }
       },
       removeFromWishlist(bookName) {
           this.wishlist = this.wishlist.filter(item => item.name !== bookName)
       },
       clearWishlist() {
           this.wishlist = []
       }
   },
   persist: true,
})
