const state = {
  currentUser: {},
  userProfile: {},
  userTweets: {},
  popular: [],
}

const getters = {
  getCurrentUser: state => state.currentUser,
  getUserProfile: state => state.userProfile,
  getUserTweets: state => state.userTweets,
  getPopular: state => state.popular
}

const actions = {
  setCurrentUser({ commit }, currentUser) {
    commit('getCurrentUser', currentUser)
  },
  setUser({ commit }, userProfile) {
    commit('getUser', userProfile)
  },
  setUserTweets({ commit }, userTweets) {
    commit('getUserTweets', userTweets)
  },
  // setTweets({ commit }, tweets) {
  //   commit('updateTweets', tweets)
  // },
  setPopular({ commit }, popular) {
    commit('getPopular', popular)
  },
  setFollow({ commit }, userId) {
    commit('addFollow', userId)
  },
  setUnfollow({ commit }, followingId) {
    commit('removeFollow', followingId)
  }
}

const mutations = {
  getCurrentUser(state, currentUser) {
    state.currentUser = currentUser
  },
  getUser: (state, userProfile) => {
    state.userProfile = userProfile
  },
  getUserTweets: (state, userTweets) => {
    state.userTweets = userTweets
  },
  getPopular(state, popular) {
    state.popular = popular
  },
  addFollow(state, userId) {
    state.popular = state.popular.map(user => {
      if(user.id === userId) {
        return user = {
          ...user,
          isFollowed: true
        }
      } else { return user }
    })
  },
  removeFollow(state, followingId) {
    state.popular = state.popular.map(user => {
      if (user.id === followingId) {
        return user = {
          ...user,
          isFollowed: false
        }
      } else { return user }
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}