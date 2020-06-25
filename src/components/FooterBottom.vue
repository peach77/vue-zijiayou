<template>
  <div>
  
 <p v-on:click="where('home')" :class="$store.state.blueActive==='home'?'active':''"><span><i class="iconfont icon-fangzi"></i></span><br/><span>首页</span></p>
 <router-link to='/Nanjing'><p  v-on:click="where('go')" :class="$store.state.blueActive==='go'?'active':''"><span><i class="iconfont icon-ziyuan"></i></span><br/><span>我去</span></p></router-link>
 <router-link to="/Map"><p  v-on:click="where('map')" :class="$store.state.blueActive==='map'?'active':''"><span><i class="iconfont icon-iconset0395"></i></span><br/><span>地图</span></p></router-link>
<router-link to="/Personal"> <p  v-on:click="where('personal')" :class="$store.state.blueActive==='personal'?'active':''" ><span><i class="iconfont icon-user"></i></span><br/><span>个人中心</span></p></router-link>
  </div>
</template>

<script>
export default {
    name:'FooterBottom',
    
    methods:{
        where(n){
             this.$store.commit('changeBottomColor',n);         
        }
    },
    
}
</script>

<style scoped>
   div{
     width: 100%;
    padding: 10px 0px;
    background:white;
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
   }
    div p{
      text-align: center;
      font-size: 14px;
      color: #7f7f7f;
      line-height: 18px;
    
    }
    p.active{
      color: #50bbdb;
    }
</style>