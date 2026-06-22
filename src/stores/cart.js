import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart',  {
   state: () => {
        const cart= []

        return{
            cart
        }
   },
   actions:{
       updateCart(payload) {
           this.cart.push(payload)
        
       },
       removeFromCart(bookName) {
           this.cart = this.cart.filter(item => item.name !== bookName)
       },
       clearCart() {
           this.cart = []
       }
   },
   persist: true,
})