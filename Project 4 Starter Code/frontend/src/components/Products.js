import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
const Products = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { token, setToken } = useContext(AppContext);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/category/${id}/product`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProduct(res.data.result);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }, []);
  return (
    <>
      {/* { product.length && console.log(product)} */}
      <br />
      <br />
      <h2>Products</h2>
      {product.length &&
        product.map((elem, index) => {
          return (
            <div key={index}>
              <Container>
                <br />
                <br />
                <br />
                <h4>{elem.category.name}</h4>
                <br />
                <Image
                  src={elem.image}
                  alt={elem.category.name}
                  onClick={() => {
                    navigate(`/${elem._id}`);
                  }}
                />
              </Container>
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
      {/* <div>Create Product</div>
      <select></select> */}
    </>
  );
};

export default Products;
