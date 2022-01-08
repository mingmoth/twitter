import { apiHelper } from "../utils/apis";

export default {
  getTweets() {
    return apiHelper.get('/tweets')
  },
  createReply({tweetId, comment}) {
    return apiHelper.post(`/tweets/${tweetId}/replies`, {comment})
  }
}