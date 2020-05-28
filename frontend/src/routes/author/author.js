import React, { Component, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Dropdown from '../../components/dropdown/dropdown'
import axios from 'axios';
import FlatList from 'flatlist-react';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom'
export default function Author({match:{params:{id}}})
{
    const [author, setAuthor] = React.useState({});
    const [books, setBooks] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    if (!loaded)
    {
        axios.get("http://localhost:5000/author/" + id).then((response) => {
            if (response.data.pic) response.data.pic = "http://localhost:5000/" + response.data.pic;
            setAuthor(response.data);
        }).catch(console.error)
        axios.get("http://localhost:5000/author/" + id + "/books", {
            params: {
                user_id: (localStorage.currentUserInfo && JSON.parse(localStorage.currentUserInfo).isAuthenticated)? JSON.parse(localStorage.currentUserInfo).user._id : null,
            }
        }).then((response) => {
            response.data.forEach(book => {
                if (book.cover) book.cover = "http://localhost:5000/" + book.cover;
            });
            setBooks(response.data);
        }).catch(console.error)
        setLoaded(true);
    }

    function setRating(value, prevValue, name) {
        axios.put("http://localhost:5000/book/" + name + "/review", {
            user_id: JSON.parse(localStorage.currentUserInfo).user._id,
            rating: value
        }).then((response) => {
            if (response.status == 200)
            {
                setLoaded(false);
            }
        }).catch(console.error)
    }

    function ratingStars(book)
    {
        let ret = <div></div>
    
        if (localStorage.currentUserInfo && JSON.parse(localStorage.currentUserInfo).isAuthenticated) {
            ret = 
            <div className="col-2">
                <div className="mt-3 mr-3"><Dropdown/></div>
                <div className="d-flex flex-row">
                <StarRatingComponent 
                    name={book._id} 
                    starCount={5}
                    value={book.userReview.rating}
                    onStarClick={setRating}
                />
                </div>
            </div>
        }

        return ret;
    }

    return(
        <div className="container">
            <Navbar/>
                <div className="card  mh-100 d-flex flex-row mt-2" style={{height:"16rem"}}>
                    <div className="no-gutters d-flex flex-row">
                        <img src={author.pic} className="card-img col-2"style={{height:"16rem"}}/>
                        <div className="col-8 d-flex flex-column">
                            <div className="card-body">
                                <h5 className="card-title">{author.firstName} {author.lastName}</h5>
                                <div><p>{author.dob}</p></div>
                                <div><p className="card-text">{author.bio}</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            
            <div className="mt-lg-3 ml-3">
                <h3>Author's Books</h3>
                <FlatList
                    list={books}
                    renderItem={(book, idx) => {
            return (
                <li key={idx}>
                  <div className="card  mh-100 d-flex flex-row" style={{height:"10rem"}}>
                      <div className="no-gutters d-flex flex-row">
                          <div className="d-flex flex-column flex-center">
                              <img style={{height:"10rem"}} src={book.cover} className="card-img col-8"/>
                          </div>
                          <div className="col-6 d-flex flex-column">
                              <div className="card-body">
                                  <Link to={"/books/" + book._id}><h5 className="card-title">{book.name}</h5></Link>
                                  <div className="d-flex flex-row">
                                  <StarRatingComponent 
                                    name={book._id + "avg"}
                                    starCount={5}
                                    value={book.avgRating}
                                    />
                                      <p className="card-text text-muted"> {book.avgRating}</p>
                                      <p className="card-text text-muted"> - {book.reviews.length} Ratings</p>
                                  </div>
                              </div>
                          </div>
                          {ratingStars(book)}
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