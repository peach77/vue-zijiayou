<template>
  <div class="wrap">
        
                   <header>
                   <div class="box" v-on:click="goBack('home')"><i class="iconfont icon-ico_leftarrow"></i></div>
                    <div class="middle">
                        <p class="top"><span>南京</span>  <span>产品推荐</span></p>
                        <p>123个结果</p>
                    </div>
                    <div class="box"><i class="iconfont icon-more"></i></div>
                    </header>
                    <body>
                     <router-link to="/Detials">
                         <div v-for="item in $store.state.nanjing" :key="item.id" class="list" >
                        <div class="left">  <img :src="item.imgSrc" ></div>
                        <div class="right">
                          <p v-html="item.title" ></p>
                          <p class="travel">{{item.line}}</p>
                          <p class="grey">{{item.name}}</p>
                          <p class="club" :style="{paddingRight:2+'px'}"><span>{{item.who}}</span><span :style="{color:'#ea561d',fontSize:18+'px'}">{{item.price}}</span></p>
                        </div>
                        </div>
                     </router-link>
                       
                    </body>

      
            <div class="footer">
                 <p v-on:click="where('city')" :class="$store.state.nanjingActive==='city'?'active':''"><span><i class="iconfont icon-thin-_home_house"></i></span><br/><span>出发城市</span></p>
                <p v-on:click="where('data')" :class="$store.state.nanjingActive==='data'?'active':''"><span><i class="iconfont icon-rili"></i></span><br/><span>行程天数</span></p>
                <p v-on:click="where('time')" :class="$store.state.nanjingActive==='time'?'active':''"><span><i class="iconfont icon-shijian"></i></span><br/><span>出行时间</span></p>
                <p v-on:click="where('sort')" :class="$store.state.nanjingActive==='sort'?'active':''"><span><i class="iconfont icon-pailie"></i></span><br/><span>推荐排序</span></p>
              
            </div>
  </div>
</template>

<script>

export default {
     name:'nanjing',
     methods:{
          goBack(n){
           this.$store.commit('changeBottomColor',n)
          
           
           
             this.$router.back()
           
             
         
        },
        where(n){
             this.$store.commit('changeNanJingColor',n);         
        }
    }

}
</script>

<style scoped>

  div.wrap{
     
        width:100%;
        height: 100vh;
      overflow: scroll;
    
    }
    .icon-didian,.icon-camera_icon{
        color: white;
        font-size: 0.2rem;
    }
      div.box{
     color: white;
    
    }
    div.middle{
         color: white;
         text-align: center;
    }
    div.middle p.top{
        font-size:18px;
    }
   
     header{
        display: flex;
        flex-wrap: nowrap;
        background-color: #50bbdb;
        padding: 0.15rem 0.2rem 0.15rem 0.2rem ;
        justify-content: space-between;
        align-items: center;
    }
    body{
    background-color: #f5f5f5;
}
     div.footer{
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
    div.footer p{
      text-align: center;
      font-size: 12px;
      color: #7f7f7f;
      line-height: 22px;
    
    }
    .active{
       
        color:#50bbdb;
    }
    div.footer i{
        font-size: 22px;
        
    }
    div.footer p.active{
      color: #50bbdb;
    }
    div.list{
      width: 100%;
      margin-bottom: 0.2rem;
      display: flex;
   

    }
    div.list p{
      color: black;
    }

    div.left img{
      width: 1rem;
    }
   div.right{
     width: 4.6rem;
      padding:5px 4px 0 4px;
    }
    div.right p.travel{
      margin-top: 5px;
    }
    div.right p.grey{
      color: #9f9b9b;
      font-size: 12px;
       margin-top: 4px;
       margin-bottom: 4px;
    }
    div.right p.club{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
</style>