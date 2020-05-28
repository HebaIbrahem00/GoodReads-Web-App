/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React ,{useEffect , useState} from "react";
import axios from "axios";

export default function Dropdown(props) {

  const [oldShelve, setOld] = useState("");
  const [newShelve,setNew] =useState("");
  let shelves =[{name:"Want To Read",selected:true},{name:"Currently Reading",selected:true},{name:"Read",selected:true}];
  const url = "http://localhost:5000/book/:id/addtoshelve";
  const user = JSON.parse(localStorage.getItem("currentUserInfo"));
  const id = user.user._id;
  console.log(shelves)
 
  
 
  const addtoshleve = (shelve)=>{

    axios({
        method: "post",
        url: url,
        data: {
          _userid: id,
          _shelve: shelve,
          _bookid:props.book
        },
      })
        .then((response) => {
          console.log("response from back", response.data);
          if(response.data.success)
          {
            
            let chosenShelve =shelves.find((shelve)=>{return shelve.name=shelve})
            chosenShelve.selected=true ; //here we need to get the boolean data from the backend
            console.log(chosenShelve,shelve)
            document.getElementById(shelve).setAttribute("disabled",chosenShelve.selected);
           // $("#"+chosenShelve.name).attr("disabled", true);
             console.log(shelves)
              
          }
          
         //here if successful we shall make shelveChanged to true, then rendeer a tick mark beside the 
         
        })
        .catch((error) => {
          console.log(error);
        });

 }
  
  return (
    <select className="custom-select"  id="shelves"
    onClick={(e) => {
     
      addtoshleve(e.target.value)

    }}
    
     >
     { shelves.map((shelve,index)=>(
        <option value={shelve.name} id={shelve.name} >{shelve.name} </option>

      ))}
  
    </select>
  );
}
