const state = {
  messagedUsers: [],
  messagedUser: {},
  publicMessage: [],
  privateMessage: [],
}

const getters = {
  getMessagedUsers: state => state.messagedUsers,
  getMessagedUser: state => state.messagedUser,
  getPublicMessage: state => state.publicMessage,
  getPriavateMessage: state => state.privateMessage
}

const actions = {
  setRoomUser({ commit }, user) {
    commit('getRoomUser', user)
  },
  newMessage({ commit }, message) {
    commit('createMessage', message)
  },
  setMessagedUsers({ commit }, users) {
    commit('getMessagedUsers' , users)
  },
  setMessagedUser({ commit }, user) {
    commit('getMessagedUser' , user)
  },
  setPublicMessage({ commit }, message) {
    commit('getPublicMessage', message)
  },
  setPrivateMessage({ commit }, message) {
    commit('getPrivateMessage', message)
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
  getMessagedUsers(state, users) {
    state.messagedUsers = users
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
}

export default {
  state,
  getters,
  actions,
  mutations,
}