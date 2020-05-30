<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="center">
                <div class="title border-topbottom">
                    您的位置
                </div>
                <div class="list-item">
                    <div class="list-btn-wapper">
                        <div class="button">
                            {{this.$store.state.city}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="center border-topbottom">
                <div class="title">
                    热门城市
                </div>
                <div class="list-item">
                    <div
                        class="list-btn-wapper"
                        v-for="item of hotCities"
                        :key="item.id"
                        @click="handleItemClick(item.name)"
                    >
                        <div class="button">
                            {{item.name}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="center border-topbottom" v-for="(items, index) of cities" :key="index" :ref="index">
                <div class="title">
                    {{index}}
                </div>
                <div
                    class="item border-bottom"
                    v-for="item of items"
                    :key="item.id"
                    @click="handleItemClick(item.name)"
                >
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    letter: String,
    cities: Object,
    hotCities: Array
  },
  methods: {
    handleItemClick: function (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    },
    test () {
      alert('test')
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele)
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, { click: true })
    })
  }
}
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:before
            background #ccc
        &:after
            background #ccc
    .border-bottom
        &:before
            background #ccc
    .list
        overflow hidden
        left 0
        right 0
        bottom 0
        top 1.65rem
        position absolute
        background #eee
        .title
            font-size 0.25rem
            color #616161
            line-height .6rem
            text-indent 0.2rem
        .list-item
            padding .2rem .5rem .2rem .2rem
            overflow hidden
            background #fff
            .list-btn-wapper
                margin  .2rem .14rem 0 .1rem
                border 1px solid #cccccc
                border-radius 0.06rem
                width 29%
                line-height .64rem
                display inline-flex
                justify-content center
                .button
                    color #212121
        .item
            line-height .65rem
            background #fff
            color #212121
            text-indent 0.2rem
</style>
