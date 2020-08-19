<template>
    <div>

        <home-header :CurrentUser="currentUser" :IsLoggedIn="isLoggedIn"></home-header>
        <swipe :list="swiperList"></swipe>
        <home-icons :list="iconList"></home-icons>
        <split></split>
        <recommend :list="recommendShop"></recommend>
        <bottnav></bottnav>

    </div>
</template>

<script>
  import recommend from './components/recommend'
  import split from '../split/split'
  import homeIcons from './components/homeIcons'
  import homeHeader from './components/homeHeader'
  import swipe from './components/swipe'
  import bottnav from '../bottnav/bottnav'
  import axios from 'axios'
  import firebase from 'firebase'
  export default {
    data () {
      return {
        swiperList: [],
        iconList: [],
        recommendShop: [],
        isLoggedIn: false,
        currentUser: 'false'
      }
    },
    methods: {
      getHomeInfo () {
        axios.get('/static/mock/home.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendShop = data.recommendShop
        }
      }
    },
    mounted () {
      this.getHomeInfo()
      const user = firebase.auth().currentUser
      if (user) {
        this.isLoggedIn = true
        this.currentUser = firebase.auth().currentUser.email
      }
    },
    components: {
      bottnav,
      swipe,
      homeHeader,
      homeIcons,
      split,
      recommend
    }
  }
</script>

<style scoped src="../../../static/css/bootstrap.min.css">

</style>
