import Vue from 'vue'
import Router from 'vue-router'


import Map from './components/Map'
import MainPage1 from './components/MainPage1'
import NanJing from './components/NanJing'
import Detials from './components/Detials'
import Leader from './components/Leader'
import Apply from './components/Apply'
import FillOrder from './components/FillOrder'
import Confirm from './components/Confirm';
import Paypage from './components/Paypage'
import Success from './components/Success'
import Personal from './components/Personal'
Vue.use(Router)

export default new Router({
  mode: 'hash',
    routes: [
      {
        path: '/',
        component: MainPage1
      },
      {
        path: '/Nanjing',
        name: 'nanjing',
        component:NanJing
      },
      {
        path: '/Map',
        name: 'map',
        component:Map
      },
      {
        path: '/Detials',
        name: 'detials',
        component:Detials
      },
      {
        path: '/Leader',
        name: 'leader',
        component:Leader
      },
      {
        path: '/Apply',
        name: 'apply',
        component:Apply
      },
      {
        path: '/FillOrder',
        name: 'fillorder',
        component:FillOrder
      },
      {
        path: '/Confirm',
        name: 'Confirm',
        component:Confirm
      },
      {
        path: '/Paypage',
        name: 'Paypage',
        component:Paypage
      },
      {
        path: '/Success',
        name: 'Success',
        component:Success
      },
      {
        path: '/Personal',
        name: 'Personal',
        component:Personal
      }
    ]
  })
