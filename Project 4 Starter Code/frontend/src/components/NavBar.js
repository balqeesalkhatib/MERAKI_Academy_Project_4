import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/category">Category</Link>
    </>
  );
};

export default NavBar;
