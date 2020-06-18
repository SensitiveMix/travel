<template>
    <div>
        <div class="banner">
            <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" class="banner-img">
            <div class="banner-info">
                <div class="banner-title">
                    大连圣亚海洋世界(AAAA景区)
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe6e5;</span>
                    22
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailBanner'
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
