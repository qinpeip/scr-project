import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/main.less';
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// setTimeout(() => {
//   store.commit('setUser', {name: '333'});
// }, 5000);