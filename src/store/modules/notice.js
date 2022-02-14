const state = {
  notices: {},
  unreadNotices: 0,
}

const getters = {
  getNotices: state => state.notices,
  getUnreadNotices: state => state.unreadNotices
}

const actions = {
  setNotices({ commit }, notices ) {
    commit('getNotices', notices)
  },
  setUnreadNotices({ commit }, unreadNotices) {
    commit('getUnreadNotices', unreadNotices)
  },
}

const mutations = {
  getNotices(state, notices) {
    state.notices = notices
  },
  getUnreadNotices(state, unreadNotices) {
    state.unreadNotices = unreadNotices
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}