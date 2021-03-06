import { apiHelper } from "../utils/apis";

export default {
  getCurrentUser() {
    return apiHelper.get('/currentUser')
  },
  getUser(userId) {
    return apiHelper.get(`/users/${userId}`)
  },
  putUser(userId, form) {
    return apiHelper.put(`/users/${userId}`, form)
  },
  updateUser(userId, form) {
    return apiHelper.put(`/users/${userId}/profile`, form)
  },
  getUserTweets(userId) {
    return apiHelper.get(`/users/${userId}/tweets`)
  },
  getUserReplies(userId) {
    return apiHelper.get(`/users/${userId}/replied_tweets`)
  },
  getUserLikes(userId) {
    return apiHelper.get(`/users/${userId}/likes`)
  },
  getUserFollowings(userId) {
    return apiHelper.get(`/users/${userId}/followings`)
  },
  getUserFollowers(userId) {
    return apiHelper.get(`/users/${userId}/followers`)
  },
  addLike(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/like`, null)
  },
  removeLike(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/unlike`, null)
  },
  addFollow(UserId) {
    return apiHelper.post('/followships', UserId)
  },
  removeFollow(followingId) {
    return apiHelper.delete(`/followships/${followingId}`)
  },
  getTopUser() {
    return apiHelper.get('/users/top')
  }
}