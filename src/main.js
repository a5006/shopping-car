import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/global.styl'


// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
// 在每次路由跳转的时候执行，


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')