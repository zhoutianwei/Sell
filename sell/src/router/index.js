import Vue from 'vue'
import Router from 'vue-router'
// eslint-disable-next-line no-unused-vars

import home from '../components/homepage/home'
import search from '../components/search/search'
import orderHistory from '../components/orderdetails/orderHistory'
import myPage from '../components/mypage/myPage'
import goods from '../components/goods/goods'
import ratings from '../components/ratings/ratings'
import seller from '../components/seller/seller'
import signup from '../components/accounts/signup'
import login from '../components/accounts/login'
import resetpwd from '../components/accounts/resetpwd'

import firebase from 'firebase'

Vue.use(firebase)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {requiresAuth: true}
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/orderHistory',
      name: 'orderHistory',
      component: orderHistory
    },
    {
      path: '/myPage',
      name: 'myPage',
      component: myPage
      // meta: { requiresAuth: true }
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods,
      meta: { requiresAuth: true } // UserName 保持
    }, {
      path: '/ratings',
      name: 'ratings',
      component: ratings,
      // meta: { requiresAuth: true }
    }, {
      path: '/seller',
      name: 'seller',
      component: seller,
      // meta: { requiresAuth: true }
    }, {
      path: '/register',
      name: 'register',
      component: signup
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/accounts/resetpwd',
      name: 'resetpwd',
      component: resetpwd
    }, {
      path: '*',
      redirect: 'login'
    }

  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    // 認証状態を取得
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        // 認証されていない場合、認証画面へ
        next({name: 'login'})
      }
    })
  } else {
    next()
  }
})

  export default router
