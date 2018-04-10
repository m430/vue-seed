import * as types from './mutations-type'

export default {
  [types.START_LOADING] (state) {
    state.loading = true
  },
  [types.END_LOADING] (state) {
    state.loading = false
  }
}
