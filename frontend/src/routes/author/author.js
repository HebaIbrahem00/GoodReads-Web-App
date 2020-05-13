import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import Dropdown from '../../components/dropdown/dropdown'
import ButtonRating from '../../components/rating/buttonRating';
import LabelRating from '../../components/rating/labelRating';

import FlatList from 'flatlist-react';
import { FaStar, FaRegStar } from "react-icons/fa";

export default function Author(){
    //const [books, setBooks] = React.useState(['hhhhh']);
    let books = [{name:'gfgfdg',key:123}]
    return(
        <div className="container">
            <Navbar/>
            
                <div className="card  mh-100 d-flex flex-row mt-2">
                    <div className="no-gutters d-flex flex-row">
                        <div className="col-4 d-flex flex-column flex-center">
                            <div className="mt-2 ml-2"><img src="https://ca-times.brightspotcdn.com/dims4/default/6274e66/2147483647/strip/true/crop/2502x1653+0+0/resize/840x555!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F10%2F59%2F6666b0a8435fa20c9867ef030a7f%2Fgettyimages-524333274a.jpg" className="card-img col-8" alt="..."/></div>
                        </div>
                        <div className="col-8 d-flex flex-column">
                            <div className="card-body">
                                <h5 className="card-title">Author Name</h5>
                                <div><p>15/06/1998</p></div>
                                
                                <div><p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            
            <div className="mt-lg-3 ml-3">
                <h3>Author's Books</h3>
                <FlatList
          list={books}
          renderItem={({ item }) => {
              return(
                
                <div className="card  mh-100 d-flex flex-row">
                    <div className="no-gutters d-flex flex-row">
                        <div className="d-flex flex-column flex-center">
                            <div className="mt-2 ml-2"><img src="https://s3-ap-northeast-1.amazonaws.com/ddnbgroup/wp-content/uploads/2015/08/28084941/How-to-format-a-book.jpg" className="card-img col-8" alt="..."/></div>
                            
                        </div>
                        <div className="col-6 d-flex flex-column">
                            <div className="card-body">
                                <h5 className="card-title">Book Name</h5>
                                <div className="d-flex flex-row">
                                    <LabelRating/>
                                    <p className="card-text text-muted"> 3 </p>
                                    <p className="card-text text-muted"> - 340 ratings</p>
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
              )
          }}
          keyExtractor={(item) => String(item.key)}
        />
            </div>
            
        </div>
    )
}