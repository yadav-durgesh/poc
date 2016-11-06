import axios from 'axios';

axios.defaults.baseURL = process.env.PORT || 'http://localhost:8080/';

export default axios;
