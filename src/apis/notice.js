import { apiHelper } from "../utils/apis";

export default {
  getNotices() {
    return apiHelper.get('/notices')
  }
}