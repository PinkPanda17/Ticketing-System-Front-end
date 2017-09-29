import axios from 'axios';

const api= axios.create({
    baseURL: 'http://localhost:9001',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Origin': 'http://localhost:54322/api/users/',
        'Vary': 'Origin',
        'Access-Control-Allow-Credentials': true
    }
})

export default api;