// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import App from './App'
import router from './router'
import '../static/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {firebaseConfig} from './firebase/config'
import animate from 'animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

/* ここから */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faHome, faCoffee, faUser, faTicketAlt, faAlignJustify, faTimes, faSearch, faHistory,
faUserCircle, faAngleLeft, faReceipt, faCreditCard} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab, faHome, faCoffee, faUser, faTicketAlt, faAlignJustify, faTimes, faSearch, faHistory,
faUserCircle, faAngleLeft, faReceipt, faCreditCard )

Vue.component('font-awesome-icon', FontAwesomeIcon)
/* ここまで */

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(animate)

Vue.use(ElementUI)// 全局使用ElementUI

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueAwesomeSwiper)

firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
