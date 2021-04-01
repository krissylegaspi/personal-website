import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Shop from '../views/Shop.vue'
import Blog from '../views/Blog.vue'
// import Game from '../views/Game.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

// Blog Posts
import SpringCleaning from '../views/Blogs/2021/SpringCleaning.vue'

import Hacktech from '../views/Blogs/2020/Hacktech.vue'
import SDHacks from '../views/Blogs/2019/SDHacks.vue'

import HelloAgain from '../views/Blogs/2018/HelloAgain.vue'
import Villain from '../views/Blogs/2016/Villain.vue'
import Nico from '../views/Blogs/2016/Nico.vue'
import TakeALoadOff from '../views/Blogs/2016/TakeALoadOff.vue'
import KeepWarmStayTrendy from '../views/Blogs/2016/KeepWarmStayTrendy.vue'
import MorningHike from '../views/Blogs/2015/MorningHike.vue'
import Waves from '../views/Blogs/2015/Waves.vue'
import Anchor from '../views/Blogs/2015/Anchor.vue'
import Time from '../views/Blogs/2013/Time.vue'
import HighSchool from '../views/Blogs/Undated/HighSchool.vue'
import Guide from '../views/Blogs/Undated/Guide.vue'

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
  },

  // -----------Blog Posts-----------
  {
    path: '/blog/2021/Spring-Cleaning',
    name: 'SpringCleaning',
    component: SpringCleaning
  },
  {
    path: '/blog/2020/Hacktech',
    name: 'Hacktech',
    component: Hacktech
  },
  {
    path: '/blog/2019/SD-Hacks',
    name: 'SDHacks',
    component: SDHacks
  },
  {
    path: '/blog/2018/Hello-Again',
    name: 'HelloAgain',
    component: HelloAgain
  },
  {
    path: '/blog/2016/Villain',
    name: 'Villain',
    component: Villain
  },
  {
    path: '/blog/2016/Nico',
    name: 'Nico',
    component: Nico
  },
  {
    path: '/blog/2016/Take-A-Load-Off',
    name: 'TakeALoadOff',
    component: TakeALoadOff
  },
  {
    path: '/blog/2016/Keep-Warm-Stay-Trendy',
    name: 'KeepWarmStayTrendy',
    component: KeepWarmStayTrendy
  },
  {
    path: '/blog/2015/Morning-Hike',
    name: 'MorningHike',
    component: MorningHike
  },
  {
    path: '/blog/2015/Waves',
    name: 'Waves',
    component: Waves
  },
  {
    path: '/blog/2015/Anchor',
    name: 'Anchor',
    component: Anchor
  },
  {
    path: '/blog/2013/Time',
    name: 'Time',
    component: Time
  },

  // -----------UNDATED-----------

  {
    path: '/blog/Undated/High-School',
    name: 'HighSchool',
    component: HighSchool
  },
  {
    path: '/blog/Undated/Guide',
    name: 'Guide',
    component: Guide
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router