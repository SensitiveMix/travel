<template>
      <div class="container">
        <detail-header></detail-header>
        <detail-banner></detail-banner>
      </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .container
    height 50rem
</style>
