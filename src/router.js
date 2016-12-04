import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Profile from './components/Profile'
import User from './components/User'
import Signin from './components/Signin'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, meta: { requireAuth: true } },
    { path: '/user/:id', component: User },
    { path: '/signin', component: Signin }
  ]
})

export default router
