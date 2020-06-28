<template>
    <div>
        <div class="banner" @click="handleGallary">
            <img :src="bannerImg" class="banner-img">
            <div class="banner-info">
                <div class="banner-title">
                    {{sightName}}
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe6e5;</span>
                    {{gallaryImgs.length}}
                </div>
            </div>
        </div>

        <common-fade-transition>
          <common-gallary :imgs="gallaryImgs" v-if="showGallary" @close="handleBannerColse">
          </common-gallary>
        </common-fade-transition>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import CommonFadeTransition from 'common/fade/Transition'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    CommonFadeTransition
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleGallary () {
      this.showGallary = true
    },
    handleBannerColse () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            line-height .6rem
            height .6rem
            bottom 0
            left 0
            right 0
            color #fff
            background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                height .32rem
                line-height .32rem
                margin-top .14rem
                padding 0 .4rem
                font-size .24rem
                background rgba(0, 0, 0, .8)
                border-radius .2rem
                .banner-icon
                    font-size .24rem
</style>
