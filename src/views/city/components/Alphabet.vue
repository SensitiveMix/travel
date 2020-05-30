<template>
    <ul class="alphabet">
        <li
            class="item"
            v-for="(item, index) of letters"
            :key=index
            :ref=index
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
        >
            {{index}}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    letters: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs.A[0].offsetTop
  },
  methods: {
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index > 0 && index < Object.keys(this.letters).length) {
            this.$emit('change', Object.keys(this.letters)[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    },
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .alphabet
        position absolute
        right .15rem
        display flex
        height 100%
        flex-direction column
        justify-content center
        align-items center
        .item
            margin .06rem auto
            color $bgColor
            text-align center
</style>
