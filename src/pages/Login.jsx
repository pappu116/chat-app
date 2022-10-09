import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
  const [err,setErr] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    try {   
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
   } catch (error) {
    setErr(true)
   }
   



  }
  return (
    <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Pappu Chat</span>
          <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
              <input type="email" name="" id=""  placeholder='Email'/>
              <input type="password" name="" id=""  placeholder='Password'/>
              
              <button>Sign in</button> 
              {err && <span>Opp's Something Went Wrong!</span>}
            </form>
            <p>You Don't have An Account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login