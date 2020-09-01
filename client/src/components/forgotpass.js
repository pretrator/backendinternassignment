import React,{useState} from 'react'
import {connect} from 'react-redux';

const Forgotpass=({forgotpassword,text})=>{
    const [email,setemail]=useState("Provide your email")
    return (
        <>
        <input type="text" onChange={(e)=>setemail(e.target.value)}/>
        <button onClick={()=>forgotpassword(email)}>Next</button><br/>
        <h3>{text}</h3>
        </>
    )
}

const mapStateToProps=state=>({
    text:state.forgotpass.newdata
})
export default connect(mapStateToProps) (Forgotpass)