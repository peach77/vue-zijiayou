<template>
  <div class="wrap">
        <header>
                    <div class="box" v-on:click='goBack'><i class="iconfont icon-ico_leftarrow"></i></div>
                    <div class="middle"><p>支付详情</p></div>
                    <div class="box"><router-link to='/'><p>关闭</p></router-link></div>
        </header>
        <body>
            <div class="paysuccess">
                <p> <img  class="down" src="../assets/success.png" alt=""><span>支付成功</span></p>
            </div>
            <div class="name">
                <p><span>游客姓名 </span><span><b>罗小小</b></span></p>
                <p><span>自驾团名称 </span><span>  <b>云南落地自驾行摄之旅</b></span></p>
                <div ></div>
                <p><span>支付方式 </span><span> <b>农业银行-储蓄卡（尾号8718）</b></span></p>
                <p><span>交易订单  </span><span> <b>1224557784656565555555</b></span></p>
                <p><span>交易时间   </span><span> <b> 2015-12-29 18:05:24</b></span></p>
                <div ></div>
                <p><span>支付金额 </span><span> <b> 5928.00</b></span></p>
            </div>
          
        </body>
          <div class="over">
                <p>
                    感谢您订购爱自驾云南落地自驾行摄之旅，爱自驾</p>
                    <p> 预祝您旅途愉快！</p>
            </div>
      <div class="btn">
        <router-link to='./'> <button>返回继续订票</button></router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'success',
    methods: {
       goBack(){
             this.$router.back()
        }
    },
}
</script>

<style  scoped>
 div.wrap{
        width:100%;
        height: 100vh;
      overflow: scroll;
      background-color: #f6f6f6;
    
    }
  
    
 .icon-ico_leftarrow{
        color: white;
        font-size: 0.2rem;
    }
      div.box a{
     color: white;
     text-decoration: none;
    
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
     div.paysuccess{
      display: flex;
      justify-content: center;
     }
      div.paysuccess p{
          padding: 16px;
          color: #50bbdb;
          display: block;
          width: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
      }
    div.paysuccess img{
        width:40px;
    }
     div.name{
         border-top: 1px solid #d1cccc;
         padding:10px;
         font-size: 16px;
     }
      div.name p{
          display: flex;
          justify-content: space-between;
          line-height: 36px;
      }
      div.name div{
         border-top: 1px solid #d1cccc;
      }
      div.over{
         text-align: start;
          margin-top:50px;
          font-size: 14px;
          padding: 20px;
          font-weight: bold;
          line-height: 30px;
      }
        div.btn{
              padding:20px;
        }
      div button{
          font-size: 20px;
          color: #50bbdb;
          border:  1px solid #d1cccc;
          line-height: 40px;
          display: inline-block;
          width: 100%;
          text-align: center;
          box-sizing: border-box;
      }
</style>