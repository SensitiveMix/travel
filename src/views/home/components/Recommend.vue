<template>
<div>
    <div class="recommend-title"><p>热销推荐</p></div>
    <ul>
        <router-link
        tag="li"
        class="item border-bottom"
        v-for= "item of list"
        :key = item.id
        :to="'/detail/' + item.id"
        >

        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
        </div>
        </router-link>
    </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .recommend-title
    font-size 0.28rem
    margin-top .2rem
    background #eee
    line-height .8rem
    text-indent 0.2rem
  .item
    display flex
    overflow hidden
    height 1.9rem
  .item-img
    overflow hidden
    width 1.7rem
    height 1.7rem
    padding .1rem
    border-radius .16rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
    .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
    .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #ffffff
</style>
