import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

import './navbar.css'

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto col-3">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Categories</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Books</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Authors</a>
            </li>
            </ul>
            <form className="form-inline d-flex justify-content-center md-form form-sm mt-0 col-6">
            <button className='button-transparent'><FaSearch/></button>
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                aria-label="Search"/>
            </form>
            <button className= 'button-transparent'><FaRegUserCircle size={50}/></button>
            <label className="col-1">User1</label>
            <button className= 'button-transparent'><FaSignOutAlt size={50}/></button>
        </div>
        </nav>
    )
}

