<template>

      
  <div class="wrap"  id="body"  >

            <header>
                    <!-- <router-link :to="'./'"><div class="box"><i class="iconfont icon-ico_leftarrow"></i></div></router-link> -->
                    <div class="box" v-on:click='goBack'><i class="iconfont icon-ico_leftarrow"></i></div>
                    <p>自驾团</p>
                    <div></div>
            </header>
            <div class="pic">
                 <img src="../assets/titian.jpg" alt="">
                 <p>12月一一云南落地自驾行摄之旅</p>
            </div>
            <div class="small-wrap">
                 <div class="first">
                    <div class="left"><p>昆明 建水 云阳 元江  玉溪  东川</p><p><span :style="{color:'#f0851a'}">￥4580</span><span :style="{fontSize:10+'px'}">/人起</span></p></div>
                    <div class="right">
                    <i class="iconfont icon-fenxiang" ></i> 
                     </div>
                 </div>
                 <div class="date">
                   <div class="date-left">
                         <p>出游日期与价格日历</p>
                    <p><span :style="{marginRight:16+'px'}">春节</span><span>02/21</span></p>
                   </div>
                   <div class="date-right">
                    <i class="iconfont icon-youjiantou"></i>
                   </div>
                 </div>
                 <div class="introduce">
                    <div class="top">
                        <p>
                        <span   v-on:click="change('tese')" :class="$store.state.blueColor==='tese'?'active':''" >行程特色</span>
                        <span  v-scroll-to="'#b'"  v-on:click="change('jianjie')" :class="$store.state.blueColor==='jianjie'?'active':''">行程简介</span>
                        <span  v-scroll-to="'#c'" v-on:click="change('xuzhi')" :class="$store.state.blueColor==='xuzhi'?'active':''" >预定须知</span></p>
                    </div>
                    <div class="part-one"  >
                        <div class="tese"  id="a" >
                             <hr>
                            <p>行程特色</p>
                        </div>
                        <div class="travelling">
                                <P><span class="front">美景：</span><span>汉族青砖四合大院--元阳梯田--东川红土地</span></P>
                                <P><span class="front">团队用餐：</span><span>全程中式午晚餐，五菜一汤</span></P>
                                <P><span class="front">住宿安排：</span><span>温馨的家</span></P>
                                <P><span class="front">安心旅行：</span><span>赠送最高保额30万境外救援保险，让您玩得开心</span></P>
                                <P class="last"><span class="front">优秀团队：</span><span>精选带团经验丰富，具备专业讲解知识的导游团队；</span></P>
                                <img  src="../assets/21.jpg" alt="">
                                 <img class="last" src="../assets/22.jpg" alt="">
                        </div>
                        <div class="grey" >
                        </div>                     
                    </div>
                    <div class="part-two"    >
                        <div class="tese" id="b">
                             <hr>
                            <p>行程简介</p>
                        </div>
                        <div class="journey">
                            <h3>第一天 | 各地-昆明</h3>
                            <p class="food">餐食：晚餐   住宿：昆明</p>
                            <p class="ph">各地飞往历史文化名城云南昆明(注意：请在航班起飞前90分钟到达飞机场)
                            到达昆明后，可自行前往昆明的石林、九乡、滇池等特色景区游玩。18:00
                            酒店大厅集合，由活动方安排分车及安排行前说明交流会。
                            温馨提示：大交通可以委托老陈自驾机票客服小刘（13382069500）预定，
                            也可以自行预定，订票 请和领队确认名额。</p>
                            <h3>第二天 | 昆明--建水</h3>
                            <p class="food">餐食：早餐、晚餐   住宿：建水</p>
                            <p class="ph">酒店早餐后，前往由传统的汉族青砖四合大院、彝族土掌房和汉彝结合的
                            瓦檐土掌房三类建筑风格结合的民居世界--团山居民，团山至今还保存着的
                            完整古村落整体格局，有着滇南乡村特色风貌与传统社会人文环境的原生态
                            特点，世所罕见，极为珍贵。到达建水县城之后，前往参观朱家花园，有一组
                            规模宏大的清代居民建筑，有“滇南大观园”之誉！房间内的床，凳，桌，椅
                            均采用紫木雕刻，体现清代风格，门僮及导游小姐的服饰和接待客人的清式礼
                            仪，让人有恍惚置身百年前历史生活的感受。
                            </p>
                            <img class="up" src="../assets/23.jpg" alt="">
                            <img  class="down" src="../assets/24.jpg" alt="">
                              <h3>第三天 | 建水--元阳</h3>
                            <p class="food">餐食：早餐、晚餐   住宿：元阳</p>
                            <p class="ph">酒店早餐后，前往中国最美的元阳梯田。元阳哈尼梯田主要有三大核心区组--
                            【坝达景区】、【老虎嘴景区】、【多依树景区】，去老虎嘴俯瞰梯田是很好
                            的选择，6000多亩梯田分布于深谷，像一朵巨大的花蕊，老虎嘴被美国摄影家
                            称为世界上最壮丽的田园风光；晚上看夕阳，则应该选择坝达景区，在龙树坝
                            拍日落也是不错的选择；感受大自然的鬼斧神功，19万亩映着蓝天的哈尼梯田
                            就在你的脚下，哈尼梯田有一千多年的历史，至今科学家仍无法解答，这样大
                            的面积，在这崇山峻岭中是怎样挖掘的。
                            </p>
                            <img class="up" src="../assets/25.jpg" alt="">
                            <img  class="down" src="../assets/26.jpg" alt="">
                        </div>
                    </div>
                    <div class="part-three"     >
                         <div class="tese" id="c" >
                             <hr>
                            <p>预定须知</p>
                        </div>
                        <div class="text">
                             <p :style="{fontSize:14+'px',color:'#333333'}" ><b>【活动费用】 4580元/人</b></p>
                        <p :style="{fontSize:14+'px',color:'#333333'}"><b>【VIP会员价】 4500元/人</b></p>
                        <p :style="{fontSize:14+'px',color:'#333333',marginBottom:14+'px'}"><b>【儿童费用】 2500元/人 (1.1米-1.4米占床)</b></p>
                        <div>
                            <p :style="{fontSize:14+'px',color:'#333333'}"><b>【费用包含】</b></p>
                            <p :style="{marginBottom:14+'px'}">
                                1、交通：起亚狮跑或现代IX35(4人1车，1000元/人，如不足4人1车，需补车费)
                                2、通讯：通讯设备，车标&lt;车队出行的后勤服务&gt;组织费用
                                3、用餐：6早6晚，（晚餐60元/人）
                                4、住宿：建水住五星标准；昆阳，元阳，玉溪住四星标准；东川红土地住三星
                                标准
                                5、保险：太平洋旅游意外险
                                6、领队：优秀领队及当地导游服务
                                7、景点：建水朱家花园，团山居民，元阳梯田，红河纳诺梯田，东川红土地。
                              </p>
                        </div>
                        <div>
                            <p :style="{fontSize:14+'px',color:'#333333'}"><b>【费用不含】</b> </p>
                            <p :style="{marginBottom:14+'px'}">
                            
                                1、各地往返昆明机票自理
                                2、全程中餐自理，不占床位早餐请自理
                                3、车辆的油费，路桥费，停车费用
                                4、全程用餐过程中客人所点酒水费用
                                5、酒店电话费，洗衣费，购物等个人消费
                            </p>
                        </div>
                        
                       <div>
                             <p :style="{fontSize:14+'px',color:'#333333'}"><b>【活动时间】 </b></p>
                                <p  :style="{marginBottom:14+'px'}">
                                     2015年12月27日-2016年1月2日
                                </p>
                       </div>
                       
                       <div>
                             <p :style="{fontSize:14+'px',color:'#333333'}"><b>【租车说明】 </b> </p>
                            <p  :style="{marginBottom:14+'px'}">
                            1、本行程车辆是由组织方向当地租车公司代租；租车费用由组织方承担。基本车
                                型：起亚狮跑；车型升级需增加车费。
                                2、租车流程：
                                a.拿车手续
                                驾车人需带齐身份证、驾驶证和信用卡一张，凭上述证件办理租用手续；信用卡
                                额度不得低于10000元人民币，租车的时候需刷8000元的预授权(神州租车规定)。
                                b.归还所租车辆，办理还车手续后，即解除8000元预授权。
                                c.交通违章的处罚，还车时需要刷2000元的违章预授权；作为交通违章押金，在
                                还车之后一个月内无违章的情况下自动解除冻结；如有违章，驾车人自行处理违章
                                并通知租车公司后，则解除2000元的预授权；或者请租车公司代为办理违章，费
                                用从2000元预授权中扣除，剩余的部分则解除预授权。
                                d.行车所产生的油费路桥费包括停车费均由车上人均摊，另有约定的除外。
                            </p>
                       </div>
                       
                       <div>
                            <p :style="{fontSize:14+'px',color:'#333333'}"><b>【注意事项】 </b> </p>
                        <p  :style="{marginBottom:14+'px'}">1、提前做好汽车检查和保养。提前准备好随车工具、备胎、润滑油等，检查户
                        外装备是否齐全。遇旅途中出现意外事故，承办方有义务和责任为客人协助解决
                        相关问题，但不负事故责任和经济赔偿，如产生赔偿将按保险公司规定赔偿。如遇
                        人力不可抗拒因素所产生的费用由客人自理，如塌方、自然灾害等
                        2、游客必须身体健康，游程中应遵守纪律，发扬团结互助的精神，必须听从领队
                        的劝说不可擅自行动，否则后果自负。
                        3、请自备好相机、胶卷、防晒霜，爱好摄影的注意照看相关器材。
                        4、自驾车请保持在高速公路上的车距，行驶中望车主自觉遵守相关交通规则，不随
                        意超车，严禁在弯道处停车、听从领队安排协调。
                        5、长时间在户外活动，请戴上太阳镜，涂抹防晒霜以护肤；爱护环境，安全第一，
                        全部垃圾带出景区。
                        </p>
                       
                       </div>


                        </div>
                       
                        
                    </div>
                     <div class="tese">
                             <hr>
                            <p>领队介绍</p>
                    </div>
                    <div class="leader">
                        <router-link to="Leader">
                         <div class="leader-box">
                             <p>中国自驾游联盟南京站</p><span> <i class="iconfont icon-youjiantou"></i></span>
                         </div>
                        
                         <div class="dog-logo">
                             <img src="../assets/logo1.png" alt=""><p>自2005年开始，南京首家专业自驾旅游公司--“中国自驾游联盟”，本着以城市
                                为中心，......
                                </p>
                         </div>
                         </router-link>
                    </div>
                     <div class="tese">
                             <hr>
                            <p>用户评论</p>
                    </div>
                    <div class="comments">
                        <div class="comment-list">
                            <p>
                            <span>综合评价: <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></span>
                            <span>15人出游</span>
                            <span>2条评论</span>
                            </p>
                        </div>
                        <div class="comment-box">
                            <p class="first">
                                <span class="topic"><img src="../assets/topic.png" alt="">E223685</span>
                                <span>综合评价: <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></span>
                                <span>2015-12-21</span>
                            </p>

                            <div class="ph">
                               <p> 18号就结束行程了，现在才来评价，总的来说还是不错的</p>
                                <p>行程安排：满意</p>
                                <p>住宿餐食：满意</p>
                                <p>旅行交通：满意</p>
                            </div>
                            <div class="comment-img">
                                  <img :style="{marginRight:5+'px',width:0.6+'rem'}" src="../assets/comment.png" alt=""  >
                             <img  :style="{marginRight:5+'px',width:0.6+'rem'}" src="../assets/comment.png" alt="">
                            </div>
                          
                        </div>
                         <div class="comment-box">
                            <p class="first">
                                <span class="topic"><img src="../assets/topic.png" alt="">E223685</span>
                                <span>综合评价: <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></span>
                                <span>2015-12-21</span>
                            </p>

                            <div class="ph">
                               <p> 总体评论给90分！双十一活动的时候定的，价格很便宜，还担心会不会住宿太偏僻。
                                结果还好，第一天在水原这个地方，房间是公寓。周围很多小商店和酒吧，可以不用
                                非要在第一天行程的汗蒸那里吃饭，这点给大家点建议，后三晚在加阳的怀旧酒店。</p>
                                <p>
                                行程安排：行程安排总体满意，第二天的购物关键的重点在于华克山庄，只有60分
                                钟，那里虽然小，折扣真的便宜。</p>
                                <p>
                                住宿餐食：交通基本我们是早晨地铁出，晚上打车回。首尔打车还可以吧，不太赌。</p>
                               
                            </div>
                            <div class="comment-img">
                                  <img :style="{marginRight:5+'px',width:0.6+'rem'}" src="../assets/comment.png" alt=""  >
                             <img  :style="{marginRight:5+'px',width:0.6+'rem'}" src="../assets/comment.png" alt="">
                            </div>
                          
                        </div>
                        <div class="reply">
                            <p :style="{color:'#ec886a'}">爱自驾客服的回复:</p>

                            <p>尊敬的爱自驾会员，给您立减400这个订单之后，此特惠房型实际您成功预定的此
                            客栈只收了您75元/晚，您可以仔细的对比下的，感谢您对爱自驾网的关注与支持，
                            欢迎下次预订4007-999-999，谢谢！祝您愉快！</p>
                        </div>
                    </div>
                   
                  
                 </div>
            </div>
           
            <footer>
                <p >           
                    <span> <i class="iconfont icon-xin"  ></i></span><br>
                    <span >收藏</span>          
                </p>
                <p class="middle">
                 <span> <i class="iconfont icon-icon_dianhua" ></i></span><br/><span >电话咨询</span>
                   </p>
               <p class="apply"> <router-link to='/Apply'>我要报名</router-link></p>
                
            </footer>
    
 
  </div>

