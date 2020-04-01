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
        return (await axios.post('', data)).data
    },
    async SCheckCode(data) {
        return (await axios.post('', data)).data
    },
    async Tregist(data) {
        return (await axios.post('', data)).data
    },
    async TgetVerify(data) {
        return (await axios.post('', data)).data
    },
    async TCheckCode(data) {
        return (await axios.post('', data)).data
    },

    //学生
    async Schangepwd(data) {
        return (await axios.post('', data)).data;
    },
    async SchangeInfo(data) {
        return (await axios.post('', data)).data;
    },


    //老师
    async Tchangepwd(data) {
        return (await axios.post('', data)).data;
    },
    async TchangeInfo(data) {
        return (await axios.post('', data)).data;
    },
    async submit(data){
        return (await axios.post('',data)).data;
    }
}

export default Api;