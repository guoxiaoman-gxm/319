import axios from 'axios'

axios.defaults.withCreadentials = true;

const Teacher = {
    //修改密码
    async Tchangepwd(data) {
        return (await axios.post('/teacher/password/submit', data)).data;
    },
    //修改个人信息
    async TchangeInfo(data) {
        return (await axios.post('/teacher/info/save', data)).data;
    },
    //增加题目信息
    async submit(data){
        return (await axios.post('/teacher/title/add',data)).data;
    },
    //修改题目信息
    async edit(data) {
        return (await axios.post('/teacher/title/update', data)).data;
    },
    //删除题目
    async removeTitle(data) {
        return (await axios.post('/teacher/train/delete', data)).data;
    },
    //修改密码——检查原密码是否正确
    async checkPasssword(data) {
        return (await axios.post('/teacher/password/update', data)).data;
    },
    //老师获得所有已发布信息
    async TeacherGetTitle(){
        return (await axios.get('/teacher/train/search')).data;
    },
    //通过实训编号获得信息
    async getTitle(data){
        return (await axios.post('/teacher/title/search',data)).data;
    }
}

export default Teacher;