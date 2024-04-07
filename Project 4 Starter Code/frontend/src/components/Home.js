import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { AppContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <br/>
      <Card >
        <Card.Body>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAC9U9LdXAhoLsIHu8e2bzgQrLWRU0dhfgvA&s"/>
          <Card.Title>Add Products</Card.Title>
          <Card.Text>You can add any product you want.</Card.Text>
          <Button
            variant="success"
            onClick={() => {
              navigate("/addProduct");
            }}
          >
            Add
          </Button>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpytt7kcee8RxDY-gOBIm5RhHOdp2lZKyug&s"/>
          <Card.Title>Add Orders</Card.Title>
          <Card.Text>You can add any order you want to rent, sell, or exchange.</Card.Text>
          <Button
            variant="success"
            onClick={() => {
              navigate("/addOrder");
            }}
          >
            Add 
          </Button>{" "}
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Image src="data:image/jpeg;base64,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"/>
          <Card.Title>All Orders</Card.Title>
          <Card.Text>You can view all orders here, but you have to login first.</Card.Text>
          <Button
            variant="success"
            onClick={() => {
              navigate("/orders");
            }}
          >
            Show all Orders
          </Button>{" "}
        </Card.Body>
      </Card>
      <br/>
      <Button
        variant="dark"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>{" "}
    
      {/* remove button add cards with images*/}
    </>
  );
};

export default Home;
