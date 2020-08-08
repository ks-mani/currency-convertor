import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pro.exchangerate-api.com/v6/1b5133bdee95b6aff82195ec/latest/',
    timeout: 10000
});

export default instance;