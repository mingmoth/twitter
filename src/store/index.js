import Vue from 'vue'
import Vuex from 'vuex'

import authorization from './modules/authorization'
import user from './modules/user'
import tweet from './modules/tweet'
import admin from './modules/admin'
import message from './modules/message'
import notice from './modules/notice'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authorization,
    user,
    tweet,
    admin,
    message,
    notice
  }
})
