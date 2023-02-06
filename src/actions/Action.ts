import { AnyAction, Dispatch } from 'redux';
import * as API from '../api/Requests';
import {toast} from 'react-hot-toast'


export const getUsers:any=()=>async(disaptch:Dispatch<AnyAction>)=>{
    disaptch({type:'FETCHING_USER'})
    try {
        const {data}:any=await API.getUsers();
        disaptch({type:'FETCHED_SUCCESS', payload:data.data})
        
    } catch (error) {
        console.log(error);
        disaptch({type:'FETCHING_FAILED', message:error})
    }
}

export const deleteUser:any=(id:any)=>async(dispatch:Dispatch<AnyAction>)=>{
    try {
        const res=await API.deleteUser(id);
        dispatch({type:"DELETE_USER", payload: id})
        toast.error(res.data.message);
    } catch (error) {
        console.log(error);
    }
}


export const updateUser:any=(data:object, id:any)=>async(dispatch:Dispatch<AnyAction>)=>{
    try {
        const res=await API.updateUser(data,id);
        dispatch({type:"UPDATE_USER", payload: res.data, editedId: id})
        
        toast.success(res.data.message)

    } catch (error) {
        console.log(error)
    }
}