import React, { useContext, useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../App';
import Button from "react-bootstrap/Button";
import axios from "axios";
const UpdateProduct = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const { token, setToken } = useContext(AppContext);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState("");
     return (
    <>
    <div>UpdateProduct</div>
    <input placeholder='Set new name' type='text' className="w-75"  onChange={(e) => {
          setName(e.target.value);
        }}/><br />
        <input
          placeholder="Set new description"
          type="text"
          className="w-75"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <input
          placeholder="Set new price "
          type="number"
          className="w-75"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <input
          placeholder="Set new image URL "
          type="text"
          className="w-75"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <br />
        <Button variant="secondary"
        onClick={()=>{
            axios.put(`http://localhost:5000/category/product/${id}`,{ name, image, price, description }, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }).then((res)=>{
                console.log(res.data.message);
                setError(res.data.message);
              }) .catch((err) => {
                setError(err.response.data.message);
              });
        }}>Update</Button>{' '}
        <p>{error}</p>
    </>
  )
}

export default UpdateProduct