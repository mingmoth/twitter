import moment from 'moment/min/moment-with-locales'
moment.locale("zh-tw")

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

export const users = {
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

export const tweets = {
  methods: {
    async getTweets() {},
    async getTweet() {},
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
