import axios from 'axios'

axios.defaults.withCreadentials = true;

const Teacher = {
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