<template>
  <div id="app">

    <header01 :seller="seller"></header01>

    <div class="tab">
        <div class="tab-item">
          <router-link class="tab-item" to="/">商品</router-link>
        </div>
        <div class="tab-item">
          <router-link class="tab-item" to="/ratings">评论</router-link>
        </div>
        <div class="tab-item">
          <router-link class="tab-item" to="/seller">商家</router-link>
        </div>
    </div>

    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>

  </div>
</template>

<script>
 import header01 from './components/header01/header01'
 import './common/stylus/base.styl'
 import axios from 'axios'
 export default {
     components: {
         'header01': header01
     },
     data () {
        return {
           seller: {}
        }
     },
     methods: {
      getHeaderInfo () {
        axios.get('/api/seller')
            .then(this.getHeaderInfoSucc)
      },
         getHeaderInfoSucc (res) {
             this.seller = res.data.data
             console.log(this.seller)
         }
     },
     mounted () {
        this.getHeaderInfo()
     }
 }

</script>

<style lang="stylus" scoped>

.tab
  display: flex
  width: 100%
  height: 40px
  line-height: 40px
  .tab-item
    flex: 1
    text-align: center

</style>
