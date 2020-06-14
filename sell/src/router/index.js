import Vue from 'vue'
import Router from 'vue-router'
// eslint-disable-next-line no-unused-vars

import goods from '../components/goods/goods'
import ratings from '../components/ratings/ratings'
import seller from '../components/seller/seller'
import signup from '../components/accounts/signup'
import login from '../components/accounts/login'

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'goods',
      component: goods
    }, {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }, {
      path: '/seller',
      name: seller,
      component: seller
    }, {
      path: '/accounts/signup',
      name: signup,
      component: signup
    }, {
      path: '/accounts/login',
      name: login,
      component: login
    }

  ]
})
