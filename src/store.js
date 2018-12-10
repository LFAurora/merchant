import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    size:0
  },
  getters:{
    getSize(state){
      return state.size
    }
  },
  mutations:{
    user_msg(state,name){
      state.size = name
    }
  },
  actions:{
    setSize({commit,state},name){
      commit('setSize',name)
    }
  }
})
