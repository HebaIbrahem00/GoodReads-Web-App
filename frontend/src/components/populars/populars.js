import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './populars.css'
import { Link } from 'react-router-dom'


import { FaAngleDoubleRight } from 'react-icons/fa';
import PobularCard from "./popularcard/popularcard"
import Loader from 'react-loader-spinner'


export default function Populars() {
    const [Books, setBooks] = useState([]);
    const [booksLoading, setBooksLoading] = useState(true);

    const [Authors, setAuthors] = useState([]);
    const [authorisLoading, setAuthorssLoading] = useState(true);


    useEffect(() => {
        axios.get('http://localhost:5000/admin/book')
            .then(response => {
                if (response.data) {
                    setBooks(response.data)
                    setBooksLoading(false)
                    console.log(response.data);
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/admin/author')
            .then(response => {
                console.log("authors");

                if (response.data) {
                    console.log("authors")
                    setAuthors(response.data)
                    setAuthorssLoading(false)
                    console.log(response.data);
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }, []);



    const RenderBooks = () => {
        return (
            <div>
                <div className="gallery">
                    <div className="row ">
                        {Books.map((book) => <PobularCard book={book} />)}
                    </div>
                </div>

            </div>
        )
    }

    const RenderAuthors = () => {
        return (
            <div>
                <div className="gallery">
                    <div className="row ">
                        {Authors.map((author) => <PobularCard author={author} />)}
                    </div>

                </div>
            </div>

        )
    }


    const LoadingSpinner = () => {
        return (
            <div className="loader">
                <Loader
                    type="Bars"
                    color="#f2f2f2"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            </div>
        );
    }


    return (

        <div className="col-lg-12 col-sm-4  ">
            <div className="row main-box-layout">

                <div className="col box box1">

                    <div className="label">
                        <h3><span className="title">Popular Books</span></h3>
                    </div>

                    <div className="row">
                        {booksLoading ? <LoadingSpinner /> : <RenderBooks />}

                        <Link className="explore-icon" to="/books">
                            <FaAngleDoubleRight />
                        </Link>
                    </div>
                </div>

            </div>

            <div className="row main-box-layout">

                <div className="col box box2">

                    <div className="label">
                        <h3><span className="title">Popular Authors</span></h3>
                    </div>

                    <div className="row">
                        {authorisLoading ? <LoadingSpinner /> : <RenderAuthors />}

                        <Link className="explore-icon" to="/authors">
                            <FaAngleDoubleRight />
                        </Link>
                    </div>
                </div>

            </div>




        </div>
    )
}