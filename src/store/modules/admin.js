const state = {
  adminTweets: [],
  adminUsers: {},
  adminSetting: {
    next: '',
    page: '',
    prev: '',
    totalPage: [],
  }

}

const getters = {
  getAdminTweets: state => state.adminTweets,
  getAdminUsers: state => state.adminUsers,
  getAdminSetting: state => state.adminSetting
}

const actions = {
  setAdminTweets({ commit }, adminTweets) {
    commit('getAdminTweets', adminTweets)
  },
  setAdminPage({ commit }, setting) {
    commit('getAdminSetting', setting)
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
  },
  getAdminSetting(state, setting) {
    const { next, page, prev, totalPage } = setting
    
    state.adminSetting = { next, page, prev, totalPage }
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}