const state = {
  unreadNotices: {}
}

const getters = {
  getUnreadNotices: state => state.unreadNotices
}

const actions = {
  setUnreadNotices({ commit }, notices ) {
    commit('getUnreadNotices', notices)
  }
}

const mutations = {
  getUnreadNotices(state, notices) {
    state.unreadNotices = notices
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}