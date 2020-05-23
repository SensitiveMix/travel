<template>
  <div>
  <home-header></home-header>
  <home-swiper :list="swiperList"></home-swiper>
  <home-icon :list="iconList"></home-icon>
  <home-recommend :list="recommendList"></home-recommend>
  <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getDataInfo: function () {
      axios.get('/api/index.json')
        .then(this.handleResp)
    },
    handleResp: function (resp) {
      this.swiperList = resp.data.swiperList
      this.iconList = resp.data.iconList
      this.recommendList = resp.data.recommendList
      this.weekendList = resp.data.weekendList
    }
  },
  mounted () {
    this.getDataInfo()
  }
}
</script>
