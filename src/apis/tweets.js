import { apiHelper } from "../utils/apis";

export default {
  getTweets() {
    return apiHelper.get('/tweets')
  },
}