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
    name: 'AllBlogs',
    component: Shop,
    // children: [
    //   {
    //     path: "Sample",
    //     name: "ItsSample",
    //     component: () => import('../views/Blogs/2021/Sample.vue')
    //   },
    //   {
    //     path: "Spring-Cleaning",
    //     name: "ItsSpring",
    //     component: () => import('../views/Blogs/2021/SpringCleaning.vue')
    //   },
    //   {
    //     path: "Hacktech",
    //     name: "Hack-tech",
    //     component: () => import('../views/Blogs/2020/Hacktech.vue')
    //   }
    // ]
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
  },

  // -----------Blog Posts-----------
  // {
  //   path: '/sample/:id',
  //   name: 'Sample',
  //   props: true,
  //   component: () => import('../views/Blogs/2021/Sample.vue')
  // },
  // {
  //   path: '/blog/:id',
  //   name: 'ItsSpring',
  //   props: true,
  //   component: () => import('../views/Blogs/2021/SpringCleaning.vue')
  // },
  // {
  //   path: '/blog/:id',
  //   name: 'Hack-tech',
  //   component: () => import('../views/Blogs/2020/Hacktech.vue')
    
  // },
  {
    path: '/blog/:id',
    name: 'SD-Hacks',
    component: () => import('../views/Blogs/2019/SDHacks.vue')
  },
  {
    path: '/blog/:id',
    name: 'Hello-Again',
    component: () => import('../views/Blogs/2018/HelloAgain.vue')
  },
  {
    path: '/blog/:id',
    name: 'The-Villain',
    component: () => import('../views/Blogs/2016/Villain.vue')
  },
  {
    path: '/blog/:id',
    name: 'Nico-Pup',
    component: () => import('../views/Blogs/2016/Nico.vue')
  },
  {
    path: '/blog/:id',
    name: 'Take-Off',
    component: () => import('../views/Blogs/2016/TakeALoadOff.vue')
  },
  {
    path: '/blog/:id',
    name: 'Keep-Warm',
    component: () => import('../views/Blogs/2016/KeepWarmStayTrendy.vue')
  },
  {
    path: '/blog/:id',
    name: 'Morning-Hike',
    component: () => import('../views/Blogs/2015/MorningHike.vue')
  },
  {
    path: '/blog/:id',
    name: 'The-Waves',
    component: () => import('../views/Blogs/2015/Waves.vue')
  },
  {
    path: '/blog/:id',
    name: 'The-Anchor',
    component: () => import('../views/Blogs/2015/Anchor.vue')
  },
  {
    path: '/blog/:id',
    name: 'The-Time',
    component: () => import('../views/Blogs/2013/Time.vue')
  },

  // -----------UNDATED-----------

  {
    path: '/blog/:id',
    name: 'HS',
    component: () => import('../views/Blogs/Undated/HighSchool.vue')
  },
  {
    path: '/blog/:id',
    name: 'The-Guide',
    component: () => import('../views/Blogs/Undated/Guide.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router