import { apiHelper } from "../utils/apis";

export default {
  getNotices() {
    return apiHelper.get('/notices')
  },
  getUnreadNotices() {
    return apiHelper.get('/notices/unread')
  },
  toggleNotices() {
    return apiHelper.put('/notices/unread')
  }
}