</template>

<script>

import Vue from 'vue'
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo, options);
let options = { 
container: "#body", 
  duration: 500,
    easing: "ease",
     offset: 0, 
       force: true, 
         cancelable: true,  
         onStart: false, 
          onDone: false,  
          onCancel: false,
            x: false,
              y: true};
export default {
     name:'detials',
    
    methods:{
          change(n){
           this.$store.commit('skipColor',n);
        },
        goBack(){
             this.$router.back()
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
     div.pic{
         position: relative;
     }
     div.pic p{
       
         position: absolute;
         bottom: 0px;
         left: 0px;
         color: white;
         font-size: 14px;
         background-color: rgba(0,0,0,0.5);
         padding: 5px 0.2rem;
     }
     div.pic img{
         width: 100%;
     }
     div.small-wrap{
         background-color: #e5e5e5;
     }
     div.first{
         background-color: white;
         display: flex;
         justify-content: space-between;
         padding: 0.15rem 0.2rem;
         align-items: center;
         margin-bottom: 0.2rem;
     }
     div.first .left{
         font-size: 16px;
     }
      div.first .right .icon-fenxiang{
           font-size:30px;
           color: #e5e5e5;
      }
     div.first .right{
         
        border-left:1px solid #e5e5e5;
        padding-left: 0.1rem;
     }
     div.date{
         display: flex;
         justify-content: space-between;
         background-color: white;
         margin-left: 0.1rem;
         margin-right: 0.1rem;
         border: 1px solid white;
         border-radius: 5px;
         padding: 0.1rem;
        margin-bottom: 0.2rem;
        align-items: center;
     }
     .icon-youjiantou{
            font-size:26px;
           color: #e5e5e5;
     }
      div.date p{
          font-size: 16px;
          margin-bottom: 6px;
      }
      div.date span{
          font-size: 12px;
          border: 1px solid #e5e5e5 ;
          padding: 4px;
        
      }
    
      div.top{
          width: 100%;
          background-color: white;
          padding: 0.2rem 0;
      }
       div.top p{
           display: flex;
           justify-content: space-around;
           border-bottom: 1px solid #e5e5e5;
         
       }
      div.top p span{
          font-weight: bold;
          display: inline-block;
            padding-bottom: 8px ;
            padding-left:20px;
           padding-right:20px;
      }
      .active{
             border-bottom: 1px solid #50bbdb;
      }
      div.tese {
          position: relative;
          background-color: #f5f5f5;
          padding:3px 0 ;
          text-align: center;
      }
      div.tese p{
          position: absolute;  
          background-color: #f5f5f5;
          width: 60px;
          left: 50%;
          margin-left: -30px;
          top:3px
      }
      div.travelling{
          background-color: white;
          padding: 0.2rem;
      }
      div.travelling p{
           display: flex;
          justify-content: flex-start;
          margin-bottom: 4px;
      }
       div.travelling  .front{
        display: inline-block;
        width: 0.8rem;
        font-weight: bold;
       }
        div.travelling span:last-child{
            display: inline-block;
            width: 2.7rem;
        }
         div.travelling p.last{
             margin-bottom:16px;
         }
         div.travelling img,div.journey img{
             width: 100%;
         }
         div.journey img.up{
             margin-top: 10px;
             margin-bottom: 10px;
         }
          div.journey img.down{
                margin-bottom: 10px;
          }
         div.travelling img.last{
              margin-top: 10px;
         }
         div.grey{
             background-color: #d4d4d4;
             height: 14px;
         }
         div.journey{
             margin-top: 14px;
             padding-left: 10px;
         }
         div.journey h3{
             border-bottom:  1px solid #50bbdb;
             padding-bottom: 10px;
             margin-bottom: 10px;
         }
         div.journey p.food{
                 border-bottom:  1px dotted #d4d4d4;
                  padding-bottom: 10px;
                   margin-bottom: 10px;
         }
          div.journey p.ph{
              line-height: 20px;
          }
         div.part-two{
             background-color: white;            
             padding: 14px 20px 0 20px;
             
             
         }
         div.text{
             padding: 0.2rem;
             background-color: white; 
         }
         div.leader{
             background-color: white;
             padding: 0 0.2rem;
         }
          div.leader p{
              color: black;
          }
         div.leader .leader-box{
             border-bottom: 1px solid #d4d4d4;
             padding-bottom: 0.02rem ;
             display: flex;
             justify-content: space-between;
             align-items: center;
         }
         div.dog-logo img{
             width: 1rem;
             margin-right: 4px;
         }
         div.dog-logo{
             margin-top: 10px;
             display: flex;
             justify-content: space-between;
             align-items: center;
            padding-bottom: 10px;
         }
         .comments{
               background-color: white;
         }
        .comments div.comment-list{
           
            padding: 0.2rem;
            background-color: white;
            border-bottom: 1px solid #d2d2d2;
            margin-bottom: 0.2rem;
        }
        div.comment-list p{
             display: flex;
            justify-content: space-around;
           align-items: center;
        }
        .icon-xingxing{
            color: #ffde2c;
            font-size: 14px;
        }
        div.comment-list p span:first{
            vertical-align: middle;
        }
        div.comment-box{
            padding:0 0.2rem 0.2rem 0.2rem;
            background-color: white;
           
        }
        div.comment-box p.first{
               display: flex;
            justify-content: space-around;
            align-items: center;
             border-bottom: 1px dotted #d2d2d2;
             padding-bottom: 8px;
             margin-bottom: 8px;
        }
        p.first img{
            width: 0.4rem;
            margin-right: 4px;
        }
        span.topic{
            display: flex;
             align-items: center;
        }
        div.ph p{
            line-height: 20px;
        }
         div.comment-img{
             margin-top:10px;
         }
         div.reply{
             background-color: #f4f4f4;
             padding: 0.2rem;
             margin-bottom: 0.2rem;  
         }
         footer{
                white-space: pre-line;
             border-top: 1px solid #f4f4f4;
             display: flex;
             justify-content: space-between;
               box-sizing: border-box;
         }
          footer p{
             width: 25%;
            color: black;
          }
          footer .apply a{
               color: white;
          } 
         footer .apply{
             background-color: #50bbdb;
             color: white;
             text-align: center;
             line-height: 0.6rem;
             width: 50%;
         }
         footer .middle{
             border-left:   1px solid #cccccc;
            border-right:   1px solid #cccccc; 
         }
         footer p {
          
             display: flex;
             align-items: center;
            justify-content: center; 
        
         }
      

      
</style>