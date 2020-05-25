import React, { Component, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import axios from 'axios';
import qs from 'qs';
import FlatList from 'flatlist-react';
import { Link } from 'react-router-dom'
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
                <li key={idx} className="d-flex flex-row" className="d-flex flex-row">
                  <div className="card mt-4" style={{width: "16rem",height:"16rem"}}>
                    <img style={{alignSelf: "center", width: "14rem",height:"12rem"}} src={author.pic}/>
                    <div className="card-body">
                        <Link style={{alignSelf: "center"}} to={"/authors/" + author._id}>{author.firstName} {author.lastName}</Link>
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
                  <div className="card mt-4" style={{width: "16rem",height:"16rem"}}>
                    <img style={{alignSelf: "center", width: "14rem",height:"12rem"}} src={book.cover}/>
                    <div className="card-body">
                        <Link style={{alignSelf: "center"}} to={"/books/" + book._id}>{book.name}</Link>
                    </div>
                    </div>
                </li>
            );
          }}/>
        <h3>Categories</h3>
        <FlatList
        list={books}
        renderItem={(book, idx) => {
            return (
                <li key={idx}>
                    <Link style={{alignSelf: "center"}} to={"/categories/" + book.category._id}>{book.category.name}</Link>
                </li>
            )
        }}/>
        </div>
    )
}
