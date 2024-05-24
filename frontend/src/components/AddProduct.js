import React, { useContext, useEffect, useState } from "react";
import Category from "./Category";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AppContext } from "../App";
import { jwtDecode } from "jwt-decode";
import Alert from 'react-bootstrap/Alert';
import Swal from "sweetalert2";
const AddProduct = () => {
    const { token, setToken } = useContext(AppContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category1, setCategory1] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://meraki-academy-project-4-1.onrender.com/category")
      .then((res) => {
        setCategory1(res.data.result);
      })
      .catch((err) => {
        setName(err.response.data.message);
      });
  }, []);
  let user;
  if (token) {
    user = jwtDecode(token).userId;
  }
  return (
    <>
    <br /><br />
    <Card>
        <Card.Body>
          <Card.Title>Add product</Card.Title>
          <br />
          <input
            placeholder="Name"
            type="text"
            className="w-75"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br /><br />
          <input
            placeholder="Description"
            type="text"
            className="w-75"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br /><br />
          <input
            placeholder="Price"
            type="number"
            className="w-75"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <br /><br />
          <input
            placeholder="Image URL "
            type="text"
            className="w-75"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <br /><br />
          Category list:{"    "}{" "}
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {" "}
            {category1.length &&
              category1.map((elem, i) => {
                return (
                  <option id={elem._id} key={i} value={elem._id}>
                    {elem.name}
                  </option>
                );
              })}
          </select>
          <br /><br />
         
          <Button
            variant="success"
            onClick={() => {
             if(token){
              axios
              .post(
                `https://meraki-academy-project-4-1.onrender.com/category/${category}/product`,
                { name, image, price, description, category, user },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then((res) => {
                // setError(res.data.result);
                setError(res.data.message);
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: res.data.message,
                  showConfirmButton: false,
                  timer: 1500
                });
              })
              .catch((err) => {
                setError(err.response.data.message);
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: err.response.data.message,
                })
              });
             }
             else {
              setError('You have to login first')
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text:"You have to login first" ,
              })
             }
            }}
          >
            ADD
          </Button>
          <br /><br />
        </Card.Body>
      </Card>
      <br />
      <br />
      <Button
        variant="dark"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>{" "}
     </>
    
  )
}

export default AddProduct