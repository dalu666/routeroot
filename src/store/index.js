import Vue from 'vue'
import Vuex from 'vuex'
import { json } from 'body-parser';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rightList:JSON.parse(sessionStorage.getItem('rightList')||'[]'),
    userName:sessionStorage.getItem('userName')
  },
  mutations: {
    setRightList(state,data){
      state.rightList=data;
      sessionStorage.setItem('rightList',JSON.stringify(data))
    },
    setUserName(state,data){
      state.userName=data;
      sessionStorage.setItem('userName',JSON.stringify(data))
    }
  },
  actions: {
  },
  getters: {
  }
})
