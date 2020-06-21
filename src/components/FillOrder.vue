<template>
  <div class="wrap">
          <header>
                    <div class="box" v-on:click='goBack'><i class="iconfont icon-ico_leftarrow"></i></div>
                    <div class="middle"><p>填写订单</p></div>
                    <div class="box"><i class="iconfont icon-icon_dianhua"></i></div>
            </header>
            <body>
                <div class="title">
                    <p ><span>【爱自驾】&lt;云南落地自驾行摄7天之旅&gt;，各地飞往历史文化名城云南昆明集合。</span></p>
                </div>
                <div class="bgc">
                    <div class="information">
                        <p class="top"><span><b>线路信息</b></span></p>
                        <p class="bot">
                            <span>自驾团名称：云南落地自驾行摄之旅</span><br>
                            <span>出有日期：2016-01-27 </span><br>
                            <span>出游人数：3成人，0儿童</span><br>
                            <span>房间： <span>-</span>
                            <span>1</span>
                            <span>+</span>（2人间）</span><br>
                            <span>是否同意拼房:</span>
                        </p>
                    </div>
                </div>
              
            </body>
          
  </div>
</template>

<script>
export default {
    name:'fillorder',
    methods: {
      goBack(){
             this.$router.back()
        }
    },
}
</script>

<style scoped>
 div.wrap{
     
        width:100%;
        height: 100vh;
      overflow: scroll;
    
    }
  
    
 .icon-didian,.icon-icon_dianhua{
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
   header p{
       font-size: 20px;
   }
     header{
      
        display: flex;
        flex-wrap: nowrap;
        background-color: #50bbdb;
        padding:  0.21rem ;
        justify-content: space-between;
        align-items: center;
    }
    div.title{
        padding: 2px 40px 2px 10px;
        line-height: 20px;
    }
    div.bgc{
        background-color: #ededed;
        padding: 10px;
    }
    div.information{
          background-color: white;
          border-radius: 5px;
    }
    div.bgc .top{
        border-bottom: 1px solid #ededed;
        padding: 6px;
       
    }
     div.bgc .top span{
          border-left: 2px solid #50bbdb;
           padding: 0 6px ;
     }
     div.bgc .bot{
         padding:  0 12px ;
         line-height:24px;
     }
</style>>
