import axios from 'axios';

const BASE_URL = 'http://localhost:9090';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
