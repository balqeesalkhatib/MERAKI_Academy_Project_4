import React, { useContext, useEffect, useState } from "react";
import Category from "./Category";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AppContext } from "../App";
const Home = () => {
  const { token, setToken } = useContext(AppContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category1, setCategory1] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/category")
      .then((res) => {
        setCategory1(res.data.result);
      })
      .catch((err) => {
        setName(err.response.data.message);
      });
  }, []);
  return (
    <>
      <div>Home</div>
      <Card>
        <Card.Body>
          <Card.Title>Add product</Card.Title>
          <input
            placeholder="Name"
            type="text"
            className="w-75"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <input
            placeholder="Description"
            type="text"
            className="w-75"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />
          <input
            placeholder="Price"
            type="number"
            className="w-75"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <br />
          <input
            placeholder="Image URL "
            type="text"
            className="w-75"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <br />
          category list:
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {" "}
            {category1.length &&
              category1.map((elem, i) => {
                return (
                  <option id={elem._id} key={i} value={elem._id}>
                    {elem.name}
                  </option>
                );
              })}
          </select>
          <br />
          {console.log(category)}
          <Button
            variant="primary"
            onClick={() => {
              axios
                .post(
                  `http://localhost:5000/category/${category}/product`,
                  { name, image, price, description, category },
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                )
                .then((res) => {
                  // setError(res.data.result);
                  setError(res.data.message);
                })
                .catch((err) => {
                  setError(err.response.data.message);
                });
            }}
          >
            ADD
          </Button>
        </Card.Body>
      </Card>
      <p>{error}</p>
      {/* <Link to={'/product'}>Products</Link> */}
    </>
  );
};

export default Home;
