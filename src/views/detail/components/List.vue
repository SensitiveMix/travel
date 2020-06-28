<template>
    <div>
      <div class="list" v-for="item of list" :key=item.title>
        <span>> {{item.title}}</span>
        <detail-list :list="item.children" class="list-children"></detail-list>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .list
    padding-top .2rem
    font-size .28rem
    line-height .3rem
    .list-children
      padding-left .4rem
</style>
