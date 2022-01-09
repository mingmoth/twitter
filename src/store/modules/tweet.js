const state = {
  tweets: [],
  tweet: {},
  tweetModal: {
    User: {
      avatar: ''
    }
  }
}

const getters = {
  getTweets: state => state.tweets,
  getTweet: state => state.tweet,
  getTweetModal: state => state.tweetModal
}

const actions = {
  setTweets({ commit }, tweets) {
    commit('updateTweets', tweets)
  },
  setTweet({ commit }, tweet) {
    commit('updateTweet', tweet)
  },
  setTweetModal({ commit }, tweetId) {
    commit('updateTweetModal', tweetId)
  },
  newTweet({ commit }, tweet) {
    commit('addTweet', tweet)
  },
  likeTweet({ commit }, tweetId) {
    commit('addLike', tweetId)
  },
  unlikeTweet({ commit }, tweetId) {
    commit('removeLike', tweetId)
  },
  newReply({ commit }, tweetId) {
    commit('addReply', tweetId)
  }
}

const mutations = {
  updateTweets: (state, tweets) => {
    state.tweets = tweets
  },
  updateTweet: (state, tweet) => {
    state.tweet = tweet
  },
  updateTweetModal: (state, tweetId) => {
    state.tweetModal = state.tweets.find(tweet => tweet.id === tweetId)
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
  addReply: (state, tweetId) => {
    state.tweets = state.tweets.map(tweet => {
      if(tweet.id === tweetId) {
        return tweet = {
          ...tweet,
          Replies: tweet.Replies += 1
        }
      } else { return tweet }
    })
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}