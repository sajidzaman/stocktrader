import axios from 'axios';

export const HTTP = axios.create({
    baseURL: 'https://stocktrader-7a74a.firebaseio.com/'
});