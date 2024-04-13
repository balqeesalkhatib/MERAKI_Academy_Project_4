import React, { useContext, useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../App';
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";
const UpdateProduct = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const { token, setToken } = useContext(AppContext);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState("");
    let user;
  if (token) {
    user = jwtDecode(token).userId;
  }
     return (
    <>
    <br />
    <h3>UpdateProduct</h3>
    <br />
    
    <input placeholder='Set new name' type='text' className="w-75"  onChange={(e) => {
          setName(e.target.value);
        }}/><br /><br />
        <input
          placeholder="Set new description"
          type="text"
          className="w-75"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          placeholder="Set new price "
          type="number"
          className="w-75"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br /><br />
        <input
          placeholder="Set new image URL "
          type="text"
          className="w-75"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <Button variant="success"
        onClick={()=>{
            axios.put(`http://localhost:5000/category/product/${id}`,{ name, image, price, description ,user}, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }).then((res)=>{
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Done ^_^",
                  showConfirmButton: false,
                  timer: 1500
                });
                setError(res.data.message);
              }) .catch((err) => {
                setError(err.response.data.message);
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: err.response.data.message,
                })
              });
        }}>Update</Button>{' '}
        
    </>
  )
}

export default UpdateProduct