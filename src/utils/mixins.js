import moment from 'moment/min/moment-with-locales'
moment.locale("zh-tw")

import { successToast, errorToast } from './toast'
import { mapActions } from 'vuex'
import tweetAPI from '../apis/tweets'

export const timeFilter = {
  filters: {
    fromNow(time) {
      return time ? moment(time).fromNow(): '--'
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
    async getUserTweets() {},
    async getUserReplies() {},
    async getUserLikes() {},
    async addLike() {},
    async removeLike() {},
    async addFollow() {},
    async removeFollow() {},
    async getPopular() {},
    async putUser() {},
    async updateUser() {},
  }
}

export const tweetFeature = {
  methods: {
    ...mapActions(['setTweets', 'newTweet']),
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
    async fetchTweet() {},
  }
}

export const replies = {
  methods: {
    async reply() {}
  }
}

export const admin = {
  methods: {
    async getUsers() {},
    async getAdminTweets() {},
    async deleteTweet() {},
  }
}
