<template>
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item of list" :key="item.id">
          <img :src="item.imgUrl" class="swiper-img" alt=""/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
    name: 'swipe',
    props: {
      list: Array
    },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
        // autoplay: true,
        // speed: 3000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }

}
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #fff
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 30.47%
    background-color: #eee
    .swiper-img
      width: 100%

</style>
