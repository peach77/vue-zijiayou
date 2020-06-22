<template>
  <div class="wrap">
   <header>
                    <div class="box" v-on:click='goBack'><i class="iconfont icon-ico_leftarrow"></i></div>
                   <p>选择支付方式</p>
                    
    </header>
    <div class="total">
        <p><b>订单总额：￥5920</b></p>
    </div>
    <div class="pay">
        <div class="bottom-line">
            <p><img src="../assets/zhifubao.png" alt=""><span>支付宝支付</span></p>
            <p class="circle"></p>
        </div>
       
    </div>
     <div class="pay">
        <div class="bottom-line">
            <p>
            <img src="../assets/wechat.png" alt="">
             <span>微信支付</span>
             </p>
            <p class="circle"></p>
        </div>
       
    </div>
     <div class="pay">
        <div class="bottom-line">
            <p><img src="../assets/card.png" alt=""><span>银联支付</span></p>
            <p class="circle"></p>
        </div>
       
    </div>
     <footer>
         <div>
             <p :style="{color:'#f09538'}"><b>总费用￥5920</b></p>
            <p class="blue"><router-link to='/Success'>付款</router-link></p>
         </div>
            
       
        
    </footer>
  </div>
</template>

<script>

export default {
name:'paypage',
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
      background-color: #f6f6f6;
    
    }
  
    
 .icon-ico_leftarrow{
        color: white;
        font-size: 0.2rem;
        margin-right: 60px;
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
        justify-content:space-between;
        padding: 0.21rem 1.2rem 0.21rem 0.2rem;
        align-items: center;
    }
    div.total{
        background-color: white;
        color: #e78a37;
        font-size: 16px;
        padding: 20px;
        margin-bottom: 30px;
    }
    div.pay{
          background-color: white;
           padding:20px 20px 0px 20px;
    }
    div.pay .bottom-line{
      
            padding-bottom: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
    }
    div.pay .circle{
        border: 1px solid #bebdbd;
        border-radius: 50%;
        width: 20px;
        height: 20px;
    }
    div.pay .bottom-line{
        border-bottom: 1px solid #f6f6f6;
    }
 
    div.pay .bottom-line p:first{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    div.pay span{
        font-size: 16px;
        font-weight: bold;
    }
    div.pay img{
        width: 40px;
        margin-right: 6px;
    }
    footer{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
     footer div{
              
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
        }
</style>
