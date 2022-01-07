import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Tweets from '../views/Tweets.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkExactActiveClass: 'active',
  routes : [
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
      path: '/tweets',
      name: 'tweets',
      component: Tweets
    },
    {
      path: '/tweet',
      name: 'tweet',
      component: () => import('../views/Tweet.vue')
    },
    {
      path: '/admin/main',
      name: 'admin-main',
      component: () => import('../views/AdminMain.vue')
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component: () => import('../views/AdminUsers.vue')
    },
    {
      path: '/users/:id/tweets',
      name: 'user-tweets',
      component: () => import('../views/UserTweets.vue')
    },
    {
      path: '/users/:id/replies',
      name: 'user-replies',
      component: () => import('../views/UserReplies.vue')
    },
    {
      path: '/users/:id/likes',
      name: 'user-likes',
      component: () => import('../views/UserLikes.vue')
    },
    {
      path: '/users/followings',
      name: 'user-followings',
      component: () => import('../views/UserFollowings.vue')
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
})
