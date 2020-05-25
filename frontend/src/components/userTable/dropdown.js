import React from "react";
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
        _id: id,
        _oldShelve: oldShelve,
        _newShelve: newShelve,
      },
    })
      .then((response) => {
        console.log("response from drop ", response.data);
        console.log("axios workingg in drop");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <select
      id="shelves"
      onChange={(e) => {
        changeShelve(props.shelve, e.target.value);
      }}
    >
      <option> {props.shelve}</option>
      <option value="Want To Read">Want To Read</option>
      <option value="Currently Reading">Currently Reading</option>
      <option value="Read">Read</option>
    </select>
  );
}
