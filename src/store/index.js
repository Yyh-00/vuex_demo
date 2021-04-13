import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 只能通过mutation变更store里的数据
  mutations: {
    add (state) {
      state.count++
    },
    addN (state, step) {
      state.count += step
    },
    supN (state, step) {
      state.count -= step
    }
  },
  actions: {},
  modules: {}
})
