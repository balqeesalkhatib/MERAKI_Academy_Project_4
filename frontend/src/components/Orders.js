import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../App";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Orders = () => {
  const [error, setError] = useState("");
  const { token, setToken } = useContext(AppContext);
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (token){
      axios
      .get("https://meraki-academy-project-4-1.onrender.com/order/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOrder(res.data.result);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
    }
    else{
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "You have to login first",
      })
    }
  
  }, []);
  return (
    <>
    <br/>
          <h2>Orders</h2>
      <br/>
      {order &&
        <div className="order">
          {order.map((one, i) => {
          return (
            <Card key={i}>
              <Card.Body>
                <Card.Title>{one.status}</Card.Title>
                <Card.Title>{one.date}</Card.Title>
                <Image src={one.product} roundedCircle />
              </Card.Body>
            </Card>
          );
        })}
          </div>}
      <br /> <br />
      <Button variant="success"
        onClick={() => {
          navigate("/my");
        }}
      >
        My orders
      </Button>{" "}{" "}
      <Button
        variant="dark"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>{" "}
      <br />
      <br/>
    </>
  );
};

export default Orders;
