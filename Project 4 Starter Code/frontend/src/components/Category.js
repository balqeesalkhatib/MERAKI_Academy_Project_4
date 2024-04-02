import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Category = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [id,setId]= useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/category")
      .then((res) => {
        setCategory(res.data.result)
      })
      .catch((err) => {
        setName(err.response.data.message);
      });
  }, []);
  return (
    <>
      <div>====Categories====</div>
       {/* {id.length && console.log(id)} */}
      {category.length &&
        category.map((elem, index) => {
          return <div key={elem._id}><h2  onClick={(e)=>{
            console.log(e.target);
          }}>{elem.name}</h2> <p>{elem.description}</p><p>{elem._id}</p></div>;
        })}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </>
  );
};

export default Category;
// useEffect(() => {
//   axios
//     .get("http://localhost:5000/category")
//     .then((res) => {
//       const data = res.data.result.map((elem, indx) => {
//         setId(elem._id)
//         setDescription(elem.description)
//         return elem.name;
//       });
//       setName(data);
//     })
//     .catch((err) => {
//       setName(err.response.data.message);
//     });
// }, []);
// return (
//   <>
//     <div>====Categories====</div>
//     {/* <div onClick={(e)=>{
//       console.log(e.target);
//     }}>{name}</div> */}
//     {id.length && console.log(id)}
//     {name.length &&
//       name.map((elem, index) => {
//         return <div key={index} onClick={(e)=>{
//           console.log(e.target);
//         }}>{elem}</div>;
//       })}
//     <button
//       onClick={() => {
//         navigate(-1);
//       }}
//     >
//       Back
//     </button>
//   </>
// );