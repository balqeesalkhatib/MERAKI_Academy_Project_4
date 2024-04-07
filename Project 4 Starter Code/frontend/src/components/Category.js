import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Home from "./Home"
const Category = () => {
  const { token, setToken } = useContext(AppContext);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
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
      <div>Categories</div>
      {/* {id.length && console.log(id)} */}
      {category.length &&
        category.map((elem, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                navigate(`/product/${elem._id}`);
              }}
              className="modal show"
              style={{ display: "block", position: "initial" }}
            >
              <Modal.Dialog>
                <Modal.Header>
                  <Modal.Title>{elem.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{elem.description}.</p>
                </Modal.Body>
              </Modal.Dialog>
            </div>
          );
        })}
      <Button
        variant="dark"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>{" "}
      <p>{error}</p>
    </>
  );
};

export default Category;
