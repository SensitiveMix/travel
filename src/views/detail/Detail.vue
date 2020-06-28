<template>
      <div class="container">
        <detail-header></detail-header>
        <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :gallaryImgs="gallaryImgs"
        ></detail-banner>
        <detail-list :list="list"></detail-list>
      </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: []
    }
  },
  methods: {
    getDetailListInfo: function () {
      axios.get('/api/detail.json')
        .then(this.handleResp)
    },
    handleResp: function (resp) {
      if (resp.data && resp.data.ret) {
        this.list = resp.data.data.categoryList
        this.sightName = resp.data.data.sightName
        this.bannerImg = resp.data.data.bannerImg
        this.gallaryImgs = resp.data.data.gallaryImgs
      }
    }
  },
  mounted () {
    this.getDetailListInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .container
    height 50rem
</style>
