// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// import qs from 'Qs'

// 引入api文件
import api from './api/index.js'
// 将api方法绑定到全局
Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$ajax = axios
// Vue.prototype.$qs = qs

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  // template: '<App/>'
  template:'<router-view></router-view>'

})
//在main.js中定义一个全局函数
Vue.prototype.getConfigJson=function(){
  this.$http.get("serverconfig.json").then((result)=>{
    //用一个全局字段保存ApiUrl  也可以用sessionStorage存储
    Vue.prototype.ApiUrl=result.body.ApiUrl;
  }).catch((error)=>{console.log(error)});
}
