import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import Bookcard from '../../components/bookcard/bookcard';
import axios from 'axios';
import './books.css'
import Loader from 'react-loader-spinner'
import Footer from '../../components/footer/footer'

export default function Books() {
    const [Books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/admin/book')
            .then(response => {
                if (response.data) {
                    setBooks(response.data)
                    setIsLoading(false)
                    console.log(response.data);
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }, []);

    const RenderResults = () => {
        return (
            <div className="card-wrapper">
                <div className="row ">
                    {Books.map((book) => <Bookcard book={book} />)}
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
        <div>
            <Navbar />

            <div className="container">
                {isLoading ? <LoadingSpinner /> : <RenderResults />}
            </div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}