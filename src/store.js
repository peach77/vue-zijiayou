import Vue from 'vue'
import Vuex from 'vuex'
// import { search } from 'core-js/fn/symbol'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        isActive:true,
        isActiveOne:false,
        blueActive:'home',
        nanjingActive:'city',
        inputSearch:'',
        blueColor:'tese',
        adultNum:0,
        childNum:0,
    
        // arr:[{date:'2020/6/18',className:"mark1"},{date:'2020/6/18',className:"mark1"}],
        nanjing:[
            {
            id:'nm890',
            title:'<span><b><阿尔山童话世界冰雪温泉之旅></b>6天行程</span>',
            line:'线路：南京-乌兰浩特-阿尔山-白狼村',
            name:'冰雪阿尔山欢乐过大年',
            who:'探索者旅行俱乐部',
            price:'￥3600起',
            imgSrc: require("../src/assets/a1.png"),},
                     {
                    id:'pl923',
                    title:'<span><b><玩转广西自驾12日游></b>12天行程</span>',
                    line:'线路：南京-桂林-凭祥-北海-阳朔',
                    name:'尽情领略广西风光，深入体验边关风采',
                    who:'中国自驾游联盟南京站',
                    price:'￥4680起',
                    imgSrc: require("../src/assets/a2.png"),},
                    {
                        id:'evt63',
                        title:'<span><b><黔东南深度名宿体验之旅></b>12天行程</span>',
                        line:'线路：南京-江西-黄果树-荔波-桂林',
                        name:'冰雪阿尔山欢乐过大年',
                        who:'中国自驾游联盟南京站',
                        price:'￥4580起',
                        imgSrc: require("../src/assets/a3.png"),},
                     {
                            id:'06fvvb',
                            title:'<span><b><海天佛国 普陀山祈福之旅></b>3天行程</span>',
                            line:'线路：南京-朱家尖-普陀山-宁波',
                            name:'海天佛国，南海圣境',
                            who:'中国自驾游联盟南京站',
                            price:'￥1280起',
                            imgSrc: require("../src/assets/a4.png"),},
                            {
                                id:'nm890az',
                                title:'<span><b><阿尔山童话世界冰雪温泉之旅></b>6天行程</span>',
                                line:'线路：南京-乌兰浩特-阿尔山-白狼村',
                                name:'冰雪阿尔山欢乐过大年',
                                who:'探索者旅行俱乐部',
                                price:'￥3600起',
                                imgSrc: require("../src/assets/a1.png"),},
                                         {
                                        id:'pl923mn',
                                        title:'<span><b><玩转广西自驾12日游></b>12天行程</span>',
                                        line:'线路：南京-桂林-凭祥-北海-阳朔',
                                        name:'尽情领略广西风光，深入体验边关风采',
                                        who:'中国自驾游联盟南京站',
                                        price:'￥4680起',
                                        imgSrc: require("../src/assets/a2.png"),},
                                        {
                                            id:'evt63cd',
                                            title:'<span><b><黔东南深度名宿体验之旅></b>12天行程</span>',
                                            line:'线路：南京-江西-黄果树-荔波-桂林',
                                            name:'冰雪阿尔山欢乐过大年',
                                            who:'中国自驾游联盟南京站',
                                            price:'￥4580起',
                                            imgSrc: require("../src/assets/a3.png"),},
                                         {
                                                id:'06fvvbe3',
                                                title:'<span><b><海天佛国 普陀山祈福之旅></b>3天行程</span>',
                                                line:'线路：南京-朱家尖-普陀山-宁波',
                                                name:'海天佛国，南海圣境',
                                                who:'中国自驾游联盟南京站',
                                                price:'￥1280起',
                                                imgSrc: require("../src/assets/a4.png"),},
        ],
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
        }
    
    ],
        overSea:[
            { id:'97fsz',
            travel:"澳洲大洋路精彩自驾之旅11日",
            imgSrc: require("../src/assets/01.jpg"),
        path:"线路：墨尔本-大洋路-堪培拉-悉尼  ",
        date:"2016-01-02出发",
        price:"17880"},
        { id:'12xvhh',
        travel:"加州一号公路 + 夏威夷浪漫自驾之旅",
        imgSrc: require("../src/assets/02.jpg"),
        path:"线路：旧金山－文图拉－洛杉矶－檀香山",
        date:"2016-02-11出发",
        price:"3680"},
        { id:'dfvtg09',
        travel:"贝加尔湖双飞8日深度自驾",
        imgSrc: require("../src/assets/03.jpg"),
        path:"线路：伊尔库茨克-利斯特维扬卡",
        date:"2016-03-02出发",
        price:"3680"}
            ]
    },
    mutations: {
        addNum(state,a){
            if(a==='adult'){
                state.adultNum++
            }else{
                state.childNum++
            }
           
        },
        subNum(state,a){
            if(a==='adult'){
                if(state.adultNum===0){
                    state.adultNum=0
                }else{
                    state.adultNum--
                }
            }
            else{
                if(state.childNum===0){
                    state.childNum=0
                }else{
                    state.childNum--
                } 
            }
        },
         changeMainPage(state,n) {
            if(n==='hudong'){
                state.isActive=false,
                state.isActiveOne=true
            }
            else{
                state.isActive=true,
                state.isActiveOne=false
            }
      },
      changeBottomColor(state,n){
          state.blueActive=n       
      },
      changeNanJingColor(state,n){
        state.nanjingActive=n       
     },
      searchNanjing(state,n){
        state.inputSearch=n
      },
      skipColor(state,n){
        state.blueColor=n
      }
      
    }
  })
  export default store