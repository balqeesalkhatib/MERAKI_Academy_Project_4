import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
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
      <h2>Products</h2>
      {product.length &&
        product.map((elem, index) => {
          console.log(elem.image);
          return (
            <div key={index}>
              <h3>{elem.category.name}</h3>
              <h4>{elem.name}</h4>
              <p>{elem.description}</p> <p>{elem.price}</p>
              <img src={elem.image} alt={elem.category.name} />
            </div>
          );
        })}
      <p>{error}</p>
      <Button variant="dark"  onClick={() => {
          navigate(-1);
        }}>Back</Button>{' '}
      {/* <div>Create Product</div>
      <select></select> */}
    </>
  );
};

export default Products;
