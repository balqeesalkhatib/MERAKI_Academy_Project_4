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
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/category")
      .then((res) => {
        setCategory(res.data.result);
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
          <select>
            {" "}
            {category.length &&
              category.map((elem, i) => {
                return <option id={elem._id}key={i}>{elem.name}</option>;
              })}
          </select>
          {console.log(document.getElementById("660943201dc1cf8c46c58e0f"))}
          <br />
          <Button
            variant="primary"
            ////id should be the id of chosen option dropdown list
            // onClick={() => {
            //   axios.post(`http://localhost:5000/category/${id}/product`,{name,image,price,description,categoryId}, {
            //     headers: {
            //       Authorization: `Bearer ${token}`,
            //     },
            //   }).then((res) => {
            //     setError(res.data.result);
            //   })
            //   .catch((err) => {
            //     setError(err.response.data.message);
            //   });
            // }}
          >
            ADD
          </Button>
        </Card.Body>
      </Card>

      {/* <Link to={'/product'}>Products</Link> */}
    </>
  );
};

export default Home;
