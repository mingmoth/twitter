const state = {
  adminTweets: [],
  adminUsers: {},
}

const getters = {
  getAdminTweets: state => state.adminTweets,
  getAdminUser: state => state.adminUsers,
}

const actions = {
  setAdminTweets({ commit }, adminTweets) {
    commit('getAdminTweets', adminTweets)
  },
  setAdminUsers({ commit }, adminUsers) {
    commit('getAdminUsers', adminUsers)
  },
}

const mutations = {
  getAdminTweets(state, adminTweets) {
    state.adminTweets = adminTweets
  },
  getAdminUsers(state, adminUsers) {
    state.adminUsers = adminUsers
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}