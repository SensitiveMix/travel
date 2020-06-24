<template>
    <transition>
      <slot></slot>
    </transition>
</template>

<script>
export default {
  name: 'CommonFadeTransition'
}
</script>

<style lang="stylus" scoped>
  .v-leave-to, .v-enter
    opacity 0
  .v-leave-active, v-enter-acitve
    transition opacity 0.5s
</style>
