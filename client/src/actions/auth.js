import axios from "axios"
import types from "./types"
import Noty from 'noty';


export const login=(email,pass)=>async dispatch=>{
    const data={
        email,
        pass
    }
    dispatch({
        type:types.LOGIN_STARTED
    })
    
    const token=await axios.post("/api/login",data).then((res)=>{
        const token=res.data.token
        dispatch({
            type:types.GOT_USER_TOKEN,
            payload:{token}
        })
    })
    .catch(()=>{
        dispatch({
            type:types.LOGIN_ERROR,
            payload:{
                msg:"Login Failed"
            }
        })
    })
    
}

export const register=(email,pass)=>async dispatch=>{
    const data={
        email,
        pass
    }
    const token=await axios.post("/api/register",data).then((res)=>{
        const token=res.data.token
        new Noty({
            text: 'Registration Sucessfull'
        }).show();
    })
    .catch(()=>{
        new Noty({
            text: 'Registration Failed'
        }).show();
        dispatch({
            type:types.LOGIN_ERROR,
            payload:{
                msg:"Login Failed"
            }
        })
    })
    
}

export const logout=()=>dispatch=>{
    dispatch({
        type:types.LOGGED_OUT
    })
}