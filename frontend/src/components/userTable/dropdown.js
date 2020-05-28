import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Dropdown(props) {
  const shelves = [props.shelve, "Want To Read", "Currently Reading", "Read"];
  const url = "http://localhost:5000/userpage";
  const user = JSON.parse(localStorage.getItem("currentUserInfo"));
  const id = user.user._id;

 
  const changeShelve = (oldShelve, newShelve) => {
      
    console.log("oldshelve >>", oldShelve, "and new shelve is >>", newShelve);
   
    axios({
      method: "patch",
      url: url,
      data: {
        _userid: id,
        _oldShelve: oldShelve,
        _newShelve: newShelve,
        _bookid: props.bookid,
      },
    })
      .then((response) => {
        console.log("response from drop patch ", response.data);
        console.log("axios workingg in drop");
      })
      .catch((error) => {
        console.log("error",error);
      });
    
  };

 
  return (
    <select
      id="shelves"
      onClick={(e) => {
        changeShelve(props.shelve, e.target.value);

      }}
    >
      <option value={props.shelve}> {props.shelve}</option>
      <option value="Want To Read">Want To Read</option>
      <option value="Currently Reading">Currently Reading</option>
      <option value="Read">Read</option>
    </select>
  );
}
