import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    token: '',
    phone: ''
  },
  mutations: {
    setUser(state, data) {
      state.name = data.name;
    }
  },
  actions: {
  },
  modules: {
  }
})
