import axios from 'axios'

axios.defaults.withCreadentials = true;

const Teacher = {
    async Tchangepwd(data) {
        return (await axios.post('', data)).data;
    },
    async TeacherGetTitle() {
        return (await axios.get('/api/teacher/title')).data;
    },
}
