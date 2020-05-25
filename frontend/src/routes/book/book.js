import React, { Component, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Dropdown from '../../components/dropdown/dropdown'
import axios from 'axios';
import { Link } from 'react-router-dom'
import FlatList from 'flatlist-react';
import StarRatingComponent from 'react-star-rating-component';

export default function Book({match:{params:{id}}}){
    const [book, setBook] = React.useState({reviews: [], author: {}, category: {}});
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

    //function setRating(value, _, _) {
        //Call axios backend add review or modify review api
    // }

    return(
        <div className="container">
            <Navbar/>
            <div className="card  mh-100 d-flex flex-row ml-10" style={{height:"15rem"}}>
                <div className="no-gutters d-flex flex-row">
                    <div className="col-4 d-flex flex-column flex-center">
                        <img src={book.cover} className="card-img col-6 ml-6" style={{height:"10rem"}}/>
                        <div className="col-6 ml-2">
                            <Dropdown/>
                            <div className="d-flex flex-row ml-2">
                            <StarRatingComponent 
                                    name="rate" 
                                    starCount={5}
                                    value={reviews.rating}
                                    onStarClick={console.log}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="col-8 d-flex flex-column ml-0">
                        <div className="card-body ml-0">
                            <h5 className="card-title">{book.name}</h5>
                            <div><Link to={"/authors/" + book.author._id}>{book.author.firstName} {book.author.lastName}</Link></div>
                            <div><Link to={"/categories/" + book.category._id}>{book.category.name}</Link></div>
                            <div className="d-flex flex-row">
                            <StarRatingComponent 
                                    name="rate" 
                                    starCount={5}
                                    value={book.avgRating}
                                    //onStarClick={this.onStarClick.bind(this)}
                                    />
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
                  <div className="card  ">
                      <div className="no-gutters">
                          <div className="">
                              <div className="card-body d-flex flex-row">
                                  <h5 className="card-title col-3">{review.user.username}</h5>
                                  <div className="d-flex flex-row">
                                  <StarRatingComponent 
                                    name="rate" 
                                    starCount={5}
                                    value={review.rating}
                                    //onStarClick={this.onStarClick.bind(this)}
                                    />
                                      <p className="card-text text-muted">  {review.rating} </p>
                                      <p className="card-text text-muted"> - {review.body} </p>
                                  </div>
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