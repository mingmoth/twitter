import { apiHelper } from "../utils/apis";

export default {
  getCurrentUser() {
    return apiHelper.get('/currentUser')
  },
  addLike(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/like`, null)
  },
  removeLike(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/unlike`, null)
  },
  getTopUser() {
    return apiHelper.get('/users/top')
  }
}