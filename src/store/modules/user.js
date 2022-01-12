import userAPI from '../../apis/users'

const state = {
  currentUser: {},
  userProfile: {},
  userTweets: {},
  userReplies: {},
  userLikes: {},
  userFollowings: [],
  userFollowers: [],
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
  getUserFollowings: state => state.userFollowings,
  getUserFollowers: state => state.userFollowers,
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
  setUserFollowings({ commit }, userFollowings) {
    commit('getUserFollowings', userFollowings)
  },
  setUserFollowers({ commit }, userFollowers) {
    commit('getUserFollowers', userFollowers)
  },
  setPopular({ commit }, popular) {
    commit('getPopular', popular)
  },
  setFollow({ commit }, userId) {
    commit('addFollow', userId)
  },
  setUnfollow({ commit }, followingId) {
    commit('removeFollow', followingId)
  },
  likeUserTweet({ commit }, tweetId) {
    commit('addUserTweetsLike', tweetId)
  },
  unlikeUserTweet({ commit }, tweetId) {
    commit('removeUserTweetsLike', tweetId)
  },
  likeUserReply({ commit }, replyload) {
    commit('addUserReplyLike', replyload)
  },
  unlikeUserReply({ commit }, replyload) {
    commit('removeUserReplyLike', replyload)
  },
  unlikeUserLikes({ commit }, tweetId) {
    commit('removeUserLikes', tweetId)
  },
  
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
  getUserFollowings: (state, userFollowings) => {
    state.userFollowings = userFollowings
  },
  getUserFollowers: (state, userFollowers) => {
    state.userFollowers = userFollowers
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
  },
  removeUserLikes(state, tweetId) {
    if (state.userLikes.length) {
      console.log(tweetId)
      return state.userLikes = state.userLikes.filter(like => like.id !== tweetId)
    } else return
  },
  addUserTweetsLike(state, tweetId) {
    if (!state.userTweets.length) {
      return 
    } else {
      state.userTweets = state.userTweets.map(tweet => {
        if (tweet.id === tweetId) {
          return tweet = {
            ...tweet,
            Likes: tweet.Likes + 1,
            isLiked: !tweet.isLiked
          }
        } else {
          return tweet
        }
      })
    }
  },
  removeUserTweetsLike(state, tweetId) {
    if (!state.userTweets.length) {
      return
    } else {
      state.userTweets = state.userTweets.map(tweet => {
        if (tweet.id === tweetId) {
          return tweet = {
            ...tweet,
            Likes: tweet.Likes - 1,
            isLiked: !tweet.isLiked,
          }
        } else {
          return tweet
        }
      })
    }
  },
  addUserReplyLike(state, replyload) {
    if (state.userReplies.length) {
      console.log(replyload.like)
      state.userReplies = state.userReplies.map(reply => {
        if (reply.id === replyload.tweetId) {
          return reply = {
            ...reply,
            Likes: reply.Likes.concat(replyload.like),
            isLiked: true
          }
        } else {
          return reply
        }
      })
    }
  },
  removeUserReplyLike(state, replyload) {
    if(state.userReplies.length) {
      state.userReplies = state.userReplies.map(reply => {
        if (reply.id === replyload.tweetId) {
          return reply = {
            ...reply,
            Likes: reply.Likes.filter(like => like.UserId !== replyload.userId),
            isLiked: false
          }
        } else {
          return reply
        }
      })
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}