<template>
    <div>
        <router-link
        tag="div"
        to="/"
        class="header-abs"
        v-show="showAbs"
        >
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div
        class="header-fixed"
        v-show="!showAbs"
        :style="opacityStyle"
        >
            景点详情
            <div>
                <router-link to="/">
                    <div class="iconfont header-fixed-back">&#xe624;</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle.opacity = opacity
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header-abs
    position absolute
    left .2rem
    top .2rem
    border-radius .4rem
    background rgba(0, 0, 0, .8)
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    z-index 2
    .header-abs-back
        font-size .4rem
        color #fff
  .header-fixed
    position fixed
    z-index 2
    line-height .86rem
    height: 0.86rem;
    width 100%
    color #ffffff
    text-align center
    background-color $bgColor
    font-size .30rem
    border 0
    .header-fixed-back
        width .80rem
        line-height .86rem
        left 0
        height 0
        top 0
        color #ffffff
        position absolute
        text-align: center
        font-size .4rem
</style>
