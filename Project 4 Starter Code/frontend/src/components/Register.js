import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
const Register = () => {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  return (
    <div>
      <br /> <br />
      <input
        placeholder="First Name"
        type="text"
        className="form-control"
        onChange={(e) => {
          setFirst(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Last Name"
        type="text"
        className="form-control"
        onChange={(e) => {
          setLast(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Country"
        type="text"
        className="form-control"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Email"
        type="email"
        className="form-control"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        className="form-control"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      {/* <button
        onClick={() => {
          axios
            .post("http://localhost:5000/users/register", {
              firstName,
              lastName,
              country,
              password,
              email,
            })
            .then((res) => {
              setMessage(res.data.message);
            })
            .catch((err) => {
              setMessage(err.response.data.message);
            });
        }}
      >
        Register
      </button> */}
      <Button
        variant="success"
        onClick={() => {
          axios
            .post("http://localhost:5000/users/register", {
              firstName,
              lastName,
              country,
              password,
              email,
            })
            .then((res) => {
              setMessage(res.data.message);
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
              timer: 1500
            });
          }
        }}
      >
        Register
      </Button>{" "}
      <p> 




      </p>
      
    </div>
  );
};

export default Register;
