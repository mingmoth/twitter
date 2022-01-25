import { io } from 'socket.io-client'

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