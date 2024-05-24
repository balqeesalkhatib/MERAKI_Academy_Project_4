import React from 'react'
import { useNavigate } from "react-router-dom";
const NotFound = () => {
    const navigate=useNavigate()
  return (
    <div>
        <img src='data:image/png;base64,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' alt='NotFound'/>
        <button onClick={()=>{
            navigate('/home')
        }}>Home</button>
        <button onClick={()=>{
            navigate(-1)
        }}>Back</button>
    </div>
  )
}

export default NotFound