const state = {
  currentUser: {},
  user: {},
}

const getters = {
  getCurrentUser: state => state.currentUser
}

const actions = {
  setCurrentUser({ commit }, currentUser) {
    commit('getCurrentUser', currentUser)
  },
  // setTweets({ commit }, tweets) {
  //   commit('updateTweets', tweets)
  // },
}

const mutations = {
  getCurrentUser(state, currentUser) {
    state.currentUser = currentUser
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}