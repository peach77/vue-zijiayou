<template>
  <div class="wrap">
 
  <el-scrollbar>
         <header>
           <div class="father"><div class="box"><i class="iconfont icon-didian"></i></div><span>呼和浩特</span></div>
           <div class="tab"><span  v-on:click="change('zijia')" :class="{active:$store.state.isActive}">爱自驾</span><span class="chat" v-on:click="change('hudong')" :class="{active:$store.state.isActiveOne}">互动</span></div>
            <div class="box"><i class="iconfont icon-camera_icon"></i></div>
      </header>
      <div class="banner">
           <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide><img src="../assets/t01ddc56b53349449f8.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/t01fc73c8f3ddfb26ff.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/t017f3b8ebdcd629bf8.jpg" alt=""></swiper-slide>
             <div class="swiper-pagination" slot="pagination"></div>
             </swiper>
      </div>
      <div class="search">
        <span>
          <input type="text"><i class="iconfont icon-sousuo"></i>
        </span>
      </div>
      <div>
        <div class="inside">
          <div class="line"></div>
          <span>境内</span>
        </div>
        <div class="wrap-top" v-for="item in $store.state.inland" :key='item.id'>
            <div class="top">
               <span class="title">{{item.travel}}</span>
              <img :src="item.imgSrc" >
              <span class="date">{{item.date}}</span>
            </div>
            <div class="bottom">
                <p>{{item.path}}</p>
            </div>
        </div>
        <div class="more">
            <p> <span class="add">+</span><span>MORE</span></p>
        </div>
        
      </div>
      <div>
          <div class="inside">
              <div class="line"></div>
              <span>境外</span>
        </div>
          <div class="wrap-top" v-for="item in $store.state.overSea" :key='item.id'>
            <div class="top">
               <span class="title">{{item.travel}}</span>
              <img :src="item.imgSrc" >
              <span class="date">{{item.date}}</span>
            </div>
            <div class="bottom">
                <p>{{item.path}}</p>
            </div>
        </div>
        <div class="more">
            <p> <span class="add">+</span><span>MORE</span></p>
        </div>
      
      </div>
    
 
       </el-scrollbar>
      <FooterBottom />
  </div>

</template>
<script>
import FooterBottom from './FooterBottom.vue'
 export default {
    name:'mainpage',
    components:{FooterBottom},
     data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      this.swiper.slideTo(0,640,false)
    },
    methods:{
        change(n){
           this.$store.commit('changeMainPage',n);
        }
    },
    created () {
      console.log(this.$router);   
    },
}
</script>
 <style scoped >
    div.wrap{
     
        width:100%;
        height: 100vh;
      overflow: scroll;
    
    }
    .icon-didian,.icon-camera_icon{
        color: white;
        font-size: 0.2rem;
    }
   
    div.father{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
    }
    div.father span{
        color: white;
        margin-left:2px;
    }
    header{
        display: flex;
        flex-wrap: nowrap;
        background-color: #50bbdb;
        padding: 0.15rem 0.2rem 0.15rem 0.2rem ;
        justify-content: space-between;
        align-items: center;
    }
    div.box{
        border: 1px solid white;
        padding: 0.08rem;
        border-radius: 50%;
    
    }
   
     div.tab{
         border: 1px solid white;
         border-radius: 3px;
     }
    div.tab span{
        display: inline-block;
        width: 0.8rem;
        text-align: center;
        padding: 0.05rem;
    }
    div.tab span.chat{
        border-left: 1px solid white;
    }
    .active{
        background-color: white;
        color:#50bbdb;
    }
    div.banner img{
        width: 100%;
    }
    div.search{
      text-align: center;
      padding: 0.2rem 0.6rem;
    }
   div.search input{
      height: 0.15rem;
        border: 1px solid #50bbdb;
        border-radius: 15px;
        outline: none;
    } 
    div.search span{
      position: relative;
    }
    div.search .icon-sousuo{
      position: absolute;
      right: 0.08rem;
      font-size: 16px;
      color:#50bbdb ;
    }
    div.inside{
      margin-bottom: 0.25rem;
    }
     div.top{
       position: relative;

     }
      div.top span.date{
         display: block;
       position: absolute;
       bottom: 0;
       left: 0;
        width: 100%;
        background-color: rgba(255,255,255,0.2);
        line-height: 0.2rem;
        color: white;
       padding-left: 0.1rem;
       font-size: 14px;
       
      }
     div.top  span.title{
       display: block;
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 0.3rem;
       background-color: rgba(255,255,255,0.2);
       line-height: 0.3rem;
       color: white;
       padding-left: 0.1rem;
       font-size: 16px;
       
     }
    div.top  img{
     width: 100%;
     height: 2rem;
    }
    div.bottom{
        font-size: 16px;
      line-height: 0.4rem;
      padding-left: 0.1rem;
    }
    div.more{
      background-color: #f1f1f1;
      line-height: 0.4rem;
      text-align: center;
      color: #eb6417;
      margin-bottom: 0.15rem;
    }
    div.more p{
      font-size: 14px;
    }
    div.more span.add{
    
      line-height: 10px;
      margin-right: 10px;
      display: inline-block;
      border: 1px solid #eb6417;
      border-radius: 50%;
      padding: 0.02rem;
    }
</style> 
<style >
     .my-bullet{
     display: inline-block;
      width: 0.16rem;
      height: 0.16rem;
    border-radius: 50%;
    background: white;
    margin-left:0.04rem;
    }
    .my-bullet-active{
       background: #50bbdb;
    }
    div.inside{
      padding: 0 6px;
      position: relative;
    }
    div.inside .line{
      width: 100%;
      border: 0.5px solid #cccccc;
    }
    div.inside span{
      display: block;
      width: 0.4rem;
      background-color: white;
      position: absolute;
      top:-7px;
      left: 50%;
    margin-left: -0.2rem;
    text-align: center;
    font-size: 16px;
    }
</style>



