import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AppContext } from '../App';
import { jwtDecode } from "jwt-decode";
const UpdateOrder = () => {
    let {id}=useParams
    console.log(id);
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    const [product, setProduct] = useState("");
    const { token, setToken } = useContext(AppContext);
    let user=(jwtDecode(token).userId );
              
  return (
    <>
    <div>UpdateOrder</div>
    <Card>
        <Card.Body>
          <Card.Title>Add Order</Card.Title>
          <input
            placeholder="Update Status"
            type="text"
            className="w-75"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
          <br />
          <input
            placeholder="Update Date"
            type="text"
            className="w-75"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <br />
          <input
            placeholder="Update Product URl"
            type="text"
            className="w-75"
            onChange={(e) => {
              setProduct(e.target.value);
            }}
          />
           <br />
          <br />
          <Button>Update</Button>
          </Card.Body>
          </Card>
    </>
  )
}

export default UpdateOrder