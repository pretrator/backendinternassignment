import React,{useState} from 'react'
import {connect} from 'react-redux';
import {login} from './../actions/auth'
import {Redirect,Link} from "react-router-dom"

const Home=({login,islogin})=>{
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
    if(islogin){
        return <Redirect to="/dashboard" />
    }
    return (
        <>
        <div>
        <h1>
            Login Page
        </h1>
        <Link to="/register">Register</Link>
      </div>
        <input type="text" onChange={(e)=>setemail(e.target.value)} /><br/>
        <input type="password" onChange={(e)=>setpass(e.target.value)} />
        <button onClick={()=>login(email,pass)}>Login</button><br/>
        <Link to="/forgotpass">Forgot Password</Link>
        </>
    );
}
const mapStateToProps=state=>({
    islogin:state.auth.loggedin
})
export default connect(mapStateToProps,{login}) (Home)