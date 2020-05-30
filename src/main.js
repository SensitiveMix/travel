import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 解决点击延迟的问题
// import fastClick from 'fastclick'
import router from './router'
// 一像素边框问题
import './assets/styles/border.css'
// 移动端样式适配
import './assets/styles/reset.css'
import 'styles/iconfont.css'

// import style
import 'swiper/css/swiper.css'

import store from './store'

Vue.config.productionTip = false
// fastClick.attach(document)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
