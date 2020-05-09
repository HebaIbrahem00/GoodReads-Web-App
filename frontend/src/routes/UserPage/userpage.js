import React from 'react'
import UserTable from '../../components/userTable/usertable';
import './userpage.css';

export default function UserPage() {
    return (


        <div className="container">

            <div className="toppane"> <h1>NavBar Goes Hereeeeeeeeeeeeeeee</h1></div>
            <br></br>
            <br></br>
            <hr style={{ width: "50" }}></hr>
            <div className="leftpane" style={{paddingRight:20}}>


                <ul class="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center" style={{height:70}}>
                    <a href="#" class="badge badge-light">All</a>
                   <span class="badge badge-primary badge-pill">0</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center" style={{height:70}}>
                    <a href="#" class="badge badge-light">Read</a>
                   <span class="badge badge-primary badge-pill">0</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center" style={{height:70}}>
                    <a href="#" class="badge badge-light">Currently Reading</a>
                     <span class="badge badge-primary badge-pill">0</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center" style={{height:70}}>
                    <a href="#" class="badge badge-light">Want To read</a>
                     <span class="badge badge-primary badge-pill">0</span>
                    </li>
                </ul>
            </div>


            <div class="vertical-line"></div>

            <div className="rightpane">  <UserTable /> </div>
        </div>


    )
}
