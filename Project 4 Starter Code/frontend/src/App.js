import React from "react";
import "./App.css";
import { createContext,useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import { useNavigate } from "react-router-dom";
import Category from "./components/Category";
import NotFound from "./components/NotFound";
export const AppContext = createContext();
const App = () => {
  const navigate=useNavigate()
  useEffect(
    ()=>{
navigate('/login')
    },[]
  )
  return (
    <AppContext.Provider value={navigate}>
      <div className="App">
        <h1>Item Exchange</h1>
        <NavBar />
        
        <Routes>
          <Route path="/category" element={<Category/>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
