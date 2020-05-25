import React, { Component, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Dropdown from '../../components/dropdown/dropdown'
import ButtonRating from '../../components/rating/buttonRating';
import LabelRating from '../../components/rating/labelRating';
import axios from 'axios';
import FlatList from 'flatlist-react';

let loaded = false;

export default function Author({match:{params:{id}}})
{
    const [author, setAuthor] = React.useState({});
    const [books, setBooks] = React.useState([]);

    if (!loaded)
    {
        axios.get("http://localhost:5000/author/" + id).then((response) => {
            if (response.data.pic) response.data.pic = "http://localhost:5000/" + response.data.pic;
            setAuthor(response.data);
        }).catch(console.error)
        axios.get("http://localhost:5000/author/" + id + "/books").then((response) => {
            response.data.forEach(book => {
                if (book.cover) book.cover = "http://localhost:5000/" + book.cover;
            });
            setBooks(response.data);
        }).catch(console.error)
        loaded = true;
    }

    return(
        <div className="container">
            
            <Navbar/>
                <div className="card  mh-100 d-flex flex-row mt-2">
                    <div className="no-gutters d-flex flex-row">
                        <div className="col-4 d-flex flex-column flex-center">
                            <img src={author.pic} className="card-img col-8" alt="..."/>
                        </div>
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
                  <div className="card  mh-100 d-flex flex-row">
                      <div className="no-gutters d-flex flex-row">
                          <div className="d-flex flex-column flex-center">
                              <img src={book.cover} className="card-img col-8" alt="..."/>
                          </div>
                          <div className="col-6 d-flex flex-column">
                              <div className="card-body">
                                  <h5 className="card-title">{book.name}</h5>
                                  <div className="d-flex flex-row">
                                      <LabelRating/>
                                      <p className="card-text text-muted"> {book.avgRating} </p>
                                      <p className="card-text text-muted"> - {book.reviews.length} Ratings</p>
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