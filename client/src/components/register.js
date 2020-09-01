import React,{useState} from 'react'
import {connect} from 'react-redux';
import {register} from './../actions/auth'

const Register=({register})=>{
    const [email,setemail]=useState("email")
    const [pass,setpass]=useState("Password")
    const [confirmpass,setcpass]=useState("Confirm PAssword")
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
        <h1>Register New User</h1>
        <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}/><br/>
        <input type="text" value={pass} onChange={(e)=>setpass(e.target.value)}/><br/>
        <input type="text" value={confirmpass} onChange={checkpass}/><br/>
        <button onClick={()=>register(email,pass)}>Register</button>
        {passtext}
        </>
    )
}

const mapStateToProps=state=>({
    
})
export default connect(mapStateToProps,{register}) (Register)