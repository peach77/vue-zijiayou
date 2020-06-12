import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        isActive:true,
        isActiveOne:false
    },
    mutations: {
         changeMainPage(state,n) {
            if(n==='hudong'){
                state.isActive=false,
                state.isActiveOne=true
            }
            else{
                state.isActive=true,
                state.isActiveOne=false
            }
      }
    }
  })
  export default store