import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
const Products = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { token, setToken } = useContext(AppContext);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  let user1;
  if (token) {
    user1 = jwtDecode(token).userId;
  }

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
                <br />
                <br />
                <Button
                  variant="danger"
                  onClick={() => {
                    axios
                      .delete(
                        `http://localhost:5000/category/product/${elem._id}`,
                        {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        }
                      )
                      .then((result) => {
                        setProduct(
                          product.filter((one, i) => {
                            return one._id !== elem._id;
                          })
                        );
                      })
                      .catch((err) => {
                        setError(err.response.data.message);
                      });
                  }}
                >
                  Delete
                </Button>{" "}
                <Button
                  variant="secondary"
                  onClick={() => {
                    if (user1 === elem.user) {navigate(`/update/${elem._id}`);}
                    else{
                      setError("You are not the user");
                    }
                  }}
                >
                  Update
                </Button>
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
    </>
  );
};

export default Products;
