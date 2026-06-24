import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders',  {
   state: () => {
        const orders = {
            0: {
                id: 1,
                customer_id: 2,
                book_id: 1,
                quantity: 1,
                total_paid: 1800,
                status: "fullfilled"
            },
            1: {
                id: 2,
                customer_id: 3,
                book_id: 2,
                quantity: 2,
                total_paid: 4070,
                status: "fullfilled"
            },  
            2: {
                id: 3,
                customer_id: 4,
                book_id: 3,
                quantity: 1,
                total_paid: 2200,
                status: "pending"
            },
            3: {
                id: 4,
                customer_id: 5,
                book_id: 4,
                quantity: 4,
                total_paid: 6400,
                status: "processing"
            },
            4: {
                id: 5,
                customer_id: 6,
                book_id: 5,
                quantity: 3,
                total_paid: 4650,
                status: "fullfilled"
            },
            5: {
                id:6,
                customer_id: 1,
                book_id: 11,
                quantity: 5,
                total_paid: 8000,
                status: "fullfilled"
            }                                

     }
     

        return {
            orders
        }
    },
    actions: {
        // define actions here as needed
    },
    persist: true
})