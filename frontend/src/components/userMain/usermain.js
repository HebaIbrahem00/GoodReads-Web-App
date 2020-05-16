import React, { useState, useEffect } from "react";

import UserTable from "../userTable/usertable.js";
import axios from "axios";

export default function UserMain(props) {
  const [shelve, setShelve] = useState("All");

  const [allbooks, setBooks] = useState([]); //this arary will be fetched from server

  useEffect(() => {
    axios.get('')
    .then(response => {
      console.log(response.data);
      //here i save the data with setBooks and filter it down below
      //or send params with the req for the back end to filter there like below 
      //axios.get('/api/updatecart', { 'shelve': this.product })
    })
    .catch(error => {
      console.log(error);
    })
  });

  const all = [
    {
      cover: "readimg",
      name: "outliers",
      author: "malcolm",
      avg: "5",
      rating: "5",
      shelve: "read",
    },
    {
      cover: "readimg",
      name: "outliers",
      author: "malcolm",
      avg: "5",
      rating: "5",
      shelve: "read",
    },
    {
      cover: "readimg",
      name: "outliers",
      author: "malcolm",
      avg: "5",
      rating: "5",
      shelve: "read",
    },
    {
      cover: "readimg",
      name: "outliers",
      author: "malcolm",
      avg: "5",
      rating: "5",
      shelve: "read",
    },
  ];

  const filteredBooks = () => {};

  return (
    <div>
      <div className="leftpane" style={{ paddingRight: 20 }}>
        <ul class="list-group">
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{ height: 70 }}
          >
            <a
              href="#"
              class="badge badge-light"
              onClick={() => {
                setShelve("All");
              }}
            >
              All
            </a>
            <span class="badge badge-primary badge-pill">0</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            style={{ height: 70 }}
          >
            <a
              href="#"
              class="badge badge-light"
              onClick={() => {
                setShelve("Read");
              }}
            >
              Read
            </a>
            <span class="badge badge-primary badge-pill">0</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            style={{ height: 70 }}
          >
            <a
              href="#"
              class="badge badge-light"
              onClick={() => {
                setShelve("Currently Reading");
              }}
            >
              Currently Reading
            </a>
            <span class="badge badge-primary badge-pill">0</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            style={{ height: 70 }}
          >
            <a
              href="#"
              class="badge badge-light"
              onClick={() => {
                setShelve("Want To Read");
              }}
            >
              Want To read
            </a>
            <span class="badge badge-primary badge-pill">0</span>
          </li>
        </ul>
      </div>
      <div className="rightpane">
        {" "}
        <UserTable title={shelve} books={allbooks} />{" "}
      </div>
    </div>
  );
}
