import React from 'react'
import {useNavigate} from "react-router-dom";
const Category = () => {
    const navigate=useNavigate()
  return (
    <>
     <div>Category</div>
    <button onClick={()=>{
        navigate(-1)
    }}>Back</button>
    </>
   
  )
}

export default Category