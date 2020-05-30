import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '南京'
  },
  mutations: {
    changeCity (state, data) {
      state.city = data
    }
  }
})
