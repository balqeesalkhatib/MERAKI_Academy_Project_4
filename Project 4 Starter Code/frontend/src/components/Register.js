import React from "react";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <input
        placeholder="First Name"
        type="text"
        onChange={(e) => {
          setFirst(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Last Name"
        type="text"
        onChange={(e) => {
          setLast(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Country"
        type="text"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Email"
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
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
      </button>
      <p>{message}</p>
    </div>
  );
};

export default Register;
