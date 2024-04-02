import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";
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
  const getById = (id) => {
    console.log(id);
  };
  return (
    <>
      <div>====Categories====</div>
      {/* {id.length && console.log(id)} */}
      {category.length &&
        category.map((elem, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                axios
                  .get(`http://localhost:5000/category/${elem._id}/product`, {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  })
                  .then((res) => {
                    console.log(res.data.result);
                    setMessage(res.data.result);
                  })
                  .catch((err) => {
                    setError(err.response.data.message);
                  });
              }}
            >
              <h2>{elem.name}</h2> <p>{elem.description}</p>
            </div>
          );
        })}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <p>{error}</p>
    </>
  );
};

export default Category;

