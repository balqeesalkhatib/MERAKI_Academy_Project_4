// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { AppContext } from "../App";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";
// const UpdateOrder = () => {
//   let {id} = useParams();
//   console.log(id);
//   const [status, setStatus] = useState("");
//   const [date, setDate] = useState("");
//   const [product, setProduct] = useState("");
//   const { token, setToken } = useContext(AppContext);
//   const [data1, setData1] = useState("");
//   const [error, setError] = useState("");
//   let user;
//     if(token){
//      user=(jwtDecode(token).userId);
//     }
//    console.log(token);
//   console.log(user);
//   return (
//     <>
//       <div>UpdateOrder</div>
//       <Card>
//         <Card.Body>
//           <Card.Title>Add Order</Card.Title>
//           <input
//             placeholder="Update Status"
//             type="text"
//             className="w-75"
//             onChange={(e) => {
//               setStatus(e.target.value);
//             }}
//           />
//           <br />
//           <input
//             placeholder="Update Date"
//             type="text"
//             className="w-75"
//             onChange={(e) => {
//               setDate(e.target.value);
//             }}
//           />
//           <br />
//           <input
//             placeholder="Update Product URl"
//             type="text"
//             className="w-75"
//             onChange={(e) => {
//               setProduct(e.target.value);
//             }}
//           />
//           <br />
//           <br />
//           <Button
//             onClick={() => {
//               axios.put(
//                 `http://localhost:5000/order/${id}`,
//                 { status, date, product, user },
//                 {
//                   headers: {
//                     Authorization: `Bearer ${token}`,
//                   },
//                 }
//               ).then((res)=>{
//                 console.log(res.data);
//                 console.log(res.data.message);
//               }).catch((err) => {
//                 setError(err.response.data.message);
//               });
//             }}
//           >
//             Update
//           </Button>
//         </Card.Body>
//       </Card>
//       <p>{error}</p>
//     </>
//   );
// };

// export default UpdateOrder;
