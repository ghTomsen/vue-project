
import "normalize.css"

import Vue from "vue";

import app from "./component/App.vue";

import vueRouter from "vue-router";
Vue.use(vueRouter);
import routerInfo from "./router/index.js"

import axios from "axios";
axios.defaults.baseURL="http://157.122.54.189:9095";
Vue.prototype.$http=axios;

import api from "./js/api-config"
Vue.prototype.api=api;

import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


new Vue({
  el:"#app",
  render:createElement=>createElement(app),
  router:new vueRouter(routerInfo)
})