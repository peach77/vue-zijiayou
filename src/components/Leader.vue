<template>
  <div class="wrap" >
     <header>
        <div class="box" v-on:click='goBack'>
        <i class="iconfont icon-ico_leftarrow"></i></div>
          <p>领队介绍</p>
     </header>
     <div class="top">
      <img src="../assets/logo1.png" alt="">
      <p>   中国自驾游联盟南京站</p>
     </div>
     <div class="bottom">
      <p>自2005年开始，南京首家专业自驾车旅游公司--“中国自驾游联盟”，本着以城
市为中心，以旅行社为龙头，自驾游自助游为纽带的发展宗旨，通过强劲发展，现
已覆盖全国20多个省200多个城市，总部设在南京，在“专业保障，旅游保险，特色
活动，媒体支撑”的指导思想指引下平均年组织车友实施自驾游旅游活动百余次，
参加人员达数万人！近年来，我们策划与服务的自驾游车队达400余个参加车辆超过
2000辆，参加的车友近十万多人次！我们的行程遍布华南、华中、华北、西北、西南
20余省、区，并多次成功举办主题自驾活动，同时在尝试开辟国外自驾游市场，引导
及推动着中国自驾游的方向与潮流，赢得了广大媒体与各路车会的关注与信任，成为
本地区自驾最具活力、最具经验、最具规模、最具口碑的专业机构。
</p>
     </div>
    
                     
  </div>

</template>

<script>

export default {
  name:'leader',
 methods: {
   goBack() {
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
    .icon-ico_leftarrow{
        color: white;
        font-size: 0.2rem;
    }
   
     header{
        display: flex;
        flex-wrap: nowrap;
        background-color: #50bbdb;
        justify-content: space-between;
        padding: 0.21rem 1.6rem 0.21rem 0.2rem;
        align-items: center;
    }
     header p{
         font-size:20px;
         color: white;
     }
     div.top{
       display: flex;
       justify-content: flex-start;
       padding: 0.2rem 0.4rem;
       align-items: center;
     }
     div.top img{
       margin-right: 10px;
     }
     div.top p{
       font-size: 18px;
     }
     div.bottom{
         padding:0 0.4rem 0.2rem 0.4rem;
         padding-top: 0;
     }
     div.bottom p{
       border: 1px solid #cac6c6;
       padding:10px 6px;
       line-height: 22px;
     }
</style>>

