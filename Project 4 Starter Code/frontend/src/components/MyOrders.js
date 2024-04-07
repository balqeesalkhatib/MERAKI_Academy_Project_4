import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const MyOrders = () => {
  const { token, setToken } = useContext(AppContext);
  const [oneOrder, setOneOrder] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  let id;
  useEffect(() => {
    if (token) {
      id = jwtDecode(token).userId;
    }
    axios
      .get(`http://localhost:5000/order/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOneOrder(res.data.result);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }, []);
  return (
    <>
      <div>MyOrders</div>I should put them in grid
      {oneOrder &&
        oneOrder.map((one, i) => {
          return (
            <div>
              <Card key={i}>
                <Card.Body>
                  <Card.Title>{one.status}</Card.Title>
                  <Card.Title>{one.date}</Card.Title>
                  <Image src={one.product} roundedCircle />
                </Card.Body>
              </Card>
              <Button
                variant="danger"
                onClick={() => {
                  axios
                    .delete(`http://localhost:5000/order/${one._id}`, {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    })
                    .then((result) => {
                      setOneOrder(
                        oneOrder.filter((elem, i) => {
                          return elem._id !== one._id;
                        })
                      );
                    })
                    .catch((err) => {
                      setError(err.response.data.message);
                    });
                }}
              >
                X
              </Button>{" "}
              {console.log(one._id)}
              {/* <Button
              onClick={()=>{
                navigate(`/updateOrder/${one._id}`)
              }}>Update</Button> */}
            </div>
          );
        })}
      <p>{error}</p>
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
  );
};

export default MyOrders;
