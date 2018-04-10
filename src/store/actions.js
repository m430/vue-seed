import * as types from './mutations-type'

export default {
  startLoading ({commit}) {
    commit(types.START_LOADING)
  },
  endLoading ({commit}) {
    commit(types.END_LOADING)
  }
}
