import axios from 'axios'

axios.defaults.withCreadentials = true;

const User={
    //提交用户登录信息
    async Slogin(data) {
        return (await axios.post('/student/login', data)).data;
    },
    //获取教师信息
    async getTeacher(){
        return (await axios.get('/teacher/info/get')).data;
    },
    //教师登录信息
    async Tlogin(data) {
        return (await axios.post('/teacher/login', data)).data;
    },
    //学生注册提交信息
    async Sregist(data) {
        return (await axios.post('/student/registered', data)).data
    },
    //老师或学生传递邮箱获取验证码
    async getVerify(data) {
        return (await axios.post('/mail/send', data)).data
    },
}

export default User;