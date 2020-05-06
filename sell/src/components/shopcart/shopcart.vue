<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <font-awesome-icon icon="shopping-cart" class="icon-shopping-cart"></font-awesome-icon>
          </div>
        </div>
        <div class="price">0円</div>
        <div class="desc">配送費￥{{deliveryPrice}}円</div>
      </div>
      <div class="content-right">
        <div class="pay">
          ￥ {{minPrice}} 円から配送
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: {
            deliveryPrice: Number,
            minPrice: Number
        }
    }
</script>

<style lang="stylus" scoped>
  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
    .content
      display: flex
      background: #141d27
      font-size: 0
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          vertical-align: top
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background: #141d27
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            background: #2b343c
            .icon-shopping-cart
              margin-top: 8px
              font-size: 24px
              color: #80858a
        .price
          display : inline-block
          vertical-align: top
          margin-top: 12px
          line-height: 24px
          padding-right: 12px
          box-sizing: border-box
          border-right: 1px solid rgba(255,255,255,0.1)
          font-size: 16px
          font-weight: 700
          color: rgba(255,255,255,0.4)
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 12px
          line-height: 24px
          color: rgba(255,255,255,0.4)
          font-size: 10px
      .content-right
        flex: 0 0 105px
        width: 105px
</style>
