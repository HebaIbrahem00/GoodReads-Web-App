import React, { Component, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Dropdown from '../../components/dropdown/dropdown'
import ButtonRating from '../../components/rating/buttonRating';
import LabelRating from '../../components/rating/labelRating';
import axios from 'axios';
import FlatList from 'flatlist-react';
import { Link } from 'react-router-dom'


export default function Authors()
{
    const [authors, setAuthors] = React.useState({});
    const [loaded, setLoaded] = React.useState(false);

    if (!loaded)
    {
        axios.get("http://localhost:5000/author").then((response) => {
            if (response.data.pic) response.data.pic = "http://localhost:5000/" + response.data.pic;
            setAuthors(response.data);
        }).catch(console.error)
        setLoaded(true);
    }

    return(
        <div className="container">
            <Navbar setLoaded={setLoaded}/>
            <div className="d-flex flex-row">
            <FlatList
          list={authors}
          numColumns={4}
          renderItem={(author, idx) => {
            return (
                <li key={idx}>
                  <div className="card mt-4 ml-10 mr-10" style={{width: "16rem",height:"16rem"}}>
                    <img style={{alignSelf: "center", width: "14rem",height:"12rem"}} src={author.pic}/>
                    <div className="card-body">
                        <Link style={{alignSelf: "center"}} to={"/authors/" + author._id}>{author.firstName} {author.lastName}</Link>
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