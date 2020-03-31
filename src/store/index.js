import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //全局状态
  state: {
    //全局学生信息
    stuId:'',
    StuPassword:'',
    stuName:'',
    stuClass:'',
    stuSex:'',
    stuPhone:'',

    tId:'',
    TPassword:'',
    tName:'',
    tCollege:'',
  },
  //改变全局状态
  mutations: {
    SET_STUINFO(state,StuInfo){
      state.stuId = StuInfo.stuId,
          state.StuPassword = StuInfo.stuPassword,
          state.stuName = StuInfo.stuName,
          state.stuSex = StuInfo.stuSex,
          state.stuPhone = StuInfo.stuPhone;
    },
    SET_TEACHERINFO(state,TeacherInfo){
      state.tId = TeacherInfo.tId,
          state.TPassword = TeacherInfo.tPassword;
      state.tName = TeacherInfo.tName;
      state.tCollege = TeacherInfo.tCollege;
    },
    SET_STUPASSWORD(state,stuPassword)
    {
      state.StuPassword = stuPassword
    },
    SET_TPASSWORD(state,tPassword)
    {
      state.TPassword = tPassword
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
