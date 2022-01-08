import Vue from 'vue'
import Vuex from 'vuex'

import authorization from './modules/authorization'
import tweet from './modules/tweet'

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
    tweet,
  }
})
