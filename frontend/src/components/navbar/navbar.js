import React, { useState } from 'react'; 
import { Link, Redirect } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import Login from '../../components/login/login';
import './navbar.css'
import './navbar.css'

export default function Navbar(setLoaded){
    const [searchText, setSearchText] = React.useState("");
    const [doSearch, setDoSearch] = React.useState(false);
    const [doLogout, setDoLogout] = React.useState(false);

    let navTail = <div></div>;
    if (localStorage.currentUserInfo && JSON.parse(localStorage.currentUserInfo).isAuthenticated)
    {
        navTail = <div className='col-md-4'><label className='col-md-4' style={{color:"black"}} to="/"><FaRegUserCircle size={50}/></label>
        <label className="col-4">{JSON.parse(localStorage.currentUserInfo).user.username}</label>
        <button className='button-transparent col-md-4'  onClick={() => setDoLogout(true)}><FaSignOutAlt size={50}/></button></div>;
    }
    else{
        navTail = <div className='col-md-4 login-wrapper'>
                                <Login message={(message) => null} loginMessage={(message) => {if (setLoaded) setLoaded(false)}} />
                            </div>
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

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='col-md-3'>
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/userpage">Home <span className="sr-only">(current)</span></Link>
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
            </div>
            <form onsubmit="false" className="form-inline d-flex justify-content-center md-form form-sm mt-0 col-4">
            <button className='button-transparent' onClick={() => {if (searchText.length > 0) setDoSearch(true)}}><FaSearch/></button>
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                aria-label="Search" onChange={(event) => setSearchText(event.target.value)} />
            </form>
            {navTail}
        </div>
        </nav>
        
    )
}

