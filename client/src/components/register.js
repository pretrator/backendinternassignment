import React,{useState} from 'react'
import {connect} from 'react-redux';
import {register} from './../actions/auth'

const Register=({register})=>{
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
    const [confirmpass,setcpass]=useState("")
    const [passtext,setpasstext]=useState("")
    const checkpass=(e)=>{
        setcpass(e.target.value)
        if(pass!=e.target.value){
            setpasstext('Password do not match')
        }
        else{
            setpasstext('')
        }
    }

    return (
        <>
        <input type="text" onChange={(e)=>setemail(e.target.value)}/><br/>
        <input type="text" onChange={(e)=>setpass(e.target.value)}/><br/>
        <input type="text" onChange={checkpass}/><br/>
        <button onClick={()=>register(email,pass)}>Register</button>
        {passtext}
        </>
    )
}

const mapStateToProps=state=>({
    
})
export default connect(mapStateToProps,{register}) (Register)