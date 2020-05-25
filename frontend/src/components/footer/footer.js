import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light col-12 footer-color">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse col-12 footer-color" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto separator footer-color">
            <li className="nav-item active">
                <Link className="nav-link ml-5" to="/">Home <span className="ml-5">|⋮|</span><span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link ml-5 " to="#">About Us<span className="ml-5 disabled">|⋮|</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link ml-5" to="/categories">Categories<span className="ml-5">|⋮|</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link ml-5" to="/authors">Authors<span className="ml-5">|⋮|</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link ml-5" to="#">Terms & Conditions</Link>
            </li>
            </ul>
        </div>
        </nav>
    )
}

