import React, { useState, useRef } from 'react';
import { Overlay } from 'react-bootstrap';
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link } from 'react-router-dom'

import './popularcard.css'

function Bookcard(prop) {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const entity = {
        id: "",
        name: "",
        details: "",
        image: "",
        authorId: "",
        pio: "",
    }
    const endpoint = prop.book ? "book" : "author";

    if (prop.book) {
        entity.id = prop.book._id;
        entity.name = prop.book.name;
        entity.details = prop.book.details;
        entity.image = prop.book.cover;
        entity.authorId = prop.book.author;
    } else {
        entity.id = prop.author._id;
        console.log(entity.id);
        
        entity.name = prop.author.firstName +" " + prop.author.lastName;
        entity.details = prop.author.bio;
        entity.image = prop.author.pic;
    }


    return (
        <>
            <div>
            </div>
            <Link to={`/${endpoint}/` + entity.id} >
                <img src={entity.image}
                    className='gallery-img '
                    ref={target}
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    alt=""
                />
            </Link>
            <Overlay target={target.current} show={show} placement="right">
                {({
                    placement,
                    scheduleUpdate,
                    arrowProps,
                    outOfBoundaries,
                    show: _show,
                    ...props
                }) => (
                        <div
                            onMouseEnter={() => setShow(true)}
                            onMouseLeave={() => setShow(false)}
                            className='overlay-container'
                            {...props} >
                            <h2>
                                <Link className='bookTitle' to={"/book/" + entity.id}>{entity.name}</Link>
                            </h2>
                            <div>
                                {prop.book? <p>by <Link className='authorName' to={"/authors/" + entity.authorId}>{entity.authorId}</Link> </p>: null}
                            </div>
                            <ReactReadMoreReadLess
                                className='bookDescription '
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                                {entity.details}
                            </ReactReadMoreReadLess>
                        </div>
                    )}
            </Overlay>
        </>
    );
}

export default Bookcard;