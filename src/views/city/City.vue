<template>
<div>
  <div class="header-wrap">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
  </div>
    <city-list
      :letter="letter"
      :cities="cities"
      :hotCities="hotCities"
    >
    </city-list>
    <city-alphabet
      :letters="cities"
      @change="handleLetterChange"
    >
    </city-alphabet>
</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
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
    CityList,
    CityAlphabet
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
    },
    handleLetterChange (data) {
      this.letter = data
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header-wrap
    // position: fixed
    width: 100%
</style>
