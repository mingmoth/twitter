import { apiHelper } from "../utils/apis";

export default {
  postMessage(message) {
    return apiHelper.post('/messages', message)
  },
  getPublicMessage() {
    return apiHelper.get('/messages/public')
  },
  getUnreadMessage() {
    return apiHelper.get(`/messages/unread`)
  },
  getMessagedUsers() {
    return apiHelper.get(`/messages/message`)
  },
  toggleUnreadMessage(roomName) {
    return apiHelper.put(`/messages/unread/${roomName}`, null)
  }, 
  getPrivateMessage(roomName) {
    return apiHelper.get(`/messages/${roomName}`)
  },
}