import axios from 'axios'

axios.defaults.withCreadentials = true;

const Student = {
    //得到学生信息
    async getSmine(data) {
        return (await axios.get('/api/student/info'),data).data
    },
    //修改学生信息
    async changeSmine(data) {
        return (await axios.post('/api/student/info/save', data)).data
    },
    async Schangepwd(data) {
        return (await axios.post('', data)).data;
    },
    //搜索实训（实训编号或老师姓名）
    async search_train(data) {
        return (await axios.post('', data)).data
    },
    //得到实训信息
    async get_train(){
        return (await axios.get('')).data;
    },
    //进入题目详情页
    async post_trainId(data){
        return (await axios.get(''),data).data;
    },
    //开始选题
    async choose_title(data){
        return (await axios.post(''),data).data;
    },
    //申请换题（删除当前题目）
    async change_title(data) {
        return (await axios.post('', data)).data
    },
}
