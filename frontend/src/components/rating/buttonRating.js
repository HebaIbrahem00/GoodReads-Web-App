import React, { Component } from 'react';
import { FaRegStar } from "react-icons/fa";
export default function ButtonRating(){
    return(
        <div className="d-flex flex-row">
            <button id='firstEmpStar' className= 'button-transparent'><FaRegStar size={15}/></button>
            <button id='secondEmpStar' className= 'button-transparent'><FaRegStar size={15}/></button>
            <button id='thirdEmpStar' className= 'button-transparent'><FaRegStar size={15}/></button>
            <button id='forthEmpStar' className= 'button-transparent'><FaRegStar size={15}/></button>
            <button id='fifthEmpStar' className= 'button-transparent'><FaRegStar size={15}/></button>
        </div>
    )
}
