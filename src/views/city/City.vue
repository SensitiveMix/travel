<template>
<div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list
      :letter="letter"
      :cities="cities"
      :hotCities="hotCities"
    >
    </city-list>
</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleCityInfoSuccess)
    },
    handleCityInfoSuccess (resp) {
      const respData = resp.data
      if (respData.ret) {
        this.cities = respData.data.cities
        this.hotCities = respData.data.hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .city
    background-color $bgColor
</style>
