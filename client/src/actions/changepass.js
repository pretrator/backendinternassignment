import axios from "axios"
import types from "./types"

export const changepass=(pass)=>async (dispatch,getState)=>{
    const data={
        newpass:pass
    }
    const config={
        headers:{
            "authorization":"bearer "+getState().auth.token
        }
    }
    const token=await axios.post("/loggedin/changepass",data,config).then((res)=>{
        dispatch({
            type:types.PASSWORD_CHANGED,
        })
    })
    .catch(()=>{
        new Noty({
            text: 'Password Changed Failed'
        }).show();
        dispatch({
            type:types.PASSWORD_CHANGED_ERROR,
            payload:{
                msg:"Password changed Failed"
            }
        })
    })
    
}

export const forgotpassword=(email)=>async (dispatch)=>{

    const data={
        email
    }

    const token=await axios.post("/forgotpass",data).then((res)=>{
        new Noty({
            text: 'Password Changed Failed'
        }).show();
        dispatch({
            type:types.FORGOTPASSWORD,
            payload:{msg:res.data}
        })
    })
    .catch(()=>{
        dispatch({
            type:types.PASSWORD_CHANGED_ERROR,
            payload:{
                msg:"Password changed Failed"
            }
        })
    })
    
}