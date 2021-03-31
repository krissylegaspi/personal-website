import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Shop from '../views/Shop.vue'
import Blog from '../views/Blog.vue'
// import Game from '../views/Game.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  // {
  //   path: '/game',
  //   name: 'Game',
  //   component: Game
  // },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router