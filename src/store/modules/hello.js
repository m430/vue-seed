import Vue from 'vue'
import api from '@/api'
import * as types from '../mutations-type'

const appSystem = {
  state: {
    hellos: []
  },
  getters: {
    hellos: state => state.hellos
  },
  mutations: {
    [types.FETCH_HELLOS](state, hellos) {
      state.hellos = hellos
    }
  },
  actions: {
    async fetchHellos({commit}) {
      let {data} = await api.hello.getHello()
      commit(types.FETCH_HELLOS, data.list)
    }
  }
}

export default appSystem
