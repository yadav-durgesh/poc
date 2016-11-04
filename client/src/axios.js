import axios from 'axios';
console.log('the process env', process.env);
axios.defaults.baseURL = process.env.PORT || 'http://localhost:8080/';

export default axios;
