import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import("@/views/HomeView.vue")
  },
  {
    path: "/account",
    name: "AccountView",
    component: () => import("@/views/AccountView.vue")
  },
  {
    path: "/blog",
    name: "BlogView",
    component: () => import("@/views/BlogView.vue")
  },
   {
    path: "/contact",
    name: "ContactView",
    component: () => import("@/views/ContactView.vue")
  },
    {
    path: "/track",
    name: "TrackView",
    component: () => import("@/views/TrackView.vue")
  },
      {
    path: "/checkout",
    name: "CheckoutView",
    component: () => import("@/views/CheckoutView.vue")
  },
   {
    path: "/category",
    name: "CategoryView",
    component: () => import("@/views/CategoryView.vue")
  },
    {
    path: "/cart",
    name: "CartView",
    component: () => import("@/views/CartView.vue")
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
