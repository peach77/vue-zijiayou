import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        isActive:true,
        isActiveOne:false,
        inland:[{
            id:'12wsd',
            travel:"小资圣地泸沽湖5日自驾",
            imgSrc: require("../src/assets/01.jpg"),
            path:"线路：重庆-雅安-西昌-盐源-泸沽湖",
            date:"2015-12-30出发",
            price:"5280"
        },{
            id:'56fdg',
            travel:"食在广东粤菜美食6日自驾",
            imgSrc: require("../src/assets/02.jpg"),
            path:"线路：广州-开平-番禺-深圳 ",
            date:"2015-12-29出发",
            price:"3680"
        }],
        overSea:[
            { id:'97fsz',
            travel:"澳洲大洋路精彩自驾之旅11日",
        img:'',
        path:"线路：墨尔本-大洋路-堪培拉-悉尼  ",
        date:"2016-01-02出发",
        price:"17880"},
        { id:'12xvhh',
        travel:"澳洲大洋路精彩自驾之旅加州一号公路 + 夏威夷浪漫自驾之旅",
        img:'',
        path:"线路：旧金山－文图拉－洛杉矶－檀香山",
        date:"2016-02-11出发",
        price:"3680"},
        { id:'dfvtg09',
        travel:"贝加尔湖双飞8日深度自驾",
        img:'',
        path:"线路：伊尔库茨克-利斯特维扬卡",
        date:"2016-03-02出发",
        price:"3680"}
            ]
    },
    mutations: {
         changeMainPage(state,n) {
            if(n==='hudong'){
                state.isActive=false,
                state.isActiveOne=true
            }
            else{
                state.isActive=true,
                state.isActiveOne=false
            }
      }
    }
  })
  export default store