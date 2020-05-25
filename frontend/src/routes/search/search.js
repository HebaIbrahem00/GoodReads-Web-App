import React, { Component, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import axios from 'axios';
import qs from 'qs';
import FlatList from 'flatlist-react';

let loaded = false;

export default function Search(props)
{
    let query = qs.parse(props.location.search.substr(1)).q;
    const [books, setBooks] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [authors, setAuthors] = React.useState([]);

    if (!loaded)
    {
        axios.get("http://localhost:5000/book/search", {
            params: {
                q: query
            }
        }).then((response) => {
            response.data.forEach(book => {
                if (book.cover) book.cover = "http://localhost:5000/" + book.cover;
            });
            setBooks(response.data);
            console.log(response.data)
        }).catch(console.error)

        axios.get("http://localhost:5000/categories/search", {
            params: {
                q: query
            }
        }).then((response) => {
            setCategories(response.data);
            console.log(response.data)
        }).catch(console.error)

        axios.get("http://localhost:5000/author/search", {
            params: {
                q: query
            }
        }).then((response) => {
            response.data.forEach(author => {
                if (author.pic) author.pic = "http://localhost:5000/" + author.pic;
            });
            setAuthors(response.data);
            console.log(response.data)
        }).catch(console.error)

        loaded = true;
    }

    return (
        <div>
        <Navbar/>
        <h3>Authors</h3>
        <FlatList
          list={authors}
          renderItem={(author, idx) => {
            return (
                <li key={idx}>
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
                </li>
            )
          }}/>
        <h3>Books</h3>
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
                                      <p className="card-text text-muted"> {book.avgRating} </p>
                                      <p className="card-text text-muted"> - {book.reviews.length} Ratings</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-2">
                                  <div className="d-flex flex-row">
                                  </div>
                          </div>
                      </div>
                  </div>
                </li>
            );
          }}/>
        <h3>Categories</h3>
        <FlatList
        list={categories}
        renderItem={(category, idx) => {
            return (
                <li key={idx}>
                    {category.name}
                </li>
            )
        }}/>
        </div>
    )
}
