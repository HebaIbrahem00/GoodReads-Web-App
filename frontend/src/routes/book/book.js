import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import FlatList from 'flatlist-react';
import { FaStar, FaRegStar } from "react-icons/fa";

export default function Book(){

    return(
        <div className="container">
            <Navbar/>
            
                <div className="card  mh-100 d-flex flex-row">
                    <div className="no-gutters d-flex flex-row">
                        <div className="col-4 d-flex flex-column flex-center">
                            <div><img src="https://s3-ap-northeast-1.amazonaws.com/ddnbgroup/wp-content/uploads/2015/08/28084941/How-to-format-a-book.jpg" className="card-img col-8" alt="..."/></div>
                            <div className="col-6">
                                <select className="custom-select" id="inputGroupSelect01">
                                    <option value="1">Want To Read</option>
                                    <option value="2">Currently Read</option>
                                    <option value="3">Finish Reading</option>
                                </select>
                                <div className="d-flex flex-row">
                                    <button id='firstEmpStar' className= 'button-transparent'><FaRegStar size={15}/></button>
                                    <button id='secondEmpStar' className= 'button-transparent'><FaRegStar size={15}/></button>
                                    <button id='thirdEmpStar' className= 'button-transparent'><FaRegStar size={15}/></button>
                                    <button id='forthEmpStar' className= 'button-transparent'><FaRegStar size={15}/></button>
                                    <button id='fifthEmpStar' className= 'button-transparent'><FaRegStar size={15}/></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 d-flex flex-column">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <div><a href="">by Book Author</a></div>
                                <div><a className="" href="">Category Name</a></div>
                                <div className="d-flex flex-row">
                                    <p id='firstEmpStar' className= 'button-transparent'><FaStar size={15}/></p>
                                    <p id='secondEmpStar' className= 'button-transparent'><FaStar size={15}/></p>
                                    <p id='thirdEmpStar' className= 'button-transparent'><FaStar size={15}/></p>
                                    <p id='forthEmpStar' className= 'button-transparent'><FaRegStar size={15}/></p>
                                    <p id='fifthEmpStar' className= 'button-transparent'><FaRegStar size={15}/></p>
                                    <p className="card-text text-muted"> 3 </p>
                                    <p className="card-text text-muted"> - 340 ratings</p>
                                </div>
                                <div><p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            
            <div className="mt-lg-3 ml-3">
                <h3>Reviews</h3>
                <FlatList
                    list={[]} renderItem={<p>Hello</p>}
                />
            </div>
            
        </div>
    )
}