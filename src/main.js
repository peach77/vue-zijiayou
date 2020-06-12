import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({

  store,
  render: h => h(App),
}).$mount('#app')
