import userAPI from '../../apis/users'

const state = {
  currentUser: {},
  userProfile: {},
  userTweets: [],
  userReplies: [],
  userLikes: [],
  userTweetModal: {},
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
  getUserTweetModal: state => state.userTweetModal,
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
  setUserTweetModal({ commit }, tweetload) {
    commit('getUserTweetModal', tweetload)
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
  followFollowers({ commit }, followId) {
    commit('addFollowers', followId)
  },
  unfollowFollowers({ commit }, followId) {
    commit('removeFollowers', followId)
  },
  // followFollowings({ commit }, follow) {
  //   commit('addFollowings', follow)
  // },
  // unfollowFollowings({ commit }, followId) {
  //   commit('removeFollowings', followId)
  // },
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
  pushUserReply({ commit }, replyload) {
    commit('addUserReply', replyload)
  },
  pushUserReplies({ commit }, replyload) {
    commit('addUserReplies', replyload)
  },
  pushUserTweet({ commit }, tweet) {
    commit('addUserTweet', tweet)
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
  getUserTweetModal: (state, tweetload) => {
    state.userTweetModal = tweetload.tweets.find(tweet => tweet.id === tweetload.tweetId)
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
  addFollowers(state, followId) {
    state.userFollowers = state.userFollowers.map(follow => {
      if(follow.id === followId) {
        return follow = {
          ...follow,
          isFollowed: true
        }
      } else {
         return follow
      }
    })
  },
  removeFollowers(state, followId) {
    state.userFollowers = state.userFollowers.map(follow => {
      if (follow.id === followId) {
        return follow = {
          ...follow,
          isFollowed: false
        }
      } else {
        return follow
      }
    })
  },
  // addFollowings(state, follow) {
  //   state.userFollowings = state.userFollowings.concat(follow)
  // },
  // removeFollowings(state, followId) {
  //   state.userFollowings = state.userFollowings.filter(follow => follow.id !== followId)
  // },
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
  },
  addUserReply(state, replyload) {
    state[replyload.tweets] = state[replyload.tweets].map(tweet => {
      if(tweet.id === replyload.tweetId) {
        return tweet = {
          ...tweet,
          Replies: tweet.Replies + 1
        }
      } else { 
        return tweet
      }
    })
  },
  addUserReplies(state, replyload) {
    state[replyload.tweets] = state[replyload.tweets].map(tweet => {
      if (tweet.id === replyload.tweetId) {
        return tweet = {
          ...tweet,
          Replies: tweet.Replies.concat(replyload.newReply)
        }
      } else {
        return tweet
      }
    })
  },
  addUserTweet(state, tweet) {
    state.userTweets.unshift(tweet)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}