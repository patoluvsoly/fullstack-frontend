import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import Library from '@/components/Library.vue'
import Carts from '@/components/carts.vue'
import books from '@/components/books.vue'
import Profile from '@/components/Profile.vue'
import Admin from '@/components/Admin.vue'
import Wishlist from '@/components/Wishlist.vue'
import ViewBooks from '@/components/ViewBooks.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/books',
      component: books
    },
    {
      path: '/library',
      component: Library
    },
    {
      path: '/cart',
      component: Carts
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/wishlist',
      component: Wishlist
    },
    {
      path: '/view_books',
      component: ViewBooks
    },
  ],
})

export default router
