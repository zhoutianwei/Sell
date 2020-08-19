<template>

  <div>

    <header01 :seller="seller"></header01>

  <div class="tab">
    <div class="tab-item">
      <router-link class="tab-item" to="/goods">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link class="tab-item" to="/ratings">评论</router-link>
    </div>
    <div class="tab-item">
      <router-link class="tab-item" to="/seller">商家</router-link>
    </div>
  </div>

  </div>

</template>

<script>

import Header01 from '../header01/header01'
import axios from 'axios'

export default {
    name: 'tab.vue',
    components: {
        Header01
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
        }
    },
    mounted () {
        this.getHeaderInfo()
    }
}
</script>

<style scoped lang="stylus">

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
  .tab-item
    flex: 1
    text-align: center

</style>
