import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux"
import {changepass} from "./../actions/changepass"
import {logout} from "./../actions/auth"

const Dashboard=({islogin,changepass,logout})=>{
    const [pass,setpass]=useState("")
    if(!islogin){
        console.log("Aggey jana h")
        return <Redirect to="/" />
    }
    return (
        <>
        <div onClick={()=>logout()}>Sign Out</div>
        <input type="text" onChange={(e)=>setpass(e.target.value)}/><br/>
        <button onClick={()=>changepass(pass)}>Change Password</button>
        </>
    )
}

const mapStateToProps=state=>({
    islogin:state.auth.loggedin
})
export default connect(mapStateToProps,{changepass,logout}) (Dashboard)