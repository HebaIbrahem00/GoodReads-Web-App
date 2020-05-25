import React, { Component, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Dropdown from '../../components/dropdown/dropdown'
import ButtonRating from '../../components/rating/buttonRating';
import LabelRating from '../../components/rating/labelRating';
import axios from 'axios';
import { Link } from 'react-router-dom'
import FlatList from 'flatlist-react';

export default function Book({match:{params:{id}}}){
    const [book, setBook] = React.useState({reviews: []});
    const [reviews, setReviews] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    if (!loaded)
    {
        axios.get("http://localhost:5000/book/" + id).then((response) => {
            if (response.data.cover) response.data.cover = "http://localhost:5000/" + response.data.cover;
            setBook(response.data);
            setReviews(response.data.reviews)
        }).catch(console.error)
        setLoaded(true);
    }

    return(
        <div className="container">
            <Navbar/>
            <div className="card  mh-100 d-flex flex-row">
                <div className="no-gutters d-flex flex-row">
                    <div className="col-4 d-flex flex-column flex-center">
                        <img src={book.cover} className="card-img col-8" alt="..."/>
                        <div className="col-6 ml-2">
                            <Dropdown/>
                            <div className="d-flex flex-row ml-2">
                                <ButtonRating/>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 d-flex flex-column">
                        <div className="card-body">
                            <h5 className="card-title">{book.name}</h5>
                            <div><Link to={"/authors/" + book.author._id}>{book.author.firstName} {book.author.lastName}</Link></div>
                            <div><a className="" href="">Category Name</a></div>
                            <div className="d-flex flex-row">
                                <LabelRating/>
                                <p className="card-text text-muted"> {book.avgRating} </p>
                                <p className="card-text text-muted"> - {book.reviews.length} Rating</p>
                            </div>
                            <div><p className="card-text">{book.details}</p></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        
            <div className="mt-lg-3 ml-3">
                <h3>Reviews</h3>
                <FlatList
          list={reviews}
          renderItem={(review, idx) => {
            return (
                <li key={idx}>
                  <div className="card  mh-100 d-flex flex-row">
                      <div className="no-gutters d-flex flex-row">
                          <div className="col-6 d-flex flex-column">
                              <div className="card-body">
                                  <h5 className="card-title">{review.user.username}</h5>
                                  <div className="d-flex flex-row">
                                      <LabelRating/>
                                      <p className="card-text text-muted"> {review.rating} </p>
                                      <p className="card-text text-muted"> - {review.body} </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-2">
                                  <div className="mt-3 mr-3"><Dropdown/></div>
                                  <div className="d-flex flex-row">
                                      <ButtonRating/>
                                  </div>
                          </div>
                      </div>
                  </div>
                </li>
            );
        }}
        />
            </div>
            
        </div>
    )
}