import axios from 'axios'

axios.defaults.withCreadentials = true;

const User={
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
    async Tregist(data) {
        return (await axios.post('', data)).data
    },
    async TgetVerify(data) {
        return (await axios.post('', data)).data
    },
    async SCheckCode(data) {
        return (await axios.post('', data)).data
    },
    async TCheckCode(data) {
        return (await axios.post('', data)).data
    },

}

export default User;