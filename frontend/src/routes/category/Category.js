import React,{useEffect, useState} from 'react'
import {ListGroup} from 'react-bootstrap';
import Navbar from '../../components/navbar/navbar';
import { NavLink ,Link } from "react-router-dom";

//import axios from 'axios';
function alertClicked() {
    alert('You clicked the third ListGroupItem');
}


const Category=()=>{
    //const categories=["EConomics","Sport","Society","Art","Horror"]
    const [categories,setCategories]=useState([]);
    const [error,setErrors]=useState(false);
    async function fetchData() {
        const url="http://localhost:5000/categories";
        const res=await fetch(url)
            res.json()
            .then(res=>setCategories(res))
            .then(res => console.log(categories))
            .catch(err=>setErrors(err));
           
    }
    useEffect(() => {
            fetchData();
             /*or
             fetch(url).then(res=>res.json())
            .then(res => console.log(res[0].name))
            .catch(err=>setErrors(err));
            */
        });
    return(
        <div>
        <Navbar/>
        <div className="mt-5">
            <ListGroup defaultActiveKey="#sport">
             {
                categories.map((cat)=>
                    <ListGroup.Item>
                        <Link to={"/categories/" + cat._id}> {cat.name}</Link>
                    </ListGroup.Item>
                
                    )
            }
               {/*<ListGroup.Item action onClick={alertClicked}>
                    This one is a button
                  </ListGroup.Item>*/}
            </ListGroup>
        </div>
        </div>
      );
}
export default Category;
 
