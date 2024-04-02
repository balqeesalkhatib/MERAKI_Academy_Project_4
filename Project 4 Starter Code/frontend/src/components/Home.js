import React from 'react'
import Category from './Category'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
   <>
     <div>Home</div>
       <Link to={'/product'}>Products</Link>
       

   </>
  )
}

export default Home