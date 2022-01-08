const state = {
  tweets: [],
  tweet: {
    User: {
      avatar: ''
    }
  }
}

const getters = {
  getTweets: state => state.tweets,
  getTweet: state => state.tweet
}

const actions = {
  setTweets({commit}, tweets) {
    commit('updateTweets', tweets)
  },
  setTweet({commit}, tweetId) {
    commit('updateTweet', tweetId)
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
  updateTweet: (state, tweetId) => {
    state.tweet = state.tweets.find(tweet => tweet.id === tweetId)
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