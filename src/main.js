// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { XDialog } from 'vux'
import router from './router'

Vue.component('x-dialog', XDialog)

Vue.config.productionTip = false
Vue.use(ElementUI)
// axios.defaults.baseURL = 'api'

/* eslint-disable no-new */
window.wm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
