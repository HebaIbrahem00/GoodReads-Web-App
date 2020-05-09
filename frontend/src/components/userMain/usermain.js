import React, { useState, useEffect } from "react";

import UserTable from '../userTable/usertable.js';

export default function UserMain(props) {
  
  const [title, setTitle]= useState("All");
 
    return (
    <div>
      <div  className="leftpane" style={{ paddingRight: 20 }}>
        <ul class="list-group">
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{ height: 70 }}
          >
            <a href="#" class="badge badge-light" onClick={()=>{setTitle("All")}}>
              All
            </a>
            <span class="badge badge-primary badge-pill">0</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            style={{ height: 70 }}
          >
            <a href="#" class="badge badge-light" onClick={()=>{setTitle("Read")}}>
              Read
            </a>
            <span class="badge badge-primary badge-pill">0</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            style={{ height: 70 }}
          >
            <a href="#" class="badge badge-light"  onClick={()=>{setTitle("Currently Reading")}}>
              Currently Reading
            </a>
            <span class="badge badge-primary badge-pill">0</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            style={{ height: 70 }}
          >
            <a href="#" class="badge badge-light"  onClick={()=>{setTitle("Want To Read")}}>
              Want To read
            </a>
            <span class="badge badge-primary badge-pill">0</span>
          </li>
        </ul>
      </div>
      <div className="rightpane">  <UserTable title={title}/> </div>
    </div>
     
  );
}
