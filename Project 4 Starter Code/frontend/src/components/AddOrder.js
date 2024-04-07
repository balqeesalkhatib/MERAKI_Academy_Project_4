import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AppContext } from "../App";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const AddOrder = () => {
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [data1, setData1] = useState("");
  const { token, setToken } = useContext(AppContext);
  const [error, setError] = useState("");
  const [product, setProduct] = useState("");
  let user;
  useEffect(()=>{
    if(token){
     user=(jwtDecode(token).userId);
    }
  },[])
 
     return (
    <>
      <div>AddOrder</div>
      <Card>
        <Card.Body>
          <Card.Title>Add Order</Card.Title>
          <input
            placeholder="Status"
            type="text"
            className="w-75"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
          <br />
          <input
            placeholder="Date"
            type="text"
            className="w-75"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <br />
          <input
            placeholder="Product URl"
            type="text"
            className="w-75"
            onChange={(e) => {
              setProduct(e.target.value);
            }}
          />
          <br />
          <br />
          <Button variant="primary" onClick={()=>{
            axios.post(`http://localhost:5000/order/`,{status,date,user,product},{
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }).then((res)=>{
              setError(res.data.message);
              setData1(res.data.result);
            }).catch((err) => {
              setError(err.response.data.message);
            });
          }}>Add</Button>
        </Card.Body>
      </Card>
      {data1 && <><h4>{data1.status}</h4>
      <img src={data1.product}/></>}
      <p>{error}</p>
    </>
  );
};

export default AddOrder;
