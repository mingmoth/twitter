const state = {
  onlineUser: [],
  messagedUser: [],
  publicMessage: [],
  privateMessage: [],
}

const getters = {
  getonlineUser: state => state.onlineUser,
  getMessagedUser: state => state.messagedUser,
  getPublicMessage: state => state.publicMessage,
  getPriavateMessage: state => state.privateMessage
}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations,
}