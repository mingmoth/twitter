import moment from 'moment/min/moment-with-locales'
moment.locale("zh-tw")

import { successToast, errorToast } from './toast'
import { mapActions } from 'vuex'
import tweetAPI from '../apis/tweets'

export const time = {
  filters: {
    fromNow(time) {
      return time ? moment(time).fromNow(): '--'
    }
  }
}

export const image = {
  filters: {
    emptyAvatar(src) {
      return src || '../../public/images/default_avatar.png'
    },
    emptyCover(src) {
      return src || '../../public/images/default_cover.png'
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
        console.log(response)
        const { data, statusText} = response
        if (statusText !== 'OK') {
          throw new Error(data.messages)
        }
        this.setTweets(data)
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
