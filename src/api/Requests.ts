import axios from 'axios';

const API = axios.create({ baseURL:'https://blue-journalist-bbrpv.ineuron.app:4000'});

export const getUsers=():Promise<any>=>API.get('/users');

export const getUser=(id:any):Promise<any>=>API.get(`/user/${id}`);

export const createUser=(data:object)=>API.post('/user/create',data);

export const deleteUser=(id:any):Promise<any>=>API.delete(`/user/${id}`);

export const updateUser=(data:object,id:any)=>API.patch(`/user/${id}`,data);



export default API;