import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { AppContext } from "../App";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
const Login = () => {
  const { token, setToken } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  return (
    <div>
      <br />
      <br />
      <input
        placeholder="Email"
        type="email"
        className="w-75"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br /> <br />
      <input
        placeholder="Password"
        type="password"
        className="w-75"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {/* <button 
        onClick={()=>{
          axios.post('http://localhost:5000/users/login',{email,password}) .then((res) => {
            setMessage(res.data.message);
            setToken(res.data.token)
          })
          .catch((err) => {
            setMessage(err.response.data.message);
          });
        }}>Login</button> */}
      <br /> <br />
      <Button
        variant="success"
        onClick={() => {
          axios
            .post("http://localhost:5000/users/login", { email, password })
            .then((res) => {
              setMessage(res.data.message);
              setToken(res.data.token);
            })
            .catch((err) => {
              setError(err.response.data.message);
            });
            if(error){
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error,
              })
            }
            if(message){
              Swal.fire({
                position: "center",
                icon: "success",
                title: message,
                showConfirmButton: false,
                timer: 500
              });
            }
        }}
      >
        Login
      </Button>{" "}
      
      
    </div>
  );
};

export default Login;
