import React, { useState, useEffect } from 'react';
import Paginate from '../pagination/paginate.js';
import { NavLink } from 'react-router-dom'
import './usertable.css';
import ButtonRating from '../rating/buttonRating';
import Dropdown from '../dropdown/dropdown';

/** started on 8/5/2020 */
/**  we can type "rfc" and then enter and it will create a default react functional component, that's because of ES7 react Extension */

export default function UserTable(props) {
  
console.log("books at table ", props.books)
   return (

        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">{props.title}</a>
                    </li>
                </ul>
            </div>

            <div className="card-body">
                <table className="table  table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Cover</th>
                            <th scope="col">Name </th>
                            <th scope="col">Author</th>
                            <th scope="col">Avg Rating</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Shelve</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {props.books.map((book=>(
                        <tr key={book.id}>
                            <th scope="row"><img src="https://image.flaticon.com/icons/svg/166/166088.svg"></img></th>

                        <td><NavLink to="/books/`{id}`" style={{ textDecoration: "underline" }}>{book.book.name}</NavLink></td>
                            <td>  <NavLink to="/about" style={{ textDecoration: "underline" }}>Author Name</NavLink>  </td>
                            <td>  </td>
                            <td><ButtonRating/></td>
                            <td> <Dropdown/> </td>
                        </tr>
                          )))}
                    </tbody>

                </table>
                <div className="rightpane pagination" >  <Paginate /> </div>
            </div>
        </div>


    )




}

