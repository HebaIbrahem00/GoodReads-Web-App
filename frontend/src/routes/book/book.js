import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import Dropdown from '../../components/dropdown/dropdown'
import ButtonRating from '../../components/rating/buttonRating';
import LabelRating from '../../components/rating/labelRating';

import FlatList from 'flatlist-react';


export default function Book(){

    return(
        <div className="container">
            <Navbar/>
            
                <div className="card  mh-100 d-flex flex-row">
                    <div className="no-gutters d-flex flex-row">
                        <div className="col-4 d-flex flex-column flex-center">
                            <div><img src="https://s3-ap-northeast-1.amazonaws.com/ddnbgroup/wp-content/uploads/2015/08/28084941/How-to-format-a-book.jpg" className="card-img col-8" alt="..."/></div>
                            <div className="col-6">
                                <Dropdown/>
                                <div className="d-flex flex-row">
                                    <ButtonRating/>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 d-flex flex-column">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <div><a href="">by Book Author</a></div>
                                <div><a className="" href="">Category Name</a></div>
                                <div className="d-flex flex-row">
                                    <LabelRating/>
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