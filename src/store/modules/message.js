const state = {
  onlineUser: [],
  roomUser: [],
  publicMessage: [],
  privateMessage: [],
}

const getters = {
  getOnlineUser: state => state.onlineUser,
  getRoomUser: state => state.roomUser,
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
    if(message.roomName === 'public') {
      state.publicMessage = state.publicMessage.push(message)
    } else {
      state.privateMessage = state.privateMessage.push(message)
    }
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