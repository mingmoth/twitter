const state = {
  currentUser: {},
  user: {},
  popular: [],
}

const getters = {
  getCurrentUser: state => state.currentUser,
  getPopular: state => state.popular
}

const actions = {
  setCurrentUser({ commit }, currentUser) {
    commit('getCurrentUser', currentUser)
  },
  // setTweets({ commit }, tweets) {
  //   commit('updateTweets', tweets)
  // },
  setPopular({ commit }, popular) {
    commit('getPopular', popular)
  }
}

const mutations = {
  getCurrentUser(state, currentUser) {
    state.currentUser = currentUser
  },
  getPopular(state, popular) {
    state.popular = popular
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}