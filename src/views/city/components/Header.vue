<template>
    <div class="header">
            城市选择
        <div>
            <router-link to="/">
                <div class="iconfont header-icon">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    position relative
    line-height .68rem
    height: 0.68rem;
    width 100%
    color #ffffff
    text-align center
    background-color $bgColor
    font-size .30rem
    border 0
    .header-icon
        width .86rem
        line-height .86rem
        left 0
        height 0
        top 0
        color #ffffff
        position absolute
        text-align: center
        font-size .32rem
</style>
