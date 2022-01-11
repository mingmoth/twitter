import userAPI from '../../apis/users'

const state = {
  currentUser: {},
  userProfile: {},
  userTweets: {},
  userReplies: {},
  userLikes: {},
  popular: [],
  isAuthenticated: false,
  token: ''
}

const getters = {
  getCurrentUser: state => state.currentUser,
  getUserProfile: state => state.userProfile,
  getUserTweets: state => state.userTweets,
  getUserReplies: state => state.userReplies,
  getUserLikes: state => state.userLikes,
  getPopular: state => state.popular
}

const actions = {
  async setCurrentUser({ commit }) {
    try {
      const { data } = await userAPI.getCurrentUser()
      commit('getCurrentUser', data.user)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
    
  },
  setUser({ commit }, userProfile) {
    commit('getUser', userProfile)
  },
  setUserTweets({ commit }, userTweets) {
    commit('getUserTweets', userTweets)
  },
  setUserReplies({ commit }, userReplies) {
    commit('getUserReplies', userReplies)
  },
  setUserLikes({ commit }, userLikes) {
    commit('getUserLikes', userLikes)
  },
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
    state.currentUser = {
      ...state.currentUser,
      ...currentUser
    }
    state.token = localStorage.getItem('getToken')
    state.isAuthenticated = true
  },
  revokeAuthentication(state) {
    state.currentUser = {}
    state.token = ''
    state.isAuthenticated = false
    localStorage.removeItem('getToken')
  },
  getUser: (state, userProfile) => {
    state.userProfile = userProfile
  },
  getUserTweets: (state, userTweets) => {
    state.userTweets = userTweets
  },
  getUserReplies: (state, userReplies) => {
    state.userReplies = userReplies
  },
  getUserLikes: (state, userLikes) => {
    state.userLikes = userLikes
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