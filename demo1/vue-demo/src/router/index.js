import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import pro from '@/components/pro'
import product from '@/components/product'
import index from '@/App'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉 /#
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pro',
      name: 'pro',
      component: pro
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
