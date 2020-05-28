/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/navbar";

import { NavLink } from "react-router-dom";
const url = "http://localhost:5000/categories/:id";

export default function CategoryID({match:{params:{id}}}) {
  console.log("category id ", id);

  const [catbooks, setBooks] = useState([]);

  useEffect(() => {
    axios({
      method: "post",
      url: url,
      data: {
        catid: id,
      },
    })
      .then((response) => {
        console.log("response", response.data);
     
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  

  return (
      
    <div className="container">
      <Navbar />

      {catbooks.map((book,index)=>(
      <div className="card" style={{width:300 ,marginTop:50}}>
       
        <div className="card-body text-center">
        <img src={book.cover} className="card-img col-6 ml-6" style={{height:"10rem"}}/>
      <h5 className="card-title">{book.name}</h5>
          <p className="card-text">
            {book.details}
          </p>
          <NavLink to ={"/author/"+book.author._id} style={{textDecoration:"underline"}}>
          {book.author.firstName +"  "+ book.author.lastName }
          </NavLink>
          <br></br>
          <NavLink to={"/book/"+book._id} style={{textDecoration:"underline"}}>  {book.name} </NavLink>

        </div>
      </div>
      ))}
    </div>
  );
}
