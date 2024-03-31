import React from "react";
import { useState } from "react";
const Register = () => {
  const [first, setFirst] = useState("");
  const [Last, setLast] = useState("");
  const [Country, setCountry] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <div>
      <input placeholder="First Name" type="text" onClick={(e)=>{
setFirst(e.target.value)
      }}/><br />
      <input placeholder="Last Name" type="text"  onClick={(e)=>{
        setLast(e.target.value)
    }}/><br />
      <input placeholder="Country" type="text"  onClick={(e)=>{
        setCountry(e.target.value)
    }}/><br />
      <input placeholder="Email" type="email"  onClick={(e)=>{
        setEmail(e.target.value)
    }}/><br />
      <input placeholder="Password" type="password"  onClick={(e)=>{
        setPassword(e.target.value)
    }}/><br />
      <button>Register</button>
    </div>
  );
};

export default Register;
