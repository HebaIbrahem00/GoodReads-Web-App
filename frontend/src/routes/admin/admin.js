import React from 'react'
import './admin.css'
import logo from '../../assets/header-logo.png'
 const Admin = () => {
    return (
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">Categories</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Books</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Authors</a>
            </li>
        </ul>
    );
}
export default Admin;