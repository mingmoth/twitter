const state = {
  messagedUsers: [],
  messagedUser: {},
  publicMessage: [],
  privateMessage: [],
  unreadMessage: [],
}

const getters = {
  getMessagedUsers: state => state.messagedUsers,
  getMessagedUser: state => state.messagedUser,
  getPublicMessage: state => state.publicMessage,
  getPriavateMessage: state => state.privateMessage,
  getUnreadMessage: state => state.unreadMessage
}

const actions = {
  setRoomUser({ commit }, user) {
    commit('getRoomUser', user)
  },
  postMessage({ commit }, message) {
    commit('createMessage', message)
  },
  setMessagedUsers({ commit }, users) {
    commit('getMessagedUsers' , users)
  },
  toggleMessagedUsers({ commit }, message) {
    commit('updateMessagedUsers', message)
  },
  setMessagedUser({ commit }, user) {
    commit('getMessagedUser' , user)
  },
  setPublicMessage({ commit }, message) {
    commit('getPublicMessage', message)
  },
  setPrivateMessage({ commit }, message) {
    commit('getPrivateMessage', message)
  },
  setUnreadMessage({ commit }, message) {
    commit('getUnreadMessage', message)
  },
  toggleUnreadMessageNum({ commit }, roomId) {
    commit('updateUnreadMessage', roomId)
  }
}

const mutations = {
  getRoomUser(state, user) {
    state.roomUser = user
  },
  createMessage(state, message) {
    if (message.roomName === 'public') {
      state.publicMessage = state.publicMessage.concat(message)
    } else { 
      state.privateMessage = state.privateMessage.concat(message)
    }
  }, 
  getMessagedUsers(state, latestMessages) {
    const { messages, users} = latestMessages
    state.messagedUsers = messages.map((e, i) => {
      return e = {
        ...e,
        User: users[i]
      }
    })
    state.messagedUsers.sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt)
    }).reverse()
  },
  updateMessagedUsers(state, message) {
    state.messagedUsers.filter(user => user.UserId !== message.User.id)
    state.messagedUsers.unshift(message)
    state.messagedUsers.sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt)
    }).reverse()
  },
  getMessagedUser(state, user) {
    state.messagedUser = user
  },
  getPublicMessage(state, message) {
    state.publicMessage = message
  },
  getPrivateMessage(state, message) {
    state.privateMessage = message
  },
  getUnreadMessage(state, message) {
    state.unreadMessage = message
  },
  updateUnreadMessage(state, roomId) {
    state.unreadMessage = state.unreadMessage.filter(message => message.roomName !== roomId)
    console.log(state.unreadMessage)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}