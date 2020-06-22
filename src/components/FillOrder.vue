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
                            <span>出游日期：2016-01-27 </span><br>
                            <span>出游人数：{{$store.state.adultNum}}成人，{{$store.state.childNum}}儿童</span><br>
                            <span>房间： 
                            <span class="frame" :style="{color:'#50bbdb'}" @click="subNum('adult')">-</span>
                            <span class="frame">{{$store.state.roomNum}}</span>
                            <span class="frame" :style="{color:'#50bbdb'}" @click="addNum('jia')">+</span>（2人间）</span><br>
                            <span class="agree">
                                    <span>是否同意拼房:</span> 
                                    <span class="choice">
                                       <span> <input type="radio" id="one" value="One" checked='one' v-model="$store.state.picked">
                                        <label for="one">同意</label></span><br>
                                      <span>
                                             <input type="radio" id="two" value="Two" v-model="$store.state.picked" class="no">
                                        <label for="two">不同意拼房，愿意支付差价</label>
                                      </span>

                                    </span> 
                                </span>
                              
                                      
                              
                            
                        </p>
                    </div>
                    <div class="fee">
                     <p class="top ">
                         <span  @click="feeShow('y')" ><b  v-bind:class="{ line:$store.state.awesome==='y' }">费用说明</b></span >
                         <span @click="feeShow('n')" class="cancel"><b  v-bind:class="{ line: $store.state.awesome==='n'}">退订规则</b></span>
                    </p>
                     <div class="bot" v-show="$store.state.awesome==='y'" >
                         <p><b>费用包含：</b></p>
                         <p> *+7x24小时优秀中/英双语自驾向导服务（国内出发，全程陪同）；</p>
                         <p>*+国内往返美国经济舱机票、燃油附加税、机票税；</p>
                         <p> *+包含好莱坞环球影城+17英里海岸门票；</p>
                         <p> *+美国当地钻酒店住宿；</p>
                         <p> *+美国当地钻酒店住宿1；</p>
                        
                     </div>
                     <div class="bot" v-show="$store.state.awesome==='n'" >
                          <p>*可7天无理由退订产品</p>
                     </div>
                    </div>
                    <div class="connect">
                        <p class="top"><span><b>联系人姓名</b></span></p>
                        <div class="bot-connect">
                            <p><span class="first"><span :style="{color:'#50bbdb'}">*</span>姓名<input type="text" placeholder="必填"></span></p>
                            <p><span :style="{color:'#50bbdb'}">*</span>性别</p>
                            <p><span :style="{color:'#50bbdb'}">*</span>手机号码<input type="text"></p>
                            <p><span :style="{color:'#50bbdb'}">*</span>邮箱<input type="text" placeholder="必填，接受合同信息"></p>
                        </div>
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
        },
        addNum(n){   
       this.$store.commit('roomNum',n);   
    },
    subNum(n){
         this.$store.commit('roomNum',n);  
    },
    feeShow(n){   
       this.$store.commit('feeShow',n);  
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
      background-color: #50bbdb;
        display: flex;
        flex-wrap: nowrap;
        background-color: '#50bbdb';
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
      div.bgc .bot .frame{
          display: inline-block;
          border: 1px solid #ededed;
          line-height: 0;
          padding: 8px;
          
      }
      span.agree{
          display: flex;
         justify-content: flex-start;
      }
       div.fee{
          background-color: white;
          border-radius: 5px;
          margin-bottom: 10px;
    }
       div.bgc .fee{
        border-bottom: 1px solid #ededed;
        padding: 6px;
       
    }
     div.bgc .fee span{
            border-left: 2px solid #50bbdb;
           padding: 0 6px ;
         
     }
     div.bgc .fee .line{
             border-bottom: 2px solid #50bbdb;
               padding: 6px 0 ;     
     }
     div.bgc .fee span.cancel{
          border-left:none;
     }
     div.connect{
          background-color: white;
          border-radius: 5px;
          margin-bottom: 10px;
    }
    div.connect .top{
        border-bottom: 1px solid #ededed;
        padding: 6px;
       
    }
     div.connect .top span{
          border-left: 2px solid #50bbdb;
           padding: 0 6px ;
     }
     div.bot-connect p {
         border-bottom: 1px solid black;
        
     }
   
</style>>
