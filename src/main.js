import Vue from "vue";
import app from "./component/App.vue"

new Vue({
  el:"#app",
  render:function(createElement){
    return createElement(app)
  }
})