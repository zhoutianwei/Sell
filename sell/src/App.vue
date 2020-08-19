<template>
  <div id="app">

    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>

  </div>
</template>

<script>

 import './common/stylus/icon.styl'
 import header01 from './components/header01/header01'
 import './common/stylus/base.styl'
 import axios from 'axios'
 import tab from './components/tab/tab'
 export default {
     components: {
         'header01': header01,
         tab
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

/*.account*/
/*  text-align: right*/
/*  background: #808080*/
/*  color: #fff*/
/*  font-weight: bold*/
/*  font-size: 14px*/

.tab
  display: flex
  width: 100%
  height: 40px
  line-height: 40px
  .tab-item
    flex: 1
    text-align: center

</style>
