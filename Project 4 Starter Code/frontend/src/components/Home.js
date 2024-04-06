import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
    return (
    <>
      <div>Home</div>
      <Button size="lg" onClick={()=>{
        navigate('/addProduct')
      }}>Add Product</Button>
<br/>
<br/>
<br/>
<Button variant="success" size="lg" onClick={()=>{
  navigate("/addOrder")
}}>Add Order</Button>{' '}
<br/>
<br/>
<br/>
<Button variant="success" size="lg" onClick={()=>{
  navigate("/orders")
}}>Show all Orders</Button>{' '}
      {/* remove button add cards with images*/}
    </>
  );
};

export default Home;
