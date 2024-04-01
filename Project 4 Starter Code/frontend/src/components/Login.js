import axios from 'axios';
import React from 'react'
import { useState } from 'react';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
        <input placeholder='Email' type='email'  onChange={(e) => {
          setEmail(e.target.value);
        }}/>
        <input placeholder='Password' type='password'  onChange={(e) => {
          setPassword(e.target.value);
        }}/>
        <button 
        onClick={()=>{
          axios.post('http://localhost:5000/users/login',{email,password}) .then((res) => {
            setMessage(res.data.message);
          })
          .catch((err) => {
            setMessage(err.response.data.message);
          });
        }}>Login</button>
        <p>{message}</p>
    </div>
  )
}

export default Login