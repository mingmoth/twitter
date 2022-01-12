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
  likeTweets({ commit }, tweetId) {
    commit('addLikeTweets', tweetId)
  },
  unlikeTweets({ commit }, tweetId) {
    commit('removeLikeTweets', tweetId)
  },
  likeTweet({ commit }, like) {
    commit('addLikeTweet', like)
  },
  unlikeTweet({ commit }, userId) {
    commit('removeLikeTweet', userId)
  },
  newReply({ commit }, tweetId) {
    commit('addReply', tweetId)
  },
  pushNewReply({ commit }, reply) {
    commit('pushReply', reply)
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
  addLikeTweets: (state, tweetId) => {
    state.tweets.map(tweet => {
      if(tweet.id === tweetId && !tweet.isLiked) {
        tweet.isLiked = true,
        tweet.Likes += 1
      }
    })
  },
  removeLikeTweets: (state, tweetId) => {
    state.tweets.map(tweet => {
      if (tweet.id === tweetId && tweet.isLiked) {
        tweet.isLiked = false,
        tweet.Likes -= 1
      }
    })
  },
  addLikeTweet: (state, like) => {
    state.tweet.isLiked = true
    if(state.tweet.Likes) {
      state.tweet.Likes.push(like)
    }
  },
  removeLikeTweet: (state, userId) => {
    state.tweet.isLiked = false
    if(state.tweet.Likes) {
      state.tweet.Likes.filter(like => like.UserId !== userId)
    } 
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
  pushReply: (state, reply) => {
    if(state.tweet) {
      state.tweet.Replies.push(reply)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}