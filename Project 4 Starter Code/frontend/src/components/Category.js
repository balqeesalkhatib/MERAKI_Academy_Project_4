import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Swal from "sweetalert2";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
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
      <br />
      <p>{error}</p>
      {/* {id.length && console.log(id)} */}
      {category.length &&
        category.map((elem, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                if (token) {
                  navigate(`/product/${elem._id}`);
                } else {
                  // setError('You have to login')

                  Swal.fire({
                    icon: "error",
                    title: "Oops! You got an error!",
                    text: "Warning !    You have to login.",
                  });
                }
              }}
              className="modal show"
              style={{ display: "block", position: "initial" }}
            >
              {/* <Container>
              <Row>
              <Col  >
                
                {elem.name}
              <Image src={elem.image} />
              {elem.description}
                
              </Col>
                </Row> 
              </Container> */}

              
              <Modal.Dialog>
                <Modal.Header>
                  <Modal.Title>{elem.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Image src={elem.image} />
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
    </>
  );
};

export default Category;
