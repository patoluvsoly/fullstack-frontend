<script setup>
import { useWishlistStore } from '../stores/wishlist'
const wishlistStore = useWishlistStore()
</script>

<template>
    <v-container>
        <v-row>
            <v-col md="12">
                <div class="text-display-medium mb-12 mt-12 text-center">
                    My Wishlist
                </div>
            </v-col>
        </v-row>
        <v-row v-if="wishlistStore.wishlist.length === 0">
            <v-col md="12" class="text-center">
                <v-card>
                    <v-card-text class="text-h6 py-12">
                        Your wishlist is empty
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col md="12" v-for="item in wishlistStore.wishlist" :key="item.name">
                <v-card color="primary">
                    <v-row>
                        <v-col md="4" class="text-center">
                            <v-avatar color="grey" rounded="0" size="150" >
                                <v-img :src="item.Image" ></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col md="6" class="text-right">
                                <v-card-item>
                                    <v-card-title class="mb-4">{{ item.name }}</v-card-title>
                                    <v-card-subtitle>{{ item.author }}</v-card-subtitle>
                                    <v-card-subtitle>Ksh {{ item.price }}</v-card-subtitle>
                                    <v-chip class="mt-2">{{ item.genre }}</v-chip>
                                </v-card-item>
                                <v-card-actions>
                                    <v-spacer></v-spacer> 
                                    <v-btn color="error" elevation="4" variant="elevated" @click="wishlistStore.removeFromWishlist(item.name)"> Remove </v-btn>
                                </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>