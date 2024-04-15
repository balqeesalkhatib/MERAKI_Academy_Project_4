import React from "react";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import { useNavigate } from "react-router-dom";
import Category from "./components/Category";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Products from "./components/Products";
import OneProduct from "./components/OneProduct";
import UpdateProduct from "./components/UpdateProduct";
import AddProduct from "./components/AddProduct";
import AddOrder from "./components/AddOrder";
import Orders from "./components/Orders";
import MyOrders from "./components/MyOrders";
import Logout from "./components/Logout";
import Image from "react-bootstrap/Image";
import Swal from "sweetalert2";
export const AppContext = createContext();
const App = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  let timerInterval;
  useEffect(() => {
    navigate("/home");
    Swal.fire({
      position: "center",
     title: "Welcome <3",
     color:"rgb(21, 165, 110)",
     background:"beige",
     text:"Be ready to share what you have and discover new values that alternative options may bring",
      showConfirmButton: false,
      timer: 5000,
    });
  }, []);
  return (
    <AppContext.Provider value={{ token, setToken }}>
      <div className="App">
      <br/>
        <h1 className="heading">Zone</h1>
        <Image  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNYomIzCCFtFYIg97xTEsCzccrke-S_vd4w&s" ></Image>
        <br/>
        <NavBar className='nav'/>
       
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/product/:id" element={<Products />}></Route>
          <Route path="/:id" element={<OneProduct />}></Route>
          <Route path="/update/:id" element={<UpdateProduct />}></Route>
          <Route path="/addProduct" element={<AddProduct />}></Route>
          <Route path="/addOrder" element={<AddOrder />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/my" element={<MyOrders />}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
