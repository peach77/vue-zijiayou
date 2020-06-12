import Vue from 'vue'
import Router from 'vue-router'


import Map from './components/Map'
import MainPage1 from './components/MainPage1'
Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        component: MainPage1
      },
      {
        path: '/Map',
        name: 'map',
        component:Map
      }
    ]
  })
