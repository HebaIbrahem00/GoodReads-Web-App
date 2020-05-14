import React, { Component } from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
export default function LabelRating(){
    return(
        <div className="d-flex flex-row">
            <p  className= 'button-transparent'><FaStar size={15}/></p>
            <p  className= 'button-transparent'><FaStar size={15}/></p>
            <p  className= 'button-transparent'><FaStar size={15}/></p>
            <p  className= 'button-transparent'><FaRegStar size={15}/></p>
            <p  className= 'button-transparent'><FaRegStar size={15}/></p>
        </div>
        )
    }


