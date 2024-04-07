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
export const AppContext = createContext();
const App = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);
  return (
    <AppContext.Provider value={{ token, setToken }}>
      <div className="App">
      <br/>
        <h1 >Exchange Zone</h1>
        <Image  src="data:image/jpeg;base64,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" rounded ></Image>
        <br/>
        <NavBar />
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
