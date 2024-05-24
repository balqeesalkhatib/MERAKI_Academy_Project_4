import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const MyOrders = () => {
  const { token, setToken } = useContext(AppContext);
  const [oneOrder, setOneOrder] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  let id;
  useEffect(() => {
    if (token) {
      id = jwtDecode(token).userId;
    
    axios
      .get(`http://localhost:5000/order/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOneOrder(res.data.result);
      })
      .catch((err) => {
        setError(err.response.data.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You have no orders yet !",
        });
      });}
      else{
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "You have to login first",
        })
      }
  }, []);
  return (
    <>
      <br />
      <h2>MyOrders</h2>
      <br />
      <br />
      {oneOrder &&
        <div className="order">
          {oneOrder.map((one, i) => {
          return (
            <div key={i}>
              <Card key={i}>
                <Card.Body>
                  <Card.Title>{one.status}</Card.Title>
                  <Card.Title>{one.date}</Card.Title>
                  <Image src={one.product} roundedCircle />
                </Card.Body>
              </Card>
              <Button
                variant="danger"
                onClick={() => {
                  swalWithBootstrapButtons
                    .fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonText: "Yes, delete it!",
                      cancelButtonText: "No, cancel!",
                      reverseButtons: true,
                    })
                    .then((result) => {
                      if (result.isConfirmed) {
                        axios
                          .delete(`http://localhost:5000/order/${one._id}`, {
                            headers: {
                              Authorization: `Bearer ${token}`,
                            },
                          })
                          .then((result) => {
                            setOneOrder(
                              oneOrder.filter((elem, i) => {
                                return elem._id !== one._id;
                              })
                            );
                          })
                          .catch((err) => {
                            setError(err.response.data.message);
                          });
                        swalWithBootstrapButtons.fire({
                          title: "Deleted!",
                          text: "Your file has been deleted.",
                          icon: "success",
                        });
                      } else if (result.dismiss === Swal.DismissReason.cancel) {
                        swalWithBootstrapButtons.fire({
                          title: "Cancelled",
                          text: "Your imaginary file is safe :)",
                          icon: "error",
                        });
                      }
                    });
                }}
              >
                X
              </Button>{" "}
            </div>
          );
        })}
          </div>}
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

export default MyOrders;
