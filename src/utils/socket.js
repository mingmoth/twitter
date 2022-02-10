import { mapActions } from 'vuex'
import messageAPI from '../apis/message'
import { errorToast } from './toast'

export const messageFeature = {
  methods: {
    ...mapActions(['setRoomUser', 'postMessage', 'setPublicMessage', 'setPrivateMessage', 'setMessagedUsers', 'toggleMessagedUsers', 'setUnreadMessage', 'toggleUnreadMessageNum']),
    async postMessage(message) {
      try {
        const { data, statusText } = await messageAPI.postMessage(message)
        if (statusText !== 'OK') {
          errorToast.fire({
            title: data.message
          })
          return
        }
        this.$socket.emit('sendMessage', message)
        console.log(data)
        // this.toggleMessagedUsers(message)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async fetchPublicMessage() {
      try {
        console.log('public')
        const { data, statusText } = await messageAPI.getPublicMessage()
        if (statusText !== 'OK') {
          errorToast.fire({
            title: data.message
          })
          return
        }
        this.setPublicMessage(data.messages)
      } catch (error) {
        errorToast.fire({
          title: error.message
        })
      }
    },
    async fetchPrivateMessage(roomName) {
      try {
        const { data, statusText } = await messageAPI.getPrivateMessage(roomName)
        if (statusText !== 'OK') {
          errorToast.fire({
            title: data.message
          })
          return
        }
        this.setPrivateMessage(data.messages)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async fetchUnreadMessages(currentUserId) {
      try {
        const { data } = await messageAPI.getUnreadMessage()
        console.log(data)
        const messages = data.messages.filter(message => message.UserId !== currentUserId)
        this.setUnreadMessage(messages)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async toggleUnreadMessage(roomName) {
      try {
        const { data } = await messageAPI.toggleUnreadMessage(roomName)
        console.log(data)
        this.toggleUnreadMessageNum(roomName)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchMessagedUsers() {
      try {
        const { data, statusText } = await messageAPI.getMessagedUsers()
        if (statusText !== 'OK') {
          errorToast.fire({
            title: data.message
          })
          return
        }
        const { messages, users } = data
        this.setMessagedUsers({ messages, users })
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    createRoomName(a, b) {
      let array = [ a, b ]
      array.sort((a, b) => a - b)
      return array.join('-')
    },
    getMessageTarget(a, b) {
      let array = a.split('-')
      array.splice(array.indexOf(b), 1)
      return Number(array)
    }
  }
}