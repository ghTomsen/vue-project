
import "normalize.css"
import "./less/index.less"

import Vue from "vue";

import app from "./component/App.vue";

import vueRouter from "vue-router";
Vue.use(vueRouter);
import routerInfo from "./router/index.js"

import axios from "axios";
// axios.defaults.baseURL = "http://157.122.54.189:9095";
axios.defaults.baseURL = "http://localhost:8899";
axios.defaults.withCredentials=true;
// axios.defaults.baseURL="localhost:8899";
Vue.prototype.$http = axios;

import api from "./js/api-config"
Vue.prototype.$api = api;

import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 注册保卫导航
var vR = new vueRouter(routerInfo);
import beforeE from "./router/beforeEach";

vR.beforeEach(beforeE);


new Vue({
  el: "#app",
  render: createElement => createElement(app),
  router: vR
})
