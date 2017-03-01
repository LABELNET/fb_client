// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// router
import router from './router'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import http from './server/http'
// use ele ui
Vue.use(ElementUI)

// use http
Vue.prototype.$http = http

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
