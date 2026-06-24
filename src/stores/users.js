import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',{


    state: () => {
        const users = {
            0: {
                id: 1,
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@example.com",
                phone: "0022782345",
                location: "New York",
                address: "123 Main St",
            },
            1: {
                id: 2,
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phone: "0022782346",
                location: "New York",
                address: "254 Main St",
            },
            2: {
                id: 3,
                firstName: "Bob",
                lastName: "Johnson",
                email: "bob.johnson@example.com",
                phone: "0722782347",
                location: "Los Angeles",
                address: "234 Oak Ave",
            },
            3: {
                id: 4,
                firstName: "Alice",
                lastName: "Williams",
                email: "alice.williams@example.com",
                phone: "0722782348",
                location: "Chicago",
                location: "New York",
                address: "123 Main St",
            },
            4: {
                id: 5,
                firstName: "David",
                lastName: "Brown",
                email: "david.brown@example.com",
                phone: "0722782349",
                location: "Los Angeles",
                address: "234 Pine Rd",
            },
            5: {
                id: 6,
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phone: "0722782346",
                location: "New York",
                address: "567 Main St",
            },

        }

        return {
            users
        }       
      
    },
    actions: {
        // define actions here as needed
    },
             
    
})
