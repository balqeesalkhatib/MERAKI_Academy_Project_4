import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { AppContext } from "../App";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
const Login = () => {
  const { token, setToken } = useContext(AppContext);
  const [email, setEmail] = useState("guest@gmail.com");
  const [password, setPassword] = useState("gest123");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const loginFun = () => {
    console.log(email, password);
    axios
      .post("http://localhost:5000/users/login", { email, password })
      .then((res) => {
        setMessage(res.data.message);
        setToken(res.data.token);
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
  };
  return (
    <div>
      <br />
      <br />
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      <br /> <br />
      <Button
        variant="success"
        onClick={() => {
          loginFun();
        }}
      >
        Login
      </Button>{" "}
      <Button
        onClick={() => {
          loginFun();
        }}
      >
        Guest Account
      </Button>
    </div>
  );
};

export default Login;
// guest@gmail.com
// gest123
