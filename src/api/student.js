import axios from 'axios'

axios.defaults.withCreadentials = true;

const Student = {
    async Schangepwd(data) {
        return (await axios.post('', data)).data;
    },
    async SgetVerifyById(data) {
        return (await axios.post('', data)).data;
    },

}