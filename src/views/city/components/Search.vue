<template>
    <div class="search">
            <input type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .search
    line-height .86rem
    position relative
    height .86rem
    text-align center
    font-size .25rem
    background-color $bgColor
    margin-top -.06rem
    .search-input
        width 97%
        line-height .64rem
        height .64rem
        text-align: center
        background-color white
        font-size .25rem
        border-radius .1rem
</style>
