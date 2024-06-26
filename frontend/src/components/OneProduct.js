import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
const OneProduct = () => {
  let { id } = useParams();
  const { token, setToken } = useContext(AppContext);
  const [oneProduct, setOneProduct] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://meraki-academy-project-4-1.onrender.com/category/product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOneProduct(res.data.result);
        console.log(oneProduct);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }, []);
  return (
    <>
      {oneProduct && (
        <Container >
          <br />
          <br />
          <br />
          <h4>{oneProduct.name}</h4>
          <br />
          <Image src={oneProduct.image} thumbnail />
          <br />
          <br />
          <p>Description: {oneProduct.description}</p>{" "}
          <p>Price: {oneProduct.price} $</p>
        </Container>
      )}
      <p>{error}</p>
      <Button
        variant="success"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>{" "}
    </>
  );
};

export default OneProduct;
