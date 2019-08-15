// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// fundebug 错误检测
import * as fundebug from "fundebug-javascript";
import fundebugVue from "fundebug-vue";
fundebug.apikey = "8e775703e2d4ff0a1e5527b6afde5b2b7e4da157491c3926085c9299961870f6";
fundebugVue(fundebug, Vue);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
