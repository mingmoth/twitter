import { apiHelper } from "../utils/apis";

export default {
  getAdminTweets() {
    return apiHelper.get('/admin/tweets')
  },
  getAdminUsers() {
    return apiHelper.get('/admin/users')
  },
  deleteTweet(tweetId) {
    return apiHelper.delete(`/admin/tweets/${tweetId}`)
  }
}