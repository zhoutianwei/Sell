<template>
    <div>
      <div class="recommend">
        <div class="shop" v-for="item of list" :key="item.id">
          <div class="shop-img">
              <img :src="item.imgUrl" width="62" height="62" >
          </div>
          <div class="shop-content">
            <div class="shop-name">{{item.title}}</div>
            <div class="shop-desc">{{item.desc}}</div>
          </div>
        </div>

      </div>

    </div>
</template>

<script>
export default {
    name: 'recommend',
    props: {
      list: Array
    }
}
</script>

<style scoped lang="stylus">
.shop
  display: flex
  margin: 18px
  padding-bottom: 18px
  position: relative
  .shop-img
    flex: 0 0 57px
    margin-right: 10px
    img
      height: auto
  .shop-content
    flex: 1
    .shop-name
      margin: 2px 0 8px 0
      height: 14px
      line-height: 14px
    .shop-desc
      line-height: 12px
      margin-bottom: 8px
</style>
