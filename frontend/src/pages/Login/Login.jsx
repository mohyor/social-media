import './Login.css'
import { loginCall } from '../../apiCalls'
import { useContext, useRef } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { CircularProgress } from '@material-ui/core'

export default function Login() {
  const email = useRef()
  const password = useRef()
  const { user, isFetching, error, dispatch } = useContext(AuthContext)

  const handleClick = (e) => {//console.log(email.current.value)
    e.preventDefault()
    loginCall({ email: email.current.value, password: password.current.value }, dispatch)
  } 
  //console.log(user)

  return (
    <div className="login">
      <div className="loginWrapper">
       <div className="loginLeft">
        <h3 className="loginLogo">Connect</h3>
        <span className="loginDesc">Stay Connected to the world.{" "}</span>
       </div>
       <div className="loginRight">
        <form div className="loginBox" onSubmit={handleClick}>
         <input placeholder="Email" type="email" required minLength="6" className="loginInput" ref={email} />
         <input placeholder="Password" type="password" required className="loginInput" ref={password} />
         <button className="loginButton">{isFetching ? <CircularProgress color="inherit" size="20px" /> : "Log In"}</button>
         <span className="loginForgot">Forgot Password?</span>
         <button className="loginRegisterButton">
         {isFetching ? <CircularProgress color="inherit" size="20px" /> : "Create a New Account"}
           
         </button>
        </form>
       </div>
      </div>
    </div>
  );
}
