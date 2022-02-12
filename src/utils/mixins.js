import moment from 'moment/min/moment-with-locales'
moment.locale("zh-tw")

import { successToast, errorToast } from './toast'
import { mapActions } from 'vuex'
import userAPI from '../apis/users'
import tweetAPI from '../apis/tweets'
import adminAPI from '../apis/admin'

export const timeFilter = {
  filters: {
    fromNow(time) {
      return time ? moment(time).fromNow(): '--'
    },
    dateTime(time) {
      return time ? moment(time).format('a h:mm · ll'): '--'
    }
  }
}

export const imageFilter = {
  filters: {
    emptyAvatar(src) {
      return src || 'https://i.pinimg.com/474x/3c/81/4a/3c814a534b0cf42c80fd5cba6e2ac07f.jpg'
    },
    emptyCover(src) {
      return src || 'https://htmlcolorcodes.com/assets/images/colors/light-orange-color-solid-background-1920x1080.png'
    }
  }
}

export const userFeature = {
  methods: {
    ...mapActions(['setCurrentUser', 'setUser', 'setUserTweets', 'setUserReplies', 'setUserLikes', 'setPopular', 'setFollow', 'setUnfollow', 'likeTweets', 'unlikeTweets', 'likeTweet', 'unlikeTweet', 'likeUserLikes', 'unlikeUserLikes', 'likeUserTweet', 'unlikeUserTweet', 'likeUserReply', 'unlikeUserReply', 'setUserFollowings', 'setUserFollowers', 'toggleFollowers', 'toggleFollowings',  ]),
    async fetchUser(userId) {
      try {
        const { data } = await userAPI.getUser(userId)
        this.setUser(data.user)
      } catch (error) {
        errorToast.fire({
          title: error.message
        })
      }
    },
    async fetchUserTweets(userId) {
      try {
        const { data } = await userAPI.getUserTweets(userId)
        this.setUserTweets(data.tweets)
      } catch (error) {
        errorToast.fire({
          title: error.message
        })
      }
    },
    async fetchUserReplies(userId) {
      try {
        const response = await userAPI.getUserReplies(userId)
        const { data, statusText } = response
        if (statusText !== 'OK') {
          throw new Error(data.message)
        }
        this.setUserReplies(data.tweets)
      } catch (error) {
        errorToast.fire({
          title: error.message
        })
      }
    },
    async fetchUserLikes(userId) {
      try {
        const response = await userAPI.getUserLikes(userId)
        const { data, statusText } = response
        if (statusText !== 'OK') {
          throw new Error(data.message)
        }
        this.setUserLikes(data.likes)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async fetchUserFollowings(userId) {
      try {
        const response = await userAPI.getUserFollowings(userId)
        const { data, statusText } = response
        if (statusText !== 'OK') {
          throw new Error(data.message)
        }
        this.setUserFollowings(data.users)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async fetchUserFollowers(userId) {
      try {
        const response = await userAPI.getUserFollowers(userId)
        const { data, statusText } = response
        if (statusText !== 'OK') {
          throw new Error(data.message)
        }
        this.setUserFollowers(data.users)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async addTweetLike(tweetId) {
      try {
        const { data } = await userAPI.addLike(tweetId)
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        successToast.fire({
          title: data.message
        })
        this.likeTweets(tweetId)
        this.likeTweet(data.like)
        this.likeUserLikes(tweetId)
        this.likeUserTweet(tweetId)
        const replyload = {tweetId: tweetId, like: data.like}
        this.likeUserReply(replyload)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async removeTweetLike(tweetId, userId) {
      try {
        const { data } = await userAPI.removeLike(tweetId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        successToast.fire({
          title: data.message
        })
        this.unlikeTweets(tweetId)
        this.unlikeTweet(userId)
        this.unlikeUserLikes(tweetId)
        this.unlikeUserTweet(tweetId)
        const replyload = { tweetId: tweetId, userId: userId }
        this.unlikeUserReply(replyload)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async followUser(userId) {
      try {
        const { data } = await userAPI.addFollow({ UserId: userId })
        successToast.fire({
          title: data.message
        })
        this.setFollow(userId)
        this.toggleFollowers(userId)
        this.toggleFollowings(userId)
      } catch (error) {
        errorToast.fire({
          title: error.message
        })
      }
    },
    async unfollowUser(followingId) {
      try {
        const { data } = await userAPI.removeFollow(followingId)
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        successToast.fire({
          title: data.message
        })
        this.setUnfollow(followingId)
        this.toggleFollowers(followingId)
        this.toggleFollowings(followingId)
      } catch (error) {
        errorToast.fire({
          title: error.message
        })
      }
    },
    async fetchPopular() {
      try {
        const response = await userAPI.getTopUser()
        const { data, statusText } = response
        if(statusText !== 'OK') {
          throw new Error(data.message)
        }
        const popular = data.users
        this.setPopular(popular)
      } catch (error) {
        errorToast.fire({
          title: error.message
        })
      }
    },
    async putUser(userId, form) {
      try {
        const { data } = await userAPI.putUser(
          userId, form
        )
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        successToast.fire({
          title: data.message
        })
        this.$router.push({ name: 'user-tweets', params: userId})
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async updateUser(userId, form) {
      try {
        const { data } = await userAPI.updateUser(
          userId, form
        )
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        successToast.fire({
          title: data.message
        })
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
  }
}

export const tweetFeature = {
  methods: {
    ...mapActions(['setTweets', 'setTweet', 'newTweet', 'pushUserTweet']),
    async fetchTweets() {
      try {
        const response = await tweetAPI.getTweets()
        const { data, statusText} = response
        if (statusText !== 'OK') {
          throw new Error(data.messages)
        }
        this.setTweets(data.tweets)
        successToast
      } catch (error) {
        errorToast.fire({
          title: error.message
        })
      }
    },
    async fetchTweet(tweetId) {
      try {
        const { data, statusText } = await tweetAPI.getTweet(tweetId)
        if (statusText !== 'OK') {
          throw new Error(data.message)
        }
        this.setTweet(data.tweet)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async createTweet(description) {
      try {
        const { data } = await tweetAPI.createTweet({
          description: description
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        console.log(data)
        successToast.fire({
          title: data.message
        })
        const newTweet = {
          ...data.tweet,
          User: this.getCurrentUser,
          Replies: 0,
          Likes: 0,
          isLiked: false
        }
        if(this.$route.name === 'tweets') {
          this.newTweet(newTweet)
        } else if(this.$route.name === 'user-tweets') {
          this.pushUserTweet(newTweet)
        }
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
  }
}

export const replies = {
  methods: {
    async createReply() {}
  }
}

export const adminFeature = {
  methods: {
    ...mapActions(['setAdminTweets', 'setAdminPage', 'setAdminUsers', 'removeAdminTweet']),
    async fetchAdminUsers() {
      try {
        const response = await adminAPI.getAdminUsers()
        const { data } = response
        this.setAdminUsers(data.users)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async fetchAdminTweets({ queryPage }) {
      try {
        const response = await adminAPI.getAdminTweets({ page: queryPage })
        const { data } = response
        this.setAdminTweets(data.tweets)
        this.setAdminPage(data)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async deleteAdminTweet(tweetId) {
      try {
        const response = await adminAPI.deleteTweet(tweetId)
        console.log(response)
        this.removeAdminTweet(tweetId)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
  }
}
