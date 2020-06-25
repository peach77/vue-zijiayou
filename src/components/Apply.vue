<template>
  <div class="wrap">
          <header>
                    <!-- <router-link :to="'./'"><div class="box"><i class="iconfont icon-ico_leftarrow"></i></div></router-link> -->
                    <div class="box" v-on:click='goBack'><i class="iconfont icon-ico_leftarrow"></i></div>
                    <p>北京出发</p>
                    <div></div>
         </header>
         <Calendar

      v-on:choseDay="clickDay"

      v-on:changeMonth="changeDate"

     
       ></Calendar>
      <div class="order">

            <div class="order-left">
                <p ><span :style="{paddingRight:12+'px'}"><b>成人</b></span><span :style="{color:'chocolate'}">￥5280</span></p>
                <p class="num"><span class="sub" @click="subNum('adult')">-</span><span class="int">{{$store.state.adultNum}}</span><span class="add" @click="addNum('adult')">+</span></p>
            </div>
            <div class="order-right">
                <p><span :style="{paddingRight:12+'px'}"><b>儿童</b></span><span :style="{color:'chocolate'}">￥5280</span></p>
               <p class="num"><span class="sub" @click="subNum">-</span><span class="int">{{$store.state.childNum}}</span><span class="add" @click="addNum">+</span></p>
            </div>
            
      </div>
     <div class="ph">
          <i class="iconfont icon-tanhao"></i><span>日历价格为起价，订单最终价格以确定出游方案为准</span>
     </div>
    
     <div class="bottom">
          <div class="bottom-left"><p :style="{marginBottom:4+'px'}"><b>3成人</b></p>
          <p> <b>团期：2016-01-28</b></p></div>
          <router-link to='/FillOrder'><div class="bottom-right" ><p>下一步</p></div></router-link>
     </div>

    </div>
</template>

<script>

import Calendar from 'vue-calendar-component';
export default {
  name:'apply',
 components: {
    Calendar
  },

  methods:{
    addNum(n){
       this.$store.commit('addNum',n);   
    },
    subNum(n){
         this.$store.commit('subNum',n);  
    },
     goBack(){
             this.$router.back()
        },
          clickDay(data) {
      console.log(data); //选中某天

    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    }
 
  }
}
</script>

<style scoped>
 .is-selected {
    color: #1989FA;
  }

div.wrap{
  position: relative;
        width:100%;
        height: 100vh;
        background-color: #ededed;
     
    }
    .icon-ico_leftarrow{
        color: white;
        font-size: 0.2rem;
    }
   
     header{
        display: flex;
        flex-wrap: nowrap;
        background-color: #50bbdb;
        justify-content: space-between;
       padding: 0.21rem 0.21rem 0.21rem 0.2rem;
        align-items: center;
    }
     header p{
         font-size:20px;
         color: white;
     }
     div.order{
       display: flex;
       margin-top: 10px;
       justify-content: space-between;
       padding: 20px 20px;
       background-color: white;
     }
       div.order p{
      
       text-align: center;
        font-size: 14px;

     } 
     div.order .num{
       margin-top:4px;
     }
      div.order .num span{
        border: 1px solid #50bbdb;
        display: inline-block;
        width:30px;
        text-align: center;
        padding: 8px 0px;
      }
       div.order  .int{
         background-color: #50bbdb;
         color: white;
 
       }
        div.order  .sub{
             color:#50bbdb;
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }
        div.order .add{
          color:#50bbdb;
           border-top-right-radius: 6px;
         border-bottom-right-radius: 6px;
        }
        .order-left P.left{

          display: flex;
          justify-content: space-between;
        }
        div.ph{
          background-color:white;
          border-top:1px solid #dbdbdb;
          padding: 10px 10px;
          vertical-align: middle;
          line-height: 30px;
          display: flex;
        }
        .icon-tanhao{
             color:#50bbdb;
             margin-right: 6px;
             align-items: center;
        }
        div.bottom{
          width: 100%;
          background-color: white;
           position:absolute;
          justify-content: space-between;
          padding: 10px 10px;
          align-items: center;
          display: flex;
          bottom: 0px;
          box-sizing: border-box  ;
        }
        div.bottom-right{
          padding: 10px 40px;
          text-align: center;
          background-color: #50bbdb;
          color: white;
          border-radius: 5px;
        }
      
        
</style>
<style >


.wh_container div.wh_content_all{
  background-color: #ededed;

}
div.wh_item_date{
      color: black;
}

.wh_top_changge  li[data-v-2ebcbc83]{
  color: black;
}
.wh_top_changge+.wh_content {
  background-color: #bebebe;
 
}
div.wh_top_tag{
  color: black;
}
.wh_jiantou2[data-v-2ebcbc83]{
 border-top:2px solid #50bbdb;
 border-right: 2px solid #50bbdb;
}
.wh_jiantou1[data-v-2ebcbc83]{
   border-top:2px solid #50bbdb;
 border-left: 2px solid #50bbdb;
}
.wh_content_item .wh_isToday[data-v-2ebcbc83],.wh_content_item .wh_chose_day[data-v-2ebcbc83]{
  background: chocolate;
  
}

.wh_content[data-v-2ebcbc83]{
  padding: 0;
}
div.wh_item_date mark1{
  color: red;
}
</style>

