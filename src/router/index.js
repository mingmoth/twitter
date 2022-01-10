import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Tweets from '../views/Tweets.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkExactActiveClass: 'active',
  routes : [
    {
      path: '/',
      name: 'root',
      redirect: '/signin'
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/adminlogin',
      name: 'adminlogin',
      component: () => import('../views/AdminLogin.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/tweets',
      name: 'tweets',
      component: Tweets
    },
    {
      path: '/tweets/:id',
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
