import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
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
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
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
        Swal.fire({
          title:"This Category has no products yet.",
          width: 600,
          padding: "3em",
          color: "green",
          background: "#000 url(/images/trees.png)",
          backdrop: `
            rgba(0,0,0,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        });
      });
  }, []);
  return (
    <>
     
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
                    
                    // axios
                    //   .delete(
                    //     `http://localhost:5000/category/product/${elem._id}`,
                    //     {
                    //       headers: {
                    //         Authorization: `Bearer ${token}`,
                    //       },
                    //     }
                    //   )
                    //   .then((result) => {
                    //     setProduct(
                    //       product.filter((one, i) => {
                    //         return one._id !== elem._id;
                    //       })
                    //     );
                    //   })
                    //   .catch((err) => {
                    //     setError(err.response.data.message);
                    //   });
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
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "You are not the user",
                      })
                    }
                  }}
                >
                  Update
                </Button>
              </Container>
            </div>
          );
        })}
     
      <br />
      <br />
      <Button
        variant="success"
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
