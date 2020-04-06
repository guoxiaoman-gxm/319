import axios from 'axios'
import student from './student'
import teacher from './teacher'
import user from './user'
axios.defaults.withCredentials = true;

const Api = {
    ...student,
    ...teacher,
    ...user,
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
    async getSmine() {
        return (await axios.get('/student/info/get')).data
    },
    //修改学生信息
    async changeSmine(data) {
        return (await axios.post('/student/info/save', data)).data
    },
    async Schangepwd(data) {
        return (await axios.post('/student/password/submit', data)).data;
    },
    //搜索实训（实训编号或老师姓名）
    async searchTrain(data) {
        return (await axios.post('/student/train/search', data)).data
    },
    //得到实训信息
    async getTrain(){
        return (await axios.get('/student/train/search')).data;
    },
    //进入题目详情页(把实训编号传给后台）
    async postTrainId(data){
        return (await axios.post('/student/title/search'),data).data;
    },
    //获取题目列表
    async getTitles(){
        return (await axios.get('/student/title/search')).data;
    },
    //开始选题
    async chooseTitle(data){
        return (await axios.post('/student/title/ensure'),data).data;
    },
    //申请换题（删除当前题目）
    async changeTitle(data) {
        return (await axios.post('/student/title/change', data)).data
    },
    //获取已选题目
    async getHaveChoosed() {
        return (await axios.get('/student/title/scan')).data
    },
    //查看全部实训
    async getAllTrains() {
        return (await axios.get('/student/train/searchAll')).data
    },

    //老师
    async Tchangepwd(data) {
        return (await axios.post('', data)).data;
    },
    async TeacherGetTitle() {
        return (await axios.get('/api/teacher/title')).data;
    },
}

export default Api;
