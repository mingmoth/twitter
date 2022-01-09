import { apiHelper } from "../utils/apis";

export default {
  getTweets() {
    return apiHelper.get('/tweets')
  },
  getTweet(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}`)
  },
  createTweet({ description }) {
    return apiHelper.post('/tweets', { description })
  },
  createReply({ tweetId, comment }) {
    return apiHelper.post(`/tweets/${tweetId}/replies`, {comment})
  }
}