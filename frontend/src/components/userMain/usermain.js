import React, { useState, useEffect } from "react";

import UserTable from "../userTable/usertable.js";
import axios from "axios";
import { AuthContext, AuthProvider } from "../../store/AuthContext";

export default function UserMain(props) {
  const [shelve, setShelve] = useState("All");

  const [allbooks, setBooks] = useState([]); //this arary will be fetched from server
  const url = "http://localhost:5000/userpage";
  const user = JSON.parse(localStorage.getItem("currentUserInfo"));
  const id = user.user._id;
  console.log("user id from usermain ", id);

  //var searchParams = new URLSearchParams();
  //searchParams.append("id","1")
  //searchParams.append("shelve",shelve)

  useEffect(() => {
    axios({
      method: "post",
      url: url,
      data: {
        id: id,
        shelve: shelve,
      },
    })
      .then((response) => {
        console.log(response.data);
        console.log("axios workingg");
        //here i save the data with setBooks
      })
      .catch((error) => {
        console.log(error);
      });
  });

  /*
 async function getBooks(url,data){
  const response = await fetch(url,{
    method:'get',
    body:data
  } );
}*/

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
        <ul className="list-group">
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{ height: 70 }}
          >
            <a
              href="#"
              className="badge badge-light"
              onClick={() => {
                setShelve("All");
              }}
            >
              All
            </a>
            <span className="badge badge-primary badge-pill">0</span>
          </li>
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{ height: 70 }}
          >
            <a
              href="#"
              className="badge badge-light"
              onClick={() => {
                setShelve("Read");
              }}
            >
              Read
            </a>
            <span className="badge badge-primary badge-pill">0</span>
          </li>
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{ height: 70 }}
          >
            <a
              href="#"
              className="badge badge-light"
              onClick={() => {
                setShelve("Currently Reading");
              }}
            >
              Currently Reading
            </a>
            <span className="badge badge-primary badge-pill">0</span>
          </li>
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{ height: 70 }}
          >
            <a
              href="#"
              className="badge badge-light"
              onClick={() => {
                setShelve("Want To Read");
              }}
            >
              Want To read
            </a>
            <span className="badge badge-primary badge-pill">0</span>
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
