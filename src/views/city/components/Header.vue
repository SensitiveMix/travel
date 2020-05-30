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
    line-height .86rem
    height: 0.86rem;
    width 100%
    color #ffffff
    text-align center
    background-color $bgColor
    font-size .30rem
    border 0
    .header-icon
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
