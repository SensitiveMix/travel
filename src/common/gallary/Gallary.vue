<template>
    <div class="container" @click="handleCloseGallary">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item of imgs" :key="item.id">
                    <img :src="item" class="swiper-img">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      }
    }
  },
  methods: {
    handleCloseGallary () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container
        background black
        display flex
        flex-direction column
        justify-content center
        position fixed
        z-index 99
        left 0
        right 0
        top 0
        bottom 0
        .wrapper
            width 100%
            .swiper-img
                width 100%
            .swiper-pagination
                color white
                bottom -1rem
</style>
