const state = {
  token: '',
  user: {
    id: -1,
    name: '',
    email: '',
    account: '',
    cover: '',
    avatar: '',
    introduction: '',
    role: '', // 'user'或'admin'
    createdAt: ''
  },
  isAuthenticated: false
}

const getters = {
  getUser: state => state.user,
  getToken: state => state.token
}
const actions = {
  setUser({ commit }, user) {
    commit('updateUser', user)
  },
  setToken({ commit }, user) {
    commit('updateToken', user)
  }
}

const mutations = {
  updateUser: (state, user) => {
    state.isAuthenticated = true
    state.user = { ...user }
  },
  updateToken: (state, token) => {
    state.token = token
    window.localStorage.setItem('userToken', token)
  },
  logoutUser: (state) => {
    state.isAuthenticated = false
    state.token = ''
    state.user = {
      id: -1,
      name: '',
      email: '',
      account: '',
      cover: '',
      avatar: '',
      introduction: '',
      role: '', 
      createdAt: ''
    }
    window.localStorage.removeItem('userToken')
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}