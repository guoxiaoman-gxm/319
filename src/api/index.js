import axios from 'axios'
import User from "./user";
import Student from "./student";
import Teacher from "./teacher";

axios.defaults.withCredentials = true;

const Api = {
    //获取用户登录信息
    ...User,

    //学生
    ...Student,

    //老师
    ...Teacher,
}

export default Api;
