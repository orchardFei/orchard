import { get } from "../utils/request";

export const products =()=>get('/api/v1/products')


export const product = id =>get(`/api/v1/products${id}`) 