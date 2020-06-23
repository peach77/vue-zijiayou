<template>
  <div id="app">
       <router-view>
        <MainPage1/>
       </router-view>
  
  
   
  </div>
</template>

<script>


import MainPage1 from './components/MainPage1.vue'
export default {
  name: 'App',
  components: {
    MainPage1
  },
  



}
</script>

<style>
   @import "./assets/css/icon/iconfont.css";
   @import './assets/css/icon/index.css';
  
   #app{
     display: flex;
     width: 100%; 
     height: 100vh;
     box-sizing: border-box;
   }
</style>
