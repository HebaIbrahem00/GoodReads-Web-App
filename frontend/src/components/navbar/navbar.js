import React, { useContext } from 'react'; 
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

import './navbar.css'

export default function Navbar(props){
//    const { isAuthenticatd, user, setIsAuthenticated, setUser } = useContext(AuthContext)
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto col-3">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/books">Books</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/authors">Authors</Link>
            </li>
            </ul>
            <form className="form-inline d-flex justify-content-center md-form form-sm mt-0 col-6">
            <Link to="/search" className='button-transparent'><FaSearch/></Link>
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                aria-label="Search"/>
            
            </form>
            <label style={{color:"black"}} to="/"><FaRegUserCircle size={50}/></label>
            <label className="col-1">User1</label>
            <Link style={{color:"black"}} to="/"><FaSignOutAlt size={50}/></Link>
        </div>
        </nav>
        
    )
}

