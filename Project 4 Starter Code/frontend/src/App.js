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
export const AppContext = createContext();
const App = () => {
  const [token, setToken] = useState("");
  const navigate=useNavigate()
  useEffect(
    ()=>{
navigate('/home')
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
          <Route path="/product" element={<Products/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
