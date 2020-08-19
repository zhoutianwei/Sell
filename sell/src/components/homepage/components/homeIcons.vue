<template>
    <div class="icons" >
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-image">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
    name: 'homeIcons',
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {
          autoplay: false
        }
      }
    },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const pageIndex = Math.floor(index / 8)
        if (!pages[pageIndex]) {
          pages[pageIndex] = []
        }
        pages[pageIndex].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%
  /*background: #1e7e34*/
.icons
  margin-top: .1rem
  background: whitesmoke
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 25%
    padding-bottom: 25%
    .icon-image
      position: absolute
      top: 0
      left: 0
      right: 0
      margin: 0 auto
      border-radius:50%;
      bottom: .44rem
      box-sizing: border-box
      margin-bottom: 15px
      .icon-img-content
        border-radius:50%
        overflow: hidden
        display: block
        margin: 0 auto
        /*height: 100%*/
        height: 100%
        width: 100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 8px
      height: .44rem
      line-height: .44rem
      text-align: center
      color: #333
</style>
