<template>
    <div class="container" @click="handleCloseGallary">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item of list" :key="item.id">
                    <img :src="item.imgUrl" class="swiper-img">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  data () {
    return {
      list: [
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg'
        }
      ],
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
