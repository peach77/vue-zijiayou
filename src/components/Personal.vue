<template>
  <div class="wrap">
       <header>
                    <!-- <router-link :to="'./'"><div class="box"><i class="iconfont icon-ico_leftarrow"></i></div></router-link> -->
                    <div class="box" v-on:click="goBack('home')"><i class="iconfont icon-ico_leftarrow"></i></div>
                    <p>订单列表</p>
                    <div></div>
       </header>
       <body>
            <div class="classify">
         <div class="all" @click="clickAll('all')"><P>全部分类<i class="iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui"></i></P></div>
         <div class="timer" @click="clickAll('time')"><p>按时间排序<i class="iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui"></i></p></div> 
           </div>
           <div class="allBox" :style="{display:$store.state.type==='all'?'block':'none'}"><p>全部分类</p>
           <p>待出行</p>
           <p>待支付</p>
           <p>待评价</p>
           <p>已取消</p></div>
           <div class="timeBox" :style="{display:$store.state.type==='time'?'block':'none'}"><p>按下单时间顺序</p>
           <p>按出行时间顺序</p></div>
           <div class="shadow" @click="clickAll('')" :style="{display:$store.state.type===''?'none':'block'}"></div>
           <div class="list" v-for="item in $store.state.personalList" :key="item.id">
                <div class="part-one">
                    <p><span>{{item.ordernum}}</span> | <span>{{item.agree}}</span></p>
                    <p>{{item.scheduledTime}}</p>
                  
                </div>
                <div class="mid">
                    <h5>{{item.title}}</h5>
                    <p>
                    <span>{{item.selfDriving}} </span>
                    <span class="pri">{{item.price}}</span>
                    </p>
                </div>
                <div class="last">
                    <p><span class="fir">{{item.agree}}</span><span><button>{{item.btn}}  <i class="iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui"></i></button></span></p>
                </div>
          </div>
      
       </body>
      
  </div>
</template>

<script>
export default {
   name:'personal',
    
    methods:{
       
        goBack(n){
           this.$store.commit('changeBottomColor',n)
          
           
           
             this.$router.back()
           
             
         
        },
        clickAll(n){
          this.$store.commit('changeType',n)
        }
       
    }

}
</script>

<style scoped>
  div.wrap{
        width: 100%;
        height: 100vh;
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
     div.classify{
       display: flex;
       justify-content: space-between;
       line-height: 0.6rem;
       border-bottom: 1px solid #f1f1f1;
       background-color: white;
     }
     div.classify div{
       width: 50%;
     box-sizing: border-box;
     text-align: center;}
     div.classify div i{
       font-size: 12px;
       margin-left: 6px;
     }
     div.classify .all{
       border-right:  1px solid #f1f1f1;;
     }
     div.allBox,div.timeBox{
       text-align: left;
       width: 100%;
       line-height: 0.5rem;
       z-index: 30;
         position: absolute;
        top:0.6rem;
        left: 0;
         background-color: white;
       
        
     }
      div.allBox p,div.timeBox p{
        padding-left: 10px;
          border-bottom: 1px solid #f1f1f1;
      }
      body{
        position: relative;
        background-color: #f1f1f1;
      }
      div.list{
        background-color: white;
        width: 100%;
        margin-top: 10px;
        z-index: 5;
      }
      div.part-one{
        display: flex;
        flex-wrap: nowrap;
        padding: 4px 4px;
        justify-content: space-between;
      }
      div.mid{
        border-bottom: 1px solid #f1f1f1;
        padding: 4px;
      }
      div.mid h5{
        margin-bottom: 4px;
      }
      div.mid p{
        display: flex;
      justify-content: start;
       
      }
      div.mid p  span{
      width: 50%;
     
      box-sizing: border-box;
       
      }
      div.mid p  span.pri{
        color: #ee683f;
      }
      div.last{
        
            padding: 4px 14px 4px 4px;
      }
      div.last p{
              display: flex;
            justify-content: space-between;
            align-items: center;
      }
       div.last p span.fir{
         font-size: 14px;
            color: #ee683f;
       }
     div.last button i{
         font-size: 12px;
         color: #b4b4b4;
     }
     div.shadow{
      width: 100%;
       background-color: rgba(0,0,0,0.5);
       z-index: 20;
       height: 100vh;
       position: absolute;
       top: 0.6rem;
     }
  
</style>