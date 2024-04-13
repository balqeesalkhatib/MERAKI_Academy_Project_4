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
        className="w-75"
        onChange={(e) => {
          setFirst(e.target.value);
        }}
      />
      <br />  <br />
      <input
        placeholder="Last Name"
        type="text"
        className="w-75"
        onChange={(e) => {
          setLast(e.target.value);
        }}
      />
      <br />  <br />
      <input
        placeholder="Country"
        type="text"
        className="w-75"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <br />  <br />
      <input
        placeholder="Email"
        type="email"
        className="w-75"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />  <br />
      <input
        placeholder="Password"
        type="password"
        className="w-75"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <br />
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
              Swal.fire({
                position: "center",
                icon: "success",
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              });
            })
            .catch((err) => {
              setError(err.response.data.message);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response.data.message,
              });
            });
        }}
      >
        Register
      </Button>{" "}
      <p></p>
    </div>
  );
};

export default Register;
