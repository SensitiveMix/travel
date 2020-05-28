<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) in pages" :key="index">
          <div class="icon-item" v-for="item of page" :key="item.id">
              <div class="icon-img">
                  <img class='icon-img-content' :src="item.imgUrl" />
              </div>
              <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }

        pages[page].push(item)
      })

      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl';
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons
    margin-top 0.1rem
    overflow hidden
    width 100%
    hight 0
    .icon-item
        overflow hidden
        position relative
        float left
        height 0
        width 25%
        padding-bottom 25%
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            box-sizing border-box
            padding 0.1rem
            .icon-img-content
                display block
                margin 0 auto
                height 100%
        .icon-desc
            position absolute
            left 0
            bottom 0
            right 0
            height .44rem
            line-height .44rem
            text-align center
            color #333
            ellipsis()
</style>
