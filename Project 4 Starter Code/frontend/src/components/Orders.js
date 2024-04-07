import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../App";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const [error, setError] = useState("");
  const { token, setToken } = useContext(AppContext);
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/order/", {
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
  }, []);
  return (
    <>
      <div>Orders</div>
      {order &&
        order.map((one, i) => {
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
      <br /> <br />
      <Button
        onClick={() => {
          navigate("/my");
        }}
      >
        My orders
      </Button>
      <Button
        variant="dark"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>{" "}
      <br />
      1.all orders must set in backend then show useEffect done
      <br />
      <br />
      2. button for show my orders get by user id
      <br />
      <br />
      3. delete by id
    </>
  );
};

export default Orders;
