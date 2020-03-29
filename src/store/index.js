import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //全局状态
  state: {
    StuentId:'',
    TeacherId:'',
    nickStuId:'',
    nickTId:'',
  },
  //改变全局状态
  mutations: {
    SET_STUID(state,StuentId)
    {
      state.StuentId = StuentId;
    },
    SET_TID(state,TeacherId)
    {
      state.TeacherId = TeacherId;
    },
    SET_NICKSTUID(state,nickStuId)
    {
      state.nickStuId = nickStuId;
    },
    SET_NICKTID(state,nickTId)
    {
      state.nickTId = nickTId;
    }
  },
  //数据业务逻辑
  actions: {
  },
  modules: {
  },
  //对数据进行加工
  getters:{

  },
})
