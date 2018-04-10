import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import hello from './modules/hello'

Vue.use(Vuex)

const state = {
  loading: false
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    hello
  }
})

