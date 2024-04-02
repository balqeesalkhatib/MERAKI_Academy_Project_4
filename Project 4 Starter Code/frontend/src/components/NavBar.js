import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
     <Container> 
     <Nav.Link as={Link} to="/register">Register</Nav.Link>
     <Nav.Link as={Link} to="/login">Login</Nav.Link>
     <Nav.Link as={Link} to="/category">Category</Nav.Link>
     <Nav.Link as={Link} to="/home">Home</Nav.Link>
     </Container>
     </Navbar>
      
    </>
  );
};

export default NavBar;
