import React from "react";
import "./App.css";
import { createContext,useEffect,useState } from "react";
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
import AddOrder from "./components/AddOrder"
import Orders from "./components/Orders";
import MyOrders from "./components/MyOrders";
import UpdateOrder from "./components/UpdateOrder";
export const AppContext = createContext();
const App = () => {
  const [token, setToken] = useState("");
  const navigate=useNavigate()
  useEffect(
    ()=>{
navigate('/login')
    },[]
  )
  return (
    <AppContext.Provider value={{token,setToken}}>
      <div className="App">
      <h1>Item Exchange</h1>
        <NavBar />
         <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/category" element={<Category/>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/product/:id" element={<Products/>}></Route>
          <Route path="/:id" element={<OneProduct/>}></Route>
          <Route path="/update/:id" element={<UpdateProduct/>}></Route>
          <Route path="/addProduct" element={<AddProduct/>}></Route>
          <Route path="/addOrder" element={<AddOrder/>}></Route>
          <Route path="/orders" element={<Orders/>}></Route>
          <Route path="/my" element={<MyOrders/>}></Route>
          <Route path="/updateOrder/:id" element={<UpdateOrder/>} ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
