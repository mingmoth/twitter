import { io } from 'socket.io-client'
import { mapActions } from 'vuex'
import messageAPI from '../apis/message'
import { errorToast } from './toast'

export default function socketConnect(user) {
  const { id, name, account, avatar } = user
  const socket = io('http://localhost:3000', {
    query: { id, name, account, avatar }
  })
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket)
    })
  })
}

export const messageFeature = {
  methods: {
    ...mapActions(['setRoomUser', 'newMessage','setPublicMessage', 'setPrivateMessage']),
    async postMessage(message) {
      try {
        const { data, statusText } = await messageAPI.postMessage(message)
        if (statusText !== 'OK') {
          errorToast.fire({
            title: data.message
          })
          return
        }
        console.log(data)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async fetchPublicMessage() {
      try {
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
        console.log(data.messages)
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
    }
  }
}