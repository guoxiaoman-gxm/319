import axios from 'axios'

axios.defaults.withCreadentials = true;

const Teacher = {
    async Tchangepwd(data) {
        return (await axios.post('', data)).data;
    },
}