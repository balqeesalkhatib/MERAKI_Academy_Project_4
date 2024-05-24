import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { token, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    setToken("");
    navigate("/login");
  }, []);
  return <div></div>;
};

export default Logout;
