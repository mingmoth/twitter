import { apiHelper } from "../utils/apis";

export default {
  getAdminTweets({page}) {
    const searchParams = new URLSearchParams({ page })
    return apiHelper.get(`/admin/tweets?${searchParams.toString()}`)
  },
  getAdminUsers() {
    return apiHelper.get('/admin/users')
  },
  deleteTweet(tweetId) {
    return apiHelper.delete(`/admin/tweets/${tweetId}`)
  }
}