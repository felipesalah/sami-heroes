import axios from 'axios';

const API_TOKEN = '3712958478774130';

export default axios.create({
    baseURL: `https://superheroapi.com/api/${API_TOKEN}`
});