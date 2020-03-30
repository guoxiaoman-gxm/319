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
    async Schangepwd(data) {
        return (await axios.post('', data)).data;
    },


    //老师
    async Tchangepwd(data) {
        return (await axios.post('', data)).data;
    },
}

export default Api;