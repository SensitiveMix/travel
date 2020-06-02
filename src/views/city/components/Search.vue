<template>
<div>
    <div class="search">
      <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或拼音">
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
        <ul>
          <li
            class="search-item border-topbottom"
            v-for="item of list"
            :key=item.id
            @click="handleKeyword(item.name)"
          >
            {{item.name}}
          </li>
          <li class="search-item border-item" v-show="hasNoData">
            没有找到匹配数据
          </li>
        </ul>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    ...mapMutations([
      'changeCity'
    ]),
    handleKeyword (city) {
      this.changeCity(city)
      this.$router.push('/')
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      if (!this.keyword) {
        this.list = []
        return
      }

      this.timer = setTimeout(() => {
        const res = []
        for (const i in this.cities) {
          this.cities[i].forEach(city => {
            if (city.spell.indexOf(this.keyword) > -1 || city.name.indexOf(this.keyword) > -1) {
              res.push(city)
            }
          })
        }
        this.list = res
      }, 100)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.search, { click: true })
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .search
    line-height .64rem
    position relative
    height .86rem
    text-align center
    font-size .25rem
    background-color $bgColor
    margin-top -.06rem
    .search-input
        width 95%
        line-height .48rem
        height .64rem
        text-align: center
        background-color white
        font-size .25rem
        border-radius .1rem
  .search-content
    overflow hidden
    z-index 1
    position absolute
    background white
    width 100%
    left 0
    right 0
    bottom 0
    top 1.65rem
    .search-item
      line-height .64rem
      height .64rem
      padding .1rem auto
      text-indent 0.2rem
      font-size 0.3rem
</style>
