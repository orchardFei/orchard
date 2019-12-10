import axios from 'axios';

const instance =axios.create({
    baseURL:'http://localhost:3000',
    timeout:5000,
})


export const get = url => instance.get(url);

export const post = (url, data)=>instance.post(url,data)