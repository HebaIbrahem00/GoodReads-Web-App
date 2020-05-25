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
            <Navbar/>
            <FlatList
          list={authors}
          renderItem={(author, idx) => {
            return (
                <li key={idx}>
                  <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={author.pic} alt="Card image cap"/>
                    <div className="card-body">
                        <Link to={"/authors/" + author._id} className="btn btn-primary">{author.firstName} {author.lastName}</Link>
                    </div>
                    </div>
                </li>
            );
        }}
        />
        </div>
        )
}