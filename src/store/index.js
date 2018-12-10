import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new  Vuex.Store({
  //共享的组件状态数据
  state:{
    num:0,
    list:[]
  },
  //用来修改state的状态
  //是store中唯一用来修改状态的值
  mutations:{
    INC:(state,payload)=>{
      state.num++
    }
  },
  //用来监听外部组建的动作请求
  //可以执行async操作
  actions:{
    ADD:(store,args)=>{
      //逻辑判断，api
      store.commit('INC',args)
    }
  }
})
