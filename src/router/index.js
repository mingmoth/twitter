import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Tweets from '../views/Tweets.vue'
import NotFound from '../views/NotFound.vue'
import store from './../store'

Vue.use(VueRouter)

const router = new VueRouter({
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
      path: '/admin/tweets',
      name: 'admin-tweets',
      component: () => import('../views/AdminTweets.vue')
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component: () => import('../views/AdminUsers.vue')
    },
    {
      path: '/users/:id',
      name: 'user',
      component: () => import('../views/User.vue'),
      redirect: '/users/:id/tweets',
      children: [
        {
          path: 'tweets',
          name: 'user-tweets',
          component: () => import('../views/UserTweets.vue')
        },
        {
          path: 'replies',
          name: 'user-replies',
          component: () => import('../views/UserReplies.vue')
        },
        {
          path: 'likes',
          name: 'user-likes',
          component: () => import('../views/UserLikes.vue')
        }
      ]
    },
    {
      path: '/users/:id/',
      name: 'user',
      component: () => import('../views/UserFollows.vue'),
      children: [
        {
          path: 'followings',
          name: 'user-followings',
          component: () => import('../views/UserFollowings.vue')
        },
        {
          path: 'followers',
          name: 'user-followers',
          component: () => import('../views/UserFollowers.vue')
        },
      ]
    },
    // {
    //   path: '/users/:id/followings',
    //   name: 'user-followings',
    //   component: () => import('../views/UserFollowings.vue')
    // },
    {
      path: '/users/:id/settings',
      name: 'user-settings',
      component: () => import('../views/Settings.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  store.dispatch('setCurrentUser')
  next()
})

export default router