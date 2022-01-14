const state = {
  adminTweets: [],
  adminUsers: {},
}

const getters = {
  getAdminTweets: state => state.adminTweets,
  getAdminUsers: state => state.adminUsers,
}

const actions = {
  setAdminTweets({ commit }, adminTweets) {
    commit('getAdminTweets', adminTweets)
  },
  setAdminUsers({ commit }, adminUsers) {
    commit('getAdminUsers', adminUsers)
  },
  removeAdminTweet({ commit }, tweetId) {
    commit('deleteAdminTweet', tweetId)
  }
}

const mutations = {
  getAdminTweets(state, adminTweets) {
    state.adminTweets = adminTweets
  },
  getAdminUsers(state, adminUsers) {
    state.adminUsers = adminUsers
  },
  deleteAdminTweet(state, tweetId) {
    state.adminTweets = state.adminTweets.filter(tweet => tweet.id !== tweetId)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}