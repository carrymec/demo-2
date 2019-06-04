//完整引入 element
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

// import App from './App.vue'
import Index from './Index'
//ajax
//国际化
import locale from 'element-ui/lib/locale/lang/en'

//ajax
import axios from 'axios'

import qs from 'qs'

Vue.prototype.$axios = axios;

Vue.prototype.qs = qs;

Vue.use(ElementUI,{locale});


new Vue({
  el: '#app',
  render: h => h(Index)
})
