import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";
import Button from 'react-bootstrap/Button';
const Category = () => {
  const { token, setToken } = useContext(AppContext);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
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
      <div>====Categories====</div>
      {/* {id.length && console.log(id)} */}
      {category.length &&
        category.map((elem, index) => {
          return (
            <div
              key={index}
              onClick={()=>{
                navigate(`/product/${elem._id}`)
              }}
            >
              <h2>{elem.name}</h2> <p>{elem.description}</p>
            </div>
          );
        })}
     
      <Button variant="dark"  onClick={() => {
          navigate(-1);
        }}>Back</Button>{' '}
      <p>{error}</p>
    </>
  );
};

export default Category;

