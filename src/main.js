import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/css/swiper.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './Router'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
