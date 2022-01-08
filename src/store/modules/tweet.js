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
  }
}

const mutations = {
  updateTweets: (state, tweets) => {
    state.tweets = tweets
  },
  addTweet: (state, tweet) => {
    state.tweets.unshift(tweet)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}