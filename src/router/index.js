import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/adminlogin',
    name: 'adminlogin',
    component: () => import('../views/AdminLogin.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('../views/Posts.vue')
  },
  {
    path: '/user/tweets',
    name: 'user-tweets',
    component: () => import('../views/UserTweets.vue')
  },
  {
    path: '/user/replies',
    name: 'user-replies',
    component: () => import('../views/UserReplies.vue')
  },
  {
    path: '/user/likes',
    name: 'user-likes',
    component: () => import('../views/UserLikes.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
