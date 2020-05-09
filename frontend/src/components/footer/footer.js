import React from 'react';

import './footer.css'

export default function Footer(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light col-12">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse col-12" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto separator">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="#">About Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Categories</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Authors</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Terms & Conditions</a>
            </li>
            </ul>
        </div>
        </nav>
    )
}

