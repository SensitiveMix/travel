import Vue from 'vue'
import App from './App'
// 解决点击延迟的问题
// import fastClick from 'fastclick'
import router from './router'
// 一像素边框问题
import './assets/styles/border.css'
// 移动端样式适配
import './assets/styles/reset.css'

Vue.config.productionTip = false
// fastClick.attach(document)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
