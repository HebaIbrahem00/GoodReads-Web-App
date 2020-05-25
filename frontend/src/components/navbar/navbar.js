import React, { useState } from 'react'; 
// import { Redirect } from 'react-router'
import { Link, Redirect } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

import './navbar.css'

export default function Navbar(){
    const [searchText, setSearchText] = React.useState("");
    const [doSearch, setDoSearch] = React.useState(false);
    const [doLogout, setDoLogout] = React.useState(false);

    function setSearchTextFromBox(event)
    {
        setSearchText(event.target.value);
    }

    function routeToSearch()
    {
        if (searchText.length > 0)
        {
            setDoSearch(true);
        }
    }

    if (doSearch)
    {
        let searchRoute = '/search?q=' + searchText;
        return <Redirect to={searchRoute}/>;
    }
    else if (doLogout)
    {
        localStorage.clear();
        return <Redirect to="/"/>;
    }

    function logout()
    {
        setDoLogout(true);
    }

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
            <form onsubmit="false" className="form-inline d-flex justify-content-center md-form form-sm mt-0 col-6">
            <button className='button-transparent' onClick={routeToSearch}><FaSearch/></button>
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                aria-label="Search" onChange={setSearchTextFromBox} />
            
            </form>
            <label style={{color:"black"}} to="/"><FaRegUserCircle size={50}/></label>
            <label className="col-1">{JSON.parse(localStorage.currentUserInfo).user.username}</label>
            <button className='button-transparent'  onClick={logout}><FaSignOutAlt size={50}/></button>
        </div>
        </nav>
        
    )
}

