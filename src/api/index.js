import axios from 'axios'

axios.defaults.withCredentials = true;

const Api = {
    //获取用户登录信息
    async getStudent(){
        return (await axios.get('')).data;
    },
    async Slogin(data) {
        return (await axios.post('', data)).data;
    },
    async getTeacher(){
        return (await axios.get('')).data;
    },
    async Tlogin(data) {
        return (await axios.post('', data)).data;
    },
    async Sregist(data) {
        return (await axios.post('', data)).data
    },
    async SgetVerify(data) {
        return (await axios.get('', data)).data
    },
    async Tregist(data) {
        return (await axios.post('', data)).data
    },
    async TgetVerify(data) {
        return (await axios.get('', data)).data
    },


    //学生

    //得到学生信息
    async getSmine(data) {
        return (await axios.get('/api/student/info'),data).data
    },
    //修改密码
    async Schangepwd(data) {
        return (await axios.post('', data)).data;
    },
    //搜索实训（实训编号或老师姓名）
    async search_train(data) {
        return (await axios.post('', data)).data
    },
    //得到实训信息
    async get_train(){
        return (await axios.get('api/title/search')).data;
    },
    //开始选题
    async choose_title(){
        return (await axios.post('')).data;
    },
    //申请换题（删除当前题目）
    async change_title(data) {
        return (await axios.post('', data)).data
    },


    //老师
    async Tchangepwd(data) {
        return (await axios.post('', data)).data;
    },
}

export default Api;
