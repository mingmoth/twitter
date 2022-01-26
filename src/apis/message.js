import { apiHelper } from "../utils/apis";

export default {
  postMessage(message) {
    return apiHelper.post('/messages', message)
  },
  getPublicMessage() {
    return apiHelper.get('/messages/public')
  },
  getPrivateMessage(roomName) {
    return apiHelper.get(`/messages/${roomName}`)
  },
}