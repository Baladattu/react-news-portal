import axios from 'axios';

const API_KEY = '7898009203c444a3ac0f25f5fb419344';
const BASE_URL = 'https://newsapi.org/v2';

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    },
});

export default apiClient;