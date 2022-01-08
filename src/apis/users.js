import { apiHelper } from "../utils/apis";

export default {
  addLike(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/like`, null)
  },
  removeLike(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/unlike`, null)
  }
}