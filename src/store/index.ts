import Vue from 'vue'
import Vuex from 'vuex'
import { RouteConfig } from 'vue-router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      username: '',
      phone: '',
      age: '',
      gender: ''
    },
    subTitle: '',
    menus: Array<{title: string; label: string}>()
  },
  mutations: {
    setUser(state, data) {
      state.userInfo = data;
    },
    setSubTitle(state, title) {
      state.subTitle = title;
    },
    setMenus(state, data: RouteConfig[]) {
      state.menus = data.map(item => (item.meta) as {title: string; label: string});
    }
  },
  actions: {
  },
  modules: {
  }
})
