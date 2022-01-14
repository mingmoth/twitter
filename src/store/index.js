import Vue from 'vue'
import Vuex from 'vuex'

import authorization from './modules/authorization'
import user from './modules/user'
import tweet from './modules/tweet'
import admin from './modules/admin'

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
  }
})
