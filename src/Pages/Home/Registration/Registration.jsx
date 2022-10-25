import { useState } from "react"
import  "./registration.css"

export default function Registration() {
    const [input,setInput]=useState({"name":"","email":"","password":""})
    const change=(event)=>{
        var name=event.target.name
        var value=event.target.value
        setInput({...input,[name]:value})
        console.log(input);
    }
    console.log(input);
   
  return (
  <>
   <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo">Facebook</h3>
        <span className="loginDesc">
          Connect with friends and the world around you on Facebook.
        </span>
      </div>
      <div className="loginRight">
        <div className="loginBox">
          <input placeholder="Email" className="loginInput" onChange={change} name="email"/>
          <input placeholder="Password" className="loginInput" onChange={change} name="password" />
          <input  className="loginInput" placeholder="mobile number" onChange={change} name="mobilenumber"/>
          <button className="loginButton">Register</button>
          <span className="loginForgot">Forgot Password?</span>
          <button className="loginRegisterButton">
            Create a New Account
          </button>
        </div>
      </div>
    </div>
  </div>
  </>

  )
}
