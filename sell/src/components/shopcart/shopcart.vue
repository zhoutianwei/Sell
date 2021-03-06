<template>
  <div>
  <div class="shopcart">
    <div class="content" @click="toggleList">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight': totalCount>0}">
            <font-awesome-icon icon="shopping-cart" class="icon-shopping-cart" :class="{'highlight': totalCount>0}"></font-awesome-icon>
          </div>
          <div class="num" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'highlight': totalCount>0}">￥{{totalPrice}}円</div>
        <div class="desc">配送手数料￥{{deliveryPrice}}円</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">
          {{payDesc}}
        </div>
      </div>
      <div class="ball-container">
        <div v-for="(ball,index) in balls" :key="index">
          <transition
            @before-enter="beforeDrop"
            @enter="dropping"
            @after-enter="afterDrop">
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </div>
      </div>
      <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <div class="title">购物车</div>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="food" v-for="(food, index) in selectFoods" :key="index">
                <span class="name">{{food.name}}</span>
                <div class="price">
                  <span>￥{{food.price*food.count}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cart-control  :food="food" v-on:cart-add.stop="_drop"></cart-control>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
    <transition name="fade">
      <div class="list-mask" v-show="listShow" @click="hideList()"></div>
    </transition>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import CartControl from '../cartcontrol/cartcontrol'
    const BALL_LEN = 10

    const innerClsHook = 'inner-hook' // 常量

    function createBalls () {
        let ret = []
        for (let i = 0; i < BALL_LEN; i++) {
            ret.push({
                show: false
            })
        }
        return ret
    }

    export default {
        components: {CartControl},
        props: {
            selectFoods: {
              type: Array
            },
            deliveryPrice: Number,
            minPrice: Number
        },
        data () {
          return {
            balls: createBalls(),
              fold: true // fold 折叠
          }
        },
        computed: {
            totalPrice () {
                let total = 0
                this.selectFoods.forEach((food) => {
                    total += food.price * food.count
                })
                return total
            },
            totalCount () {
                let count = 0
                this.selectFoods.forEach((food) => {
                    count += food.count
                })
                return count
            },
            payDesc () {
                // eslint-disable-next-line no-irregular-whitespace
              if (this.totalPrice === 0)　{
                  // eslint-disable-next-line no-irregular-whitespace
                  return '￥'　+ this.minPrice　+ '円から配送'
              } else if (this.totalPrice < this.minPrice) {
                  let diff = this.minPrice - this.totalPrice
                  return `あと￥${diff}円で配送`
              } else {
                  return 'カートを見る'
              }
            },
            payClass () {
              if (this.totalPrice < this.minPrice) {
                  return 'not-enough'
              } else {
                  return 'enough'
              }
            },
            listShow () {
                if (!this.totalCount) {
                    this.fold = true
                    return false
                }
                let show = !this.fold
                if (show) {
                    //  检测数据变化后更新DOM better-scroll依赖DOM
                    this.$nextTick(() => {
                        if (!this.scroll) {
                            this.scroll = new BScroll(this.$refs.listContent, {
                                click: true
                            })
                        } else {
                            this.scroll.refresh() // 重新计算视口和内容的高度差 决定是否可以滚动
                        }
                    })
                }
                return show
            }
        },
        created () {
          this.dropBalls = []
        },
        methods: {
            _drop (target) {
                // 体验优化，异步执行下落动画
                this.$nextTick(() => {
                    this.drop(target)
                })
            },
            drop (el) {
              for (let i = 0; i < this.balls.length; i++) {
                  const ball = this.balls[i]
                  if (!ball.show) {
                      ball.show = true
                      ball.el = el
                      this.dropBalls.push(ball)
                      return
                  }
              }
          },
            beforeDrop (el) {
                const ball = this.dropBalls[this.dropBalls.length - 1]
                const rect = ball.el.getBoundingClientRect()
                const x = rect.left - 32
                const y = -(window.innerHeight - rect.top - 22)
                el.style.display = ''
                el.style.transform = el.style.webkitTransform = `translate3d(0,${y}px,0)`
                const inner = el.getElementsByClassName(innerClsHook)[0]
                inner.style.transform = inner.style.webkitTransform = `translate3d(${x}px,0,0)`
            },
            dropping (el, done) {
                this._reflow = document.body.offsetHeight
                el.style.transform = el.style.webkitTransform = `translate3d(0,0,0)`
                const inner = el.getElementsByClassName(innerClsHook)[0]
                inner.style.transform = inner.style.webkitTransform = `translate3d(0,0,0)`
                el.addEventListener('transitionend', done)
            },
            afterDrop (el) {
                const ball = this.dropBalls.shift()
                if (ball) {
                    ball.show = false
                    el.style.display = 'none'
                }
            },
            toggleList () {
              if (!this.totalCount) {
                  return
              }
              this.fold = !this.fold
            },
            empty () {
                this.selectFoods.forEach((food) => {
                    food.count = 0
                })
            },
            hideList () {
                this.fold = true
            }

        }

    }
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixin.styl"
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
      color: rgba(255,255,255,0.4)
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
            &.highlight
              background: rgb(0,160,220)
            .icon-shopping-cart
              margin-top: 8px
              font-size: 24px
              color: #80858a
              &.highlight
                color: #fff
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            font-weight: 700
            color: #fff
            background: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4)
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
          &.highlight
            color: #fff
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 12px
          line-height: 24px
          font-size: 10px
      .content-right
        flex: 0 0 105px
        width: 105px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-size: 12px
          font-weight: 700
          &.not-enough
            background: #2b333b
          &.enough
            background: #00b43c
            color: #fff
    .ball-container
      .ball
        position: fixed
        left: 32px
        bottom: 22px
        z-index: 200
        transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          width: 16px
          height: 16px
          border-radius: 50%
          background: rgb(0, 160, 220)
          transition: all 0.4s linear

    .shopcart-list
      position: absolute
      left:0
      top:0
      z-index: -1
      width: 100%
      transform translate3d(0, -100%, 0)
      &.fold-enter-active, &.fold-leave-active
        transition: all 0.5s linear
        transform: translate3d(0, -100%, 0)
      &.fold-enter, &.fold-leave-active
        transform: translate3d(0, 0, 0)
      .list-header
        height: 40px
        line-height: 40px
        padding: 0 18px
        background: #f3f5f7
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        .title
          float: left
          font-size: 14px
          color: rgb(7, 17, 27)
        .empty
          float: right
          font-size: 12px
          color: rgb(0, 160, 220)

      .list-content
        padding: 0 18px
        max-height: 217px
        overflow: hidden
        background: #ffffff
        .food
          position: relative
          padding: 12px 0
          box-sizing: border-box
          border-1px(rgba(7, 17, 27, 0.1))
          .name
            line-height: 24px
            font-size: 14px
            color: rgb(7, 17, 27)
          .price
            position: absolute
            right: 90px
            bottom: 12px
            line-height: 24px
            font-size: 14px
            font-weight: 700
            color: rgb(240, 20, 20)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 6px



</style>
