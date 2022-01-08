const state = {
  tweets: []
}

const getters = {
  getTweets: state => state.tweets
}

const actions = {
  setTweets({commit}, tweets) {
    commit('updateTweets', tweets)
  },
  newTweet({commit}, tweets) {
    commit('addTweet', tweets)
  },
  likeTweet({commit}, tweetId) {
    commit('addLike', tweetId)
  },
  unlikeTweet({ commit }, tweetId) {
    commit('removeLike', tweetId)
  },
}

const mutations = {
  updateTweets: (state, tweets) => {
    state.tweets = tweets
  },
  addTweet: (state, tweet) => {
    state.tweets.unshift(tweet)
  },
  addLike: (state, tweetId) => {
    state.tweets.map(tweet => {
      if(tweet.id === tweetId && !tweet.isLiked) {
        tweet.isLiked = true,
        tweet.Likes += 1
      }
    })
  },
  removeLike: (state, tweetId) => {
    state.tweets.map(tweet => {
      if (tweet.id === tweetId && tweet.isLiked) {
        tweet.isLiked = false,
        tweet.Likes -= 1
      }
    })
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}