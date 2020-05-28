import React, { useState, useRef } from 'react';
import { Overlay } from 'react-bootstrap';
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link } from 'react-router-dom'

import './bookcard.css'

function Bookcard(prop) {
    const [show, setShow] = useState(false);
    const target = useRef(null);


    return (
        <>
            <Link to={"/book/" + prop.book._id} >
                <img src={prop.book.cover}
                    className='gallery-img'
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
                                <Link className='bookTitle' to={"/book/" + prop.book._id}>{prop.book.name}</Link>
                            </h2>
                            <div>
                                by <Link className='authorName' to={"/authors/" + prop.book.author}>{prop.book.author}</Link>
                            </div>
                            <ReactReadMoreReadLess
                                className='bookDescription '
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                                {prop.book.details}
                            </ReactReadMoreReadLess>
                        </div>
                    )}
            </Overlay>
        </>
    )
}

export default Bookcard;