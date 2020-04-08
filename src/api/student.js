import axios from 'axios'

axios.defaults.withCreadentials = true;

const Student = {
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
    //检查原密码是否正确
    async StuCheckPasssword(data) {
        return (await axios.post('/student/password/update', data)).data;
    },
}

export default Student;
