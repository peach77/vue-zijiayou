<template>
  <div class="wrap"  id="divId">
         <header>
                    <div class="box" v-on:click='goBack'><i class="iconfont icon-ico_leftarrow"></i></div>
                   <p>确认订单</p>
                    <div></div>
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
                            <span>出游日期：2016-01-27 </span><br>
                            <span>出游人数：{{$store.state.adultNum}}成人，{{$store.state.childNum}}儿童</span><br>
                            <span>房间： 2人间，愿意拼房</span><br>
                      
                            
                        </p>
                    </div>
                     <div class="information">
                        <p class="top"><span><b>联系人信息</b></span></p>
                        <p class="bot">
                            <span>姓名：罗小小</span><br>
                            <span>性别：女</span><br>
                            <span>手机号码：18270938562</span><br>
                            <span>邮箱：158964785@qq.com</span><br>
                      
                            
                        </p>
                    </div>
                     <div class="information">
                        <p class="top"><span><b>游客信息</b></span></p>
                        <p class="bot">
                            <span>罗小小</span><br>
                            <span>罗笑笑</span><br>
                              
                        </p>
                    </div>
                       <div class="insur">
                         <p class="top"><span><b>保险</b></span></p>
                          <div class="cla">
                             <div class="left">
                                <span>
                                    <label for="checkbox">
                                    <input type="checkbox" id="checkbox" v-model="$store.state.checked">
                                    </label>
                                </span>
                                <p>
                                    <span> 平安爱自驾境外长线保险 经典型</span><br>
                                    <span> 2份 </span>
                                </p>
                            </div>
                            <div class="right">
                                <p>
                                    <span>详情></span><br>
                                    <span><span :style="{color:'#e57600'}">￥177</span>/一份</span>
                                </p>
                            </div>
                           
                          </div>
                          <div class="box-line">
                            <hr >
                          </div>
                           <div class="cla">
                            <div class="left">
                                <span>
                                    <label for="checkbox">
                                    <input type="checkbox" id="checkbox" v-model="$store.state.checked">
                                    </label>
                                </span>
                                <p>
                                    <span> 平安爱自驾境外长线保险 经典型</span><br>
                                    <span> 2份 </span>
                                </p>
                            </div>
                            <div class="right">
                                <p>
                                    <span>详情></span><br>
                                    <span><span :style="{color:'#e57600'}">￥177</span>/一份</span>
                                </p>
                            </div>
                           
                          </div>
                    </div>
                      <div class="last">
                            <p>已阅读并同意爱自驾旅游协议</p>
                    </div>
                   
            </div>

         <footer>
         
           <div  v-bind:class="{flex: $store.state. screenHeight>700}">
           <div class=" father">
            <p :style="{color:'#f09538'}"><b>总费用￥5920</b></p>
            <p class="blue"><router-link to='/Paypage'>确认，去支付</router-link></p>
            
           </div>
          
            </div>
       
        
          </footer>
        </body>
        
   
   </div>
</template>

<script>

export default {
    name:'confirm',
 
    methods:{
           goBack(){
             this.$router.back()
        }    
    }




  
}
</script>

<style scoped>
     div.wrap{
          background: #ededed;
        width:100%;
        height: 100vh;
      overflow: scroll;
    
    }
  
    
 .icon-didian{
        color: white;
        font-size: 0.2rem;
    }
      div.box{
     color: white;
    
    }
 
   header p{
       font-size: 20px;
        color: white;
        
   }
     header{
        display: flex;
        flex-wrap: nowrap;
        background-color: #50bbdb;
        justify-content: space-between;
      padding: 0.21rem 0.21rem 0.21rem 0.2rem;
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
          margin-bottom: 10px;
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
      div.insur{
          background-color: white;
          border-radius: 5px;
          margin-bottom: 10px;
       
    }
     div.insur .top{
        border-bottom: 1px solid #ededed;
        padding: 6px;
       
    }
    .green {
            width: 8px;
            height: 16px;
            border-color: #009933;
            border-style: solid;
            border-width: 0 3px 5px 0;
            transform: rotate(45deg);
     }
    div.insur .cla{
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
      
    }
    div.insur .cla p{
        line-height: 20px;
    }
    div.insur .cla .left{
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
      
    }
  
 
      div.insur .cla .right{
        display: flex;
       text-align:right;
        justify-content: flex-end;
        align-items: center;
       
      }
       div.insur .box-line{
         
            padding: 0 10px;
       }
          div.last{
           text-align: center;
           display: flex;
           flex-wrap: nowrap;
           align-items: center;
           justify-content: center;
       }
           footer .father{
              
            display: flex;
            justify-content: space-between;
            background-color: white;
            padding: 10px 10px;
            font-size: 14px;
            align-items: center;
         
        }
        footer .blue{
            background-color: #50bbdb;
           
            text-align: center;
            padding:10px 26px;
            border-radius: 5px;
        }
        footer .blue a{
                color: white;
                text-decoration: none;
        }
        .flex{
       
        width: 100%;
        box-sizing: border-box;
        position: fixed;
        bottom: 0px; 
        }
        .flex .son{
            
          
            display: flex;
            justify-content: space-between;
            background-color: white;
            padding: 10px 10px;
            font-size: 14px;
            align-items: center;
        }
      
</style>