<template>
    <div class="ratingselect" :selectType="selectType">
      <div class="rating-type border-1px">
        <span @click="select(2, $event)" class="block positive" :class="{'active': mySelectType === 2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
        <span @click="select(0, $event)" class="block positive" :class="{'active': mySelectType=== 0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
        <span @click="select(1, $event)" class="block negative" :class="{'active': mySelectType === 1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
      </div>
      <div @click="toggleContent" class="switch" :class="{'on': onlyContent}">
        <font-awesome-icon icon="check-circle" class="icon-check-circle"></font-awesome-icon>
        <span class="text">評価だけ見る</span>
      </div>
    </div>
</template>

<script>

const POSITIVE = 0
const NEGATIVE = 1
const ALL = 2

export default {
    props: {
        ratings: {
            type: Array,
            default () {
                return []
            }
        },
        selectType: {
            type: Number,
            default: ALL
        },
        onlyContent: {
            type: Boolean,
            default: false
        },
        desc: {
            type: Object,
            default () {
                return {
                    all: '全部',
                    positive: '满意',
                    negative: '不满意'
                }
            }
        }
    },
    data () {
        return {
            mySelectType: this.selectType,
            myOnlyContent: this.onlyContent
        }
    },
    watch: {
        selectType (selectType) {
            this.mySelectType = selectType
        },
        mySelectType (mySelectType) {
            this.$emit('select-change', mySelectType)
        },
        onlyContent (onlyContent) {
            this.myOnlyContent = onlyContent
        },
        myOnlyContent (myOnlyContent) {
            this.$emit('targgle', myOnlyContent)
        }
    },
    computed: {
      positives () {
          return this.ratings.filter((rating) => {
            return rating.rateType === POSITIVE
          })
      },
      negatives () {
          return this.ratings.filter((rating) => {
              return rating.rateType === NEGATIVE
          })
      }
    },
    methods: {
        select (type, event) {
            if (!event._constructed) {
                return
            }
            this.mySelectType = type
        },
        toggleContent (event) {
            if (!event._constructed) {
                return
            }
            this.myOnlyContent = !this.myOnlyContent
        }
    }

}
</script>

<style scoped lang="stylus">
@import "../../common/stylus/mixin.styl"

.ratingselect
  .rating-type
    padding: 18px 0
    margin: 0 18px
    border-1px(rgba(7,17,27,0.1))
    font-size: 0
    .block
      display: inline-block
      padding: 8px 12px
      margin-right: 8px
      line-height: 16px
      border-radiue: 1px
      font-size: 12px
      color: rgb(77,85,93)
      &.active
        color: #fff
      .count
        margin-left: 2px
        font-size: 8px
      &.positive
        background: rgba(0,160,220,0.2)
        &.active
          background: rgb(0,160,220)
      &.negative
        background: rgba(77,85,93,0.2)
        &.active
          background: rgb(77,85,93)
  .switch
    padding: 12px 18px
    line-height: 24px
    border-bottom: 1px solid rgba(7,17,27,0.1)
    color: rgb(147,153,159)
    font-size: 0
    &.on
      .icon-check-circle
        color: #2ecc71
    .icon-check-circle
      display: inline-block
      vertical-align: top
      margin-right: 4px
      font-size: 24px
    .text
      font-size: 12px

</style>
