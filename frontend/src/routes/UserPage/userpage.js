import React from 'react'
import UserTable from '../../components/userTable/usertable';
import UserMain from '../../components/userMain/usermain';
import Navbar from '../../components/navbar/navbar';
import './userpage.css';

export default function UserPage() {
    
    return (
        <div className="container">

            <Navbar/>
            <br></br>
            <br></br>
            <hr style={{ width: "50" }}></hr>
         
          <div ><UserMain /></div> 

            <div className="vertical-line"></div>

           
        </div>


    )
}
